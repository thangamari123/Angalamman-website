import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Gallery from '../components/sections/Gallery';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* ── PAGE BANNER ── */}
      <div className="relative h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden">
        <div className="w-full h-full bg-[#0B1C40]">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1600" 
            alt="Gallery Banner" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60" 
          />
        </div>

        {/* Banner Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg uppercase tracking-wider">Photo Gallery</h1>
            <div className="flex items-center justify-center gap-2 text-white/80 text-[13px] md:text-[15px] font-bold">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={16} />
              <span className="text-white">Gallery</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="-mt-10">
        <Gallery />
      </div>
    </main>
  );
};

export default GalleryPage;
