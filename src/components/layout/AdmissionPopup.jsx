import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, PhoneCall, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

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
            className="absolute inset-0 bg-[#05112B]/90 backdrop-blur-md"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-[850px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Floats over everything */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 bg-white/90 backdrop-blur shadow-sm hover:bg-gray-100 text-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Left Side: Premium Image Layout (Desktop) */}
            <div className="hidden md:block md:w-[45%] relative bg-gray-100">
              <img
                src="/images/hero-imge4.webp"
                alt="Admissions Open"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Content & Actions */}
            <div className="w-full md:w-[55%] flex flex-col justify-center bg-white relative">
              
              {/* Mobile Header Image (Only on Mobile) */}
              <div className="md:hidden w-full h-[200px] sm:h-[240px] relative overflow-hidden bg-gray-100">
                <img
                  src="/images/hero-imge4.webp"
                  alt="Admissions Open"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-8 md:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F23B4E]/10 text-[#F23B4E] rounded-md text-sm font-bold w-fit mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F23B4E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F23B4E] ml-[1px] mt-[1px]"></span>
                  </span>
                  Session 2025-2026
                </div>

                <h2 className="text-[24px] sm:text-[28px] font-[900] text-[#0B1C40] leading-[1.1] mb-2">
                  Begin Your Journey
                </h2>
                
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-[1.5] mb-6 font-medium">
                  Secure your seat for our premium paramedical diploma courses today.
                </p>

                {/* Buttons Grid */}
                <div className="flex flex-col gap-3">
                  <Link
                    to="/application"
                    onClick={closePopup}
                    className="w-full bg-gradient-to-r from-[#F23B4E] to-[#D92B3E] hover:from-[#D92B3E] hover:to-[#B81E2E] text-white px-6 py-3.5 sm:py-4 rounded-xl font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-[0_8px_20px_rgba(242,59,78,0.25)] hover:shadow-[0_12px_25px_rgba(242,59,78,0.35)] flex items-center justify-center group"
                  >
                    <GraduationCap className="mr-2.5" size={20} />
                    Fill Application Form
                  </Link>
                  
                  <a
                    href="tel:+919751920888"
                    className="w-full bg-white hover:bg-gray-50 text-[#0B1C40] border-2 border-[#0B1C40]/10 hover:border-[#0B1C40]/30 px-6 py-3.5 sm:py-4 rounded-xl font-bold text-[15px] sm:text-[16px] transition-all duration-300 flex items-center justify-center group"
                  >
                    <PhoneCall className="mr-2.5 text-[#F23B4E] group-hover:scale-110 transition-transform" size={18} />
                    Call Admission Desk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopup;
