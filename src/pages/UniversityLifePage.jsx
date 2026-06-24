import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Eye, Target, BookOpen, Trophy, Building2, Phone, CheckCircle2, Star, Briefcase } from 'lucide-react';

const UniversityLifePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visionPoints = [
    'Sri Angalamman Paramedical Institution aims at providing quality and affordable education in the field of Medical Sciences to all.',
    'We believe that every person deserves quality education irrespective of their financial and economic standards and we are working toward the same.',
  ];

  const missionPoints = [
    'To provide technical and health professional courses by established college and improved to serve all irrespective of caste, creed or religion.',
    'To sow the seeds of discipline and professionalism among the faculty and students.',
    'Infuse the wealth of pharmacy education and research deep into the inquisitive minds of students.',
    'Provide state of art infrastructure facilities and latest technological knowledge.',
    'Inculcate leadership qualities in the emerging quality pharmacy professional for improved pharmaceutical care of the society.',
    'Make the process of acquiring knowledge an enjoyable experience.',
  ];

  const facilities = [
    'Excellent teaching block',
    'Smart Classrooms with projector',
    'Well-equipped laboratory',
    'Experienced faculty members',
    'Computer lab with internet facility',
    'Library facility',
    'Separate Hostel facility for both boys and girls',
    'Canteen facility within the campus',
    'Playground facility',
    'Transport facility',
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ── PAGE BANNER ── */}
      <div className="relative h-[160px] sm:h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1600"
          alt="University Life"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1C40]/82 pointer-events-none" />

        {/* Decorative circles */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-[30px] border-white/5 pointer-events-none"></div>
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full border-[30px] border-[#F23B4E]/10 pointer-events-none"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]"></div>
              <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] md:text-sm uppercase">Our Campus</span>
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg">University Life</h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">University Life</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── VISION & MISSION INTRO ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">

          <motion.div
            className="text-center mb-14"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]"></div>
              <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Vision &amp; Mission</span>
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[900] text-[#0B1C40] leading-tight mb-6">
              Sri Angalamman Paramedical Institute Dharmapuri
            </h2>
            <p className="text-[#4F5B73] text-[15px] md:text-[17px] leading-relaxed max-w-3xl mx-auto">
              This college has been started with a vision to enable students to gain hands-on exposure to the latest skills in the Healthcare Industry. The healthcare Industry is a very dynamic industry with changes happening at a very rapid pace. We endeavour to train our students on the latest skills. The promoters of this college have over 4 years of experience in the Education / Teaching field. They have been associated with some of the leading Colleges for various courses viz.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision Card */}
            <motion.div
              className="bg-[#0B1C40] rounded-3xl p-8 md:p-10 relative overflow-hidden"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#F23B4E]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#F23B4E] flex items-center justify-center text-white mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-white font-[900] text-2xl mb-5">Our Vision :</h3>
              <ul className="space-y-4">
                {visionPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-[14px] md:text-[15px] leading-relaxed">
                    <Star size={14} className="text-[#F23B4E] shrink-0 mt-1" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-[#F8F9FA] rounded-3xl p-8 md:p-10 relative overflow-hidden border border-gray-100"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#F23B4E]/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#0B1C40] flex items-center justify-center text-white mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-[#0B1C40] font-[900] text-2xl mb-5">Our Mission :</h3>
              <ul className="space-y-3">
                {missionPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4F5B73] text-[14px] md:text-[15px] leading-relaxed">
                    <CheckCircle2 size={15} className="text-[#F23B4E] shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HISTORY & PLACEMENT ── */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* History */}
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-5"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F23B4E]/10 flex items-center justify-center text-[#F23B4E]">
                <BookOpen size={28} />
              </div>
              <h3 className="text-[#0B1C40] font-[900] text-2xl">Our History :</h3>
              <p className="text-[#4F5B73] text-[15px] md:text-[16px] leading-relaxed">
                To contribute to the society through excellence in professional, scientific and technical education to serve as a valuable resource for society.
              </p>
              <div className="mt-auto flex items-center gap-3 bg-[#F8F9FA] rounded-xl px-5 py-4">
                <div className="w-10 h-10 rounded-full bg-[#F23B4E] flex items-center justify-center text-white font-black text-sm shrink-0">04</div>
                <div>
                  <div className="text-[#0B1C40] font-bold text-[15px]">Years of Excellence</div>
                  <div className="text-[#4F5B73] text-[13px]">Established 2020</div>
                </div>
              </div>
            </motion.div>

            {/* Placement */}
            <motion.div
              className="bg-[#0B1C40] rounded-3xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col gap-5 relative overflow-hidden"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F23B4E]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#F23B4E]/20 flex items-center justify-center text-[#F23B4E]">
                <Briefcase size={28} />
              </div>
              <h3 className="text-white font-[900] text-2xl">Placement :</h3>
              <p className="text-white/75 text-[15px] md:text-[16px] leading-relaxed">
                Sri Angalamman College of Paramedical Sciences is generally good, with almost <span className="text-[#F23B4E] font-bold">60–100% of students getting placed every year.</span>
              </p>
              <div className="mt-auto grid grid-cols-2 gap-4">
                {[{ val: '100%', lbl: 'Placement Rate' }, { val: '211+', lbl: 'Graduates' }].map((s, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl py-5 px-4 text-center">
                    <div className="text-[#F23B4E] font-[900] text-2xl md:text-3xl">{s.val}</div>
                    <div className="text-white/60 text-[12px] font-semibold mt-1">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Image */}
            <motion.div
              className="w-full lg:w-[45%] rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] shrink-0"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=900"
                alt="Facilities"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Facilities List */}
            <motion.div
              className="w-full lg:w-[55%]"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Campus Facilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-[#0B1C40] leading-tight mb-8">
                Our Facilities Available :
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilities.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 bg-[#F8F9FA] rounded-xl px-4 py-3.5 hover:bg-[#F23B4E]/5 hover:border-[#F23B4E]/20 border border-transparent transition-colors duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <Building2 size={16} className="text-[#F23B4E] shrink-0" />
                    <span className="text-[#4F5B73] text-[14px] font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CONTACT BANNER ── */}
      <section className="py-14 md:py-20 bg-[#0B1C40] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#F23B4E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px] relative z-10">
          <motion.div
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-[#F23B4E]/20 flex items-center justify-center mx-auto mb-5 text-[#F23B4E]">
              <Phone size={30} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-[900] text-white leading-tight mb-4">
              Contact Information
            </h2>
            <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-8">
              If you have any questions or concerns regarding these Terms of Use or our services, please contact us at —
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#F23B4E] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white hover:text-[#F23B4E] transition-all duration-300 shadow-[0_8px_24px_rgba(242,59,78,0.4)] hover:-translate-y-1"
              >
                <Phone size={20} />
                Contact Now!
              </a>
              <Link
                to="/application"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white hover:text-[#0B1C40] transition-all duration-300 hover:-translate-y-1"
              >
                Application Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default UniversityLifePage;
