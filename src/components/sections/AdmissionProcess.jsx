import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FileSearch, CreditCard, GraduationCap } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Complete Online Application',
      description: 'Fill out the initial application form with your details and course preference.',
      icon: <FileText size={28} />
    },
    {
      id: 2,
      title: 'Application Review',
      description: 'Our admission counselors will review your application and contact you.',
      icon: <FileSearch size={28} />
    },
    {
      id: 3,
      title: 'Fee Payment',
      description: 'Pay the initial admission fee to confirm your seat in the chosen course.',
      icon: <CreditCard size={28} />
    },
    {
      id: 4,
      title: 'Course Enrollment',
      description: 'Complete the final documentation and begin your classes.',
      icon: <GraduationCap size={28} />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
          <p className="text-lg text-gray-600">
            A simple and straightforward 4-step process to secure your admission.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Connector line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-1 h-12 bg-gray-100 my-2"></div>
                )}
                
                <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center text-primary mb-6 relative z-10 group hover:border-primary/20 transition-colors">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {step.id}
                  </div>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
