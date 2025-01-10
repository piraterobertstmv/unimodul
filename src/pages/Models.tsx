import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  
  const models = [
    {
      name: "MOD.STUDIO",
      image: "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png",
      description: "Diseño moderno y funcional para espacios creativos",
      route: "/productos/mod-studio"
    },
    {
      name: "MOD.ONE",
      image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
      description: "Solución compacta y eficiente para viviendas unifamiliares",
      route: "/productos/mod-one"
    },
    {
      name: "MOD.TWO",
      image: "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png",
      description: "Espacios amplios y versátiles para familias",
      route: "/productos/mod-two"
    }
  ];

  const handleModelClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
            Nuestros Modelos
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scaleIn cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleModelClick(model.route)}
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                    <p className="mb-6">{model.description}</p>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300">
                      Más Información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;