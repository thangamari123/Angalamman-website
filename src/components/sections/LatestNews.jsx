import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LatestNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const newsData = [
    {
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
      title: "SPORTS DAY",
      desc: "Annual sports event bringing together students for a day of competitive athletics, team building, and celebrating physical fitness.",
      date: "August 29 , 2023",
      author: "Silambarasan"
    },
    {
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      title: "Industrial Vist Program",
      desc: "Students gained valuable hands-on experience and industry insights during our comprehensive educational tour of local manufacturing facilities.",
      date: "January 08, 2023",
      author: "Silambarasan"
    },
    {
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
      title: "CULTURAL PROGRAMMES",
      desc: "A spectacular showcase of traditional arts, dance, and music highlighting the rich diversity and creative talents of our student body.",
      date: "October 08, 2023",
      author: "Silambarasan"
    }
  ];

  // Auto-slide effect for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [newsData.length]);

  const renderCard = (news, index) => (
    <div key={index} className="h-full">
      <div className="bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300 h-full">
        {/* Image Container */}
        <div className="h-[200px] md:h-[280px] overflow-hidden relative">
          <img 
            src={news.img} 
            alt={news.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
        
        {/* Card Content */}
        <div className="p-5 md:p-8 flex flex-col flex-grow bg-white relative">
          {/* Title Section with Red Icon */}
          <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-8">
            <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#F23B4E] rounded-xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(242,59,78,0.3)]">
              <Calendar size={20} className="text-white md:w-[28px] md:h-[28px]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[14px] md:text-[18px] font-[800] text-[#0B1C40] uppercase tracking-wide leading-snug line-clamp-2">
                {news.title}
              </h3>
              <div className="h-[2px] w-10 md:w-12 bg-[#F23B4E] mt-2 md:mt-3"></div>
            </div>
          </div>
          
          {/* Description Text */}
          <p className="text-[#4F5B73] text-[13px] md:text-[14px] leading-relaxed line-clamp-3 mb-4">
            {news.desc}
          </p>
          
          {/* Meta Data (Date & Author) */}
          <div className="mt-auto pt-2 border-t border-gray-50 md:border-none">
            <div className="flex items-center justify-between gap-2 text-[#4F5B73] text-[12px] md:text-[15px] font-medium pt-3 md:pt-0">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar size={14} className="text-[#F23B4E] md:w-[18px] md:h-[18px]" />
                <span className="whitespace-nowrap">{news.date}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <User size={14} className="text-[#F23B4E] md:w-[18px] md:h-[18px]" />
                <span className="whitespace-nowrap line-clamp-1">{news.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-16 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-10 md:w-16 bg-[#F23B4E]"></div>
            <span className="text-[#F23B4E] font-bold tracking-[0.2em] text-[13px] md:text-[14px] uppercase">
              SEE OUR LATEST NEWS
            </span>
            <div className="h-[1px] w-10 md:w-16 bg-[#F23B4E]"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[900] text-[#0B1C40] mb-5 tracking-tight">
            See Our Latest News
          </h2>
          
          <div className="flex items-center justify-center gap-1">
            <div className="h-[2px] w-10 bg-[#F23B4E]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F23B4E]"></div>
            <div className="h-[2px] w-10 bg-[#F23B4E]"></div>
          </div>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => renderCard(news, index))}
        </div>

        {/* Mobile Automatic Slider (Hidden on Desktop) */}
        <div className="block md:hidden mt-6 relative max-w-[340px] mx-auto h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
            >
              {renderCard(newsData[activeIndex], activeIndex)}
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {newsData.map((_, index) => (
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

        {/* View All News Button */}
        <div className="mt-20 md:mt-16 flex justify-center">
          <button className="bg-[#F23B4E] hover:bg-[#0B1C40] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[16px] md:text-[18px] transition-colors duration-300 flex items-center gap-3 shadow-[0_8px_20px_rgba(242,59,78,0.25)]">
            View All News
            <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center text-[#F23B4E]">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
