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
    image: '/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png',
  },
];

export const ModelsShowcase = () => {
  const [activeModel, setActiveModel] = useState<number | null>(1);

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={models.find(model => model.id === (activeModel || 1))?.image}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-white">OUR MODELS</h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {models.map((model) => (
            <div
              key={model.id}
              className={cn(
                "relative h-[600px] group cursor-pointer overflow-hidden border-x border-gray-800",
                "transition-all duration-500"
              )}
              onMouseEnter={() => setActiveModel(model.id)}
              onMouseLeave={() => setActiveModel(1)}
            >
              {/* Individual Section Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500",
                    activeModel === model.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-black/30 transition-opacity duration-300",
                  activeModel === model.id ? "opacity-0" : "opacity-100"
                )} />
              </div>

              {/* Model Name */}
              <div className={cn(
                "absolute inset-x-0 bottom-0 p-8 text-center transition-all duration-300",
                activeModel === model.id ? "text-white translate-y-0" : "text-gray-400 translate-y-4"
              )}>
                <h3 className="text-2xl font-bold">{model.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};