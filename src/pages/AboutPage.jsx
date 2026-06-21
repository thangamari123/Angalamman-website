import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileEdit, CheckCircle2, GraduationCap, Users, Clock, ChevronRight, ArrowRight, Star } from 'lucide-react';
import ReactSlider from 'react-slick';

const Slider = ReactSlider.default || ReactSlider;

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
  };

  const bannerImages = [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600"
  ];

  const achievements = [
    'First and Top Ranked Paramedical institution in Dharmapuri.',
    '100% Vocational Education.',
    'Meritorious Central Government Certificate.',
    'Campus Recruitment.',
    'Prestigious empowerment (India / Abroad).',
    'Govt / Private jobs (Hospitals / Health Care / Pharma / Research / Education).',
    'Age Limit – Min 15 years / Max No age limit.',
    'Evolution of first generation paramedical staffs.',
    'Our students are working & serving in the most famous hospitals.',
    'Medical is a noble field, service to the poor people is "Service to God" is our Vision.',
  ];

  const applySteps = [
    {
      num: '01',
      title: 'Complete Application Form',
      desc: 'Furthermore, our university camp provide a vibrant & supportive community that embraces diversity.',
    },
    {
      num: '02',
      title: 'Application Review',
      desc: 'We believe that a diverse student body enhances learning experience & prepares students to thrive in a globalized world.',
    },
    {
      num: '03',
      title: 'Payment of Fees',
      desc: 'As student at Angalamman, you will have access to state-of-the-art facilities, cutting edge research laboratories, & an extensive network.',
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* ── PAGE BANNER ── */}
      <div className="relative h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          .about-banner-slider, .about-banner-slider .slick-list,
          .about-banner-slider .slick-track,
          .about-banner-slider .slick-slide > div { height: 100%; }
          .about-banner-slider .slick-dots { bottom: 16px; }
          .about-banner-slider .slick-dots li button:before { color: white; font-size: 8px; }
          .about-banner-slider .slick-dots li.slick-active button:before { color: white; opacity: 1; }
        `}} />
        <Slider {...sliderSettings} className="about-banner-slider h-full">
          {bannerImages.map((img, i) => (
            <div key={i} className="w-full h-full">
              <img src={img} alt={`Banner ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-[#0B1C40]/80 z-10 pointer-events-none" />

        {/* Banner Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">About Us</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── OVERVIEW SECTION ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left – Image + Graduates Badge */}
            <motion.div
              className="w-full lg:w-[45%] relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=900"
                  alt="Overview"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Graduates Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#F23B4E] text-white rounded-2xl px-6 py-5 shadow-[0_12px_40px_rgba(242,59,78,0.4)] text-center min-w-[130px]">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-[900] leading-none">211</span>
                  <span className="text-2xl font-bold mb-0.5">+</span>
                </div>
                <p className="text-[12px] font-bold mt-1 leading-tight opacity-90">Our graduates<br/>programs</p>
              </div>
            </motion.div>

            {/* Right – Text */}
            <motion.div
              className="w-full lg:w-[55%] pt-6 lg:pt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] md:text-sm uppercase">About Sri Angalamman</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[900] text-[#0B1C40] leading-tight mb-6">
                About Sri Angalamman :
              </h2>
              <p className="text-[#4F5B73] text-[15px] md:text-[17px] leading-relaxed mb-5">
                This college has been started with a vision to enable students to gain hands-on exposure to the latest skills in the Healthcare Industry. The healthcare Industry is a very dynamic industry with changes happening at a very rapid pace.
              </p>
              <p className="text-[#4F5B73] text-[15px] md:text-[17px] leading-relaxed mb-8">
                We endeavour to train our students on the latest skills. The promoters of this college have over 4 years of experience in the Education / Teaching field. They have been associated with some of the leading Colleges for various courses.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 text-[#F23B4E] font-bold text-[15px] border-b-2 border-[#F23B4E] pb-0.5 hover:text-[#0B1C40] hover:border-[#0B1C40] transition-colors"
                >
                  More Graduates Programs <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UNIVERSITY OVERVIEW STATS ── */}
      <section className="py-14 md:py-20 bg-[#0B1C40] relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute -top-12 -right-12 w-52 h-52 bg-[#F23B4E]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Overview Image */}
            <motion.div
              className="w-full lg:w-[40%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] aspect-[4/3]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="University Overview"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              className="w-full lg:w-[60%]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">University Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[900] text-white leading-tight mb-10">
                Our Numbers Speak For Themselves
              </h2>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '211+', label: 'Number Of Students', icon: <Users size={28}/> },
                  { value: '10+',  label: 'Qualified Staffs',   icon: <GraduationCap size={28}/> },
                  { value: '4+',   label: 'Years Of Experience',icon: <Clock size={28}/> },
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white/5 rounded-2xl py-8 px-4 border border-white/10 hover:bg-[#F23B4E]/10 transition-colors duration-300">
                    <div className="flex justify-center text-[#F23B4E] mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-[900] text-white leading-none mb-2">{stat.value}</div>
                    <div className="text-white/60 text-[12px] md:text-sm font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS SECTION ── */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Text */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Sri Angalamman Paramedical Institute</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-[900] text-[#0B1C40] leading-tight mb-6">
                Sri Angalamman Paramedical Institute Achievements :
              </h2>
              <p className="text-[#4F5B73] text-[15px] md:text-[16px] leading-relaxed mb-4">
                We established in 2020 as Sri Angalamman paramedical institute by giving training to the various diploma paramedical courses. We have 3 parent hospitals with 50 beds each.
              </p>
              <p className="text-[#4F5B73] text-[15px] md:text-[16px] leading-relaxed mb-8">
                We have good Hospital facilities like Causality, Anatomy and Physiology Lab, Microbiology lab, Pathology lab, Biochemistry lab, X-Ray lab, Exercise therapy lab, The Electrotherapy demonstration lab.
              </p>

              <Link
                to="/application"
                className="inline-flex items-center gap-3 bg-[#F23B4E] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-[#0B1C40] transition-all duration-300 shadow-[0_8px_24px_rgba(242,59,78,0.3)] hover:-translate-y-1"
              >
                <FileEdit size={20} strokeWidth={2.5} />
                Application Form
              </Link>
            </motion.div>

            {/* Right – Achievements List */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F23B4E] flex items-center justify-center text-white font-black text-sm">01</div>
                  <h3 className="text-[#0B1C40] font-[900] text-xl">ACHIEVEMENTS</h3>
                </div>
                <ul className="space-y-3">
                  {achievements.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-[#4F5B73] text-[14px] md:text-[15px] leading-relaxed"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Star size={14} className="text-[#F23B4E] shrink-0 mt-1" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">

          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]"></div>
              <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Get Started Now</span>
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[900] text-[#0B1C40] leading-tight">
              How To Apply At Sri Angalamman<br className="hidden sm:block" /> Paramedical Institute
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {applySteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                {/* Connector line between steps */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-dashed border-t-2 border-dashed border-[#F23B4E]/30 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#F23B4E]/10 border-2 border-[#F23B4E]/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#F23B4E] group-hover:border-[#F23B4E] transition-all duration-300">
                    <span className="text-[#F23B4E] group-hover:text-white font-[900] text-2xl transition-colors duration-300">{step.num}</span>
                  </div>
                  <h4 className="text-[#0B1C40] font-[900] text-[18px] md:text-[20px] mb-3">{step.title}</h4>
                  <p className="text-[#4F5B73] text-[14px] md:text-[15px] leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1400"
              alt="Apply Now"
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C40]/95 via-[#0B1C40]/70 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-[900] mb-4 max-w-lg leading-tight">
                Start Your Medical Career With Us Today!
              </h3>
              <p className="text-white/70 text-[14px] md:text-[16px] mb-6 max-w-md">
                Join hundreds of students who have built successful healthcare careers through our programs.
              </p>
              <div>
                <Link
                  to="/application"
                  className="inline-flex items-center gap-3 bg-[#F23B4E] text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white hover:text-[#F23B4E] transition-all duration-300 shadow-[0_8px_24px_rgba(242,59,78,0.4)] hover:-translate-y-1"
                >
                  <FileEdit size={20} />
                  Application Form
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default AboutPage;
