export const ProcessSteps = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeIn">
          PASO A PASO
          <span className="block text-xl md:text-2xl font-normal text-gray-600 mt-2">
            Nuestro Proceso
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {[
            {
              number: "01",
              title: "Diseño y Consultoría",
              items: [
                "Evaluación inicial del proyecto",
                "Desarrollo del plan personalizado",
                "Diseño conceptual",
                "Presupuesto y planificación temporal"
              ]
            },
            {
              number: "02",
              title: "Fabricación y Producción",
              items: [
                "Selección de materiales",
                "Control de calidad",
                "Ensamblaje modular y prefabricación",
                "Certificación y evaluación"
              ]
            },
            {
              number: "03",
              title: "Logística e Instalación",
              items: [
                "Preparación del terreno",
                "Transporte y entrega coordinada",
                "Instalación modular eficiente",
                "Supervisión y finalización"
              ]
            }
          ].map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-white rounded-lg p-8 shadow-lg animate-on-scroll"
              style={{ 
                marginTop: `${index * 40}px`,
                zIndex: 3 - index,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-8xl font-bold text-primary/10 absolute -top-10 -left-4 z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li 
                      key={i}
                      className="flex items-start text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 cta-button animate-fadeIn"
          >
            Explorar el Proceso Completo
          </a>
        </div>
      </div>
    </section>
  );
};