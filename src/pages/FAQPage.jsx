import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    {
      q: 'What qualities make a good paramedic?',
      a: `A good paramedic combines technical skills with compassion and quick thinking. Key qualities include:\n• Strong clinical knowledge and decision-making skills under pressure.\n• Excellent communication to calm patients and coordinate with medical teams.\n• Physical fitness and emotional resilience for demanding situations.\n• A genuine desire to serve and help people in critical moments.\n• Attention to detail and commitment to ongoing learning.`,
    },
    {
      q: 'What should I expect in a medical laboratory?',
      a: `A medical laboratory is a scientific facility where various tests are performed on patient samples. You can expect:\n• Hands-on training in analyzing blood, urine, tissue, and other specimens.\n• Use of modern equipment such as microscopes, centrifuges, and analyzers.\n• Learning to follow strict safety and hygiene protocols.\n• Exposure to departments like Pathology, Microbiology, Biochemistry, and Hematology.\n• Guidance from experienced faculty in a structured learning environment.`,
    },
    {
      q: 'How long is training for home dialysis?',
      a: `Training duration for dialysis techniques typically includes:\n• A 1–2 year diploma program covering theoretical and clinical components.\n• Practical hospital-based training sessions with real patients under supervision.\n• Modules covering Hemodialysis, Peritoneal Dialysis, and machine operation.\n• At Sri Angalamman, students receive hands-on training in our partner hospitals to ensure full competency before certification.`,
    },
    {
      q: 'What are the most important qualities for a pharmacy technician?',
      a: `A pharmacy technician needs a blend of scientific knowledge and precision. Important qualities include:\n• Strong understanding of medications, dosages, and pharmaceutical terminology.\n• High accuracy and attention to detail to prevent medication errors.\n• Good organizational skills for managing inventory and patient records.\n• Excellent communication to interact with patients and pharmacists.\n• Adherence to legal and ethical standards in pharmaceutical practice.`,
    },
    {
      q: 'What type of courses are there?',
      a: `Sri Angalamman Paramedical Institute offers a range of diploma-level healthcare courses, including:\n• Diploma in Medical Laboratory Technology (DMLT)\n• Operating Theatre Technician (OTT)\n• Diploma in Nursing (DIP Nursing)\n• Diploma in Dialysis Techniques (DIP Dialysis)\n• First Aid Training\n• DIP Radiology Technician\n\nAll courses include hospital-based practical training and are designed to prepare students for immediate employment in the healthcare sector.`,
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* ── PAGE BANNER ── */}
      <div className="relative h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1600"
          alt="Support & Guidance"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1C40]/85 pointer-events-none" />

        {/* Decorative rings */}
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[40px] border-white/5 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[40px] border-[#F23B4E]/10 pointer-events-none" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] md:text-sm uppercase">FAQs</span>
              <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg">
              Support &amp; Guidance
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">Support &amp; Guidance</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── FAQ SECTION ── */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[900px]">

          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F23B4E]/10 flex items-center justify-center mx-auto mb-5 text-[#F23B4E]">
              <HelpCircle size={32} />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
              <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">FAQ</span>
              <div className="h-[2px] w-10 md:w-16 bg-[#F23B4E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[900] text-[#0B1C40] leading-tight">
              Recently Asked Questions About Us
            </h2>
          </motion.div>

          {/* Accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] ${openIndex === i ? 'border-[#F23B4E]/40 shadow-[0_8px_30px_rgba(242,59,78,0.08)]' : 'border-gray-100 hover:border-gray-200'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {/* Question Row */}
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6 text-left group"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-colors duration-300 ${openIndex === i ? 'bg-[#F23B4E] text-white' : 'bg-[#F23B4E]/10 text-[#F23B4E]'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className={`font-bold text-[15px] md:text-[17px] leading-snug transition-colors duration-300 ${openIndex === i ? 'text-[#F23B4E]' : 'text-[#0B1C40] group-hover:text-[#F23B4E]'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#F23B4E] border-[#F23B4E] rotate-180' : 'border-gray-200 group-hover:border-[#F23B4E]'}`}>
                    <ChevronDown size={16} className={openIndex === i ? 'text-white' : 'text-[#4F5B73] group-hover:text-[#F23B4E]'} />
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-7 ml-[52px] md:ml-[56px] border-t border-gray-100 pt-4">
                        {faq.a.split('\n').map((line, li) => (
                          <p key={li} className={`text-[#4F5B73] text-[14px] md:text-[15px] leading-relaxed ${line.startsWith('•') ? 'flex gap-2 mt-2' : li === 0 ? '' : 'mt-3'}`}>
                            {line.startsWith('•') ? (
                              <>
                                <span className="text-[#F23B4E] font-bold shrink-0">•</span>
                                <span>{line.slice(1).trim()}</span>
                              </>
                            ) : line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1200px]">

          <motion.div
            className="bg-[#0B1C40] rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F23B4E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left Text */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                <MessageCircle size={22} className="text-[#F23B4E]" />
                <span className="text-[#F23B4E] font-bold tracking-widest text-sm uppercase">Still Have Questions?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-[900] text-white leading-tight mb-3">
                Contact With Us
              </h2>
              <p className="text-white/65 text-[15px] md:text-[16px] leading-relaxed max-w-md">
                Can't find the answer you're looking for? Reach out to our friendly team — we're happy to help!
              </p>
            </div>

            {/* Right Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
              <a
                href="tel:+919751920888"
                className="inline-flex items-center justify-center gap-3 bg-[#F23B4E] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-white hover:text-[#F23B4E] transition-all duration-300 shadow-[0_8px_24px_rgba(242,59,78,0.35)] hover:-translate-y-1 whitespace-nowrap"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="mailto:silam4910@gmail.com"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-white hover:text-[#0B1C40] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default FAQPage;
