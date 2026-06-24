import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Users, Briefcase, Globe2, Building2, ClipboardList, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'First & Top Ranked Paramedical Institution in Dharmapuri',
      icon: <Trophy className="w-7 h-7 md:w-10 md:h-10 text-[#FFB300]" />,
      bg: 'bg-yellow-50'
    },
    {
      title: '100% Vocational Education',
      icon: <GraduationCap className="w-7 h-7 md:w-10 md:h-10 text-[#E53935]" />,
      bg: 'bg-red-50'
    },
    {
      title: 'Campus Recruitment Support',
      icon: <Users className="w-7 h-7 md:w-10 md:h-10 text-[#1E88E5]" />,
      bg: 'bg-blue-50'
    },
    {
      title: 'Government & Private Job Opportunities',
      icon: <Briefcase className="w-7 h-7 md:w-10 md:h-10 text-[#43A047]" />,
      bg: 'bg-green-50'
    },
    {
      title: 'International Career Opportunities',
      icon: <Globe2 className="w-7 h-7 md:w-10 md:h-10 text-[#1E88E5]" />,
      bg: 'bg-blue-50'
    },
    {
      title: 'Healthcare Industry Exposure',
      icon: <Building2 className="w-7 h-7 md:w-10 md:h-10 text-[#8E24AA]" />,
      bg: 'bg-purple-50'
    },
    {
      title: 'Practical Hospital Training',
      icon: <ClipboardList className="w-7 h-7 md:w-10 md:h-10 text-[#FB8C00]" />,
      bg: 'bg-orange-50'
    },
    {
      title: 'Experienced Faculty Team',
      icon: (
        <div className="flex text-[#E53935] items-end pb-1 md:pb-2">
          <Star fill="currentColor" className="w-4 h-4 md:w-6 md:h-6" />
          <Star fill="currentColor" className="w-6 h-6 md:w-9 md:h-9 mx-0.5 mb-1" />
          <Star fill="currentColor" className="w-4 h-4 md:w-6 md:h-6" />
        </div>
      ),
      bg: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-[#F8F9FA] relative overflow-hidden" id="achievements">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          {/* Star with lines */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-3 md:mb-5">
            <div className="w-8 md:w-12 h-[2px] bg-[#E53935]"></div>
            <Star size={16} fill="#E53935" className="text-[#E53935] md:w-5 md:h-5" />
            <div className="w-8 md:w-12 h-[2px] bg-[#E53935]"></div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[900] text-[#0B1C40] mb-4 md:mb-6 tracking-tight leading-tight">
            Our Achievements & Highlights
          </h2>
          
          <p className="text-[#4F5B73] text-sm md:text-base lg:text-lg font-medium mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            We take pride in our commitment to excellence and the success of our students in the healthcare industry.
          </p>

          {/* Quote Banner */}
          <div className="bg-[#0B1C40] rounded-xl py-3 px-5 md:py-4 md:px-10 inline-flex items-center shadow-lg mx-auto relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 w-full sm:w-auto">
            <span className="text-[#E53935] text-5xl md:text-6xl font-serif absolute left-1 md:left-2 -top-1 md:-top-2 opacity-80 leading-none">"</span>
            <p className="text-white font-bold italic text-sm md:text-base lg:text-lg z-10 px-5 sm:px-6 md:px-8 tracking-wide">
              Empowering students to become the healthcare leaders of tomorrow.
            </p>
            <span className="text-[#E53935] text-5xl md:text-6xl font-serif absolute right-1 md:right-2 -bottom-5 md:-bottom-6 opacity-80 leading-none">"</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl md:rounded-[2rem] p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full ${item.bg} flex items-center justify-center mb-3 sm:mb-4 md:mb-5 shrink-0`}>
                {item.icon}
              </div>
              <h3 className="text-[#0B1C40] font-bold text-[11px] sm:text-xs md:text-[15px] lg:text-base leading-snug md:leading-normal px-1 flex-1 flex items-center">
                {item.title}
              </h3>
              <div className="w-5 sm:w-6 md:w-8 h-[2px] md:h-[3px] bg-[#E53935] mt-3 md:mt-5 rounded-full shrink-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
