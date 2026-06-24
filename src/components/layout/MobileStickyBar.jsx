import React from 'react';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileStickyBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-stretch h-[60px]">
      <a 
        href="tel:+919751920888"
        className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0B1C40] hover:bg-gray-50 active:bg-gray-100 transition-colors font-[800] text-[15px] border-t-2 border-transparent"
      >
        <PhoneCall size={20} className="text-[#F23B4E] animate-pulse" />
        Call Now
      </a>
      <Link 
        to="/application"
        className="flex-1 flex items-center justify-center gap-2 bg-[#F23B4E] hover:bg-[#D92B3E] active:bg-[#C02636] text-white transition-colors font-[800] text-[15px]"
      >
        <CalendarCheck size={20} />
        Book Now
      </Link>
    </div>
  );
};

export default MobileStickyBar;
