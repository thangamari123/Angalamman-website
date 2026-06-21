import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Microscope, Wifi, Library, Home, Bus, Coffee, Activity, Stethoscope, Users } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    { name: 'Smart Classrooms', icon: <MonitorPlay size={32} /> },
    { name: 'Advanced Laboratories', icon: <Microscope size={32} /> },
    { name: 'Computer Lab', icon: <MonitorPlay size={32} /> },
    { name: 'Internet Facility', icon: <Wifi size={32} /> },
    { name: 'Library', icon: <Library size={32} /> },
    { name: 'Hostel Facility', icon: <Home size={32} /> },
    { name: 'Transportation', icon: <Bus size={32} /> },
    { name: 'Campus Canteen', icon: <Coffee size={32} /> },
    { name: 'Playground', icon: <Activity size={32} /> },
    { name: 'Hospital Training', icon: <Stethoscope size={32} /> },
    { name: 'Clinical Exposure', icon: <Users size={32} /> },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Facilities</h2>
          <p className="text-lg text-gray-600">
            State-of-the-art infrastructure providing an ideal environment for academic and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-primary hover:text-white group transition-colors duration-300 shadow-sm border border-gray-100"
            >
              <div className="text-primary group-hover:text-white transition-colors duration-300">
                {facility.icon}
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800 group-hover:text-white transition-colors duration-300">
                {facility.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
