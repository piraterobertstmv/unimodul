import React from "react";
import Spline from '@splinetool/react-spline';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Spline 
          className="w-full h-full"
          scene="https://my.spline.design/liquidring-5c29547bf346749519e092c0deb4118d/" 
        />
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