import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const ModStudio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">MOD.STUDIO</h1>
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
              alt="MOD.STUDIO"
              className="w-full h-[500px] object-cover rounded-lg mb-8"
            />
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Diseño moderno y funcional para espacios creativos. El MOD.STUDIO está pensado para profesionales
                que buscan un espacio de trabajo inspirador y versátil.
              </p>
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Espacio abierto y luminoso</li>
                <li>Área de trabajo flexible</li>
                <li>Acabados premium</li>
                <li>Diseño sostenible</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModStudio;