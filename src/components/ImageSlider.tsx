import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lovable-uploads/6a48b2d3-32fe-425d-849d-4e8009682f8f.png",
  "/lovable-uploads/4eeca0a2-9ade-44a0-bd17-d6713900e92c.png",
  "/lovable-uploads/39040f8f-8abc-474e-9e24-00dc29aa1562.png",
  "/lovable-uploads/d95ca2e9-9e49-4242-a8e0-e6f9172ee91b.png",
  "/lovable-uploads/76932e9e-eba3-48b4-90f1-a187a6707700.png"
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === currentIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};