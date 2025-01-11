import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ModLibre = () => {
  const images = [
    "/lovable-uploads/298a4051-327c-4efd-9e25-e6ab9933b6e9.png",
    "/lovable-uploads/b8d7324b-eb18-4590-b2f2-9764ad2870f6.png",
    "/lovable-uploads/c88e90b6-b364-41fb-b61f-beb182e090e0.png",
    "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-6">MOD|LIBRE</h1>
              <p className="text-3xl font-light text-gray-800">€900/m²</p>
              <p className="text-lg text-gray-600 mt-2">¡Sin límites!</p>
            </div>

            {/* Main Image Carousel */}
            <div className="mb-16">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[600px]">
                        <img
                          src={image}
                          alt={`Vista MOD.LIBRE ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Description Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-light mb-4">ACERCA DE MOD LIBRE</h2>
                <p className="text-gray-600">
                  MOD LIBRE representa la máxima expresión de la versatilidad en construcción modular. Desde un compacto estudio hasta un majestuoso chalet de 300m², o incluso un complejo de 500 bungalows, las posibilidades son infinitas. Nos adaptamos a cualquier necesidad, visión o escala de proyecto que puedas imaginar.
                </p>
              </div>
              <div>
                <img
                  src={images[1]}
                  alt="Vista adicional MOD.LIBRE"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">POSIBILIDADES</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Estudios Compactos</li>
                  <li>• Viviendas Unifamiliares</li>
                  <li>• Chalets de Lujo</li>
                  <li>• Complejos Residenciales</li>
                  <li>• Desarrollos Turísticos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">VENTAJAS</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Diseño Personalizado</li>
                  <li>• Modularidad Total</li>
                  <li>• Escalabilidad</li>
                  <li>• Eficiencia Energética</li>
                  <li>• Rapidez de Construcción</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">CARACTERÍSTICAS</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Combinaciones Ilimitadas</li>
                  <li>• Acabados Premium</li>
                  <li>• Tecnología Avanzada</li>
                  <li>• Sostenibilidad</li>
                  <li>• Calidad Superior</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-secondary text-white p-8 rounded-lg mb-16 transition-all duration-300 hover:animate-lightning">
              <h2 className="text-2xl font-light mb-4 text-center">¿IMAGINAMOS JUNTOS TU PROYECTO?</h2>
              <div className="text-center">
                <Link
                  to="/contacto"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* More Models Section */}
            <div>
              <h2 className="text-2xl font-light mb-8">MÁS MODELOS</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Link to="/productos/mod-studio" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
                      alt="MOD.STUDIO"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|STUDIO</h3>
                      <p className="text-white/80">€900/m²</p>
                    </div>
                  </div>
                </Link>
                <Link to="/productos/mod-one" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png"
                      alt="MOD.ONE"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|ONE</h3>
                      <p className="text-white/80">€900/m²</p>
                    </div>
                  </div>
                </Link>
                <Link to="/productos/mod-two" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png"
                      alt="MOD.TWO"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|TWO</h3>
                      <p className="text-white/80">€900/m²</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModLibre;