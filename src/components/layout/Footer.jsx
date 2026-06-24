import React from 'react';
import { 
  ChevronRight, Phone, Mail, MapPin, 
  FlaskConical, Activity, HeartPulse, BriefcaseMedical, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#05112B] pt-12 pb-8 md:pt-20 text-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 xl:gap-8 mb-16">
          
          {/* Column 1: About */}
          <div className="xl:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[80px] h-[80px] shrink-0 flex items-center justify-center">
                <img src="/images/logo2.webp" alt="SAPI Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-[800] text-white text-[20px] leading-tight">Sri Angalamman</h3>
                <p className="text-gray-300 text-[15px] mt-1">Paramedical Institute</p>
              </div>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 pr-4">
              Sri Angalamman Paramedical Institute (SAPI) was setup in 2020 to provide technically competent professionals for the rapidly changing health care needs of the society.
            </p>
            <div>
              <h4 className="font-bold text-white text-[18px] mb-3">Follow Sri Angalamman</h4>
              <div className="h-[2px] w-8 bg-[#E51937] mb-6"></div>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Academics */}
          <div>
            <h4 className="font-[800] text-white text-[20px] mb-3">Academics</h4>
            <div className="h-[2px] w-10 bg-[#E51937] mb-8"></div>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 pb-5 border-b border-gray-700/50 border-dashed group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <FlaskConical size={18} className="text-white" />
                </div>
                <span className="font-bold text-[15px] group-hover:text-[#E51937] transition-colors">DMLT</span>
              </li>
              <li className="flex items-center gap-4 pb-5 border-b border-gray-700/50 border-dashed group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Activity size={18} className="text-white" />
                </div>
                <span className="font-bold text-[15px] group-hover:text-[#E51937] transition-colors">OT TECH</span>
              </li>
              <li className="flex items-center gap-4 pb-5 border-b border-gray-700/50 border-dashed group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <HeartPulse size={18} className="text-white" />
                </div>
                <span className="font-bold text-[15px] group-hover:text-[#E51937] transition-colors uppercase">DIP NURSING ( DHA )</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#E51937] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <BriefcaseMedical size={18} className="text-white" />
                </div>
                <span className="font-bold text-[15px] group-hover:text-[#E51937] transition-colors">FIRST AID TRAINING</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-[800] text-white text-[20px] mb-3">Quick Links</h4>
            <div className="h-[2px] w-10 bg-[#E51937] mb-8"></div>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 pb-5 border-b border-gray-700/50 border-dashed">
                <ChevronRight size={18} className="text-[#E51937] shrink-0" strokeWidth={3} />
                <a href="/#home" className="font-bold text-[15px] hover:text-[#E51937] transition-colors">Home</a>
              </li>
              <li className="flex items-center gap-3 pb-5 border-b border-gray-700/50 border-dashed">
                <ChevronRight size={18} className="text-[#E51937] shrink-0" strokeWidth={3} />
                <a href="/#about" className="font-bold text-[15px] hover:text-[#E51937] transition-colors">About Us</a>
              </li>
              <li className="flex items-center gap-3 pb-5 border-b border-gray-700/50 border-dashed">
                <ChevronRight size={18} className="text-[#E51937] shrink-0" strokeWidth={3} />
                <a href="/#services" className="font-bold text-[15px] hover:text-[#E51937] transition-colors">Services</a>
              </li>
              <li className="flex items-center gap-3 pb-5 border-b border-gray-700/50 border-dashed">
                <ChevronRight size={18} className="text-[#E51937] shrink-0" strokeWidth={3} />
                <Link to="/gallery" className="font-bold text-[15px] hover:text-[#E51937] transition-colors">Gallery</Link>
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight size={18} className="text-[#E51937] shrink-0" strokeWidth={3} />
                <a href="/#contact" className="font-bold text-[15px] hover:text-[#E51937] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="xl:col-span-1">
            <h4 className="font-[800] text-white text-[20px] mb-3">Contact Us</h4>
            <div className="h-[2px] w-10 bg-[#E51937] mb-8"></div>
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                  <Phone size={18} className="text-[#E51937]" fill="#E51937" />
                </div>
                <span className="font-bold text-[15px]">+91 77081 23707</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                  <Mail size={18} className="text-[#E51937]" fill="#E51937" />
                </div>
                <span className="font-bold text-[15px] break-all">silam4910@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg mt-1">
                  <MapPin size={18} className="text-[#E51937]" fill="#E51937" />
                </div>
                <p className="font-bold text-[14px] leading-[1.6] text-gray-200">
                  Nanjundeswara towers, Pennagaram main road, Near DNV International School DNV Nagar, Dharmapuri - 636701.
                </p>
              </div>
            </div>
          </div>

          {/* Column 5: Google Maps */}
          <div className="xl:col-span-1 lg:col-span-2 md:col-span-2">
            <h4 className="font-[800] text-white text-[20px] mb-3">Google Maps</h4>
            <div className="h-[2px] w-10 bg-[#E51937] mb-8"></div>
            <div className="w-full h-[250px] xl:h-[280px] rounded-xl overflow-hidden shadow-xl border border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11340.547141528448!2d78.150645!3d12.131102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16fba7a0d4b9%3A0x647e3a2b724f7e53!2sDharmapuri%2C%20Tamil%20Nadu%20636701!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-4 border-t border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck size={42} className="text-white shrink-0" strokeWidth={1.5} />
            <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed">
              © 2025 Sri Angalamman Paramedical Institute.<br className="hidden md:block" />
              All Rights Reserved.
            </p>
          </div>
          <div className="text-gray-400 text-[14px] md:text-[15px] text-center md:text-right">
            Designed with <span className="text-[#E51937] inline-block animate-pulse">❤️</span> for better education and a healthier tomorrow.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
