import React from 'react';
import { Users, Heart, Target } from "lucide-react";

export const AboutValues = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <Users className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-4">Passionate Team</h3>
        <p className="text-gray-600">
          A team dedicated to creating spaces that inspire and transform lives.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <Heart className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-4">Commitment to Quality</h3>
        <p className="text-gray-600">
          Each module is created with attention to detail and premium materials.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <Target className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-4">Constant Innovation</h3>
        <p className="text-gray-600">
          Always seeking new ways to improve and evolve our designs.
        </p>
      </div>
    </div>
  );
};