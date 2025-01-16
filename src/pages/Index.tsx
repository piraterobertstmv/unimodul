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
import { BounceCards } from "@/components/ui/bounce-cards";

const images = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
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
          <div className="space-y-8">
            <BounceCards
              images={images}
              containerWidth={500}
              containerHeight={500}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              className="mx-auto"
            />
          </div>
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <ImageSlider />
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