import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your enquiry. Our team will contact you shortly!');
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
  };

  return (
    <section id="contact" className="py-6 md:py-20 bg-gray-50 relative">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="bg-[#0B1C40] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(11,28,64,0.15)] flex flex-col lg:flex-row max-w-[1200px] mx-auto border border-gray-200/50">
          
          {/* Contact Info (Dark Side) */}
          <div className="w-full lg:w-[45%] p-6 sm:p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F23B4E]/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 md:w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-[12px] md:text-[13px] uppercase">Contact Us</span>
              </div>
              <h2 className="text-xl md:text-3xl font-[900] text-white mb-3">Get In Touch</h2>
              <p className="text-white/70 text-[14px] md:text-[16px] mb-8 leading-relaxed font-medium pr-4">
                Take the first step towards a rewarding healthcare career. Contact us for admissions or any other enquiries.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                    <Phone className="text-[#F23B4E] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[16px] md:text-lg font-[800] text-white mb-1">Phone</h4>
                    <div className="flex flex-col space-y-1 font-medium">
                      <a href="tel:+919751920888" className="text-white/80 hover:text-[#F23B4E] text-[14px] md:text-[15px] transition-colors">+91 97519 20888</a>
                      <a href="tel:+917708123707" className="text-white/80 hover:text-[#F23B4E] text-[14px] md:text-[15px] transition-colors">+91 77081 23707</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                    <Mail className="text-[#F23B4E] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[16px] md:text-lg font-[800] text-white mb-1">Email</h4>
                    <a href="mailto:silam4910@gmail.com" className="text-white/80 hover:text-[#F23B4E] text-[14px] md:text-[15px] font-medium transition-colors break-all">silam4910@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                    <MapPin className="text-[#F23B4E] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[16px] md:text-lg font-[800] text-white mb-1">Address</h4>
                    <p className="text-white/80 text-[13.5px] md:text-[15px] leading-relaxed font-medium">
                      Nanjundeswara Towers, Pennagaram Main Road,<br />
                      Near DNV International School, DNV Nagar,<br />
                      Dharmapuri - 636701, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form (White Side) */}
          <div className="w-full lg:w-[55%] bg-white p-6 sm:p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[20px] md:text-2xl font-[900] text-[#0B1C40] mb-5 md:mb-8 border-b-2 border-gray-100 pb-3 md:pb-4 inline-block">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-[800] text-[#4F5B73] mb-1.5 uppercase tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] outline-none transition-all bg-gray-50/50 text-[14px] font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-[800] text-[#4F5B73] mb-1.5 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] outline-none transition-all bg-gray-50/50 text-[14px] font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-[800] text-[#4F5B73] mb-1.5 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] outline-none transition-all bg-gray-50/50 text-[14px] font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-[13px] font-[800] text-[#4F5B73] mb-1.5 uppercase tracking-wide">Course</label>
                    <select 
                      id="course" 
                      name="course" 
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] outline-none transition-all bg-gray-50/50 text-[14px] font-medium text-gray-700"
                    >
                      <option value="" disabled>Select a course</option>
                      <option value="DMLT">DMLT</option>
                      <option value="OT Technician">OT Technician</option>
                      <option value="Diploma Nursing">Diploma Nursing (DHA)</option>
                      <option value="First Aid Training">First Aid Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-[800] text-[#4F5B73] mb-1.5 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/30 focus:border-[#F23B4E] outline-none transition-all bg-gray-50/50 text-[14px] font-medium resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    type="submit" 
                    className="flex-1 bg-[#0B1C40] text-white py-3.5 rounded-xl font-[800] text-[14px] md:text-[15px] hover:bg-[#F23B4E] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0B1C40]/20"
                  >
                    Submit <Send size={18} />
                  </button>
                  <a 
                    href="https://wa.me/919751920888" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-[800] text-[14px] md:text-[15px] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
