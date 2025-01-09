import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520733893896-0dd0b6549309?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get a new living space.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Unimodul provides versatile, stylish, and sustainable modular living
            solutions.
          </p>
          <Button className="cta-button text-lg">Explore Now</Button>
        </div>
      </div>
    </div>
  );
};