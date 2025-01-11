import { Navbar } from "@/components/Navbar";
import { Users, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Nuestra Historia
          </h1>
          
          {/* New copy sections with proper spacing and styling */}
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 mb-16">
            <p className="text-lg animate-fadeIn delay-100">
              En Unimodul ofrecemos viviendas modulares que destacan por su tecnología avanzada, con una eficiencia acústica y térmica superior. Nuestras casas cumplen con las normativas más estrictas de Europa, garantizando durabilidad y seguridad, todo a un costo menor que la construcción tradicional.
            </p>
            
            <p className="text-lg animate-fadeIn delay-200">
              Si buscas una solución moderna, eficiente y accesible, nuestras viviendas modulares son la opción ideal. Nuestras viviendas modulares se construyen con contenedores marítimos de alta resistencia, anclados a cimentaciones de hormigón armado para garantizar estabilidad en cualquier terreno. Este sistema ofrece una construcción rápida y adaptable, permitiendo que tu hogar crezca contigo.
            </p>
            
            <p className="text-lg animate-fadeIn delay-300">
              No solo vendemos casas, sino espacios innovadores, confortables y sostenibles. Descubre cómo nuestras soluciones modulares pueden ayudarte a crear el hogar ideal, diseñado a la medida de tus necesidades.
            </p>
            
            <p className="text-lg animate-fadeIn delay-400">
              Nuestro grupo empresarial goza de una mas que probada experiencia en el mercado de la construcción de viviendas. Más de tres años de promociones ya finalizadas, y con proyectos en marcha.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Equipo Apasionado</h3>
                <p className="text-gray-600">
                  Un equipo dedicado a crear espacios que inspiran y transforman vidas.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Compromiso con la Calidad</h3>
                <p className="text-gray-600">
                  Cada módulo es creado con atención al detalle y materiales premium.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Innovación Constante</h3>
                <p className="text-gray-600">
                  Siempre buscando nuevas formas de mejorar y evolucionar nuestros diseños.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;