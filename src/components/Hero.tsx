import React, { useState } from "react";
import Spline from '@splinetool/react-spline/next';

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  const handleSplineError = () => {
    setError(true);
    setIsLoading(false);
    console.error("Error loading Spline scene");
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {!error ? (
          <Spline 
            className="w-full h-full"
            scene="loading..."
            onLoad={handleSplineLoad}
            onError={handleSplineError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900" />
        )}
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
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};