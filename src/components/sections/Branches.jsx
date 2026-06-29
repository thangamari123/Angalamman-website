import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Map, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Branches = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const branchData = [
    {
      title: "DHARMAPURI BRANCH",
      img: "/images/dharmapuri-branch.webp",
      address: "Nanjundeswara towers, Pennagaram main road,\nNear DNV International School, DNV Nagar,\nDharmapuri",
      pin: "636701 .",
      phones: "+91 97519 20888  |  +91 77081 23707",
      mapLink: "https://www.google.com/maps/place/Sri+Angalamman+Paramedical+Institute/@12.137648,78.148759,2683m/data=!3m1!1e3!4m6!3m5!1s0x3bac17ba4f548749:0x6c5dbf03f43293cd!8m2!3d12.137637!4d78.148838!16s%2Fg%2F11w3bv4wqv?hl=en&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "TIRUVANNAMALAI BRANCH",
      img: "/images/tvm-branch.webp",
      address: "Vellore Main Road, Puthumallavadi,\nTiruvannamalai",
      pin: "606 805.",
      phones: "+91 86086 09555  |  +91 96296 60026",
      mapLink: "https://www.google.com/maps?q=12.326180458068848,79.07335662841797&z=17&hl=en"
    }
  ];

  // Auto-slide effect for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % branchData.length);
    }, 4000); // slightly longer due to reading the address
    return () => clearInterval(timer);
  }, [branchData.length]);

  const renderCard = (branch, index) => (
    <div key={index} className="h-full">
      <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 overflow-visible relative pb-6 md:pb-10 border border-gray-100 flex flex-col h-full mx-1">
        {/* Image */}
        <div className="w-full aspect-video overflow-hidden relative bg-gray-100">
          <div className="absolute inset-0 bg-black/5 z-10 mix-blend-overlay"></div>
          <img 
            src={branch.img} 
            alt={branch.title}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Overlapping Icon */}
        <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#0B1C40] rounded-full flex items-center justify-center border-[4px] border-white shadow-md z-20 mx-auto -mt-[30px] md:-mt-[35px] relative">
          <MapPin size={24} className="text-white md:w-[30px] md:h-[30px]" strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="pt-4 px-4 md:px-8 flex flex-col items-center flex-grow">
          <h3 className="text-[#0B1C40] text-[16px] md:text-[20px] font-[800] uppercase tracking-wide text-center">
            {branch.title}
          </h3>
          <div className="flex items-center justify-center gap-1.5 my-2 md:my-3">
            <div className="h-[2px] w-6 md:w-8 bg-[#F23B4E]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F23B4E]"></div>
            <div className="h-[2px] w-6 md:w-8 bg-[#F23B4E]"></div>
          </div>
          
          {/* Address */}
          <div className="flex items-start gap-3 text-[#4F5B73] mb-5 w-full mt-1">
            <MapPin size={18} className="text-[#F23B4E] shrink-0 mt-0.5 md:w-[20px] md:h-[20px]" strokeWidth={2} />
            <p className="whitespace-pre-line text-left leading-relaxed text-[12px] md:text-[14px] font-medium">
              {branch.address}
            </p>
          </div>

          {/* Pills */}
          <div className="w-full flex flex-col gap-2 md:gap-3 mt-auto">
            <div className="w-full bg-[#F8F9FA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 flex items-center gap-3 border border-gray-100/50">
              <Mail size={16} className="text-[#F23B4E] shrink-0 md:w-[18px] md:h-[18px]" strokeWidth={2} />
              <span className="text-[#0B1C40] font-[800] text-[12px] md:text-[14px]">PIN CODE - {branch.pin}</span>
            </div>
            <div className="w-full bg-[#F8F9FA] rounded-lg px-3 py-2 md:px-4 md:py-2.5 flex items-center gap-3 border border-gray-100/50">
              <Phone size={16} className="text-[#F23B4E] shrink-0 md:w-[18px] md:h-[18px]" strokeWidth={2} />
              <span className="text-[#0B1C40] font-[800] text-[12px] md:text-[14px]">{branch.phones}</span>
            </div>
          </div>

          {/* Button */}
          <div className="w-full mt-4 md:mt-5">
            <a 
              href={branch.mapLink}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#0B1C40] text-white py-2.5 px-4 md:py-3 md:px-5 flex items-center justify-between hover:bg-[#F23B4E] transition-colors duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Map size={18} className="md:w-[20px] md:h-[20px]" strokeWidth={2} />
                <span className="font-[700] text-[13px] md:text-[15px] tracking-wide">Google Map</span>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-[#0B1C40] group-hover:text-[#F23B4E] transition-colors">
                <ArrowRight size={14} className="md:w-[16px] md:h-[16px]" strokeWidth={3} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-16 bg-[#0B1C40] overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 md:w-20 bg-[#F23B4E]"></div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#F23B4E] flex items-center justify-center bg-white shadow-sm">
              <MapPin size={20} className="text-[#F23B4E] md:w-[24px] md:h-[24px]" strokeWidth={2.5} />
            </div>
            <div className="h-[2px] w-12 md:w-20 bg-[#F23B4E]"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-[900] text-white uppercase tracking-wide leading-none mb-4 md:mb-6">
            OUR BRANCH
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <div className="h-[3px] w-8 md:w-12 bg-[#F23B4E] rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-[#F23B4E]"></div>
            <div className="h-[3px] w-8 md:w-12 bg-[#F23B4E] rounded-full"></div>
          </div>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-12">
          {branchData.map((branch, index) => renderCard(branch, index))}
        </div>

        {/* Mobile Automatic Slider (Hidden on Desktop) */}
        <div className="block md:hidden mt-6 relative max-w-[320px] mx-auto h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
            >
              {renderCard(branchData[activeIndex], activeIndex)}
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
            {branchData.map((_, index) => (
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

      </div>
    </section>
  );
};

export default Branches;
