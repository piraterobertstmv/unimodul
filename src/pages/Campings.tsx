import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const Campings = () => {
  const moduleUses = [
    {
      title: "Coworking",
      description: "Espacios de trabajo modernos y equipados para profesionales",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Módulos para nómadas digitales",
      description: "Alojamiento y espacio de trabajo para trabajadores remotos",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Sala de juegos",
      description: "Espacio recreativo con diferentes opciones de entretenimiento",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033"
    },
    {
      title: "Zona infantil",
      description: "Área segura y divertida para los más pequeños",
      image: "https://images.unsplash.com/photo-1597430203889-c93a0cd4e27f"
    },
    {
      title: "Mini cine modular",
      description: "Sala de proyección para disfrutar del séptimo arte",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
    },
    {
      title: "Zona de realidad virtual",
      description: "Experiencias inmersivas y simuladores",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"
    },
    {
      title: "Gimnasio",
      description: "Instalaciones deportivas completas",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
    },
    {
      title: "Spa",
      description: "Zona de relajación y bienestar",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
    },
    {
      title: "Jacuzzi panorámico",
      description: "Relax con vistas espectaculares",
      image: "https://images.unsplash.com/photo-1621275471769-e6aa344546d5"
    },
    {
      title: "Invernadero comunitario",
      description: "Espacio para cultivo y actividades sostenibles",
      image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d"
    },
    {
      title: "Restaurante modular",
      description: "Gastronomía en un entorno único",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    },
    {
      title: "Cocina comunitaria",
      description: "Espacio compartido para preparar alimentos",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
    },
    {
      title: "Vestuarios y baños",
      description: "Instalaciones sanitarias modernas",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101"
    },
    {
      title: "Almacén de equipos",
      description: "Almacenamiento seguro para equipamiento",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Espacios multiusos",
      description: "Salas versátiles para eventos y actividades",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    },
    {
      title: "Tienda autoservicio",
      description: "Comercio 24/7 para todas las necesidades",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a"
    },
    {
      title: "Zona de carga eléctrica",
      description: "Puntos de recarga para vehículos eléctricos",
      image: "https://images.unsplash.com/photo-1647398742521-652c3e47c527"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">Soluciones para Campings</h1>
          
          <div className="max-w-7xl mx-auto space-y-16">
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

            <section className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Múltiples Usos para tus Módulos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {moduleUses.map((use, index) => (
                  <div 
                    key={use.title}
                    className="animate-on-scroll bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="relative h-48">
                      <img
                        src={`${use.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={use.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{use.title}</h3>
                      <p className="text-gray-600">{use.description}</p>
                    </div>
                  </div>
                ))}
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
