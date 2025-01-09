import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-heading font-bold">
              unimodul
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#products" className="nav-link">
                Products
              </a>
              <a href="#stories" className="nav-link">
                Stories
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
            <Button className="cta-button">Design Now</Button>
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
              <a
                href="#about"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#products"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a
                href="#stories"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="cta-button w-full">Design Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};