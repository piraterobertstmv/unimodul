import { ChevronDown } from "lucide-react";

export const Features = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          La variedad es la esencia de la vida – La gama de Unimodul es variedad
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Diseños Elegantes",
            "Construcción Duradera",
            "Vida con Estilo",
          ].map((feature) => (
            <div
              key={feature}
              className="feature-card bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                {feature}
                <ChevronDown className="w-5 h-5" />
              </h3>
              <p className="text-gray-600">
                Experimenta la perfecta combinación de forma y función con nuestros{" "}
                {feature.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};