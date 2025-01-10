import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const ModTwo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">MOD.TWO</h1>
          <div className="max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png"
              alt="MOD.TWO"
              className="w-full h-[500px] object-cover rounded-lg mb-8"
            />
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Espacios amplios y versátiles para familias. El MOD.TWO está diseñado para ofrecer
                el máximo confort y funcionalidad para la vida familiar moderna.
              </p>
              <h2 className="text-2xl font-bold mb-4">Características</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Amplios espacios comunes</li>
                <li>Múltiples habitaciones</li>
                <li>Diseño modular adaptable</li>
                <li>Acabados de alta calidad</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModTwo;