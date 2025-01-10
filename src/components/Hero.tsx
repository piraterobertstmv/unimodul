import React from "react";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-105 hover:rotate-2 hover:translate-z-10 hover:shadow-2xl"
        style={{
          backgroundImage:
            "url('/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png')",
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-end">
        <div className="text-right">
          <div className="text-white text-6xl font-bold tracking-wider animate-float flex flex-col items-end space-y-4">
            <span>MODERN\</span>
            <span>INNOVATIVE\</span>
            <span>PREFAB.</span>
          </div>
        </div>
      </div>
    </div>
  );
};