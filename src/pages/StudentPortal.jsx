import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentPortal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here
    alert("Login system is currently under maintenance. Please try again later.");
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1000px] w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Branding / Image */}
        <div className="md:w-5/12 bg-[#0B1C40] relative overflow-hidden hidden md:flex flex-col justify-between p-10 text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/dcldlvuib/image/upload/v1782288177/3_ayymct.jpg" 
              alt="Students" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C40]/80 via-[#0B1C40]/90 to-[#0B1C40]"></div>
          </div>
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center">
              <img src="/images/logo2.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="font-bold text-xl leading-tight">SAPI</h2>
              <p className="text-[#F23B4E] text-[10px] tracking-widest font-bold uppercase">Student Portal</p>
            </div>
          </div>

          <div className="relative z-10 mt-12 mb-8">
            <h1 className="text-3xl font-[900] mb-4 leading-tight">
              Welcome back to your digital campus.
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Access your course materials, check grades, manage fee payments, and stay updated with institute announcements.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-sm text-gray-400 font-medium">
            <ShieldCheck size={18} className="text-[#F23B4E]" />
            Secure Encrypted Connection
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="md:hidden flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md p-1 flex items-center justify-center">
              <img src="/images/logo2.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="font-bold text-[#0B1C40] text-xl leading-tight">SAPI</h2>
              <p className="text-[#F23B4E] text-[10px] tracking-widest font-bold uppercase">Student Portal</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-[900] text-[#0B1C40] mb-2">Sign In</h2>
            <p className="text-gray-500 text-sm">Please enter your student credentials to access your account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#0B1C40] mb-2">Student Email / ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] transition-all"
                  placeholder="Enter your student ID or email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-[#0B1C40]">Password</label>
                <a href="#" className="text-sm font-semibold text-[#F23B4E] hover:text-[#D92B3E] transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                className="h-4 w-4 text-[#F23B4E] focus:ring-[#F23B4E] border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
                Remember me on this device
              </label>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#0B1C40] hover:bg-[#07132B] text-white py-4 px-4 rounded-xl font-bold text-base transition-all duration-300 shadow-[0_8px_20px_rgba(11,28,64,0.15)] group"
            >
              Access Portal
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              Need technical support?
            </p>
            <a href="mailto:silam4910@gmail.com" className="flex items-center gap-2 text-sm font-bold text-[#0B1C40] hover:text-[#F23B4E] transition-colors bg-gray-50 px-4 py-2 rounded-lg">
              <Mail size={16} /> Contact IT Desk
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentPortal;
