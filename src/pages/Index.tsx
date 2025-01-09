import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImageSlider } from "@/components/ImageSlider";
import {
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Image Slider Section */}
      <section className="section-padding container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Modular Designs
        </h2>
        <ImageSlider />
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Variety is the spice of life – Unimodul's range is variety.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Sleek Designs", "Durable Build", "Stylish Living"].map(
              (feature) => (
                <div
                  key={feature}
                  className="feature-card bg-white p-6 rounded-lg shadow"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                    {feature}
                    <ChevronDown className="w-5 h-5" />
                  </h3>
                  <p className="text-gray-600">
                    Experience the perfect blend of form and function with our{" "}
                    {feature.toLowerCase()}.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Become a Designer Section */}
      <section className="relative h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7')",
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Designer
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Design your own modular space with ease.
            </p>
            <Button className="cta-button">Design Now</Button>
          </div>
        </div>
      </section>

      {/* Product Offerings */}
      <section className="section-padding container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Prepared for Various Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Studio",
              description: "Perfect for personal space and creativity",
              image: "https://images.unsplash.com/photo-1520733893896-0dd0b6549309",
            },
            {
              title: "Office",
              description: "Optimized for productive work environments",
              image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7",
            },
            {
              title: "Home",
              description: "Ideal for comfortable family living",
              image: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a",
            },
          ].map((product) => (
            <div
              key={product.title}
              className="feature-card bg-white rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works: Unimodul Modules
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Conceptualize",
              "Customize",
              "Produce",
              "Install",
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Visualize your modular home"}
                  {index === 1 && "Choose your design preferences"}
                  {index === 2 && "We build your module with precision"}
                  {index === 3 && "Delivered and installed at your location"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Made to Last for Generations
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Corrosion-resistant frames
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Eco-friendly materials
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-primary mr-2" />
                  Weather-resilient design
                </li>
              </ul>
              <Button variant="secondary" className="text-white">
                Learn More
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840"
                alt="Sustainable Design"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">unimodul</h3>
              <p className="text-gray-400 max-w-md">
                Write your own future – We give you the room to live it.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-gray-400 hover:text-white">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#terms" className="text-gray-400 hover:text-white">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-gray-400 hover:text-white">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Unimodul. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
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
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;