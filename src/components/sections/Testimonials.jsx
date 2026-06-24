import React from 'react';
import ReactSlider from 'react-slick';
import { Quote, Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ReactSlider.default || ReactSlider;

const reviews = [
  {
    id: 1,
    text: 'Sri Angalamman Paramedical College provides quality education and excellent placement opportunities. The facilities are top-notch and the staff is very supportive.',
    name: 'Student Review',
    role: 'DMLT Batch',
    initial: 'S',
    stars: 5,
  },
  {
    id: 2,
    text: 'Experienced faculty and practical training helped me build a successful healthcare career. Very thankful for the guidance throughout the program.',
    name: 'Alumni Review',
    role: 'Nursing',
    initial: 'A',
    stars: 5,
  },
  {
    id: 3,
    text: 'Best paramedical institute with excellent infrastructure and supportive staff. The hospital training was very comprehensive and practical.',
    name: 'Student Review',
    role: 'OT Technician',
    initial: 'S',
    stars: 5,
  },
  {
    id: 4,
    text: 'The practical exposure here is unmatched. I got placed in a top hospital right after graduation thanks to their active placement cell.',
    name: 'Priya M.',
    role: 'B.Sc Nursing',
    initial: 'P',
    stars: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
  };

  return (
    <section className="py-14 md:py-20 bg-[#F8F9FA] overflow-hidden">

      <style dangerouslySetInnerHTML={{ __html: `
        /* Dots */
        .testi-wrap .slick-dots { bottom: -38px; }
        .testi-wrap .slick-dots li { margin: 0 4px; }
        .testi-wrap .slick-dots li button:before {
          font-size: 10px; color: #CBD5E0; opacity: 1;
        }
        .testi-wrap .slick-dots li.slick-active button:before {
          color: #F23B4E; opacity: 1; font-size: 13px;
        }

        /* Equal height slides */
        .testi-wrap .slick-track { display: flex !important; }
        .testi-wrap .slick-slide { height: inherit !important; display: flex !important; }
        .testi-wrap .slick-slide > div { width: 100%; display: flex; flex: 1; }

        /* Slide padding */
        .testi-wrap .slick-slide > div > div { padding: 0 10px; width: 100%; display: flex; flex-direction: column; }
        @media (min-width: 768px) {
          .testi-wrap .slick-slide > div > div { padding: 0 14px; }
        }
      `}} />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]" />
            <Star size={16} fill="#F23B4E" className="text-[#F23B4E]" />
            <div className="h-[2px] w-8 md:w-12 bg-[#F23B4E]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[900] text-[#0B1C40] tracking-tight leading-tight mb-3">
            Student Testimonials
          </h2>
          <p className="text-[#4F5B73] text-[14px] sm:text-[15px] md:text-[16px] font-medium max-w-xl mx-auto">
            Hear what our students have to say about their experience at SAPI.
          </p>
        </div>

        {/* Slider */}
        <div className="testi-wrap pb-14">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full min-h-[230px] relative overflow-hidden">

                  {/* Background quote watermark */}
                  <Quote
                    className="absolute -top-2 -right-2 w-16 h-16 md:w-20 md:h-20 text-gray-100 z-0 pointer-events-none"
                    fill="currentColor"
                  />

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={14} fill="#F23B4E" className="text-[#F23B4E]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#4F5B73] text-[13px] sm:text-[14px] md:text-[15px] italic leading-relaxed flex-1 relative z-10 mb-5">
                    "{review.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-4 relative z-10" />

                  {/* Author */}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0B1C40] rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-md">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-[800] text-[#0B1C40] text-[13px] sm:text-[14px] leading-tight">{review.name}</h4>
                      <p className="text-[11px] sm:text-[12px] text-[#F23B4E] font-semibold mt-0.5">{review.role}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
