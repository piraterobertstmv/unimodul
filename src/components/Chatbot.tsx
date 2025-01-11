import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"

interface Message {
  text: string
  isBot: boolean
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?", isBot: true }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { text: userMessage, isBot: false }])
    setIsLoading(true)

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-gemini', {
        body: { message: userMessage }
      })

      if (error) throw error

      setMessages(prev => [...prev, { text: data.response, isBot: true }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        text: "Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.", 
        isBot: true 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="fixed bottom-4 right-4 w-[350px] h-[500px] p-4 flex flex-col shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-6 h-6 text-primary" />
        <h3 className="font-semibold">Asistente Virtual</h3>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-secondary text-secondary-foreground">
                Escribiendo...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  )
}