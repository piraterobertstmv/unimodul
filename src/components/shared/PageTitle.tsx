import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn">
          {subtitle}
        </p>
      )}
    </div>
  );
};