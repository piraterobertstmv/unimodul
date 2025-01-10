import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage:
            "url('/lovable-uploads/52167c24-7505-4d88-8d96-c4ab55be28ac.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-float tracking-wider">
            MODERN/<br />
            INNOVATIVE/<br />
            PREFAB.
          </h1>
          <Button 
            className="mt-8 bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-8 py-4 text-lg rounded-none"
            onClick={() => navigate("/productos")}
          >
            Explorar Ahora
          </Button>
        </div>
      </div>
    </div>
  );
};