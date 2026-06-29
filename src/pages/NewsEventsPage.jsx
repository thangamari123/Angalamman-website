import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ReactSlider.default || ReactSlider;

const bannerImages = [
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288179/1_bbxl1z.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288178/2_yajiwk.jpg',
  'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288177/3_ayymct.jpg',
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const newsData = [
  {
    id: 1,
    title: 'Paramedical Cultural Fest 2024:',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80',
    description: 'Our college celebrated its Annual Cultural Fest with vibrant performances, showcasing the diverse talents of our students. This vibrant event brings together students, faculty, and the community to enjoy a variety of...',
    date: '20 DECEMBER 2024'
  },
  {
    id: 2,
    title: 'Free Health & Blood Donation Camp',
    image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&q=80',
    description: 'Sri Angalamman Paramedical College, in collaboration with Government Hospital, successfully conducted a Blood Donation Camp to support the noble cause of saving lives. This initiative was spearheaded by ou...',
    date: '29 NOVEMBER 2024'
  },
  {
    id: 3,
    title: 'New Advanced Radiology Lab',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80',
    description: 'We are proud to announce the opening of our newly equipped Radiology and Imaging lab. This facility will provide our students with hands-on experience on the latest MRI and CT scan machines...',
    date: '05 NOVEMBER 2024'
  },
  {
    id: 4,
    title: 'Induction & Orientation Program 2K24',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    description: 'The Induction & Orientation Program is designed to inspire and motivate new students. Led by our esteemed faculty, the program provides freshers with valuable guidance on academ...',
    date: '05 NOVEMBER 2024'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Freshers' Day 2024: Welcome Batch...",
    description: "Sri Angalamman Paramedical College recently hosted a vibrant and memorable Freshers' Day event..."
  },
  {
    id: 2,
    title: "Campus Placement Drive 2024",
    description: "Top hospitals and healthcare institutions will be visiting our campus for the final year student recruitment..."
  },
  {
    id: 3,
    title: "World Health Day Seminar 2K24",
    description: "Join us for a seminar discussing the future of allied health sciences and paramedical care..."
  }
];

const NewsEventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* ── PAGE BANNER ── */}
      <div className="relative h-[160px] sm:h-[340px] md:h-[400px] overflow-hidden mb-12">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 drop-shadow-lg">News & Events</h1>
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
              <Link to="/" className="hover:text-[#F23B4E] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white font-semibold">News & Events</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Main Content - News Grid */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {newsData.map((news) => (
                <div key={news.id} className="flex flex-col group">
                  <div className="mb-4 overflow-hidden h-[240px] md:h-[220px]">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-[#0B1C40] font-serif font-bold text-[18px] md:text-[20px] mb-3 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow">
                    {news.description}
                  </p>
                  
                  {/* Bottom details */}
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between mt-auto">
                    <span className="text-gray-600 font-bold text-[11px] md:text-[12px] tracking-wider uppercase">
                      {news.date}
                    </span>
                    <Link to="#" className="flex items-center text-[#0B1C40] font-bold text-[11px] md:text-[12px] tracking-wider uppercase hover:text-[#F23B4E] transition-colors">
                      LEARN MORE <ChevronRight size={14} className="text-[#FBBF24] ml-1" strokeWidth={3} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="w-full lg:w-1/3 xl:w-1/4">
            <div className="bg-gray-50 border border-gray-100 shadow-sm sticky top-28">
              <div className="bg-[#152A55] p-5">
                <h3 className="text-white font-serif font-bold text-[18px]">
                  Upcoming Events
                </h3>
              </div>
              <div className="p-0">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className={`p-5 ${index !== upcomingEvents.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <h4 className="text-[#0B1C40] font-serif font-bold text-[15px] mb-2 leading-snug hover:text-[#F23B4E] cursor-pointer transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;
