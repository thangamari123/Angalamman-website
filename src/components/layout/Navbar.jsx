import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, User, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky w-full z-50 flex flex-col top-0 bg-white">
      {/* Top Bar - Disappears on scroll */}
      <div className={`bg-[#0B1C40] text-gray-100 text-[11px] md:text-xs px-2 md:px-4 lg:px-8 transition-all duration-300 origin-top ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-none' : 'h-auto opacity-100 py-1.5'}`}>
        <div className="max-w-[1920px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-1.5 md:gap-2">
          
          {/* Left Side: Static Info & Login */}
          <div className="flex flex-wrap justify-center xl:justify-start items-center gap-x-2.5 gap-y-1 w-full xl:w-auto font-medium tracking-wide shrink-0">
            <div className="flex items-center gap-2.5">
              <a href="tel:+919751920888" className="flex items-center gap-1 hover:text-[#F23B4E] transition-colors">
                <Phone size={12} />
                <span>+91 97519 20888</span>
              </a>
              <span className="text-gray-500">|</span>
              <a href="tel:+917708123707" className="flex items-center gap-1 hover:text-[#F23B4E] transition-colors">
                <Phone size={12} />
                <span>+91 77081 23707</span>
              </a>
            </div>
            <div className="hidden sm:block w-px h-3 bg-gray-500/50 mx-1"></div>
            <a href="mailto:silam4910@gmail.com" className="flex items-center gap-1 hover:text-[#F23B4E] transition-colors">
              <Mail size={12} />
              <span>silam4910@gmail.com</span>
            </a>
          </div>

          {/* Right Side: Scrolling Ticker */}
          <div className="w-full xl:w-[45%] overflow-hidden relative flex items-center xl:border-l border-gray-600/50 pl-0 xl:pl-4 pt-1 xl:pt-0">
            <div className="animate-marquee font-semibold tracking-wide flex items-center cursor-default whitespace-nowrap text-[11px] md:text-xs">
              <span className="text-[#F23B4E] mx-3">★</span> 
              Admissions Started for the Year 2025 - 2026. 
              <span className="mx-4 text-gray-500">|</span> 
              For Further Details Contact: Mobile No : +91 97519 20888 , +91 77081 23707 
              <span className="mx-4 text-gray-500">|</span> 
              College Landline No : 04342291882 
              <span className="text-[#F23B4E] mx-3">★</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full bg-white transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'border-b border-gray-100 py-3 md:py-4'}`}>
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white rounded-md p-1 shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
               <img src="/images/logo2.webp" alt="SAPI Logo" className="w-full h-full object-contain" onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'flex';
               }} />
               <div className="hidden w-full h-full bg-[#0B1C40] rounded-md text-white items-center justify-center font-bold text-xl">
                 SA
               </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-[900] text-[#0B1C40] text-[1.1rem] md:text-xl lg:text-[1.35rem] leading-[1.1] tracking-tight uppercase" style={{fontFamily: "Georgia, serif"}}>
                Sri Angalamman
              </h1>
              <p className="text-[#F23B4E] text-[10px] md:text-[11px] lg:text-xs font-bold tracking-[0.15em] uppercase mt-1">
                Paramedical Institute
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 font-bold text-[14.5px] text-[#2D3748]">
            <a href="/#home" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Home
            </a>
            
            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="relative flex items-center gap-1 hover:text-[#F23B4E] transition-colors py-2 font-bold text-[14.5px] text-[#2D3748] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left group-hover:text-[#F23B4E]">
                Pages
                <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown Panel */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <Link to="/about" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors border-b border-gray-100">
                  About Us
                </Link>
                <Link to="/university-life" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors border-b border-gray-100">
                  University Life
                </Link>
                <Link to="/faq" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors">
                  Support &amp; Guidance
                </Link>
              </div>
            </div>

            <a href="/#admission" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Admissions
            </a>

            <Link to="/courses" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Courses
            </Link>
            
            <a href="/#gallery" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Gallery
            </a>
            
            <Link to="/contact" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 ml-4">
            <a href="/#login" className="group relative flex items-center justify-center border-2 border-[#0B1C40] overflow-hidden rounded-md px-4 xl:px-5 py-2 cursor-pointer text-[#0B1C40] hover:text-white font-bold text-sm whitespace-nowrap transition-all duration-300">
              <span className="relative z-10 flex items-center gap-1.5">
                <User size={14} strokeWidth={2.5} />
                Student Portal
              </span>
              <div className="absolute inset-0 h-full w-0 bg-[#0B1C40] transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <Link to="/application" className="group relative flex items-center justify-center bg-[#F23B4E] overflow-hidden rounded-md px-5 xl:px-6 py-2.5 cursor-pointer text-white font-bold text-sm whitespace-nowrap shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-1.5 tracking-wide">
                <GraduationCap size={16} strokeWidth={2.5} />
                Application Form
              </span>
              <div className="absolute inset-0 h-full w-0 bg-[#0B1C40] transition-all duration-300 ease-out group-hover:w-full"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button className="text-[#0B1C40] p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B1C40]/20" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        style={{ top: scrolled ? '72px' : '110px' }} // Approximate offsets based on header height
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Off-Canvas Drawer */}
      <div 
        className={`lg:hidden fixed bottom-0 right-0 w-[85%] sm:w-[350px] bg-white z-[50] shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: scrolled ? '72px' : '110px' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col px-6 py-8 gap-2">
            <a href="/#home" className="text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            
            {/* Mobile Pages Submenu */}
            <div>
              <button
                className="w-full flex items-center justify-between text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                Pages
                <ChevronDown size={18} className={`transition-transform duration-200 ${pagesOpen ? 'rotate-180 text-[#F23B4E]' : ''}`} />
              </button>
              {pagesOpen && (
                <div className="ml-4 mt-1 border-l-2 border-[#F23B4E]/30 pl-4 flex flex-col gap-1">
                  <Link to="/about" className="text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
                  <Link to="/university-life" className="text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>University Life</Link>
                  <Link to="/faq" className="text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>Support &amp; Guidance</Link>
                </div>
              )}
            </div>

            <a href="/#admission" className="text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Admissions</a>

            <Link to="/courses" className="text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Courses</Link>
            
            <a href="/#gallery" className="text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Gallery</a>
            
            <Link to="/contact" className="text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </nav>
        </div>

        {/* Mobile Menu Footer CTA */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col gap-4">
          <a href="/#login" className="flex items-center justify-center border-2 border-[#0B1C40] rounded-md px-6 py-3.5 cursor-pointer hover:bg-[#0B1C40] hover:text-white transition-all duration-300 text-[#0B1C40] font-bold text-[16px]" onClick={() => setIsOpen(false)}>
            <User size={18} className="mr-2" /> Student Portal
          </a>
          <Link to="/application" className="flex items-center justify-center bg-[#F23B4E] rounded-md px-6 py-3.5 cursor-pointer hover:bg-[#0B1C40] transition-all duration-300 text-white font-bold text-[16px] shadow-md" onClick={() => setIsOpen(false)}>
            <GraduationCap size={18} className="mr-2" /> Application Form
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
