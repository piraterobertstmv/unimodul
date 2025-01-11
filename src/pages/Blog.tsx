import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Transformando la construcción: El futuro es modular",
    description: "Descubre cómo la construcción modular está revolucionando el sector con innovación, eficiencia y sostenibilidad",
    date: "20 de Marzo, 2024",
    slug: "futuro-modular",
    image: "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
  },
  {
    title: "Cómo las casas modulares ahorran energía, tiempo y costos",
    description: "Descubre las ventajas económicas y ambientales de las construcciones modulares modernas",
    date: "15 de Marzo, 2024",
    slug: "ahorro-casas-modulares",
    image: "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png"
  },
  {
    title: "El Auge del Glamping: Una Inversión rentable",
    description: "Análisis del creciente mercado del turismo de lujo en la naturaleza",
    date: "10 de Marzo, 2024",
    slug: "glamping-inversion-rentable",
    image: "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Blog Unimodul</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;