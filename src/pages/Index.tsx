import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImageSlider } from "@/components/ImageSlider";
import {
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Image Slider Section */}
      <section className="section-padding container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros Diseños Modulares
        </h2>
        <ImageSlider />
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            La variedad es la esencia de la vida – La gama de Unimodul es variedad.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Diseños Elegantes",
              "Construcción Duradera",
              "Vida con Estilo",
            ].map((feature) => (
              <div
                key={feature}
                className="feature-card bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                  {feature}
                  <ChevronDown className="w-5 h-5" />
                </h3>
                <p className="text-gray-600">
                  Experimenta la perfecta combinación de forma y función con nuestros{" "}
                  {feature.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Designer Section */}
      <section className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png')",
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conviértete en Diseñador
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Diseña tu propio espacio modular con facilidad.
            </p>
            <Button className="cta-button">Diseñar Ahora</Button>
          </div>
        </div>
      </section>

      {/* Product Offerings */}
      <section className="section-padding container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Preparado para Diversas Historias
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Estudio",
              description: "Perfecto para espacio personal y creatividad",
              image: "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png",
            },
            {
              title: "Oficina",
              description: "Optimizado para ambientes de trabajo productivos",
              image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png",
            },
            {
              title: "Hogar",
              description: "Ideal para una vida familiar confortable",
              image: "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png",
            },
          ].map((product) => (
            <div
              key={product.title}
              className="feature-card bg-white rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo Funciona: Módulos Unimodul
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Conceptualizar",
              "Personalizar",
              "Producir",
              "Instalar",
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Visualiza tu hogar modular"}
                  {index === 1 && "Elige tus preferencias de diseño"}
                  {index === 2 && "Construimos tu módulo con precisión"}
                  {index === 3 && "Entregado e instalado en tu ubicación"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hecho para Durar Generaciones
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Marcos resistentes a la corrosión
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Materiales ecológicos
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Diseño resistente al clima
                </li>
              </ul>
              <Button variant="secondary" className="text-white">
                Saber Más
              </Button>
            </div>
            <div>
              <img
                src="/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
                alt="Diseño Sostenible"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">unimodul</h3>
              <p className="text-gray-400 max-w-md">
                Escribe tu propio futuro – Te damos el espacio para vivirlo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Navegación</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white">
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-gray-400 hover:text-white">
                      Productos
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white">
                      Contáctanos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#terms" className="text-gray-400 hover:text-white">
                      Términos
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-gray-400 hover:text-white">
                      Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Unimodul. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;