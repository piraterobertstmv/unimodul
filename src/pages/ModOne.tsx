import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const ModOne = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">MOD.ONE</h1>
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png"
              alt="MOD.ONE"
              className="w-full h-[500px] object-cover rounded-lg mb-8"
            />
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Solución compacta y eficiente para viviendas unifamiliares. El MOD.ONE es perfecto
                para quienes buscan optimizar el espacio sin sacrificar el confort.
              </p>
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Diseño compacto y funcional</li>
                <li>Espacios optimizados</li>
                <li>Eficiencia energética</li>
                <li>Fácil instalación</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModOne;