import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold">
              unimodul
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/nosotros" className="nav-link">
                Nosotros
              </Link>
              <Link to="/productos" className="nav-link">
                Productos
              </Link>
              <Link to="/historias" className="nav-link">
                Historias
              </Link>
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </div>
            <Button className="cta-button">Diseñar Ahora</Button>
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
                to="/productos"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Productos
              </Link>
              <Link
                to="/historias"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Historias
              </Link>
              <Link
                to="/contacto"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="px-3 py-2">
                <Button className="cta-button w-full">Diseñar Ahora</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};