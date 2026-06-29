import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0B1C40] text-white rounded-t-[40px] md:rounded-none mt-8 md:mt-0 pt-4 md:pt-0">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          
          {/* Column 1: About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 lg:border-r lg:border-white/10 lg:pr-10">
            <Link to="/" className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-6 group">
              <div className="w-16 h-16 shrink-0 bg-white rounded-md p-1 shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <img src="/images/logo2.webp" alt="SAPI Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h1 className="font-[900] text-white text-[1.1rem] md:text-[1.2rem] leading-[1.1] tracking-tight uppercase" style={{fontFamily: "Georgia, serif"}}>
                  Sri Angalamman
                </h1>
                <p className="text-[#F23B4E] text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mt-1">
                  Paramedical Institute
                </p>
              </div>
            </Link>
            <p className="text-gray-300 text-[14px] leading-[1.8]">
              Sri Angalamman Paramedical Institute (SAPI) was setup in 2020 to provide technically competent professionals for the rapidly changing health care needs of the society.
            </p>
            
            <div className="w-10 h-0.5 bg-[#F23B4E] mt-6 mb-6"></div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300" aria-label="YouTube">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.087 0 12 0 12s0 3.913.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.913 24 12 24 12s0-3.913-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300" aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left border-t border-white/10 pt-4 md:border-none md:pt-0 lg:border-r lg:border-white/10 lg:pr-10 lg:pl-10">
            <button 
              onClick={() => toggleSection('links')}
              className="w-full flex items-center justify-between md:justify-start font-bold text-white text-[17px] uppercase md:mb-6 font-serif relative md:after:content-[''] md:after:absolute md:after:-bottom-2 md:after:left-0 md:after:w-8 md:after:h-0.5 md:after:bg-[#F23B4E] outline-none tracking-wide"
            >
              <span>Quick Links</span>
              <ChevronDown className={`md:hidden transition-transform duration-300 ${openSection === 'links' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:max-h-[1000px] md:opacity-100 ${openSection === 'links' ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 md:mt-0'}`}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-left">
                <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Home</Link>
                <Link to="/about" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> About Us</Link>
                <Link to="/university-life" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> University Life</Link>
                <Link to="/faq" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Support &amp; Guidance</Link>
                <Link to="/facilities" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Facilities</Link>
                <Link to="/application" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Admissions</Link>
                <Link to="/courses" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Courses</Link>
                <Link to="/news-events" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> News &amp; Events</Link>
                <Link to="/careers" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Careers</Link>
                <Link to="/gallery" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Gallery</Link>
                <Link to="/contact" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Contact Us</Link>
                <Link to="/student-portal" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Student Portal</Link>
                <Link to="/admin" className="flex items-center gap-2 text-gray-300 hover:text-white group text-[13.5px] transition-colors whitespace-nowrap"><ChevronRight size={14} className="text-[#F23B4E] group-hover:translate-x-1 transition-transform" /> Admin Portal</Link>
              </div>
            </div>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left border-t border-white/10 pt-4 md:border-none md:pt-0 lg:pl-10">
            <button 
              onClick={() => toggleSection('address')}
              className="w-full flex items-center justify-between md:justify-start font-bold text-white text-[17px] uppercase md:mb-6 font-serif relative md:after:content-[''] md:after:absolute md:after:-bottom-2 md:after:left-0 md:after:w-8 md:after:h-0.5 md:after:bg-[#F23B4E] outline-none tracking-wide"
            >
              <span>Our Branches</span>
              <ChevronDown className={`md:hidden transition-transform duration-300 ${openSection === 'address' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:max-h-[1000px] md:opacity-100 flex flex-col items-center md:items-start ${openSection === 'address' ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 md:mt-0'}`}>
              <div className="space-y-6 mb-6 md:mt-2 w-full">
                
                {/* Branch 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-gray-300">
                  <MapPin size={18} className="text-[#F23B4E] shrink-0 md:mt-0.5 hidden md:block" />
                  <div>
                    <h4 className="text-[#F23B4E] font-bold text-[13px] uppercase tracking-widest mb-1.5 flex items-center justify-center md:justify-start gap-2">
                      <MapPin size={16} className="md:hidden text-[#F23B4E]" /> Dharmapuri Campus
                    </h4>
                    <p className="text-[13px] leading-[1.8] text-gray-300">
                      Nanjundeswara towers, Pennagaram main road, Near DNV International School, Dharmapuri - 636701.
                    </p>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-gray-300">
                  <MapPin size={18} className="text-[#F23B4E] shrink-0 md:mt-0.5 hidden md:block" />
                  <div>
                    <h4 className="text-[#F23B4E] font-bold text-[13px] uppercase tracking-widest mb-1.5 flex items-center justify-center md:justify-start gap-2">
                      <MapPin size={16} className="md:hidden text-[#F23B4E]" /> Tiruvannamalai Campus
                    </h4>
                    <p className="text-[13px] leading-[1.8] text-gray-300">
                      Vellore Main Road, Puthumallavadi, Tiruvannamalai.
                    </p>
                  </div>
                </div>
                
                <hr className="border-white/10 w-full" />
                
                {/* Contact Info */}
                <div className="w-full mt-2 space-y-4">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-gray-300">
                    <Phone size={18} className="text-[#F23B4E] shrink-0 md:mt-0.5" />
                    <div className="flex flex-col gap-1.5 text-[13px]">
                      <span>+91 97519 20888 &nbsp;|&nbsp; +91 77081 23707</span>
                      <span>College Landline No : 04342291882</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-gray-300">
                    <Mail size={18} className="text-[#F23B4E] shrink-0 md:mt-0.5" />
                    <a href="mailto:silam4910@gmail.com" className="text-[13px] hover:text-white transition-colors">
                      silam4910@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#152A55]/50 py-4 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[12px] text-gray-400">
            <p className="text-center">Copyright © 2026 Sri Angalamman Paramedical Institute. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
