import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a9dd5c9c-58e0-4df6-9c19-85abc78f043f.png" 
                alt="Unimodul Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
              <Link to="/modelos" className="nav-link">
                Modelos
              </Link>
              <Link to="/historias" className="nav-link">
                Historias
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate("/designer")}
            >
              Diseñar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/nosotros"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/modelos"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Modelos
              </Link>
              <Link
                to="/historias"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Historias
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contacto"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    navigate("/designer");
                    setIsOpen(false);
                  }}
                >
                  Diseñar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};