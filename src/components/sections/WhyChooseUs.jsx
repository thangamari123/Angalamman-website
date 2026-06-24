import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, TrendingUp, Headphones, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Focus On Carrier",
      desc: "Our focus is to teach students on a practical basis and we thus, teach topics using fun and attractive techniques via which information gets stored rapidly.",
      icon: <Target className="w-6 h-6 md:w-7 md:h-7 text-[#F23B4E]" strokeWidth={1.5} />
    },
    {
      title: "Experienced Staff",
      desc: "Our experience and trained staff ensures that you will have a wonderful and worthwhile experience and become extremely well-versed with all aspects of your chosen field.",
      icon: <Award className="w-6 h-6 md:w-7 md:h-7 text-[#F23B4E]" strokeWidth={1.5} />
    },
    {
      title: "Supportive Learning",
      desc: "We treat our students as family and never stop at just teaching. We imbibe prevalent values about working as one unit that will help them in the future in their Life.",
      icon: <Users className="w-6 h-6 md:w-7 md:h-7 text-[#F23B4E]" strokeWidth={1.5} />
    },
    {
      title: "Hands-On Training",
      desc: "Practical experience is crucial in healthcare professions. Our institute emphasizes hands-on training through clinical rotations, simulation labs, and real-world exposure.",
      icon: <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#F23B4E]" strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-3">
            <div className="h-[2px] w-8 md:w-10 bg-[#F23B4E]"></div>
            <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] md:text-[13px] uppercase">Why Choose Us</span>
            <div className="h-[2px] w-8 md:w-10 bg-[#F23B4E]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-[800] text-[#0B1C40] leading-[1.2]">
            Why Choose Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 md:w-[64px] md:h-[64px] rounded-full bg-[#FFF0F2] flex items-center justify-center mb-4 md:mb-6 flex-shrink-0">
                {reason.icon}
              </div>
              <h4 className="text-[13px] md:text-[17px] font-bold text-[#0B1C40] mb-2 md:mb-3 leading-tight h-[36px] md:h-auto flex items-center justify-center">
                {reason.title}
              </h4>
              <p className="text-[#4F5B73] text-[11px] md:text-[13px] leading-relaxed md:leading-[1.6] hidden md:block">
                {reason.desc}
              </p>
              <p className="text-[#4F5B73] text-[11px] leading-relaxed md:hidden">
                {reason.desc.substring(0, 75)}...
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhyChooseUs;
