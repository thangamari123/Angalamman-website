import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const AdmissionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/popup1 (1).webp',
    '/images/popup1 (2).webp'
  ];

  useEffect(() => {
    // Show the popup a short delay after the website loads
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Prevent scrolling when popup is active
      document.body.style.overflow = 'hidden';
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    let slideTimer;
    if (isVisible) {
      slideTimer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3500); // Slide every 3.5 seconds
    }
    return () => clearInterval(slideTimer);
  }, [isVisible, images.length]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-[550px] aspect-[4/5] sm:aspect-square bg-transparent rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Floats over everything */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-30 w-9 h-9 bg-black/40 hover:bg-black/70 backdrop-blur-md shadow-sm text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Auto-sliding Images */}
            <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Admission Update ${currentIndex + 1}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                    idx === currentIndex ? 'w-6 bg-[#F23B4E]' : 'w-2 bg-white/70 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopup;
