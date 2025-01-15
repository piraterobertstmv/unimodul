import React from 'react';

export const AboutFeatures = () => {
  return (
    <div className="space-y-4 animate-fadeIn delay-300">
      <h2 className="text-2xl font-bold text-secondary mb-4">Where We're Heading</h2>
      <p className="text-lg">
        Today, Unimodul is not just a modular construction company; it's a benchmark in sector transformation. We're redefining the future of building with a focus on:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Sustainability: We implement eco-friendly materials and responsible processes that minimize environmental impact.</li>
        <li>Accessibility: We offer affordable solutions, starting from €900/m², so more people can access quality housing.</li>
        <li>Innovation: We incorporate cutting-edge technologies in design, manufacturing, and energy efficiency to ensure high-performance buildings.</li>
        <li>Comprehensive Service: With our turnkey model, we accompany our clients throughout the entire process, from design to delivery, ensuring a hassle-free experience.</li>
      </ul>
    </div>
  );
};