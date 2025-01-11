export const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Diseños Únicos que se Adaptan a tu Vida
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Diseño Arquitectónico",
              description: "Espacios modernos y funcionales que maximizan cada metro cuadrado",
              image: "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png"
            },
            {
              title: "Construcción Superior",
              description: "Materiales de primera calidad y técnicas constructivas avanzadas",
              image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png"
            },
            {
              title: "Adaptabilidad",
              description: "Soluciones flexibles que evolucionan con tus necesidades",
              image: "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png"
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};