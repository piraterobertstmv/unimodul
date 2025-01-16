import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GridMotionProps {
  images: string[];
  columns?: number;
}

export const GridMotion = ({ images, columns = 3 }: GridMotionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {images.map((image, index) => (
          <motion.div
            key={image}
            layoutId={`image-${index}`}
            onClick={() => setSelectedImage(image)}
            className="relative cursor-pointer overflow-hidden rounded-lg aspect-video"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 cursor-pointer"
            />
            <motion.div
              layoutId={`image-${images.indexOf(selectedImage)}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-8"
            >
              <motion.img
                src={selectedImage}
                alt="Selected project"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};