import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Models = () => {
  const models = [
    {
      name: "MOD.STUDIO",
      image: "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png",
      description: "Diseño moderno y funcional para espacios creativos"
    },
    {
      name: "MOD.ONE",
      image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
      description: "Solución compacta y eficiente para viviendas unifamiliares"
    },
    {
      name: "MOD.TWO",
      image: "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png",
      description: "Espacios amplios y versátiles para familias"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Nuestros Modelos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.name} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                    <p>{model.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Models;