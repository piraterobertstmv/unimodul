import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Empresas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">Soluciones para Empresas</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="animate-slideInLeft">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Espacios Comerciales del Futuro</h2>
              <p className="text-gray-600 mb-4 hover:text-gray-900 transition-colors duration-300">
                Unimodul ofrece soluciones modulares innovadoras para empresas que buscan
                optimizar sus espacios comerciales y oficinas. Nuestros diseños combinan
                funcionalidad, estética y eficiencia para crear ambientes de trabajo productivos.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInLeft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3">Ventajas Empresariales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-primary transition-colors duration-300">✓ Implementación rápida y sin interrupciones</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Flexibilidad para crecer o modificar</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Optimización de costes operativos</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Diseños corporativos personalizados</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Certificaciones comerciales incluidas</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInRight hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3">Características Comerciales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-primary transition-colors duration-300">✓ Espacios adaptables y modulares</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Tecnología integrada</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Eficiencia energética</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Acabados profesionales</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Cumplimiento normativo</li>
                </ul>
              </div>
            </section>

            <section className="animate-scaleIn">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Aplicaciones Comerciales</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Oficinas</h3>
                  <p className="text-gray-600">Espacios de trabajo modernos y eficientes</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Retail</h3>
                  <p className="text-gray-600">Locales comerciales adaptables</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
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