import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, GraduationCap, Briefcase, CheckCircle2, X, BookOpen } from 'lucide-react';

const CoursesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selected, setSelected] = useState(null);

  const courses = [
    {
      id: '01',
      title: 'DMLT',
      fullTitle: 'Diploma in Medical Laboratory Technology',
      image: '/images/dmlt.webp',
      duration: '2 Years',
      eligibility: '10th / 12th Pass (Science)',
      color: '#F23B4E',
      tagline: 'Master the Science of Diagnostics',
      description:
        'DMLT is a paramedical diploma program that trains students to perform laboratory tests to detect diseases. Students learn to handle medical equipment, analyze blood, urine, and other specimens, and assist pathologists in diagnosing patient conditions.',
      subjects: ['Human Anatomy & Physiology', 'Microbiology', 'Biochemistry', 'Pathology', 'Blood Banking & Transfusion', 'Clinical Pathology'],
      careers: ['Lab Technician', 'Pathology Assistant', 'Blood Bank Technician', 'Hospital Lab Manager', 'Research Assistant'],
      highlights: ['100% Practical Training', 'Hospital Attachment', 'Govt Certificate', 'Job Assistance'],
    },
    {
      id: '02',
      title: 'OTT',
      fullTitle: 'Operating Theatre Technicians',
      image: '/images/ott.webp',
      duration: '2 Years',
      eligibility: '10th / 12th Pass (Science)',
      color: '#0B1C40',
      tagline: 'The Backbone of Every Surgery',
      description:
        'OT Technicians are vital to surgical procedures. They prepare the operating theatre, sterilize equipment, assist surgeons during operations, and ensure patient safety throughout the surgical process.',
      subjects: ['Anatomy & Physiology', 'Surgical Instruments', 'Sterilization Techniques', 'Anesthesia Assistance', 'OT Protocols', 'Patient Care'],
      careers: ['OT Technician', 'Surgical Assistant', 'Anesthesia Technician', 'CSSD Technician', 'Hospital Surgical Staff'],
      highlights: ['Hands-on OT Exposure', 'Surgical Simulation', 'Certified Training', 'Hospital Internship'],
    },
    {
      id: '03',
      title: 'NURSING',
      fullTitle: 'Diploma in Nursing (DHA)',
      image: '/images/dip-nursing.webp',
      duration: '1 Year',
      eligibility: '10th Pass / Any Background',
      color: '#F23B4E',
      tagline: 'Serve with Compassion & Skill',
      description:
        'This program trains students in core nursing fundamentals including patient care, medication administration, wound dressing, and basic emergency response. Ideal for those seeking to enter the healthcare field quickly.',
      subjects: ['Nursing Fundamentals', 'Community Health', 'Anatomy', 'First Aid & Emergency', 'Drug Administration', 'Health Promotion'],
      careers: ['Nursing Assistant', 'Home Care Nurse', 'Community Health Worker', 'Healthcare Aide', 'Clinic Support Staff'],
      highlights: ['Short Duration', 'Highly Employable', 'DHA Approved', 'Practical Ward Training'],
    },
    {
      id: '04',
      title: 'DIALYSIS',
      fullTitle: 'Diploma in Dialysis Techniques',
      image: '/images/dip-dialysis.webp',
      duration: '1 Year',
      eligibility: '10th / 12th Pass',
      color: '#0B1C40',
      tagline: 'Life-Saving Skills in Kidney Care',
      description:
        'Dialysis Technicians operate life-saving kidney dialysis machines for patients with chronic kidney disease. This program trains students in machine operation, patient monitoring, and aseptic procedures required in nephrology units.',
      subjects: ['Renal Anatomy & Physiology', 'Hemodialysis Procedure', 'Machine Operation', 'Water Treatment', 'Infection Control', 'Patient Monitoring'],
      careers: ['Dialysis Technician', 'Nephrology Ward Staff', 'Dialysis Centre Operator', 'Home Dialysis Trainer', 'Hospital Renal Unit Staff'],
      highlights: ['High Demand Skill', 'Modern Machine Training', 'Nephrology Exposure', 'Placement Support'],
    },
    {
      id: '05',
      title: 'FIRST AID',
      fullTitle: 'First Aid Training',
      image: '/images/first-aid.webp',
      duration: '3 Months',
      eligibility: 'No Age Limit / Any Background',
      color: '#F23B4E',
      tagline: 'Be Ready When It Matters Most',
      description:
        'First Aid Training equips individuals with the skills to respond to emergencies and provide immediate care before professional medical help arrives. Essential for all healthcare workers, school staff, and safety officers.',
      subjects: ['Basic Life Support (BLS)', 'CPR Techniques', 'Bleeding & Wound Care', 'Fracture Management', 'Choking & Poisoning', 'Disaster Preparedness'],
      careers: ['First Aider', 'Safety Officer', 'School Health Worker', 'Event Medical Staff', 'Factory Safety Personnel'],
      highlights: ['Short Course', 'Globally Recognized', 'Practical Simulation', 'Certificate Provided'],
    },
    {
      id: '06',
      title: 'RADIOLOGY',
      fullTitle: 'Diploma in Radiology Technician',
      image: '/images/dip-radiology.webp',
      duration: '2 Years',
      eligibility: '12th Pass (Science / Biology)',
      color: '#0B1C40',
      tagline: 'See Inside the Human Body',
      description:
        'Radiology Technicians operate X-ray, CT scan, MRI, and ultrasound equipment to capture diagnostic images. They play a crucial role in helping doctors identify disease, injury, and abnormalities within the body.',
      subjects: ['Radiation Physics', 'X-ray Equipment', 'CT & MRI Basics', 'Darkroom Techniques', 'Patient Positioning', 'Radiation Safety'],
      careers: ['X-ray Technician', 'CT Scan Operator', 'MRI Technician', 'Imaging Centre Staff', 'Radiology Dept. Assistant'],
      highlights: ['Equipment Training', 'Imaging Exposure', 'Radiation Safety Cert', 'Hospital Posting'],
    },
  ];

  const openCourse = (course) => { setSelected(course); document.body.style.overflow = 'hidden'; };
  const closeCourse = () => { setSelected(null); document.body.style.overflow = 'unset'; };

  return (
    <main className="bg-white min-h-screen">
      {/* ── BANNER ── */}
      <div className="relative h-[160px] sm:h-[320px] md:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
          alt="Medical Education Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1C40]/85" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
              <span className="text-[#F23B4E] font-bold tracking-widest text-[12px] md:text-[14px] uppercase">Academics</span>
              <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-3 uppercase tracking-wide">Our Courses</h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-[13px] font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Courses</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="py-8 md:py-14 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-[900] text-[#0B1C40] mb-3 md:mb-5">Paramedical Courses We Offer</h2>
          <p className="text-[#4F5B73] text-[14px] md:text-[17px] leading-relaxed">
            Sri Angalamman Paramedical Institute offers government-recognized paramedical diploma programs designed to produce highly skilled, job-ready healthcare professionals.
            Tap any course below to explore its full details.
          </p>
        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="py-8 md:py-14 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 max-w-[1300px]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onClick={() => openCourse(course)}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white text-[10px] md:text-[12px] font-bold uppercase tracking-widest bg-[#F23B4E] px-2 py-0.5 md:px-3 md:py-1 rounded-full"
                    style={{ backgroundColor: course.color }}
                  >
                    {course.duration}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-3 md:p-5 flex flex-col gap-1 md:gap-2 flex-grow">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-white font-[900] text-[11px] md:text-[15px] shrink-0 shadow"
                      style={{ backgroundColor: course.color }}
                    >
                      {course.id}
                    </div>
                    <h3 className="text-[13px] md:text-[18px] font-[900] text-[#0B1C40] leading-tight group-hover:text-[#F23B4E] transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-[#4F5B73] text-[11px] md:text-[13.5px] leading-snug pl-9 md:pl-12">
                    {course.fullTitle}
                  </p>
                  <div className="mt-auto pt-2 md:pt-3 pl-9 md:pl-12">
                    <span className="inline-flex items-center gap-1 text-[11px] md:text-[13px] font-bold text-[#F23B4E] hover:underline">
                      View Details <ChevronRight size={13} strokeWidth={3} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY SUMMARY BANNER ── */}
      <section className="py-8 md:py-14 bg-[#0B1C40] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#F23B4E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-[900] text-white mb-2">Why Choose SAPI?</h2>
            <p className="text-white/60 text-[14px] md:text-[16px]">Everything you need to start a successful healthcare career</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: <BookOpen size={22} />, value: '6+', label: 'Courses Offered' },
              { icon: <GraduationCap size={22} />, value: '211+', label: 'Students Trained' },
              { icon: <Briefcase size={22} />, value: '100%', label: 'Job Assistance' },
              { icon: <Clock size={22} />, value: '4+', label: 'Years of Trust' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-[#F23B4E]/10 transition-colors">
                <div className="flex justify-center text-[#F23B4E] mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-4xl font-[900] text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-[11px] md:text-[13px] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-8 md:py-14 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-[900] text-[#0B1C40] mb-3">Ready to Start Your Healthcare Career?</h2>
          <p className="text-[#4F5B73] text-[14px] md:text-[16px] mb-6">Apply today and take the first step towards a rewarding future in healthcare.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/application"
              className="bg-[#F23B4E] text-white px-8 py-3.5 rounded-xl font-[800] text-[15px] hover:bg-[#0B1C40] transition-colors shadow-lg shadow-[#F23B4E]/30"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0B1C40] text-[#0B1C40] px-8 py-3.5 rounded-xl font-[800] text-[15px] hover:bg-[#0B1C40] hover:text-white transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── COURSE DETAIL MODAL ── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={closeCourse}
            />
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className="fixed inset-x-3 sm:inset-x-6 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-[800px] top-[5%] md:top-[6%] bottom-auto max-h-[90vh] overflow-y-auto bg-white rounded-2xl md:rounded-3xl z-[101] shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
            >
              {/* Modal Image Header */}
              <div className="relative h-[160px] sm:h-[200px] md:h-[260px]">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  onClick={closeCourse}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <span
                    className="text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block"
                    style={{ backgroundColor: selected.color }}
                  >
                    {selected.duration} • {selected.id}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-[900] text-white leading-tight">{selected.fullTitle}</h2>
                  <p className="text-white/80 text-[13px] md:text-[15px] mt-1 font-medium italic">{selected.tagline}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Description */}
                <p className="text-[#4F5B73] text-[13.5px] md:text-[16px] leading-relaxed mb-5 md:mb-7">{selected.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5 md:mb-7">
                  {selected.highlights.map((h, i) => (
                    <span key={i} className="text-[11px] md:text-[13px] font-bold bg-[#FFF0F2] text-[#F23B4E] px-3 py-1 rounded-full border border-[#F23B4E]/20">{h}</span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                  {/* Subjects */}
                  <div>
                    <h4 className="text-[#0B1C40] font-[800] text-[14px] md:text-[17px] mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-[#F23B4E]" /> Subjects Covered
                    </h4>
                    <ul className="space-y-2">
                      {selected.subjects.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#4F5B73] text-[12.5px] md:text-[14.5px]">
                          <CheckCircle2 size={14} className="text-[#F23B4E] shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Careers */}
                  <div>
                    <h4 className="text-[#0B1C40] font-[800] text-[14px] md:text-[17px] mb-3 flex items-center gap-2">
                      <Briefcase size={16} className="text-[#F23B4E]" /> Career Opportunities
                    </h4>
                    <ul className="space-y-2">
                      {selected.careers.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#4F5B73] text-[12.5px] md:text-[14.5px]">
                          <CheckCircle2 size={14} className="text-[#0B1C40] shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Eligibility & CTA */}
                <div className="mt-5 md:mt-7 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[#4F5B73] text-[13px] md:text-[15px]">
                    <GraduationCap size={18} className="text-[#F23B4E] shrink-0" />
                    <span><strong className="text-[#0B1C40]">Eligibility:</strong> {selected.eligibility}</span>
                  </div>
                  <Link
                    to="/application"
                    onClick={closeCourse}
                    className="w-full sm:w-auto bg-[#F23B4E] text-white px-6 py-2.5 rounded-xl font-[800] text-[14px] hover:bg-[#0B1C40] transition-colors text-center shadow-lg shadow-[#F23B4E]/20"
                  >
                    Apply for This Course
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default CoursesPage;
