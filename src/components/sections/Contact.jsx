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
    <section id="contact" className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Take the first step towards a rewarding healthcare career. Contact us for admissions, course details, or any other enquiries.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Phone</h4>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:+919751920888" className="text-gray-600 hover:text-primary text-lg">+91 97519 20888</a>
                      <a href="tel:+917708123707" className="text-gray-600 hover:text-primary text-lg">+91 77081 23707</a>
                      <a href="tel:04342291882" className="text-gray-600 hover:text-primary text-lg">04342 291882 (Landline)</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:silam4910@gmail.com" className="text-gray-600 hover:text-secondary text-lg">silam4910@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Nanjundeswara Towers, Pennagaram Main Road,<br />
                      Near DNV International School, DNV Nagar,<br />
                      Dharmapuri - 636701, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Enquiry Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Interested Course *</label>
                    <select 
                      id="course" 
                      name="course" 
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
                    >
                      <option value="" disabled>Select a course</option>
                      <option value="DMLT">DMLT</option>
                      <option value="OT Technician">OT Technician</option>
                      <option value="Diploma Nursing">Diploma Nursing (DHA)</option>
                      <option value="Dialysis Technician">Dialysis Technician</option>
                      <option value="Physiotherapy Assistant">Physiotherapy Assistant</option>
                      <option value="Pharmacy Assistant">Pharmacy Assistant</option>
                      <option value="First Aid Training">First Aid Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Tell us about your educational background or any questions..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button 
                    type="submit" 
                    className="flex-1 bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
                  >
                    Submit Application <Send size={20} />
                  </button>
                  <a 
                    href="https://wa.me/919751920888" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                  >
                    WhatsApp Enquiry
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
