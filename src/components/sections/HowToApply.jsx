import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileEdit, ClipboardCheck, IndianRupee } from 'lucide-react';

const HowToApply = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stepsData = [
    {
      id: "01",
      title: "Complete\nApplication Form",
      desc: "Our university camp provide a vibrant & supportive community that embraces diversity.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      icon: <FileEdit size={20} className="md:w-[24px] md:h-[24px]" strokeWidth={2.5} />,
      theme: "red"
    },
    {
      id: "02",
      title: "Application\nReview",
      desc: "A diverse student body enhances learning experience & prepares students to thrive globally.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      icon: <ClipboardCheck size={20} className="md:w-[24px] md:h-[24px]" strokeWidth={2.5} />,
      theme: "blue"
    },
    {
      id: "03",
      title: "Payment\nof Fees",
      desc: "You will have access to state-of-the-art facilities and cutting edge research laboratories.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      icon: <IndianRupee size={20} className="md:w-[24px] md:h-[24px]" strokeWidth={2.5} />,
      theme: "red"
    }
  ];

  // Auto-slide effect for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % stepsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [stepsData.length]);

  const renderCard = (step, index) => {
    const isRed = step.theme === 'red';
    const bgClass = isRed ? 'bg-[#FFF0F2]' : 'bg-[#F0F4FF]';
    const iconBg = isRed ? 'bg-[#F23B4E]' : 'bg-[#0B1C40]';
    const titleColor = isRed ? 'text-[#901A25]' : 'text-[#0B1C40]';
    const tagBg = isRed ? 'bg-[#F23B4E]' : 'bg-[#0B1C40]';

    return (
      <div key={index} className="h-full px-1 sm:px-0">
        <div className={`${bgClass} rounded-2xl md:rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 relative group flex flex-col z-10 h-full overflow-hidden border border-white`}>
          <div className="h-[110px] md:h-[180px] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:bg-transparent"></div>
            <div className="absolute top-3 left-3 md:top-4 md:left-4 w-8 h-8 md:w-10 md:h-10 ${tagBg} text-white rounded-lg md:rounded-xl flex items-center justify-center text-[14px] md:text-[16px] font-[900] shadow-md z-20 bg-[#0B1C40]" style={{ backgroundColor: isRed ? '#F23B4E' : '#0B1C40' }}>
              {step.id}
            </div>
            <img src={step.img} alt={step.title.replace('\n', ' ')} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="p-4 md:p-8 relative text-center flex-grow flex flex-col items-center">
            <div className={`w-[48px] h-[48px] md:w-[68px] md:h-[68px] ${iconBg} text-white rounded-full flex items-center justify-center shadow-lg -mt-[34px] md:-mt-[50px] mb-3 md:mb-5 relative z-20 border-[3px] border-white group-hover:scale-110 transition-transform duration-500`}>
              {step.icon}
            </div>
            <h3 className={`text-[17px] md:text-[22px] font-[800] ${titleColor} mb-2 md:mb-3 leading-tight whitespace-pre-line`}>
              {step.title}
            </h3>
            <p className="text-[#4F5B73] leading-relaxed text-[12.5px] md:text-[15px] font-medium px-1">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E] rounded-full"></div>
            <span className="text-[#F23B4E] font-bold tracking-wider text-[12px] md:text-[14px] uppercase bg-[#FFF5F6] px-3 py-1 rounded-full">HOW TO APPLY</span>
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E] rounded-full"></div>
          </div>
          
          <h2 className="text-xl md:text-3xl lg:text-4xl font-[800] text-[#0B1C40] leading-tight">
            How To Apply At Sri Angalamman
          </h2>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative lg:px-8 mt-16">
          <div className="absolute top-[100px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#F23B4E]/30 to-transparent z-0"></div>
          {stepsData.map((step, index) => renderCard(step, index))}
        </div>

        {/* Mobile Automatic Slider (Hidden on Desktop) */}
        <div className="block md:hidden mt-8 mb-14 relative max-w-[320px] mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full"
            >
              {renderCard(stepsData[activeIndex], activeIndex)}
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
            {stepsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#F23B4E] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16 flex justify-center pb-4 relative z-20">
          <button className="bg-[#0B1C40] hover:bg-[#F23B4E] text-white pl-6 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 rounded-full font-bold text-[15px] md:text-[16px] transition-all duration-300 flex items-center gap-3 md:gap-4 shadow-[0_8px_20px_rgba(11,28,64,0.2)] hover:shadow-[0_12px_25px_rgba(242,59,78,0.3)] hover:-translate-y-1 group">
            <span className="tracking-wide">Get Started Now</span>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#0B1C40] group-hover:text-[#F23B4E] transition-colors">
              <ArrowRight size={18} strokeWidth={3} />
            </div>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HowToApply;
