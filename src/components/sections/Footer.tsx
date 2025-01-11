import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">unimodul</h3>
            <p className="text-gray-400 max-w-md">
              Escribe tu propio futuro – Te damos el espacio para vivirlo
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/nosotros" className="text-gray-400 hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/productos" className="text-gray-400 hover:text-white">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/historias" className="text-gray-400 hover:text-white">
                    Historias
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/terminos" className="text-gray-400 hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link to="/privacidad" className="text-gray-400 hover:text-white">
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Unimodul. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/Unimodul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/unimodul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};