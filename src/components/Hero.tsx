import React from "react";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 hover:shadow-2xl"
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
          <h2 className="text-white text-6xl font-bold tracking-wider animate-float whitespace-pre-line">
            MODERN\
            INNOVATIVE\
            PREFAB.
          </h2>
        </div>
      </div>
    </div>
  );
};