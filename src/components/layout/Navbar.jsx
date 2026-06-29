import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, User, GraduationCap, Send, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcementMessages = [
    "Welcome to Sri Angalamman Paramedical Institute",
    "Empowering Future Healthcare Professionals",
    "Admissions Open – Apply Today",
    "Your Journey Towards a Successful Medical Career Starts Here"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcementMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  // Framer Motion Variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const drawerVariants = {
    hidden: { x: '100%', transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' } },
    visible: { 
      x: 0, 
      transition: { 
        type: 'spring', 
        damping: 25, 
        stiffness: 200,
        staggerChildren: 0.08,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <header className="sticky w-full z-50 flex flex-col top-0 bg-white">
      {/* Top Bar - Disappears on scroll */}
      <div className={`bg-[#0B1C40] text-gray-100 px-2 md:px-4 lg:px-8 transition-all duration-300 origin-top ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-none' : 'h-auto opacity-100 py-2'}`}>
        <div className="max-w-[1920px] mx-auto relative flex items-center justify-center min-h-[28px] md:min-h-[32px]">

          {/* Center: Animated Announcement */}
          <div className="w-full flex justify-center items-center overflow-hidden h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={announcementIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="font-bold tracking-wide text-center text-white text-[11px] sm:text-[13px] md:text-[15px]"
              >
                <span className="text-[#F23B4E] mr-1.5 md:mr-2 text-[13px] sm:text-[15px] md:text-[18px]">✦</span>
                {announcementMessages[announcementIndex]}
                <span className="text-[#F23B4E] ml-1.5 md:ml-2 text-[13px] sm:text-[15px] md:text-[18px]">✦</span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full bg-white transition-all duration-300 relative z-[60] ${scrolled ? 'shadow-lg py-2' : 'border-b border-gray-100 py-3 md:py-4'}`}>
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
          
          {/* Logo Section */}
          <div className="flex-none">
            <Link to="/" className="flex items-center gap-2 md:gap-4 group">
              <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white rounded-md p-1 shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <img src="/images/logo2.webp" alt="SAPI Logo" className="w-full h-full object-contain" onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }} />
                 <div className="hidden w-full h-full bg-[#0B1C40] rounded-md text-white items-center justify-center font-bold text-xl">
                   SA
                 </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-[900] text-[#0B1C40] text-[0.95rem] md:text-xl lg:text-[1.2rem] leading-[1.1] tracking-tight uppercase" style={{fontFamily: "Georgia, serif"}}>
                  Sri Angalamman
                </h1>
                <p className="text-[#F23B4E] text-[9px] md:text-[11px] lg:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase mt-0.5 md:mt-1">
                  Paramedical Institute
                </p>
              </div>
            </Link>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-3 xl:gap-5 font-bold text-[13px] xl:text-[14px] text-[#2D3748] px-2 xl:px-4">
            <a href="/#home" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-[#F23B4E]">
              Home
            </a>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="relative flex items-center gap-1 hover:text-[#F23B4E] transition-colors py-2 font-bold text-[13px] xl:text-[14px] text-[#2D3748] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left group-hover:text-[#F23B4E]">
                About Us
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown Panel */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <Link to="/about" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors border-b border-gray-100">
                  About Us
                </Link>
                <Link to="/university-life" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors border-b border-gray-100">
                  University Life
                </Link>
                <Link to="/faq" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors border-b border-gray-100">
                  Support &amp; Guidance
                </Link>
                <Link to="/facilities" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors">
                  Facilities
                </Link>
              </div>
            </div>

            <a href="/#admission" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Admissions
            </a>

            {/* Courses Dropdown */}
            <div className="relative group">
              <Link to="/courses" className="relative flex items-center gap-1 hover:text-[#F23B4E] transition-colors py-2 font-bold text-[13px] xl:text-[14px] text-[#2D3748] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left group-hover:text-[#F23B4E]">
                Courses
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              {/* Mega Menu Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] xl:w-[680px] bg-[#2D3A4B] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] border border-[#3A4A5E] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 p-6 overflow-hidden">
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {/* Item 1 */}
                  <Link to="/courses" className="flex items-center gap-4 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <img src="/images/dmlt.webp" alt="DMLT" className="w-[70px] h-[60px] object-cover shadow-sm group-hover/item:shadow-md transition-shadow" />
                    <span className="text-white font-serif text-[14px] xl:text-[15px] leading-tight group-hover/item:text-[#F23B4E] transition-colors" style={{fontFamily: "Georgia, serif"}}>Diploma in Medical Laboratory Technology</span>
                  </Link>
                  {/* Item 2 */}
                  <Link to="/courses" className="flex items-center gap-4 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <img src="/images/ott.webp" alt="OTT" className="w-[70px] h-[60px] object-cover shadow-sm group-hover/item:shadow-md transition-shadow" />
                    <span className="text-white font-serif text-[14px] xl:text-[15px] leading-tight group-hover/item:text-[#F23B4E] transition-colors" style={{fontFamily: "Georgia, serif"}}>Operating Theatre Technicians</span>
                  </Link>
                  {/* Item 3 */}
                  <Link to="/courses" className="flex items-center gap-4 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <img src="/images/dip-nursing.webp" alt="Nursing" className="w-[70px] h-[60px] object-cover shadow-sm group-hover/item:shadow-md transition-shadow" />
                    <span className="text-white font-serif text-[14px] xl:text-[15px] leading-tight group-hover/item:text-[#F23B4E] transition-colors" style={{fontFamily: "Georgia, serif"}}>Diploma in Nursing (DHA)</span>
                  </Link>
                  {/* Item 4 */}
                  <Link to="/courses" className="flex items-center gap-4 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <img src="/images/dip-dialysis.webp" alt="Dialysis" className="w-[70px] h-[60px] object-cover shadow-sm group-hover/item:shadow-md transition-shadow" />
                    <span className="text-white font-serif text-[14px] xl:text-[15px] leading-tight group-hover/item:text-[#F23B4E] transition-colors" style={{fontFamily: "Georgia, serif"}}>Diploma in Dialysis Techniques</span>
                  </Link>
                  {/* Item 5 */}
                  <Link to="/courses" className="flex items-center gap-4 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <img src="/images/first-aid.webp" alt="First Aid" className="w-[70px] h-[60px] object-cover shadow-sm group-hover/item:shadow-md transition-shadow" />
                    <span className="text-white font-serif text-[14px] xl:text-[15px] leading-tight group-hover/item:text-[#F23B4E] transition-colors" style={{fontFamily: "Georgia, serif"}}>First Aid Training</span>
                  </Link>
                  {/* Item 6 */}
                  <Link to="/courses" className="flex items-center gap-4 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <img src="/images/dip-radiology.webp" alt="Radiology" className="w-[70px] h-[60px] object-cover shadow-sm group-hover/item:shadow-md transition-shadow" />
                    <span className="text-white font-serif text-[14px] xl:text-[15px] leading-tight group-hover/item:text-[#F23B4E] transition-colors" style={{fontFamily: "Georgia, serif"}}>Diploma in Radiology Technician</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/news-events" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left whitespace-nowrap">
              News &amp; Events
            </Link>

            <Link to="/careers" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Careers
            </Link>
            
            <Link to="/gallery" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Gallery
            </Link>
            
            <Link to="/contact" className="relative hover:text-[#F23B4E] transition-colors py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#F23B4E] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left whitespace-nowrap">
              Contact Us
            </Link>
          </nav>

          {/* Right Side Buttons (Desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 flex-none">
            {/* Application Form Button */}
            <Link to="/application" className="flex items-center gap-1.5 bg-[#0B1C40] text-white px-4 py-2.5 font-bold text-[13px] shadow-md hover:bg-[#F23B4E] transition-colors duration-300 rounded-md">
              Apply Now <Send size={14} className="ml-0.5" />
            </Link>

            {/* Portals Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 bg-[#F23B4E] text-white px-4 py-2.5 font-bold text-[13px] shadow-md hover:bg-[#0B1C40] transition-colors duration-300 rounded-md">
                Portals
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* Dropdown Panel */}
              <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden rounded-xl">
                <Link to="/student-portal" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors border-b border-gray-50">
                  <User size={16} className="text-[#F23B4E]" />
                  Student Portal
                </Link>
                <Link to="/admin" className="flex items-center gap-3 px-5 py-3.5 text-[14px] font-semibold text-[#2D3748] hover:text-[#F23B4E] hover:bg-gray-50 transition-colors">
                  <Shield size={16} className="text-[#F23B4E]" />
                  Admin
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-end">
            <button 
              className="text-[#0B1C40] p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Off-Canvas Menu Overlay */}
            <motion.div 
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden fixed inset-0 bg-[#0B1C40]/80 backdrop-blur-sm z-[90]" 
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Off-Canvas Drawer */}
            <motion.div 
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden fixed inset-y-0 right-0 w-[85%] sm:w-[350px] bg-white z-[100] shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Drawer Header with Close Button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 bg-white rounded-md p-0.5 shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center">
                     <img src="/images/logo2.webp" alt="SAPI Logo" className="w-full h-full object-contain" onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }} />
                     <div className="hidden w-full h-full bg-[#0B1C40] rounded-md text-white items-center justify-center font-bold text-xs">
                       SA
                     </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="font-[900] text-[#0B1C40] text-[12px] leading-[1.1] tracking-tight uppercase" style={{fontFamily: "Georgia, serif"}}>
                      Sri Angalamman
                    </h1>
                    <p className="text-[#F23B4E] text-[8px] font-bold tracking-[0.1em] uppercase mt-0.5">
                      Paramedical Institute
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-[#F23B4E] hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col px-6 py-8 gap-1.5">
                  <motion.div variants={itemVariants}>
                    <a href="/#home" className="block text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Home</a>
                  </motion.div>
                  
                  {/* Mobile Pages Submenu */}
                  <motion.div variants={itemVariants}>
                    <button
                      className="w-full flex items-center justify-between text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors"
                      onClick={() => setPagesOpen(!pagesOpen)}
                    >
                      About Us
                      <ChevronDown size={18} className={`transition-transform duration-300 ${pagesOpen ? 'rotate-180 text-[#F23B4E]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {pagesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-1 border-l-2 border-[#F23B4E]/30 pl-4 flex flex-col gap-1 pb-2">
                            <Link to="/about" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link to="/university-life" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>University Life</Link>
                            <Link to="/faq" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>Support &amp; Guidance</Link>
                            <Link to="/facilities" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors" onClick={() => setIsOpen(false)}>Facilities</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <a href="/#admission" className="block text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Admissions</a>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      className="w-full flex items-center justify-between text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors"
                      onClick={() => setCoursesOpen(!coursesOpen)}
                    >
                      Courses
                      <ChevronDown size={18} className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180 text-[#F23B4E]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {coursesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 mt-1 border-l-2 border-[#F23B4E]/30 pl-4 flex flex-col gap-1 pb-2">
                            <Link to="/courses" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors leading-tight" onClick={() => setIsOpen(false)}>Diploma in Medical Laboratory Technology</Link>
                            <Link to="/courses" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors leading-tight" onClick={() => setIsOpen(false)}>Operating Theatre Technicians</Link>
                            <Link to="/courses" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors leading-tight" onClick={() => setIsOpen(false)}>Diploma in Nursing (DHA)</Link>
                            <Link to="/courses" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors leading-tight" onClick={() => setIsOpen(false)}>Diploma in Dialysis Techniques</Link>
                            <Link to="/courses" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors leading-tight" onClick={() => setIsOpen(false)}>First Aid Training</Link>
                            <Link to="/courses" className="block text-[#4F5B73] hover:text-[#F23B4E] hover:bg-gray-50/80 px-3 py-2.5 rounded-lg font-semibold text-[15px] transition-colors leading-tight" onClick={() => setIsOpen(false)}>Diploma in Radiology Technician</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Link to="/news-events" className="block text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>News & Events</Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link to="/careers" className="block text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Careers</Link>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Link to="/gallery" className="block text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Link to="/contact" className="block text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-2 pt-2 border-t border-gray-100">
                    <Link to="/admin" className="flex items-center text-[#0B1C40] hover:text-[#F23B4E] hover:bg-gray-50/80 px-4 py-3 rounded-lg font-bold text-[17px] transition-colors" onClick={() => setIsOpen(false)}>
                      <Shield size={20} className="mr-3 text-[#F23B4E]" /> Admin Portal
                    </Link>
                  </motion.div>
                </nav>
              </div>

              {/* Mobile Menu Footer CTA */}
              <motion.div 
                variants={itemVariants}
                className="p-6 pb-[85px] bg-gray-50 border-t border-gray-100 flex flex-col gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]"
              >
                <Link to="/student-portal" className="flex items-center justify-center border-2 border-[#0B1C40] rounded-md px-6 py-3.5 cursor-pointer hover:bg-[#0B1C40] hover:text-white transition-all duration-300 text-[#0B1C40] font-bold text-[16px]" onClick={() => setIsOpen(false)}>
                  <User size={18} className="mr-2" /> Student Portal
                </Link>
                <Link to="/application" className="flex items-center justify-center bg-[#F23B4E] rounded-md px-6 py-3.5 cursor-pointer hover:bg-[#D92B3E] active:scale-[0.98] transition-all duration-300 text-white font-bold text-[16px] shadow-lg shadow-[#F23B4E]/20" onClick={() => setIsOpen(false)}>
                  <GraduationCap size={18} className="mr-2" /> Application Form
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
