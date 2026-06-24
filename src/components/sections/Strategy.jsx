import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, GraduationCap, Users, Scale, ArrowRight } from 'lucide-react';

/* ── ClassRoom images ── */
const classroomImages = [
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288179/1_bbxl1z.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288178/2_yajiwk.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288177/3_ayymct.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288171/4_brrlyy.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288170/5_lznhn4.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288169/6_mfn2on.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288168/7_srrxaf.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288168/8_ne49io.jpg',
];

/* ── Auto-sliding image carousel ── */
const StrategySlider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent(c => (c + 1) % classroomImages.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      {classroomImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Classroom slide ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C40]/60 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {classroomImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-[#F23B4E]'
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Photo count badge */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[12px] font-bold px-3 py-1.5 rounded-full z-10">
        {current + 1} / {classroomImages.length}
      </div>
    </div>
  );
};

const Strategy = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-3 md:px-8 max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
            <span className="text-[#F23B4E] font-bold tracking-widest text-[13px] md:text-[18px] uppercase">OUR STRATEGY</span>
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
          </div>
        </div>

        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-[800] text-[#0B1C40] leading-tight mb-3 md:mb-6">
              Sri Angalamman <br /> Paramedical Institute
            </h2>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
               <div className="h-[2px] w-10 md:w-12 bg-[#F23B4E]"></div>
               <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border-2 border-[#F23B4E] bg-white"></div>
               <div className="h-[2px] w-10 md:w-12 bg-[#F23B4E]"></div>
            </div>
            <p className="text-[#4F5B73] text-[14px] md:text-[18px] mb-5 md:mb-8 leading-relaxed max-w-lg">
              Sri Angalamman Paramedical Institution aims at providing quality and affordable education in the field of Medical Sciences to all.
            </p>
            <button className="bg-[#F23B4E] text-white rounded-lg px-6 py-3 font-bold text-[15px] md:text-[17px] flex items-center justify-center gap-2 md:gap-3 hover:bg-[#D92B3E] transition-colors shadow-lg shadow-[#F23B4E]/30 w-full sm:w-auto">
              <Calendar size={20} className="md:w-[22px] md:h-[22px]" />
              Booking Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] relative"
          >
            <StrategySlider />
          </motion.div>
        </div>

        {/* Bottom Strategy Cards Section */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,59,78,0.08)] transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F23B4E] to-[#ff7e8b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="w-[70px] h-[70px] bg-gray-50 group-hover:bg-[#FFF5F6] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shrink-0">
              <GraduationCap className="text-[#0B1C40] group-hover:text-[#F23B4E] w-[36px] h-[36px] transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-[800] text-[#0B1C40] mb-4">Excellence</h3>
            
            <p className="text-[#4F5B73] leading-relaxed text-[15px] mb-8 flex-grow">
              We are committed to provide the best of services in teaching, research and we do provide a safe environment to the students.
            </p>
            
            <Link to="/excellence" className="flex items-center gap-2 text-[#0B1C40] font-bold group-hover:text-[#F23B4E] transition-colors mt-auto w-fit">
              View <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,59,78,0.08)] transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F23B4E] to-[#ff7e8b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="w-[70px] h-[70px] bg-gray-50 group-hover:bg-[#FFF5F6] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shrink-0">
              <Users className="text-[#0B1C40] group-hover:text-[#F23B4E] w-[36px] h-[36px] transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-[800] text-[#0B1C40] mb-4">Unity in Diversity</h3>
            
            <p className="text-[#4F5B73] leading-relaxed text-[15px] mb-8 flex-grow">
              The Academy values and appreciates the differences in individuals and embraces diverse cultures.
            </p>
            
            <Link to="/unity-diversity" className="flex items-center gap-2 text-[#0B1C40] font-bold group-hover:text-[#F23B4E] transition-colors mt-auto w-fit">
              View <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,59,78,0.08)] transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F23B4E] to-[#ff7e8b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="w-[70px] h-[70px] bg-gray-50 group-hover:bg-[#FFF5F6] rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shrink-0">
              <Scale className="text-[#0B1C40] group-hover:text-[#F23B4E] w-[36px] h-[36px] transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-[800] text-[#0B1C40] mb-4">Social Responsibility</h3>
            
            <p className="text-[#4F5B73] leading-relaxed text-[15px] mb-8 flex-grow">
              Educating students about the importance of their civic duties to benefit the society at large.
            </p>
            
            <Link to="/social-responsibility" className="flex items-center gap-2 text-[#0B1C40] font-bold group-hover:text-[#F23B4E] transition-colors mt-auto w-fit">
              View <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
