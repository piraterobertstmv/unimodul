import { useEffect, useRef } from "react";

export const ProcessSteps = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0">
          Nuestro Proceso
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Diseño y Consultoría",
              description:
                "Trabajamos contigo para crear el espacio perfecto que se adapte a tus necesidades y estilo de vida.",
              image: "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
            },
            {
              number: "02",
              title: "Fabricación y Producción",
              description:
                "Utilizamos materiales de alta calidad y tecnología avanzada para construir tu módulo con precisión.",
              image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png"
            },
            {
              number: "03",
              title: "Logística e Instalación",
              description:
                "Nos encargamos de todo el proceso de transporte y montaje en tu ubicación.",
              image: "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png"
            },
          ].map((step, index) => (
            <div 
              key={step.number}
              className="animate-on-scroll relative bg-white rounded-lg p-8 shadow-lg h-full opacity-0"
              style={{ 
                zIndex: 3 - index,
                transitionDelay: `${index * 1000}ms`,
              }}
            >
              <div 
                className="animate-on-scroll text-8xl font-bold text-primary/10 absolute -top-10 -left-4 z-0 opacity-0"
                style={{
                  transitionDelay: `${(index * 1000) + 300}ms`
                }}
              >
                {step.number}
              </div>
              <div className="relative z-10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};