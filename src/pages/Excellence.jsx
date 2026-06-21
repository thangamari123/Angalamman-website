import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Eye, Target, History, Briefcase, CheckCircle2, PhoneCall } from 'lucide-react';

const Excellence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gray-50/50 min-h-screen">
      {/* Page Banner */}
      <div className="relative pt-[120px] pb-[60px] md:pt-[150px] md:pb-[80px] flex items-center justify-center overflow-hidden bg-[#0B1C40]">
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
            <span className="text-[#F23B4E] font-bold tracking-widest text-[13px] md:text-[15px] uppercase">Our Strategy</span>
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]"></div>
          </div>
          <h1 className="text-3xl md:text-5xl font-[800] text-white leading-tight mb-4">
            Excellence
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-[13px] md:text-sm">
            <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-[1100px]">
        
        {/* Intro / Vision & Mission Header */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#FFF5F6] rounded-xl flex items-center justify-center shrink-0">
              <GraduationCap className="text-[#F23B4E] w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-[800] text-[#0B1C40] uppercase tracking-wide">
              VISION & MISSION
            </h2>
          </div>
          <h3 className="text-xl font-bold text-[#0B1C40] mb-4">Sri Angalamman Paramedical Institute Dharmapuri :</h3>
          <p className="text-[#4F5B73] text-[16px] md:text-[17px] leading-relaxed">
            This college has been started with a vision to enable students to gain hands-on exposure to the latest skills in the Healthcare Industry. The healthcare Industry is a very dynamic industry with changes happening at a very rapid pace. We endeavour to train our students on the latest skills. The promoters of this college have over 4 years of experience in the Education / Teaching field. They have been associated with some of the leading Colleges for various courses viz.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Eye className="text-[#F23B4E] w-7 h-7" />
              </div>
              <h3 className="text-2xl font-[800] text-[#0B1C40]">Our Vision</h3>
            </div>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F23B4E] mt-2 shrink-0 shadow-[0_0_8px_rgba(242,59,78,0.6)]"></div>
                <p className="text-[#4F5B73] text-[16px] leading-relaxed">
                  Sri Angalamman Paramedical Institution aims at providing quality and affordable education in the field of Medical Sciences to all.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F23B4E] mt-2 shrink-0 shadow-[0_0_8px_rgba(242,59,78,0.6)]"></div>
                <p className="text-[#4F5B73] text-[16px] leading-relaxed">
                  We believe that every person deserves quality education irrespective of their financial and economic standards and we are working toward the same.
                </p>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Target className="text-[#F23B4E] w-7 h-7" />
              </div>
              <h3 className="text-2xl font-[800] text-[#0B1C40]">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              {[
                "To provide technical and health professional courses by established college and improved to serve all irrespective of caste, creed or religion.",
                "To sow the seeds of discipline and professionalism among the faculty and students.",
                "Infuse the wealth of pharmacy education and research deep into the inquisitive minds of students.",
                "Provide state of art infrastructure facilities and latest technological knowledge.",
                "Inculcate leadership qualities in the emerging quality pharmacy professional for improved pharmaceutical care of the society.",
                "Make the process of acquiring knowledge an enjoyable experience."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F23B4E] mt-2.5 shrink-0"></div>
                  <p className="text-[#4F5B73] text-[15px] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* History & Placement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 border-t-4 border-t-[#0B1C40] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-5">
              <History className="text-[#0B1C40] w-6 h-6" />
              <h3 className="text-xl font-[800] text-[#0B1C40] uppercase tracking-wide">Our History</h3>
            </div>
            <p className="text-[#4F5B73] text-[16px] leading-relaxed">
              To contribute to the society through excellence in professional, scientific and technical education to serve as a valuable resource for society.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 border-t-4 border-t-[#F23B4E] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-5">
              <Briefcase className="text-[#F23B4E] w-6 h-6" />
              <h3 className="text-xl font-[800] text-[#0B1C40] uppercase tracking-wide">Placement</h3>
            </div>
            <p className="text-[#4F5B73] text-[16px] leading-relaxed">
              Sri Angalamman College of Paramedical Sciences is generally good, with almost <span className="font-bold text-[#0B1C40] bg-gray-100 px-2 py-0.5 rounded">60-100%</span> of students getting placed every year.
            </p>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 mb-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-[800] text-[#0B1C40] uppercase tracking-wide inline-block relative">
              Our Facilities Available
              <div className="h-1 w-1/2 bg-[#F23B4E] absolute -bottom-3 left-1/4 rounded-full"></div>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 mt-10">
            {[
              "Excellent teaching block .",
              "Smart Classrooms with projector .",
              "Well-equipped laboratory .",
              "Experienced faculty members .",
              "Computer lab with internet facility .",
              "Library facility .",
              "Separate Hostel facility for both boys and girls .",
              "Canteen facility within the campus .",
              "Playground facility .",
              "Transport facility ."
            ].map((facility, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50/80 p-4 rounded-xl border border-gray-100 hover:border-[#F23B4E]/30 hover:bg-[#FFF5F6] hover:shadow-sm transition-all duration-300 group">
                <CheckCircle2 className="text-[#F23B4E] w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[#0B1C40] font-medium text-[14.5px] leading-tight">{facility.replace(' .', '')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Banner */}
        <div className="bg-[#0B1C40] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
              <PhoneCall className="text-[#F23B4E] w-6 h-6 shrink-0" />
              <h3 className="text-2xl font-bold">Contact information</h3>
            </div>
            <p className="text-gray-300 text-[15px] md:text-[16px] max-w-2xl leading-relaxed">
              If you have any questions or concerns regarding these Terms of Use or our services, please contact us.
            </p>
          </div>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} 
            className="relative z-10 bg-[#F23B4E] hover:bg-[#D92B3E] text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-[#F23B4E]/40 shrink-0 uppercase tracking-wide text-sm"
          >
            Contact Now !
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Excellence;
