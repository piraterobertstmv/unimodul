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
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn delay-100">
            Desde 2015, transformando espacios y creando hogares modulares que inspiran vidas extraordinarias.
          </p>
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