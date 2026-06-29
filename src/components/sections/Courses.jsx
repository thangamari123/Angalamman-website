import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactSlider from 'react-slick';

const Slider = ReactSlider.default || ReactSlider;

const Courses = () => {
  const courses = [
    {
      id: "01",
      title: "DMLT",
      subtitle: "BVoc Medical Laboratory Technology Course",
      image: "/images/dmlt.webp"
    },
    {
      id: "02",
      title: "OTT",
      subtitle: "BVoc In Nutrition And Dietetics Course",
      image: "/images/ott.webp"
    },
    {
      id: "03",
      title: "OPTOMETRY",
      subtitle: "BVoc Optometry Course",
      image: "/images/dip-nursing.webp"
    },
    {
      id: "04",
      title: "DIALYSIS",
      subtitle: "Diploma in Dialysis Techniques",
      image: "/images/dip-dialysis.webp"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="courses" className="py-10 md:py-16 bg-[#0B1C40] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left - Text Content */}
          <div className="w-full lg:w-[35%] text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-[900] text-white leading-[1.1] mb-6">
                Explore Our <br /> Courses
              </h2>
              <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed mb-10">
                Discover a wide range of courses tailored to meet the demands of today's dynamic job market. Our programs span diverse fields in healthcare, management, aviation, logistics, and technical studies, each designed to provide hands-on learning and industry-relevant skills. With expert faculty and modern facilities, our courses equip you with the knowledge and experience needed to excel in your chosen career. Dive into learning with us and pave your path to success!
              </p>
              <Link 
                to="/courses"
                className="inline-block bg-[#F23B4E] hover:bg-[#D92B3E] text-white px-10 py-3.5 rounded-none font-bold text-[14px] uppercase tracking-wider transition-colors duration-300 shadow-lg shadow-[#F23B4E]/30"
              >
                View More
              </Link>
            </motion.div>
          </div>

          {/* Right - Slider */}
          <div className="w-full lg:w-[65%]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .course-slider .slick-slide { padding: 0 10px; }
                .course-slider .slick-dots { bottom: -40px; }
                .course-slider .slick-dots li button:before { color: white; opacity: 0.4; font-size: 10px; }
                .course-slider .slick-dots li.slick-active button:before { opacity: 1; color: white; }
              `}} />
              <Slider {...sliderSettings} className="course-slider">
                {courses.map((course) => (
                  <div key={course.id} className="relative aspect-[4/5] md:aspect-[3/4] rounded-none overflow-hidden group">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C40]/90 via-[#0B1C40]/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                      <h3 className="text-white font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-snug drop-shadow-md">
                        {course.subtitle}
                      </h3>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Courses;
