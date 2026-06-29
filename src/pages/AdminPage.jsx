import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic here
    alert("Admin system is currently locked. Please contact the super administrator.");
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
        <div className="md:w-5/12 bg-[#F23B4E] relative overflow-hidden hidden md:flex flex-col justify-between p-10 text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F23B4E]/90 via-[#F23B4E] to-[#D92B3E]"></div>
          </div>
          
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center shadow-lg">
              <img src="/images/logo2.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="font-bold text-xl leading-tight">SAPI</h2>
              <p className="text-white/80 text-[10px] tracking-widest font-bold uppercase">Admin Portal</p>
            </div>
          </div>

          <div className="relative z-10 mt-12 mb-8">
            <h1 className="text-3xl font-[900] mb-4 leading-tight">
              Administration <br /> Dashboard.
            </h1>
            <p className="text-white/80 text-sm leading-relaxed">
              Securely manage website content, monitor student records, process admissions, and configure institute settings.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-sm text-white/90 font-bold bg-black/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
            <ShieldCheck size={18} className="text-white" />
            Restricted Access Area
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          
          <div className="md:hidden flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md p-1 flex items-center justify-center border border-gray-100">
              <img src="/images/logo2.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="font-bold text-[#0B1C40] text-xl leading-tight">SAPI</h2>
              <p className="text-[#F23B4E] text-[10px] tracking-widest font-bold uppercase">Admin Portal</p>
            </div>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF5F6] text-[#F23B4E] rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#F23B4E]/10">
              <Shield size={14} /> Admin Only
            </div>
            <h2 className="text-2xl sm:text-3xl font-[900] text-[#0B1C40] mb-2">Secure Login</h2>
            <p className="text-gray-500 text-sm">Please authenticate to access the administration dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#0B1C40] mb-2">Username / Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] transition-all"
                  placeholder="admin@sapi.edu.in"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-[#0B1C40]">Master Password</label>
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
              className="w-full flex items-center justify-center gap-2 bg-[#F23B4E] hover:bg-[#D92B3E] text-white py-4 px-4 rounded-xl font-bold text-base transition-all duration-300 shadow-[0_8px_20px_rgba(242,59,78,0.25)] group"
            >
              Authenticate
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

        </div>
      </motion.div>
    </div>
  );
};

export default AdminPage;
