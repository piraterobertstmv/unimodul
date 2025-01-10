import React from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex">
        <div
          className="w-[80%] h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png')",
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="w-[20%] bg-black flex flex-col justify-end items-center pb-12 gap-6">
          <button
            onClick={() => navigate("/modelos")}
            className="px-8 py-3 bg-white text-black font-heading hover:bg-black hover:text-white transition-all duration-300 rounded-lg text-lg tracking-wider"
          >
            MODELOS
          </button>
          <button
            className="px-8 py-3 bg-white text-black font-heading hover:bg-black hover:text-white transition-all duration-300 rounded-lg text-lg tracking-wider"
          >
            CONTACTO
          </button>
        </div>
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="w-full flex justify-end">
          <div className="text-6xl font-bold tracking-wider animate-float flex flex-col items-start space-y-4">
            <span className="text-black">MODERN/</span>
            <span className="text-black">INNOVATIVE/</span>
            <span className="text-white">PREFAB.</span>
          </div>
        </div>
      </div>
    </div>
  );
};