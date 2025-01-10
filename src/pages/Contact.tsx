import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = "614169737@unimodul.es";
    window.location.href = `mailto:${email}?subject=Contacto desde web&body=Nombre: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AMensaje: ${formData.get('message')}`;
    
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn delay-100">
            Estamos aquí para ayudarte a crear el espacio perfecto
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg animate-slideInLeft">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            <div className="space-y-8 animate-slideInRight">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-600">614169737@unimodul.es</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Teléfono</h3>
                  <p className="text-gray-600">+34 614 16 97 37</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Ubicación</h3>
                  <p className="text-gray-600">
                    C. del Proyecto, 19<br />
                    12500 Vinaroz, Castellón<br />
                    España
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;