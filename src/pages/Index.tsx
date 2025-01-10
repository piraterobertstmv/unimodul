import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImageSlider } from "@/components/ImageSlider";
import { Features } from "@/components/sections/Features";
import { DesignerCTA } from "@/components/sections/DesignerCTA";
import { ProductOfferings } from "@/components/sections/ProductOfferings";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Image Slider Section */}
      <section className="section-padding container mx-auto px-4 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros Diseños Modulares
        </h2>
        <ImageSlider />
      </section>

      <Features />
      <DesignerCTA />
      <ProductOfferings />

      {/* Sustainability Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
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
                className="animate-scaleIn"
              >
                <Button variant="secondary" className="text-white gap-2 hover:scale-105 transition-transform duration-300">
                  <Download className="w-4 h-4" />
                  Descargar Catálogo
                </Button>
              </a>
            </div>
            <div className="animate-slideInRight">
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
    </div>
  );
};

export default Index;