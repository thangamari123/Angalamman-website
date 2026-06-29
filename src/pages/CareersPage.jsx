import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* ── PAGE BANNER ── */}
      <div className="relative h-[160px] sm:h-[340px] md:h-[400px] overflow-hidden mb-12">
        <div className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" alt="Careers Banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0B1C40]/80 z-10 pointer-events-none" />

        {/* Banner Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg">Careers</h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">Careers</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] mb-20">
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-[900] text-[#0B1C40] mb-4">Join Our Team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Currently, there are no open positions. Please check back later for new opportunities to join the Sri Angalamman Paramedical Institute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
