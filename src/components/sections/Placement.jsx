import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Microscope, Stethoscope, HeartPulse, Building, FlaskConical, GraduationCap } from 'lucide-react';

const Placement = () => {
  const placementAreas = [
    { name: 'Hospitals', icon: <Building2 size={24} /> },
    { name: 'Diagnostic Laboratories', icon: <Microscope size={24} /> },
    { name: 'Dialysis Centers', icon: <HeartPulse size={24} /> },
    { name: 'Nursing Homes', icon: <Stethoscope size={24} /> },
    { name: 'Healthcare Companies', icon: <Building size={24} /> },
    { name: 'Research Institutions', icon: <FlaskConical size={24} /> },
    { name: 'Medical Colleges', icon: <GraduationCap size={24} /> },
  ];

  return (
    <section id="placement" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Career & Placement Assistance</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe our responsibility doesn't end with education. SAPI provides comprehensive placement guidance to ensure our students step into successful careers. 
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Interview Training</h4>
                    <p className="text-gray-600">Soft skills and technical interview preparation by industry experts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Resume Preparation</h4>
                    <p className="text-gray-600">Professional assistance in crafting impactful resumes highlighting practical skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Direct Recruitment</h4>
                    <p className="text-gray-600">Opportunities for direct recruitment through our network of affiliated hospitals.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Top Placement Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {placementAreas.map((area, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow border border-gray-50">
                    <div className="text-accent bg-accent/10 p-2 rounded-lg">
                      {area.icon}
                    </div>
                    <span className="font-medium text-gray-800">{area.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
