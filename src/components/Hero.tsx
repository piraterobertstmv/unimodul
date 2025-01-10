import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative container mx-auto h-full flex flex-col justify-between py-32">
        <div />
        <div className="text-right">
          <div className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider flex flex-col items-end space-y-4">
            <span className="hover:translate-x-2 transition-transform duration-300">MODERN/</span>
            <span className="hover:translate-x-2 transition-transform duration-300">INNOVATIVE/</span>
            <span className="hover:translate-x-2 transition-transform duration-300">PREFAB.</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <Link to="/productos">
            <Button variant="secondary" size="lg" className="bg-black text-white hover:bg-black/90 uppercase tracking-wider w-full md:w-auto">
              View Models
            </Button>
          </Link>
          <Link to="/contacto">
            <Button variant="secondary" size="lg" className="bg-black text-white hover:bg-black/90 uppercase tracking-wider w-full md:w-auto">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};