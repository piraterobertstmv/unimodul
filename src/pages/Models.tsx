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

  const categories = [
    {
      title: "Particulares",
      description: "Soluciones habitacionales para individuos y familias",
      icon: "🏠",
      route: "/particulares"
    },
    {
      title: "Campings",
      description: "Módulos adaptados para instalaciones turísticas",
      icon: "⛺",
      route: "/campings"
    },
    {
      title: "Empresas",
      description: "Espacios comerciales y oficinas modulares",
      icon: "🏢",
      route: "/empresas"
    },
    {
      title: "Inversores",
      description: "Oportunidades de inversión en proyectos modulares",
      icon: "💰",
      route: "/inversores"
    }
  ];

  const handleModelClick = (route: string) => {
    navigate(route);
  };

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Soluciones para cada necesidad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleCategoryClick(category.route)}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
            Nuestros Modelos
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={model.name}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleModelClick(model.route)}
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-4 animate-fadeIn">{model.name}</h3>
                    <p className="mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{model.description}</p>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
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