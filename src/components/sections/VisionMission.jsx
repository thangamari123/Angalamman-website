import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Check } from 'lucide-react';

const VisionMission = () => {
  const missions = [
    'Deliver professional healthcare education.',
    'Develop discipline and professionalism.',
    'Provide state-of-the-art infrastructure.',
    'Build leadership skills.',
    'Encourage research and innovation.',
    'Create skilled healthcare professionals.'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={32} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium italic border-l-4 border-secondary pl-6">
                "To provide quality and affordable education in Medical Sciences for every student irrespective of financial background."
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-lg text-gray-700">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
