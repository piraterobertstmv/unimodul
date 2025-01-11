export const ProductOfferings = () => {
  return (
    <section className="section-padding container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
        Preparado para Diversas Historias
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Estudio",
            description: "Perfecto para espacio personal y creatividad",
            image: "/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png",
          },
          {
            title: "Oficina",
            description: "Optimizado para ambientes de trabajo productivos",
            image: "/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png",
          },
          {
            title: "Hogar",
            description: "Ideal para una vida familiar confortable",
            image: "/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png",
          },
        ].map((product, index) => (
          <div
            key={product.title}
            className="feature-card bg-white rounded-lg overflow-hidden animate-scaleIn hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};