import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Campings = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">Soluciones para Campings</h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="animate-slideInLeft">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Moderniza tu Camping con Unimodul</h2>
              <p className="text-gray-600 mb-4 hover:text-gray-900 transition-colors duration-300">
                Transforma tu camping en un destino premium con nuestras soluciones modulares.
                Diseñadas específicamente para el sector turístico, nuestras unidades combinan
                durabilidad, confort y diseño para maximizar la rentabilidad de tu negocio.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInLeft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3">Beneficios para tu Negocio</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-primary transition-colors duration-300">✓ Rápida implementación y retorno de inversión</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Diseños atractivos que destacan</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Bajo mantenimiento y alta durabilidad</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Certificaciones turísticas incluidas</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Personalización según tu marca</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg animate-slideInRight hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3">Características Especiales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="hover:text-primary transition-colors duration-300">✓ Resistencia a condiciones climáticas</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Diseño optimizado para turistas</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Fácil mantenimiento y limpieza</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Opciones de mobiliario incluido</li>
                  <li className="hover:text-primary transition-colors duration-300">✓ Sistemas de seguridad integrados</li>
                </ul>
              </div>
            </section>

            <section className="animate-scaleIn">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Soluciones Adaptadas</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Bungalows</h3>
                  <p className="text-gray-600">Alojamientos completos con todas las comodidades</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Módulos Sanitarios</h3>
                  <p className="text-gray-600">Instalaciones higiénicas de alta calidad</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold mb-2">Áreas Comunes</h3>
                  <p className="text-gray-600">Espacios sociales y de servicios</p>
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

export default Campings;