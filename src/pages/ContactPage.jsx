import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, Phone, Mail, Clock, MapPin,
  Send, User, MessageSquare, FileText,
  CheckCircle2, AlertCircle, X, Building2, ExternalLink
} from 'lucide-react';

/* ─── Validators ─── */
const validators = {
  name: (v) => {
    if (!v.trim()) return 'Your name is required.';
    if (!/^[a-zA-Z\s.'-]+$/.test(v)) return 'Name must contain letters only.';
    if (v.trim().length < 3) return 'Name must be at least 3 characters.';
    return '';
  },
  phone: (v) => {
    if (!v.trim()) return 'Phone number is required.';
    if (!/^\d+$/.test(v)) return 'Phone must contain digits only.';
    if (v.length !== 10) return 'Enter a valid 10-digit mobile number.';
    if (!/^[6-9]/.test(v)) return 'Number must start with 6, 7, 8 or 9.';
    return '';
  },
  email: (v) => {
    if (!v.trim()) return 'Email address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address.';
    return '';
  },
  subject: (v) => {
    if (!v.trim()) return 'Subject is required.';
    if (v.trim().length < 4) return 'Subject is too short.';
    return '';
  },
  message: (v) => {
    if (!v.trim()) return 'Please enter your message.';
    if (v.trim().length < 10) return 'Message is too short (min 10 characters).';
    return '';
  },
};

const initialForm = { name: '', phone: '', email: '', subject: '', message: '' };

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => validators[name]?.(value) ?? '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      if (value && !/^[a-zA-Z\s.'-]*$/.test(value)) return;
    }
    if (name === 'phone') {
      if (value && !/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }
    setForm(p => ({ ...p, [name]: value }));
    if (touched[name]) setErrors(p => ({ ...p, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(p => ({ ...p, [name]: true }));
    setErrors(p => ({ ...p, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(initialForm).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);
    const allErrors = Object.keys(initialForm).reduce((a, k) => {
      const err = validate(k, form[k]);
      if (err) a[k] = err;
      return a;
    }, {});
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
      setErrors({});
    }, 1500);
  };

  const inputClass = (name) =>
    `w-full pl-11 pr-4 py-3.5 bg-[#F8F9FA] border rounded-xl focus:outline-none focus:bg-white transition-all placeholder:text-gray-400 text-[#0B1C40] font-medium text-[15px] ${
      touched[name] && errors[name]
        ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100'
        : touched[name] && !errors[name] && form[name]
        ? 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-100'
        : 'border-gray-200 focus:border-[#F23B4E] focus:ring-2 focus:ring-[#F23B4E]/15'
    }`;

  const iconColor = (name) =>
    touched[name] && errors[name] ? 'text-red-400'
    : touched[name] && !errors[name] && form[name] ? 'text-green-500'
    : 'text-gray-400 group-focus-within:text-[#F23B4E]';

  const FieldMsg = ({ name }) => (
    <AnimatePresence>
      {touched[name] && errors[name] && (
        <motion.p className="mt-1.5 flex items-center gap-1.5 text-red-500 text-[12px] font-semibold"
          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <AlertCircle size={12} className="shrink-0" />{errors[name]}
        </motion.p>
      )}
      {touched[name] && !errors[name] && form[name] && (
        <motion.p className="mt-1.5 flex items-center gap-1.5 text-green-500 text-[12px] font-semibold"
          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <CheckCircle2 size={12} className="shrink-0" />Looks good!
        </motion.p>
      )}
    </AnimatePresence>
  );

  const contactInfo = [
    {
      icon: <Phone size={22} />,
      label: 'Call Us',
      lines: ['+91 77081 23707', '+91 97519 20888'],
      href: ['tel:+917708123707', 'tel:+919751920888'],
    },
    {
      icon: <Mail size={22} />,
      label: 'Mail Us',
      lines: ['silam4910@gmail.com'],
      href: ['mailto:silam4910@gmail.com'],
    },
    {
      icon: <Clock size={22} />,
      label: 'Opening Hours',
      lines: ['Mon - Sat: 09.00am to 05.00pm'],
      href: [null],
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      lines: ['Nanjundeswara towers, Pennagaram main road, Near DNV International School DNV Nagar, Dharmapuri - 636701'],
      href: ['https://maps.google.com/?q=Dharmapuri+636701'],
    },
  ];

  const branches = [
    {
      name: 'Dharmapuri Branch',
      address: 'Nanjundeswara towers, Pennagaram main road, Near DNV International School, DNV Nagar, Dharmapuri',
      pin: '636701',
      phones: ['+91 97519 20888', '+91 77081 23707'],
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62640.01!2d78.1!3d12.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac01e0b5555555%3A0x1234!2sDharmapuri!5e0!3m2!1sen!2sin!4v1234567890',
      mapLink: 'https://maps.google.com/?q=Dharmapuri+636701',
    },
    {
      name: 'Tiruvannamalai Branch',
      address: 'Vellore Main Road, Puthumallavadi, Tiruvannamalai',
      pin: '606 805',
      phones: ['+91 86086 09555', '+91 96296 60026'],
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125459.0!2d79.07!3d12.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c5555555%3A0x5678!2sTiruvannamalai!5e0!3m2!1sen!2sin!4v1234567891',
      mapLink: 'https://maps.google.com/?q=Tiruvannamalai+606805',
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* ── PAGE BANNER ── */}
      <div className="relative h-[160px] sm:h-[320px] md:h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600"
          alt="Contact Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1C40]/85 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[40px] border-white/5 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#F23B4E]/10 pointer-events-none" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] md:text-sm uppercase">Reach Out</span>
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg">Contact Us</h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── GET IN TOUCH SECTION ── */}
      <section className="py-16 md:py-24 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">

          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Contact</span>
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[900] text-[#0B1C40]">Get In Touch</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* ── LEFT: Contact Form ── */}
            <motion.div className="w-full lg:w-[55%]"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>

              <AnimatePresence>
                {submitted && (
                  <motion.div className="mb-6 flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl px-5 py-4 relative"
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <CheckCircle2 size={24} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-green-800 text-[16px]">Message Sent Successfully! 🎉</div>
                      <div className="text-green-700/75 text-[13px] mt-0.5">We'll get back to you within 24 hours.</div>
                    </div>
                    <button className="absolute top-3 right-3 text-green-400 hover:text-green-700" onClick={() => setSubmitted(false)}>
                      <X size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
                <div className="bg-[#0B1C40] px-7 py-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F23B4E] flex items-center justify-center shrink-0">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-[900] text-[17px]">Send Us a Message</h3>
                    <p className="text-white/60 text-[12px]">We'll respond within 24 hours</p>
                  </div>
                </div>

                <form className="p-6 md:p-8 space-y-5" onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('name')}`}><User size={17} /></div>
                      <input name="name" type="text" value={form.name}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Your name"
                        className={inputClass('name')} />
                    </div>
                    <FieldMsg name="name" />
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('phone')}`}><Phone size={17} /></div>
                      <input name="phone" type="tel" inputMode="numeric" value={form.phone}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Your phone" maxLength={10}
                        className={inputClass('phone')} />
                      {form.phone.length > 0 && (
                        <span className={`absolute inset-y-0 right-3 flex items-center text-[11px] font-bold ${form.phone.length === 10 ? 'text-green-500' : 'text-gray-400'}`}>
                          {form.phone.length}/10
                        </span>
                      )}
                    </div>
                    <FieldMsg name="phone" />
                  </div>

                  {/* Email */}
                  <div>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('email')}`}><Mail size={17} /></div>
                      <input name="email" type="email" value={form.email}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Your email"
                        className={inputClass('email')} />
                    </div>
                    <FieldMsg name="email" />
                  </div>

                  {/* Subject */}
                  <div>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('subject')}`}><FileText size={17} /></div>
                      <input name="subject" type="text" value={form.subject}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Your subject"
                        className={inputClass('subject')} />
                    </div>
                    <FieldMsg name="subject" />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="relative group">
                      <div className={`absolute top-4 left-3.5 pointer-events-none transition-colors ${iconColor('message')}`}><MessageSquare size={17} /></div>
                      <textarea name="message" rows={5} value={form.message}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Your comments..."
                        className="w-full pl-11 pr-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:bg-white transition-all placeholder:text-gray-400 text-[#0B1C40] font-medium resize-y text-[15px] focus:border-[#F23B4E] focus:ring-2 focus:ring-[#F23B4E]/15" />
                    </div>
                    <FieldMsg name="message" />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full bg-[#F23B4E] hover:bg-[#0B1C40] disabled:opacity-70 transition-all duration-300 text-white rounded-xl py-4 flex items-center justify-center gap-3 font-bold text-[16px] shadow-[0_8px_20px_rgba(242,59,78,0.25)] hover:-translate-y-0.5">
                    {submitting ? (
                      <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Sending...</>
                    ) : (
                      <><Send size={18} />Send Message</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Info ── */}
            <motion.div className="w-full lg:w-[45%] flex flex-col gap-5"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>

              <h3 className="text-[#0B1C40] font-[900] text-[22px] md:text-[26px]">Contact Information</h3>

              {contactInfo.map((info, i) => (
                <motion.div key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#F23B4E]/30 transition-colors group"
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }}>
                  <div className="w-12 h-12 rounded-xl bg-[#F23B4E]/10 group-hover:bg-[#F23B4E] flex items-center justify-center text-[#F23B4E] group-hover:text-white transition-all duration-300 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[#0B1C40] font-[900] text-[15px] mb-1">{info.label}:</p>
                    {info.lines.map((line, li) => (
                      info.href[li] ? (
                        <a key={li} href={info.href[li]} target={info.href[li].startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                          className="block text-[#4F5B73] text-[14px] md:text-[15px] hover:text-[#F23B4E] transition-colors font-medium leading-relaxed">
                          {line}
                        </a>
                      ) : (
                        <p key={li} className="text-[#4F5B73] text-[14px] md:text-[15px] font-medium leading-relaxed">{line}</p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── BRANCHES SECTION ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">

          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Our Locations</span>
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-[900] text-[#0B1C40]">Our Branches</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, i) => (
              <motion.div key={i}
                className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>

                {/* Map */}
                <div className="w-full h-[220px] sm:h-[260px] relative bg-gray-100">
                  <iframe
                    title={branch.name}
                    src={branch.mapSrc}
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  {/* Open in Google Maps overlay button */}
                  <a href={branch.mapLink} target="_blank" rel="noreferrer"
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white text-[#0B1C40] text-[12px] font-bold px-3 py-2 rounded-lg shadow-md hover:bg-[#F23B4E] hover:text-white transition-all duration-200">
                    <ExternalLink size={13} />
                    Google Map
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col gap-4 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F23B4E] flex items-center justify-center shrink-0">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <h3 className="text-[#0B1C40] font-[900] text-[18px] md:text-[20px]">{branch.name}</h3>
                  </div>

                  <div className="flex items-start gap-3 text-[#4F5B73] text-[14px] leading-relaxed">
                    <MapPin size={16} className="text-[#F23B4E] shrink-0 mt-0.5" />
                    <div>
                      <p>{branch.address}</p>
                      <p className="font-bold text-[#0B1C40] mt-1">PIN CODE — {branch.pin}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#F23B4E] shrink-0 mt-0.5" />
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {branch.phones.map((ph, pi) => (
                        <a key={pi} href={`tel:${ph.replace(/\s/g, '')}`}
                          className="text-[#4F5B73] hover:text-[#F23B4E] font-semibold text-[14px] transition-colors">
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>

                  <a href={branch.mapLink} target="_blank" rel="noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#0B1C40] hover:bg-[#F23B4E] text-white py-3 px-5 rounded-xl font-bold text-[14px] transition-all duration-300 hover:-translate-y-0.5">
                    <ExternalLink size={15} />
                    Open in Google Maps
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default ContactPage;
