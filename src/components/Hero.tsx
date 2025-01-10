import React from "react";

export const Hero = () => {
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
        <div className="w-[20%] bg-white" />
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="w-full flex justify-end">
          <div className="text-6xl font-bold tracking-wider animate-float flex flex-col items-start space-y-4">
            <span className="text-white">MODERN/</span>
            <span className="text-white">INNOVATIVE/</span>
            <span className="text-black">PREFAB.</span>
          </div>
        </div>
      </div>
    </div>
  );
};