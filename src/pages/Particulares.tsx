import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Particulares = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Soluciones para Particulares</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Tu Hogar Modular Personalizado</h2>
              <p className="text-gray-600 mb-4">
                En Unimodul, entendemos que tu hogar es más que un espacio: es el reflejo de tu estilo de vida y aspiraciones.
                Nuestras soluciones modulares para particulares ofrecen una alternativa moderna, eficiente y personalizable
                a la construcción tradicional.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 animate-on-scroll">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Ventajas Principales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Tiempo de construcción reducido (60% más rápido)</li>
                  <li>✓ Costes controlados y transparentes</li>
                  <li>✓ Personalización completa del diseño</li>
                  <li>✓ Eficiencia energética superior</li>
                  <li>✓ Calidad constructiva garantizada</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Características Destacadas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Diseños modernos y contemporáneos</li>
                  <li>✓ Materiales de alta calidad</li>
                  <li>✓ Aislamiento térmico y acústico superior</li>
                  <li>✓ Proceso de construcción sostenible</li>
                  <li>✓ Garantía extendida</li>
                </ul>
              </div>
            </section>

            <section className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Proceso Simplificado</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">1</div>
                  <h3 className="font-bold mb-2">Diseño</h3>
                  <p className="text-gray-600">Personaliza tu hogar según tus necesidades</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">2</div>
                  <h3 className="font-bold mb-2">Fabricación</h3>
                  <p className="text-gray-600">Construcción controlada en fábrica</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">3</div>
                  <h3 className="font-bold mb-2">Instalación</h3>
                  <p className="text-gray-600">Montaje rápido en tu terreno</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Particulares;