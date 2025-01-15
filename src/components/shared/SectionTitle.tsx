import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-8 ${alignmentClasses[alignment]}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fadeIn">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 animate-fadeIn">
          {subtitle}
        </p>
      )}
    </div>
  );
};