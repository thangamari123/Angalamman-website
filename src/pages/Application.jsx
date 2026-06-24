import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileEdit, User, Mail, Phone, Briefcase, ChevronDown,
  Calendar, Globe, MapPin, GraduationCap, Building,
  Star, Edit3, Send, ShieldCheck, ChevronRight,
  CheckCircle2, AlertCircle, X
} from 'lucide-react';

/* ─── Validation Rules ─── */
const validators = {
  studentName: (v) => {
    if (!v.trim()) return 'Student name is required.';
    if (!/^[a-zA-Z\s.'-]+$/.test(v)) return 'Name must contain letters only.';
    if (v.trim().length < 3) return 'Name must be at least 3 characters.';
    return '';
  },
  fatherName: (v) => {
    if (!v.trim()) return "Father's name is required.";
    if (!/^[a-zA-Z\s.'-]+$/.test(v)) return 'Name must contain letters only.';
    if (v.trim().length < 3) return 'Name must be at least 3 characters.';
    return '';
  },
  email: (v) => {
    if (!v.trim()) return 'Email address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address.';
    return '';
  },
  phone: (v) => {
    if (!v.trim()) return 'Phone number is required.';
    if (!/^[0-9]+$/.test(v)) return 'Phone number must contain digits only.';
    if (v.length !== 10) return 'Enter a valid 10-digit mobile number.';
    if (!/^[6-9]/.test(v)) return 'Mobile number must start with 6, 7, 8 or 9.';
    return '';
  },
  occupation: () => '',
  gender: (v) => (!v ? 'Please select your gender.' : ''),
  dob: (v) => {
    if (!v) return 'Date of birth is required.';
    const d = new Date(v);
    const now = new Date();
    const age = (now - d) / (365.25 * 24 * 3600 * 1000);
    if (age < 15) return 'Minimum age is 15 years.';
    if (age > 60) return 'Please enter a valid date of birth.';
    return '';
  },
  nationality: (v) => (!v ? 'Please select your nationality.' : ''),
  address: (v) => {
    if (!v.trim()) return 'Address is required.';
    if (v.trim().length < 10) return 'Please enter a complete address.';
    return '';
  },
  qualification: (v) => (!v ? 'Please select your qualification.' : ''),
  college: (v) => {
    if (!v.trim()) return 'School/College name is required.';
    if (v.trim().length < 3) return 'Please enter a valid name.';
    return '';
  },
  mark: (v) => {
    if (!v.trim()) return 'Mark obtained is required.';
    if (!/^(\d{1,3}(\.\d{1,2})?)\s*(%|out of \d+)?$/.test(v.trim())) return 'Enter a valid mark (e.g. 85 or 85%).';
    return '';
  },
  additional: () => '',
};

const initial = {
  studentName: '', fatherName: '', email: '', phone: '',
  occupation: '', gender: '', dob: '', nationality: '',
  address: '', qualification: '', college: '', mark: '', additional: ''
};

const Application = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* Live-validate a single field */
  const validate = (name, value) => validators[name]?.(value) ?? '';

  const handleChange = (e) => {
    const { name, value } = e.target;

    /* ── Field-level input guards ── */
    if ((name === 'studentName' || name === 'fatherName' || name === 'college') ) {
      // Allow only letters, spaces, dots, hyphens, apostrophes
      if (value && !/^[a-zA-Z\s.'-]*$/.test(value)) return;
    }
    if (name === 'phone') {
      // Allow only digits, max 10
      if (value && !/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Touch all fields
    const allTouched = Object.keys(initial).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);

    // Validate all
    const allErrors = Object.keys(initial).reduce((a, k) => {
      const err = validate(k, form[k]);
      if (err) a[k] = err;
      return a;
    }, {});
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) {
      // Scroll to first error
      const firstKey = Object.keys(allErrors)[0];
      document.getElementById(firstKey)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initial);
      setTouched({});
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  /* ── Reusable components ── */
  const inputClass = (name) =>
    `w-full pl-11 pr-4 py-3.5 bg-[#F8F9FA] border rounded-xl focus:outline-none focus:bg-white transition-all placeholder:text-gray-400 text-[#0B1C40] font-medium text-[15px] ${
      touched[name] && errors[name]
        ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100'
        : touched[name] && !errors[name]
        ? 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-100'
        : 'border-gray-200 focus:border-[#F23B4E] focus:ring-2 focus:ring-[#F23B4E]/15'
    }`;

  const selectClass = (name) =>
    `w-full pl-11 pr-10 py-3.5 bg-[#F8F9FA] border rounded-xl focus:outline-none focus:bg-white transition-all font-medium appearance-none cursor-pointer text-[15px] ${
      touched[name] && errors[name]
        ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 text-red-400'
        : touched[name] && !errors[name]
        ? 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-100 text-[#0B1C40]'
        : 'border-gray-200 focus:border-[#F23B4E] focus:ring-2 focus:ring-[#F23B4E]/15 text-gray-500'
    }`;

  const iconColor = (name) =>
    touched[name] && errors[name] ? 'text-red-400'
    : touched[name] && !errors[name] ? 'text-green-500'
    : 'text-gray-400 group-focus-within:text-[#F23B4E]';

  const FieldWrap = ({ name, label, required, children }) => (
    <div id={name}>
      <label className="block text-[#0B1C40] font-[800] text-[13px] mb-2 tracking-wide uppercase">
        {label} {required && <span className="text-[#F23B4E]">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {touched[name] && errors[name] && (
          <motion.p
            className="mt-1.5 flex items-center gap-1.5 text-red-500 text-[12px] font-semibold"
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            <AlertCircle size={13} className="shrink-0" />
            {errors[name]}
          </motion.p>
        )}
        {touched[name] && !errors[name] && form[name] && (
          <motion.p
            className="mt-1.5 flex items-center gap-1.5 text-green-500 text-[12px] font-semibold"
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            <CheckCircle2 size={13} className="shrink-0" />
            Looks good!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <main className="bg-white min-h-screen">

      {/* ── PAGE BANNER ── */}
      <div className="relative h-[160px] sm:h-[320px] md:h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
          alt="Admissions"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1C40]/85 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[40px] border-white/5 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#F23B4E]/10 pointer-events-none" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] md:text-sm uppercase">Admissions Open</span>
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-[42px] font-[900] text-white mb-4 drop-shadow-lg leading-tight">
              Admissions 2026 to 2027
              <span className="text-[#F23B4E]"> Online Application</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium flex-wrap justify-center">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">Admissions 2026 to 2027 - Online Application</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <section className="py-14 md:py-20 bg-[#F3F4F6]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[980px]">

          <motion.div className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Apply Now</span>
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[900] text-[#0B1C40]">
              Admissions 2026 &amp; 2027 — Online Application
            </h2>
            <p className="text-[#4F5B73] text-[15px] md:text-[16px] mt-3 max-w-xl mx-auto leading-relaxed">
              Fill in all the details carefully. Our admissions team will review your application and contact you shortly.
            </p>
          </motion.div>

          {/* Success Banner */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                className="mb-8 flex items-start gap-4 bg-green-50 border border-green-200 rounded-2xl px-6 py-5 text-green-800 relative"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                <CheckCircle2 size={28} className="text-green-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[17px]">Application Submitted Successfully! 🎉</div>
                  <div className="text-[14px] opacity-75 mt-1">Thank you for applying to Sri Angalamman Paramedical Institute. Our admissions team will contact you within 2 business days.</div>
                </div>
                <button className="absolute top-4 right-4 text-green-400 hover:text-green-700" onClick={() => setSubmitted(false)}>
                  <X size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-[0_12px_50px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>

            {/* Card Header */}
            <div className="bg-[#0B1C40] px-6 sm:px-10 py-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F23B4E] flex items-center justify-center shrink-0">
                <FileEdit size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-[900] text-[17px] sm:text-[20px]">Student Application Form</h3>
                <p className="text-white/60 text-[12px] sm:text-[13px]">All fields marked with <span className="text-[#F23B4E] font-bold">*</span> are required</p>
              </div>
            </div>

            <form className="p-5 sm:p-8 md:p-10" onSubmit={handleSubmit} noValidate>

              {/* ── Section: Personal Info ── */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#F23B4E] flex items-center justify-center">
                    <User size={14} className="text-white" />
                  </div>
                  <h4 className="text-[#0B1C40] font-[900] text-[15px] uppercase tracking-wide">Personal Information</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">

                  <FieldWrap name="studentName" label="Student Name" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('studentName')}`}><User size={17} /></div>
                      <input id="studentName" name="studentName" type="text" value={form.studentName}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Name of The Candidate"
                        className={inputClass('studentName')} />
                    </div>
                  </FieldWrap>

                  <FieldWrap name="fatherName" label="Father Name" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('fatherName')}`}><User size={17} /></div>
                      <input id="fatherName" name="fatherName" type="text" value={form.fatherName}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Name of The Father"
                        className={inputClass('fatherName')} />
                    </div>
                  </FieldWrap>

                  <FieldWrap name="email" label="Email Address" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('email')}`}><Mail size={17} /></div>
                      <input id="email" name="email" type="email" value={form.email}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Email address here"
                        className={inputClass('email')} />
                    </div>
                  </FieldWrap>

                  <FieldWrap name="phone" label="Phone Number" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('phone')}`}><Phone size={17} /></div>
                      <input id="phone" name="phone" type="tel" inputMode="numeric" value={form.phone}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={inputClass('phone')} />
                      {form.phone.length > 0 && (
                        <span className={`absolute inset-y-0 right-3 flex items-center text-[11px] font-bold ${form.phone.length === 10 ? 'text-green-500' : 'text-gray-400'}`}>
                          {form.phone.length}/10
                        </span>
                      )}
                    </div>
                  </FieldWrap>

                  <FieldWrap name="occupation" label="Occupation">
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('occupation')}`}><Briefcase size={17} /></div>
                      <input id="occupation" name="occupation" type="text" value={form.occupation}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Occupation here"
                        className={inputClass('occupation')} />
                    </div>
                  </FieldWrap>

                  <FieldWrap name="gender" label="Gender" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('gender')}`}><User size={17} /></div>
                      <select id="gender" name="gender" value={form.gender}
                        onChange={handleChange} onBlur={handleBlur}
                        className={selectClass('gender')}>
                        <option value="" disabled>Gender here</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none"><ChevronDown size={17} className="text-gray-400" /></div>
                    </div>
                  </FieldWrap>

                  <FieldWrap name="dob" label="Date of Birth" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('dob')}`}><Calendar size={17} /></div>
                      <input id="dob" name="dob" type="date" value={form.dob}
                        onChange={handleChange} onBlur={handleBlur}
                        max={new Date().toISOString().split('T')[0]}
                        className={inputClass('dob')} />
                    </div>
                  </FieldWrap>

                  <FieldWrap name="nationality" label="Nationality" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('nationality')}`}><Globe size={17} /></div>
                      <select id="nationality" name="nationality" value={form.nationality}
                        onChange={handleChange} onBlur={handleBlur}
                        className={selectClass('nationality')}>
                        <option value="" disabled>Nationality here</option>
                        <option value="indian">Indian</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none"><ChevronDown size={17} className="text-gray-400" /></div>
                    </div>
                  </FieldWrap>

                </div>
              </div>

              {/* ── Section: Address ── */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#F23B4E] flex items-center justify-center">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <h4 className="text-[#0B1C40] font-[900] text-[15px] uppercase tracking-wide">Address</h4>
                </div>
                <FieldWrap name="address" label="Address for Communication" required>
                  <div className="relative group">
                    <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('address')}`}><MapPin size={17} /></div>
                    <input id="address" name="address" type="text" value={form.address}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="Full communication address"
                      className={inputClass('address')} />
                  </div>
                </FieldWrap>
              </div>

              {/* ── Section: Academic Info ── */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#F23B4E] flex items-center justify-center">
                    <GraduationCap size={14} className="text-white" />
                  </div>
                  <h4 className="text-[#0B1C40] font-[900] text-[15px] uppercase tracking-wide">Academic Information</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">

                  <FieldWrap name="qualification" label="Educational Qualification" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('qualification')}`}><GraduationCap size={17} /></div>
                      <select id="qualification" name="qualification" value={form.qualification}
                        onChange={handleChange} onBlur={handleBlur}
                        className={selectClass('qualification')}>
                        <option value="" disabled>Qualification here</option>
                        <option value="10th">10th Grade / SSLC</option>
                        <option value="12th">12th Grade / HSC</option>
                        <option value="ug">Undergraduate</option>
                        <option value="pg">Postgraduate</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none"><ChevronDown size={17} className="text-gray-400" /></div>
                    </div>
                  </FieldWrap>

                  <FieldWrap name="college" label="School / College Studied" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('college')}`}><Building size={17} /></div>
                      <input id="college" name="college" type="text" value={form.college}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Studied here"
                        className={inputClass('college')} />
                    </div>
                  </FieldWrap>

                  <FieldWrap name="mark" label="Mark Obtained" required>
                    <div className="relative group">
                      <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${iconColor('mark')}`}><Star size={17} /></div>
                      <input id="mark" name="mark" type="text" value={form.mark}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="e.g. 85 or 85%"
                        className={inputClass('mark')} />
                    </div>
                  </FieldWrap>

                </div>
              </div>

              {/* ── Section: Additional Info ── */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#F23B4E] flex items-center justify-center">
                    <Edit3 size={14} className="text-white" />
                  </div>
                  <h4 className="text-[#0B1C40] font-[900] text-[15px] uppercase tracking-wide">Additional Information</h4>
                </div>
                <FieldWrap name="additional" label="Questions / Additional Info">
                  <div className="relative group">
                    <div className={`absolute top-4 left-3.5 pointer-events-none transition-colors ${iconColor('additional')}`}><Edit3 size={17} /></div>
                    <textarea id="additional" name="additional" rows={4} value={form.additional}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="Questions? Anything you'd like to know or ask..."
                      className="w-full pl-11 pr-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:border-[#F23B4E] focus:ring-2 focus:ring-[#F23B4E]/15 focus:bg-white transition-all placeholder:text-gray-400 text-[#0B1C40] font-medium resize-y text-[15px]" />
                  </div>
                </FieldWrap>
              </div>

              {/* Submit */}
              <button type="submit" disabled={submitting}
                className="w-full bg-[#F23B4E] hover:bg-[#0B1C40] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 font-bold text-[17px] shadow-[0_8px_24px_rgba(242,59,78,0.3)] hover:shadow-[0_8px_24px_rgba(11,28,64,0.3)] hover:-translate-y-0.5">
                {submitting ? (
                  <><svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Submitting...</>
                ) : (
                  <><Send size={20} /> Submit Application</>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-5 text-[#4F5B73] text-[13px]">
                <ShieldCheck size={16} className="text-gray-400 shrink-0" />
                <p>Your information is safe with us. We will never share your data with anyone.</p>
              </div>

            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Application;
