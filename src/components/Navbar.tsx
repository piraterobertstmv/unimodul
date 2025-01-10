import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/68070432-2518-4801-b3f4-37b58d2127f1.png" 
                alt="Unimodul Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link to="/productos" className="text-gray-800 hover:text-primary uppercase text-sm tracking-wider">
                Models
              </Link>
              <Link to="/proceso" className="text-gray-800 hover:text-primary uppercase text-sm tracking-wider">
                Process
              </Link>
              <Link to="/nosotros" className="text-gray-800 hover:text-primary uppercase text-sm tracking-wider">
                About
              </Link>
              <Link to="/faq" className="text-gray-800 hover:text-primary uppercase text-sm tracking-wider">
                FAQ
              </Link>
              <Link to="/historias" className="text-gray-800 hover:text-primary uppercase text-sm tracking-wider">
                Case Studies
              </Link>
            </div>
            <Button variant="secondary" className="bg-black text-white hover:bg-black/90 uppercase text-sm tracking-wider">
              Get in Touch
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
                to="/productos"
                className="block px-3 py-2 text-gray-800 hover:text-primary uppercase text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Models
              </Link>
              <Link
                to="/proceso"
                className="block px-3 py-2 text-gray-800 hover:text-primary uppercase text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                to="/nosotros"
                className="block px-3 py-2 text-gray-800 hover:text-primary uppercase text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-800 hover:text-primary uppercase text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/historias"
                className="block px-3 py-2 text-gray-800 hover:text-primary uppercase text-sm tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <div className="px-3 py-2">
                <Button variant="secondary" className="w-full bg-black text-white hover:bg-black/90 uppercase text-sm tracking-wider">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};