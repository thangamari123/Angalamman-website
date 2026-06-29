import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, MonitorPlay, Users, Library, UsersRound, Computer } from 'lucide-react';

const FacilitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      id: 1,
      title: "Advanced Clinical Labs",
      description: "Our clinical laboratories are equipped with modern diagnostic tools and high-performance equipment, providing paramedical students with hands-on experience in real-world medical testing and analysis.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      icon: <FlaskConical size={24} />
    },
    {
      id: 2,
      title: "Smart Classrooms",
      description: "Sri Angalamman's smart classrooms blend traditional teaching with advanced digital technology, featuring interactive digital boards and projectors to create an engaging and dynamic learning environment.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      icon: <MonitorPlay size={24} />
    },
    {
      id: 3,
      title: "Anatomy & Physiology Lab",
      description: "The anatomy lab is safely maintained and furnished with detailed anatomical models, charts, and specimens, allowing students to study human body structures comprehensively.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
      icon: <Users size={24} />
    },
    {
      id: 4,
      title: "Library & Resource Center",
      description: "Our extensive library is a quiet space for academic growth, stocked with a vast collection of medical journals, reference books, and digital resources to support student research.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
      icon: <Library size={24} />
    },
    {
      id: 5,
      title: "Auditorium & Seminar Hall",
      description: "The seminar hall is designed to accommodate large audiences for medical conferences, workshops, and guest lectures. It is fully equipped with modern sound systems and projectors.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
      icon: <UsersRound size={24} />
    },
    {
      id: 6,
      title: "Computer & IT Lab",
      description: "The advanced IT lab provides high-speed internet and the latest healthcare software training, ensuring students are well-versed in modern digital medical record systems.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      icon: <Computer size={24} />
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* ── PAGE BANNER ── */}
      <div className="relative h-[160px] sm:h-[340px] md:h-[400px] overflow-hidden">
        <div className="w-full h-full bg-[#0B1C40]">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Facilities Banner" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C40]/90 to-transparent flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1300px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
                <span className="text-[#F23B4E] font-bold tracking-widest text-[11px] sm:text-[13px] md:text-[16px] uppercase">
                  Campus Facilities
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-[900] text-white leading-tight mb-3 md:mb-6">
                Our Infrastructure
              </h1>
              <p className="text-gray-300 text-[13px] sm:text-[15px] md:text-[18px] leading-relaxed max-w-xl font-medium">
                State-of-the-art facilities providing an ideal environment for academic excellence and practical paramedical training.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          
          {/* Header Title from Image */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-[900] text-[#0B1C40] uppercase tracking-wider mb-6" style={{fontFamily: "Georgia, serif"}}>
              Facilities
            </h2>
            <p className="text-[#4F5B73] text-[13.5px] md:text-[16px] leading-relaxed max-w-4xl mx-auto">
              At Sri Angalamman Paramedical Institute, we are committed to providing our students with top notch facilities that support both their academic and personal growth. Our state of the art infrastructure and diverse range of facilities ensure that students have everything they need to succeed in their studies, engage in clinical practices, and maintain a balanced lifestyle. We believe that a well rounded educational experience goes beyond the classroom, and our facilities play a key role in shaping the future of our students.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {facilities.map((facility, index) => (
              <motion.div 
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F9FB] flex flex-col group overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  
                  {/* Floating Icon Box at bottom-left corner */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 bg-[#11244C] flex items-center justify-center text-white shadow-lg border border-white/10 z-10">
                    {facility.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-1.5 h-6 bg-[#F4D03F] mr-3 md:mr-4 shrink-0"></div>
                    <h3 className="text-[17px] md:text-[20px] font-[800] text-[#11244C] leading-tight" style={{fontFamily: "Georgia, serif"}}>
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-[#4F5B73] text-[13.5px] md:text-[14.5px] leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default FacilitiesPage;
