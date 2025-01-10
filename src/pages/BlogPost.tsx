import { Navbar } from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogPosts = {
  "ahorro-casas-modulares": {
    title: "Cómo las casas modulares ahorran energía, tiempo y costos",
    date: "15 de Marzo, 2024",
    content: `
      Las casas modulares representan una revolución en la construcción sostenible y eficiente. En este artículo, exploraremos cómo estas innovadoras estructuras no solo ahorran energía a través de su diseño optimizado y materiales de alta eficiencia, sino también cómo reducen significativamente los tiempos de construcción y los costos asociados.

      Ahorro de Energía:
      - Aislamiento superior
      - Diseño optimizado para la eficiencia energética
      - Ventanas y puertas de alta eficiencia
      - Sistemas de climatización inteligentes

      Ahorro de Tiempo:
      - Construcción paralela de módulos
      - Menor dependencia del clima
      - Proceso de instalación optimizado
      - Reducción de retrasos en obra

      Ahorro de Costos:
      - Menor desperdicio de materiales
      - Reducción de costos laborales
      - Economías de escala
      - Mantenimiento más económico

      Las casas modulares no son solo una alternativa a la construcción tradicional; son el futuro de la vivienda sostenible y asequible.
    `,
    image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png"
  },
  "glamping-inversion-rentable": {
    title: "El Auge del Glamping: Una Inversión rentable",
    date: "10 de Marzo, 2024",
    content: `
      El glamping, una fusión perfecta entre el glamour y el camping, se ha convertido en una de las tendencias más prometedoras en el sector turístico. Este artículo analiza por qué invertir en instalaciones de glamping puede ser una decisión financieramente inteligente.

      ¿Por qué el Glamping?
      - Demanda creciente de experiencias únicas
      - Menor impacto ambiental
      - Costos operativos reducidos
      - Alta rentabilidad por unidad

      Ventajas de la Inversión:
      - Rápido retorno de inversión
      - Flexibilidad en la ubicación
      - Escalabilidad del negocio
      - Diferenciación en el mercado

      Consideraciones Clave:
      - Selección de ubicación
      - Diseño y comodidades
      - Marketing y posicionamiento
      - Gestión operativa

      El glamping representa una oportunidad única para combinar turismo sostenible con rentabilidad empresarial.
    `,
    image: "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png"
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-2xl font-bold">Post no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Blog
          </Link>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;