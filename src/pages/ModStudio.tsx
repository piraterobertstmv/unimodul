import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Link } from "react-router-dom";

const ModStudio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-6">MOD|STUDIO</h1>
              <p className="text-3xl font-light text-gray-800">$85,000 USD</p>
            </div>

            {/* Main Image */}
            <div className="mb-16">
              <img
                src="/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
                alt="MOD.STUDIO exterior view"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>

            {/* Description Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-light mb-4">ABOUT MOD STUDIO</h2>
                <p className="text-gray-600">
                  The MOD STUDIO is our most versatile and compact model yet. Perfect for a home office, guest house, or backyard retreat. With its sleek design and modern finishes, the MOD STUDIO offers both style and functionality in a smaller footprint.
                </p>
              </div>
              <div>
                <img
                  src="/lovable-uploads/523c87b3-077e-4573-81c7-1671f244b05f.png"
                  alt="MOD.STUDIO additional view"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">EXTERIOR DIMENSIONS</h3>
                <p className="text-gray-600">20'x10' (6.1m)</p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">FLOOR PLANS</h3>
                <img
                  src="/lovable-uploads/298a4051-327c-4efd-9e25-e6ab9933b6e9.png"
                  alt="Floor plan"
                  className="w-full max-w-[300px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">FOUNDATIONS</h3>
                <p className="text-gray-600">Concrete slab or elevated foundation options available</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-light mb-4">ACCOMMODATIONS</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 1 Main Space</li>
                  <li>• Full Bathroom</li>
                  <li>• Kitchenette</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">AVAILABLE OPTIONS</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Custom Interior Finishes</li>
                  <li>• Smart Home Integration</li>
                  <li>• Solar Panel Ready</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">CONSTRUCTION</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Black Metal Exterior</li>
                  <li>• Double-Pane Windows</li>
                  <li>• Insulated Walls</li>
                  <li>• Wooden Deck</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-secondary text-white p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-light mb-4 text-center">LET'S GET STARTED</h2>
              <div className="text-center">
                <Link
                  to="/contacto"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* More Models Section */}
            <div>
              <h2 className="text-2xl font-light mb-8">MORE MODELS</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Link to="/productos/mod-one" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/9c9e36b7-8ce0-4ada-a28a-e483720a4b6f.png"
                      alt="MOD.ONE"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|ONE</h3>
                      <p className="text-white/80">Starting at $95,000</p>
                    </div>
                  </div>
                </Link>
                <Link to="/productos/mod-two" className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/7f30f145-9c17-4375-84f4-bc50e7ae1e12.png"
                      alt="MOD.TWO"
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-light">MOD|TWO</h3>
                      <p className="text-white/80">Starting at $125,000</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModStudio;