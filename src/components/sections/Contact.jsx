import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

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
    alert('Thank you for your enquiry. Our team will contact you shortly!');
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-white relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 skew-y-[-2deg] origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-[#F23B4E]"></div>
              <h2 className="text-[#F23B4E] font-bold tracking-widest text-[13px] uppercase">Get In Touch</h2>
              <div className="h-[2px] w-12 bg-[#F23B4E]"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-[900] text-[#0B1C40] mb-6 leading-tight">We're Here to Help You</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-[15px] md:text-[17px] leading-relaxed">
              Have questions about admissions, courses, or campus life? Our team is ready to provide you with all the information you need to start your healthcare journey.
            </p>
          </motion.div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address Card */}
          <motion.div 
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-none p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(242,59,78,0.1)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F23B4E] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-gray-50 rounded-none flex items-center justify-center mb-6 group-hover:bg-[#F23B4E] transition-colors duration-300">
              <MapPin className="text-[#0B1C40] group-hover:text-white transition-colors" size={24} />
            </div>
            <h4 className="text-[18px] font-[800] text-[#0B1C40] mb-3">Campus Address</h4>
            <p className="text-gray-500 font-medium leading-relaxed text-[14.5px]">
              Nanjundeswara Towers, Pennagaram Main Road, Near DNV International School, Dharmapuri - 636701
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-none p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(242,59,78,0.1)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F23B4E] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-gray-50 rounded-none flex items-center justify-center mb-6 group-hover:bg-[#F23B4E] transition-colors duration-300">
              <Phone className="text-[#0B1C40] group-hover:text-white transition-colors" size={24} />
            </div>
            <h4 className="text-[18px] font-[800] text-[#0B1C40] mb-3">Call Us</h4>
            <div className="flex flex-col space-y-1">
              <a href="tel:+919751920888" className="text-gray-500 hover:text-[#F23B4E] font-medium text-[14.5px] transition-colors">+91 97519 20888</a>
              <a href="tel:+917708123707" className="text-gray-500 hover:text-[#F23B4E] font-medium text-[14.5px] transition-colors">+91 77081 23707</a>
              <a href="tel:04342291882" className="text-gray-500 hover:text-[#F23B4E] font-medium text-[14.5px] transition-colors">04342 291882 (Landline)</a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-none p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(242,59,78,0.1)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F23B4E] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-gray-50 rounded-none flex items-center justify-center mb-6 group-hover:bg-[#F23B4E] transition-colors duration-300">
              <Mail className="text-[#0B1C40] group-hover:text-white transition-colors" size={24} />
            </div>
            <h4 className="text-[18px] font-[800] text-[#0B1C40] mb-3">Email Us</h4>
            <div className="flex flex-col space-y-1">
              <a href="mailto:silam4910@gmail.com" className="text-gray-500 hover:text-[#F23B4E] font-medium text-[14.5px] transition-colors break-all">silam4910@gmail.com</a>
              <p className="text-gray-400 text-[13px] mt-2">We typically reply within 24 hours.</p>
            </div>
          </motion.div>
        </div>

        {/* Form and Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-none shadow-[0_20px_60px_rgba(11,28,64,0.08)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Form Side */}
          <div className="w-full lg:w-[55%] p-8 md:p-12">
            <h3 className="text-2xl font-[900] text-[#0B1C40] mb-2 flex items-center gap-2">
              Send an Enquiry
            </h3>
            <p className="text-gray-500 text-[14px] mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-[13px] font-[800] text-[#0B1C40] tracking-wide">FULL NAME</label>
                  <input 
                    type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/20 focus:border-[#F23B4E] outline-none transition-all bg-gray-50 hover:bg-white text-[14px] font-medium text-gray-800"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-[13px] font-[800] text-[#0B1C40] tracking-wide">PHONE NUMBER</label>
                  <input 
                    type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/20 focus:border-[#F23B4E] outline-none transition-all bg-gray-50 hover:bg-white text-[14px] font-medium text-gray-800"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[13px] font-[800] text-[#0B1C40] tracking-wide">EMAIL ADDRESS</label>
                  <input 
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/20 focus:border-[#F23B4E] outline-none transition-all bg-gray-50 hover:bg-white text-[14px] font-medium text-gray-800"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="course" className="block text-[13px] font-[800] text-[#0B1C40] tracking-wide">INTERESTED COURSE</label>
                  <select 
                    id="course" name="course" required value={formData.course} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/20 focus:border-[#F23B4E] outline-none transition-all bg-gray-50 hover:bg-white text-[14px] font-medium text-gray-700 cursor-pointer"
                  >
                    <option value="" disabled>Select a course</option>
                    <option value="DMLT">DMLT</option>
                    <option value="OT Technician">OT Technician</option>
                    <option value="Diploma Nursing">Diploma Nursing (DHA)</option>
                    <option value="Diploma Dialysis">Diploma Dialysis Techniques</option>
                    <option value="First Aid Training">First Aid Training</option>
                    <option value="Diploma Radiology">Diploma Radiology Technician</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-[13px] font-[800] text-[#0B1C40] tracking-wide">YOUR MESSAGE</label>
                <textarea 
                  id="message" name="message" rows="4" value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-none border border-gray-200 focus:ring-2 focus:ring-[#F23B4E]/20 focus:border-[#F23B4E] outline-none transition-all bg-gray-50 hover:bg-white text-[14px] font-medium text-gray-800 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-[#0B1C40] text-white py-3.5 rounded-none font-[800] text-[15px] hover:bg-[#F23B4E] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0B1C40]/20"
                >
                  Send Message <Send size={18} />
                </button>
                <a 
                  href="https://wa.me/919751920888" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-[0.5] bg-[#25D366] text-white py-3.5 rounded-none font-[800] text-[15px] hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-[45%] bg-gray-200 min-h-[350px] lg:min-h-full relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15617.915729704257!2d78.13962635!3d12.12458445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16fbc8537537%3A0x6b876fc15bf13693!2sDharmapuri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709110000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
