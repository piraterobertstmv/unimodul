import { Navbar } from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogPosts = {
  "futuro-modular": {
    title: "Transformando la construcción: El futuro es modular",
    date: "20 de Marzo, 2024",
    content: `
      El sector de la construcción está evolucionando a pasos agigantados. Las técnicas tradicionales, costosas y a menudo poco sostenibles, están dando paso a enfoques más modernos que combinan innovación, eficiencia y responsabilidad ambiental. En este nuevo panorama, la construcción modular se posiciona como una alternativa revolucionaria, marcando un antes y un después en la manera de concebir los espacios habitables.

      ¿Qué hace única a la construcción modular?

      La construcción modular no es solo una mejora; es un cambio de paradigma. Basada en la fabricación de módulos estandarizados que se ensamblan para formar espacios personalizados, esta técnica permite crear desde viviendas asequibles hasta edificios comerciales, cumpliendo con altos estándares de diseño y funcionalidad.

      Los materiales más comunes incluyen hormigón, madera y acero, aunque también se pueden emplear piedra o pizarra. Sin embargo, la clave está en el proceso: al fabricar los módulos en un entorno controlado y ensamblarlos en el sitio, se reducen tanto los tiempos como los costos, generando un impacto ambiental mínimo.

      Ventajas que marcan la diferencia

      La construcción modular destaca por ofrecer beneficios que responden directamente a las necesidades actuales del mercado. Entre los más relevantes, encontramos:

      - Rapidez y cumplimiento de plazos: Con la construcción modular, los tiempos de ejecución pueden reducirse hasta un 50% en comparación con las técnicas tradicionales.
      
      - Costes altamente competitivos: El precio medio de una casa modular oscila entre 900 y 1.000 euros por metro cuadrado, mientras que las construcciones tradicionales suelen situarse entre 1.300 y 1.600 euros por metro cuadrado.

      - Sostenibilidad en cada etapa del proceso: La construcción modular está alineada con los principios de sostenibilidad. Utiliza materiales reciclables y genera menos residuos que las técnicas tradicionales.

      - Personalización al alcance de todos: Cada proyecto modular se adapta a las necesidades específicas de sus futuros ocupantes.

      - Flexibilidad y escalabilidad: Una de las grandes ventajas de la construcción modular es su capacidad para crecer con el tiempo.

      Nuestro Servicio "Llave en Mano"

      En Unimodul, hacemos que el proceso sea tan sencillo como eficaz con nuestro servicio integral "llave en mano". Desde la primera idea hasta la entrega final, nos encargamos de todo para que tú solo te ocupes de disfrutar de los resultados.

      ¿Qué incluye nuestro servicio "llave en mano"?

      - Diseño personalizado
      - Gestión de licencias
      - Fabricación modular
      - Preparación del terreno
      - Transporte e instalación
      - Revisión y entrega final

      En Unimodul, lideramos esta revolución. Nuestras soluciones modulares combinan diseño, calidad y sostenibilidad a precios competitivos, permitiéndote hacer realidad tus proyectos sin comprometer ni el medio ambiente ni tu presupuesto.

      Con precios desde 900 €/m², el futuro de la construcción es modular. 

      🌿 Contáctanos y descubre cómo transformar tu idea en una realidad sostenible, eficiente y accesible.
    `,
    image: "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
  },
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
