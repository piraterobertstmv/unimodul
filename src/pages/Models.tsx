import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Models = () => {
  const navigate = useNavigate();
  
  const models = [
    {
      name: "MOD.STUDIO",
      image: "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png",
      description: "Diseño moderno y funcional para espacios creativos",
      details: "Espacio perfecto para estudios y oficinas en casa"
    },
    {
      name: "MOD.ONE",
      image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
      description: "Solución compacta y eficiente para viviendas unifamiliares",
      details: "Ideal para parejas jóvenes o personas solteras"
    },
    {
      name: "MOD.TWO",
      image: "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png",
      description: "Espacios amplios y versátiles para familias",
      details: "Perfecto para familias que buscan más espacio"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros Modelos</h1>
        <p className="text-gray-600 max-w-2xl">
          Descubre nuestra colección de casas modulares, diseñadas para adaptarse 
          a diferentes estilos de vida y necesidades.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model) => (
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
              <p className="text-gray-600 mb-4">{model.description}</p>
              <p className="text-sm text-gray-500 mb-6">{model.details}</p>
              <Button 
                onClick={() => navigate("/contacto")}
                className="w-full bg-black hover:bg-gray-800 text-white"
              >
                Solicitar Información
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Models;