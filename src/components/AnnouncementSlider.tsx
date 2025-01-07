import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementSlider = () => {
  return (
    <div className="overflow-hidden bg-blue-600 py-3">
      <motion.div
        className="whitespace-nowrap"
        animate={{
          x: [0, -1000],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }}
      >
        <span className="text-white font-medium text-lg inline-block px-4">
          Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! •Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! •Interviews for 2025-26 are now open! 
          • Interviews for 2025-26 are now open! • Interviews for 2025-26 are now open! •&nbsp;
        </span>
      </motion.div>
    </div>
  );
};

export default AnnouncementSlider;

