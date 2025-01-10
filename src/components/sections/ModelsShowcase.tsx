import { useState } from 'react';
import { cn } from '@/lib/utils';

const models = [
  {
    id: 1,
    name: 'MOD.STUDIO',
    image: '/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png',
  },
  {
    id: 2,
    name: 'MOD.ONE',
    image: '/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png',
  },
  {
    id: 3,
    name: 'MOD.TWO',
    image: '/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png',
  },
];

export const ModelsShowcase = () => {
  const [activeModel, setActiveModel] = useState<number | null>(null);

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">OUR MODELS</h2>
        
        {/* Background Images */}
        {models.map((model) => (
          <div
            key={model.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              activeModel === model.id ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Model Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {models.map((model) => (
            <div
              key={model.id}
              className={cn(
                "p-8 text-center cursor-pointer transition-all duration-300",
                activeModel === model.id ? "text-white scale-110" : "text-gray-400 hover:text-white"
              )}
              onMouseEnter={() => setActiveModel(model.id)}
              onMouseLeave={() => setActiveModel(null)}
            >
              <h3 className="text-2xl font-bold">{model.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};