import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileEdit, Building2, Users, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

/* ── Collage images (use your real cloudinary / local paths here) ── */
const collageImages = [
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287153/1_ju4mw3.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287148/6_wqd3c5.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288179/1_bbxl1z.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288178/2_yajiwk.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287825/1_khhrgk.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288483/3_epexuz.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288462/5_rbmvrd.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287142/20_bl5ev0.jpg',
];

/* ── Auto-sliding image carousel ── */
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent(c => (c + 1) % collageImages.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(11,28,64,0.18)] border-4 md:border-[6px] border-white">
      {collageImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`About slide ${i + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C40]/50 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {collageImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-5 h-2 bg-[#F23B4E]'
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Photo count badge */}
      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
        {current + 1} / {collageImages.length}
      </div>
    </div>
  );
};

const About = () => {
  const features = [
    {
      icon: <Building2 size={20} />,
      title: 'Opportunity To Study At The Nearest Hospital.',
      desc: 'Students can grab opportunity to get training near by hospital.'
    },
    {
      icon: <Users size={20} />,
      title: 'Experinced Trainers To Guide',
      desc: 'SAPI have well experinced trainers to guide you.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Training In Hospital With Study.',
      desc: 'We provide training at hospital while studying.'
    },
    {
      icon: <Award size={20} />,
      title: 'Installment Facility To Pay.',
      desc: 'We provide you to pay your fees by installment process.'
    }
  ];

  return (
    <section id="about" className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* ── LEFT: SLIDING IMAGE (desktop only) ── */}
          <div className="hidden lg:flex w-full lg:w-[48%] flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="w-full relative"
            >
              {/* Decorative bg blobs */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#FFF5F6] rounded-full z-0 pointer-events-none" />
              <div className="absolute -bottom-8 -right-4 w-36 h-36 bg-[#0B1C40]/5 rounded-full z-0 blur-2xl pointer-events-none" />
              <div className="absolute top-1/2 -right-6 w-16 h-16 bg-[#F23B4E]/10 rounded-full z-0 blur-xl pointer-events-none" />

              {/* Main slider */}
              <div className="relative z-10 w-full aspect-[4/5] max-w-[440px] mx-auto">
                <ImageSlider />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-5 -right-2 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-5 py-3.5 flex items-center gap-3 z-20 border border-gray-100"
              >
                <div className="w-10 h-10 bg-[#F23B4E] rounded-xl flex items-center justify-center shrink-0 shadow">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-[20px] font-[900] text-[#0B1C40] leading-none">211+</div>
                  <div className="text-[11px] text-[#6B7280] font-semibold mt-0.5">Students Enrolled</div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-3 -right-3 bg-[#0B1C40] text-white text-[12px] font-[800] px-4 py-2 rounded-full shadow-lg z-20"
              >
                Est. 2020 🏥
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT: CONTENT ── */}
          <div className="w-full lg:w-[52%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-[#F23B4E] rounded-full"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-[13px] uppercase bg-[#FFF5F6] px-3 py-1.5 rounded-full">About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-[#0B1C40] leading-[1.15] mb-5 tracking-tight">
                Sri Angalamman <br />
                <span className="text-[#F23B4E]">Paramedical Institute</span>
              </h2>

              <p className="text-[#4F5B73] text-[14px] md:text-[15px] leading-relaxed mb-7 border-l-4 border-[#0B1C40] pl-5 py-1 bg-gray-50/50 rounded-r-lg">
                The Institute incorporates some of the best features of management education to equip the students to face the challenges of the radically unpredictable business environment.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#FFF5F6] group-hover:bg-[#F23B4E] text-[#F23B4E] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-[#0B1C40] font-[800] text-[13px] md:text-[14px] mb-1 leading-snug">{feature.title}</h4>
                      <p className="text-[#6B7280] text-[12px] md:text-[13px] leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 border-t border-gray-100">
                <Link
                  to="/application"
                  className="inline-flex items-center gap-2.5 bg-[#0B1C40] text-white px-6 py-3 rounded-xl font-bold text-[14px] md:text-[15px] hover:bg-[#F23B4E] transition-all duration-300 shadow-[0_8px_20px_rgba(11,28,64,0.15)] hover:-translate-y-0.5 group"
                >
                  <FileEdit size={17} className="group-hover:rotate-12 transition-transform" />
                  Application Form
                </Link>
                <div className="flex items-center gap-2 text-[#0B1C40] text-[13px] font-bold bg-green-50 px-3 py-2 rounded-lg border border-green-100">
                  <CheckCircle2 size={15} className="text-green-500" />
                  Admissions Open
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
