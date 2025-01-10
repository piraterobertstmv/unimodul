import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Empresas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Soluciones para Empresas</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Espacios Comerciales del Futuro</h2>
              <p className="text-gray-600 mb-4">
                Unimodul ofrece soluciones modulares innovadoras para empresas que buscan
                optimizar sus espacios comerciales y oficinas. Nuestros diseños combinan
                funcionalidad, estética y eficiencia para crear ambientes de trabajo productivos.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 animate-on-scroll">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Ventajas Empresariales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Implementación rápida y sin interrupciones</li>
                  <li>✓ Flexibilidad para crecer o modificar</li>
                  <li>✓ Optimización de costes operativos</li>
                  <li>✓ Diseños corporativos personalizados</li>
                  <li>✓ Certificaciones comerciales incluidas</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Características Comerciales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Espacios adaptables y modulares</li>
                  <li>✓ Tecnología integrada</li>
                  <li>✓ Eficiencia energética</li>
                  <li>✓ Acabados profesionales</li>
                  <li>✓ Cumplimiento normativo</li>
                </ul>
              </div>
            </section>

            <section className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Aplicaciones Comerciales</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <h3 className="font-bold mb-2">Oficinas</h3>
                  <p className="text-gray-600">Espacios de trabajo modernos y eficientes</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="font-bold mb-2">Retail</h3>
                  <p className="text-gray-600">Locales comerciales adaptables</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="font-bold mb-2">Showrooms</h3>
                  <p className="text-gray-600">Espacios de exhibición impactantes</p>
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

export default Empresas;