import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the preloader for 2.2 seconds to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-24 h-24 md:w-32 md:h-32 mb-8 flex items-center justify-center"
          >
            <img src="/images/logo2.webp" alt="SAPI Logo" className="w-full h-full object-contain drop-shadow-md" />
          </motion.div>
          
          {/* Text */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-[#0B1C40] text-xl md:text-3xl font-[900] tracking-wider mb-2 font-serif text-center uppercase"
          >
            Sri Angalamman
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-3 md:gap-4 mb-2"
          >
            <div className="h-[1px] w-6 md:w-10 bg-[#F23B4E]"></div>
            <p className="text-[#F23B4E] text-[10px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-center">
              Paramedical Institute
            </p>
            <div className="h-[1px] w-6 md:w-10 bg-[#F23B4E]"></div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-48 md:w-64 h-[2px] bg-gray-100 mt-12 rounded-full overflow-hidden"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.2, duration: 1.8, ease: "easeInOut" }}
              className="w-full h-full bg-[#0B1C40]"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-gray-400 text-[10px] uppercase tracking-widest mt-4 font-semibold"
          >
            Loading Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
