import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileEdit, Building2, Users, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Building2 size={20} />,
      title: 'Opportunity To Study At The Nearest Hospital.',
      desc: 'Students can grab opportunity to get training near by hospital.'
    },
    {
      icon: <Users size={20} />,
      title: 'Experinced Trainers To Guide',
      desc: 'SAPI have well experinced trainers to guide you.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Training In Hospital With Study.',
      desc: 'We provide training at hospital while studying.'
    },
    {
      icon: <Award size={20} />,
      title: 'Installment Facility To Pay.',
      desc: 'We provide you to pay your fees by installment process.'
    }
  ];

  return (
    <section id="about" className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ── LEFT: IMAGE COLLAGE ── */}
          <div className="hidden lg:block w-full lg:w-1/2 relative px-4 sm:px-0">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/5] sm:aspect-[3/4] max-w-[450px] mx-auto lg:mx-0 border-8 border-white z-10">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                  alt="Campus Main" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0B1C40]/10 mix-blend-multiply"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 sm:-left-8 w-24 h-24 bg-[#FFF5F6] rounded-full z-0"></div>
              <div className="absolute top-20 -right-6 w-16 h-16 bg-[#F23B4E]/10 rounded-full z-0 blur-xl"></div>
              <div className="absolute -bottom-10 left-10 w-32 h-32 bg-[#0B1C40]/5 rounded-full z-0 blur-2xl"></div>

            </motion.div>
          </div>

          {/* ── RIGHT: CONTENT ── */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-[13px] uppercase bg-[#FFF5F6] px-3 py-1.5 rounded-full">About Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-[#0B1C40] leading-[1.15] mb-5 tracking-tight">
                Sri Angalamman <br />
                <span className="text-[#F23B4E]">Paramedical Institute</span>
              </h2>

              <p className="text-[#4F5B73] text-[15px] md:text-[16px] leading-relaxed mb-8 border-l-4 border-[#0B1C40] pl-5 py-1 bg-gray-50/50 rounded-r-lg">
                The Institute incorporates some of the best features of management education to equip the students to face the challenges of the radically unpredictable business environment.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF5F6] group-hover:bg-[#F23B4E] text-[#F23B4E] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_15px_rgba(242,59,78,0.3)]">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-[#0B1C40] font-bold text-[14px] mb-1.5 leading-snug">{feature.title}</h4>
                      <p className="text-[#6B7280] text-[13px] leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2 border-t border-gray-100">
                <Link
                  to="/application"
                  className="inline-flex items-center gap-2.5 bg-[#0B1C40] text-white px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#F23B4E] transition-all duration-300 shadow-[0_8px_20px_rgba(11,28,64,0.15)] hover:shadow-[0_8px_25px_rgba(242,59,78,0.25)] hover:-translate-y-0.5 group"
                >
                  <FileEdit size={18} className="group-hover:rotate-12 transition-transform" />
                  Application Form
                </Link>
                <div className="flex items-center gap-2 text-[#0B1C40] text-[13px] font-bold bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Admissions Open
                </div>
              </div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
