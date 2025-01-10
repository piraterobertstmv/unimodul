import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Módulo Básico",
      description: "Perfecto para comenzar tu espacio modular",
      price: "Desde $2,999",
      features: ["Personalizable", "Instalación Rápida", "Garantía de 2 años"],
      image: "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png"
    },
    {
      title: "Módulo Premium",
      description: "Para quienes buscan algo especial",
      price: "Desde $4,999",
      features: ["Materiales Premium", "Diseño Exclusivo", "Garantía de 5 años"],
      image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png"
    },
    {
      title: "Módulo Profesional",
      description: "La solución completa para tu negocio",
      price: "Desde $6,999",
      features: ["Configuración Profesional", "Soporte 24/7", "Garantía de 10 años"],
      image: "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn delay-100">
            Descubre nuestra línea de módulos diseñados para adaptarse a tu estilo de vida
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-primary font-bold text-xl mb-4">{product.price}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full cta-button">Más Información</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;