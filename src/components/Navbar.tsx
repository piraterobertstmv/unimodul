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
                src="/lovable-uploads/68070432-2518-4801-b3f4-37b58d2127f1.png" 
                alt="Unimodul Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/models" className="nav-link">
                Models
              </Link>
              <Link to="/stories" className="nav-link">
                Stories
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => navigate("/designer")}
            >
              Design Now
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
                to="/about"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/models"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Models
              </Link>
              <Link
                to="/stories"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    navigate("/designer");
                    setIsOpen(false);
                  }}
                >
                  Design Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};