import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImageSlider } from "@/components/ImageSlider";
import { Features } from "@/components/sections/Features";
import { DesignerCTA } from "@/components/sections/DesignerCTA";
import { ProductOfferings } from "@/components/sections/ProductOfferings";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Footer } from "@/components/sections/Footer";
import { ModelsShowcase } from "@/components/sections/ModelsShowcase";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "@/components/Chatbot";
import { GridMotion } from "@/components/ui/grid-motion";

const projectImages = [
  "/lovable-uploads/1a043806-2c67-413c-a10f-94186a2f2d4d.png",
  "/lovable-uploads/8d98a78f-16e5-48db-b421-bc59180afb8d.png",
  "/lovable-uploads/0d50dde9-4c44-42d4-a340-b6ed392f6b15.png",
  "/lovable-uploads/b71df311-204d-4aa4-bbd9-282908bdfa10.png",
  "/lovable-uploads/823e7735-0c07-4753-aa81-ad4dc64ff310.png",
  "/lovable-uploads/38802d12-96bd-440a-a5b8-cded2c55d489.png",
  "/lovable-uploads/b0eae7dd-eaf0-4b7f-9066-f105978a45bf.png",
  "/lovable-uploads/18ecfaa9-87ec-4057-8517-d3fe6c165a33.png",
  "/lovable-uploads/a0ff55f2-ff8a-4de6-ad6b-116d626ce13b.png"
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Title Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center animate-on-scroll opacity-0 translate-x-[-100%] transition-all duration-500">
            Nuestros Modelos
          </h2>
        </div>
      </div>

      <ModelsShowcase />

      {/* Image Slider Section */}
      <section className="section-padding container mx-auto px-4">
        <div className="animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Diseños Modulares
          </h2>
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Galería de Proyectos
            </h2>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              <GridMotion images={projectImages} columns={3} />
            </div>
          </div>
        </div>
      </section>

      <div className="animate-on-scroll opacity-0">
        <Features />
      </div>

      <div className="animate-on-scroll opacity-0">
        <DesignerCTA />
      </div>

      <div className="animate-on-scroll opacity-0">
        <ProductOfferings />
      </div>

      <div className="animate-on-scroll opacity-0">
        <ProcessSteps />
      </div>

      {/* Sustainability Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hecho para Durar Generaciones
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Marcos resistentes a la corrosión
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Materiales ecológicos
                </li>
                <li className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Diseño resistente al clima
                </li>
              </ul>
              <a 
                href="https://drive.google.com/uc?export=download&id=1F3if_cU1AbHDoI6ksZWGMooa1PI3XI_p"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll opacity-0"
              >
                <Button variant="secondary" className="text-white gap-2 hover:scale-105 transition-transform duration-300">
                  <Download className="w-4 h-4" />
                  Descargar Catálogo
                </Button>
              </a>
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
              <img
                src="/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
                alt="Diseño Sostenible"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;