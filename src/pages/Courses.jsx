import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Courses = () => {
  // Scroll to top on mount since navigating to a new page doesn't do it automatically sometimes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      id: "01",
      title: "DMLT",
      subtitle: "Diploma in Medical Laboratory Technology (DMLT)",
      image: "/images/dmlt.webp"
    },
    {
      id: "02",
      title: "OTT",
      subtitle: "Operating Theatre Technicians (OTT)",
      image: "/images/ott.webp"
    },
    {
      id: "03",
      title: "NURSING",
      subtitle: "Diploma in Nursing (DIP Nursing )",
      image: "/images/dip-nursing.webp"
    },
    {
      id: "04",
      title: "DIALYSIS",
      subtitle: "Diploma in Dialysis Techniques (DIP DIALYSIS)",
      image: "/images/dip-dialysis.webp"
    },
    {
      id: "05",
      title: "FIRST AID",
      subtitle: "FIRST AID TRAINING",
      image: "/images/first-aid.webp"
    },
    {
      id: "06",
      title: "RADIOLOGY",
      subtitle: "DIP Radiology Technician",
      image: "/images/dip-radiology.webp"
    }
  ];

  return (
    <main className="bg-gray-50/50 min-h-screen">
      {/* Page Banner */}
      <div className="relative pt-[120px] pb-[60px] md:pt-[150px] md:pb-[80px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Education Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1C40]/85"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
              <span className="text-[#F23B4E] font-bold tracking-widest text-[13px] md:text-[15px] uppercase">Academics</span>
              <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
            </div>
            <h1 className="text-3xl md:text-5xl font-[800] text-white leading-tight mb-4">
              Our Courses
            </h1>
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-[13px] md:text-sm">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Courses</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-3 md:px-6 lg:px-8 max-w-[1300px] py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
            <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]"></div>
            <span className="text-[#F23B4E] font-bold tracking-widest text-[13px] md:text-[15px] uppercase">Courses We Offer</span>
            <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]"></div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-[800] text-[#0B1C40] leading-[1.2]">
            Courses We Offer
          </h2>
          <div className="flex justify-center mt-5 md:mt-6">
            <div className="flex items-center">
              <div className="h-[2px] w-16 bg-[#F23B4E]"></div>
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#F23B4E] mx-1 bg-white"></div>
              <div className="h-[2px] w-16 bg-[#F23B4E]"></div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id}
              className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Image Container */}
              <div className="w-full aspect-square overflow-hidden shrink-0 relative group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-3 md:p-5 flex flex-col sm:flex-row items-start sm:items-start gap-2 md:gap-4 flex-grow">
                {/* Red Number Box */}
                <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#F23B4E] rounded-lg md:rounded-xl flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(242,59,78,0.2)]">
                  <span className="text-white font-bold text-[14px] sm:text-[18px] md:text-[22px]">{course.id}</span>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pt-0 sm:pt-1">
                  <h3 className="text-[14px] sm:text-[16px] md:text-[20px] font-bold text-[#0B1C40] mb-0.5 md:mb-1.5 leading-tight group-hover:text-[#F23B4E] transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-[#4F5B73] text-[11px] sm:text-[12px] md:text-[14px] leading-tight md:leading-snug">
                    {course.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Courses;
