import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ModelsShowcase = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  const models = [
    {
      name: "MOD.STUDIO",
      image: "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png",
      description: "Diseño moderno y funcional para espacios creativos",
    },
    {
      name: "MOD.ONE",
      image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
      description: "Solución compacta y eficiente para viviendas unifamiliares",
    },
    {
      name: "MOD.TWO",
      image: "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png",
      description: "Espacios amplios y versátiles para familias",
    },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[600px] overflow-hidden section-transition mt-[20vh]">
      {/* Sliding Titles */}
      <div className="container mx-auto px-4 mb-16">
        <div className="overflow-hidden">
          <h3 className="text-xl font-medium mb-2 animate-slideInLeft">
            Desde Vinaroz
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold animate-slideInRight">
            Nuestros Modelos
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={model.name}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <Button
                  onClick={() => navigate("/productos/modelos")}
                  className="w-full bg-black hover:bg-gray-800 text-white"
                >
                  Ver Más
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};