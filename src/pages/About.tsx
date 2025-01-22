import { Navbar } from "@/components/Navbar";
import { Users, Heart, Target } from "lucide-react";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/sections/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sobre Nosotros | Unimodul</title>
        <meta name="description" content="Descubre la historia de Unimodul: innovación en construcción modular, sostenibilidad y compromiso con la calidad desde 2022. Transformando el futuro de la edificación." />
        <meta property="og:title" content="Sobre Nosotros | Unimodul" />
        <meta property="og:description" content="Descubre la historia de Unimodul: innovación en construcción modular, sostenibilidad y compromiso con la calidad desde 2022." />
        <meta property="og:image" content="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
        <link rel="icon" type="image/x-icon" href="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Sobre Nosotros: Innovación y Sostenibilidad
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-600 mb-16">
            <div className="space-y-4 animate-fadeIn delay-100">
              <p className="text-lg">
                En Unimodul, nos dedicamos a transformar la manera en que construimos y vivimos. Desde nuestra fundación en 2022, hemos estado a la vanguardia de la construcción modular, combinando innovación tecnológica con un fuerte compromiso con la sostenibilidad.
              </p>
              
              <p className="text-lg">
                Nuestra misión es democratizar el acceso a espacios de calidad, eficientes y personalizables, sin comprometer el medio ambiente. A través de nuestro enfoque modular, estamos redefiniendo los estándares de la construcción moderna.
              </p>
            </div>

            <div className="space-y-4 animate-fadeIn delay-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
              <p className="text-lg">
                Creemos en un futuro donde la construcción sea más inteligente, más rápida y más sostenible. Nuestros módulos prefabricados no solo ofrecen soluciones habitacionales de alta calidad, sino que también representan un compromiso con un futuro más verde y eficiente.
              </p>
            </div>

            <div className="space-y-4 animate-fadeIn delay-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Por Qué Elegirnos?</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Calidad garantizada en cada proyecto</li>
                <li>Diseños personalizables y adaptables</li>
                <li>Compromiso con la sostenibilidad</li>
                <li>Proceso de construcción eficiente</li>
                <li>Equipo experto y dedicado</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Equipo Profesional</h3>
                <p className="text-gray-600">
                  Expertos dedicados a hacer realidad tu proyecto de construcción modular.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Compromiso Total</h3>
                <p className="text-gray-600">
                  Dedicación completa a la satisfacción del cliente y la excelencia.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Innovación Constante</h3>
                <p className="text-gray-600">
                  Siempre a la vanguardia de las últimas tecnologías y tendencias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;