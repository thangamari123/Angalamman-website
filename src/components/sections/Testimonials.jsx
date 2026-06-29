import React from 'react';
import ReactSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ReactSlider.default || ReactSlider;

const reviews = [
  {
    id: 1,
    text: 'சிறந்த ஆசிரியர்களை கொண்டு சிறந்த மாணவர்களை உருவாக்கி வெளி கொண்டு வரும் நிறுவனம் சிறப்பாக பணிகளை செய்ய வாழ்த்துகிறோம்.',
    name: 'SAKTHIVEL',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    text: 'Such a Good institute to study , with Good experience faculty , wifi , laboratory to practice in dharmapuri.',
    name: 'M KUMARAN',
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id: 3,
    text: 'Sri angalamman paramedical College is a very good education and safety for students . experienced staffs in this college... conform job for students..Best college in Dharmapuri👍👍👍👍👍 …',
    name: 'SURESH KUMAR',
    image: 'https://randomuser.me/api/portraits/men/68.jpg'
  },
  {
    id: 4,
    text: 'Good institute ! Perfect Opportunity who have only medical work experience but don\'t have proper degree will use this career growth course to succeed in their life.',
    name: 'SATHIYAMOORTHY M',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    id: 5,
    text: 'Angalamman Paramedical Dharmapuri Institute prepares good students and teaches medical sub-studies as required in today\'s times and provides placements in good quality hospitals. Best wishes for the further development of this educational institution',
    name: 'MANIVANNAN',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
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
    <section className="py-10 md:py-16 bg-[#F8F9FA] overflow-hidden relative">

      <style dangerouslySetInnerHTML={{ __html: `
        .testi-wrap .slick-dots { bottom: -45px; }
        .testi-wrap .slick-dots li { margin: 0 4px; }
        .testi-wrap .slick-dots li button:before {
          font-size: 10px; color: #CBD5E0; opacity: 1;
        }
        .testi-wrap .slick-dots li.slick-active button:before {
          color: #0B1C40; opacity: 1; font-size: 12px;
        }
        .testi-wrap .slick-track { display: flex !important; align-items: stretch; }
        .testi-wrap .slick-slide { height: auto !important; display: flex !important; }
        .testi-wrap .slick-slide > div { width: 100%; display: flex; flex: 1; padding: 0 10px; margin-top: 30px; }
        @media (min-width: 768px) {
          .testi-wrap .slick-slide > div { padding: 0 12px; }
        }
      `}} />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[700] text-[#0B1C40] tracking-tight mb-4">
            Life on Campus
          </h2>
          <p className="text-[#4F5B73] text-[15px] md:text-[17px] max-w-2xl mx-auto">
            Hear from Our Students: Real Experiences, Real Growth.
          </p>
        </div>

        {/* Slider */}
        <div className="testi-wrap pb-16 max-w-[1200px] mx-auto">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="bg-white rounded-none p-6 sm:p-8 pt-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full relative transition-all duration-300">
                  
                  {/* Floating Avatar */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-[56px] h-[56px] rounded-full overflow-hidden border-[4px] border-white shadow-md z-10">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="relative flex-1 flex flex-col text-center">
                    {/* Top Left Quote */}
                    <span className="absolute -top-4 -left-2 text-[60px] text-gray-200 font-serif leading-none select-none">“</span>
                    
                    {/* Vertical Borders and Text */}
                    <div className="border-l-[1.5px] border-r-[1.5px] border-black/80 px-4 py-2 flex-1 flex flex-col justify-center min-h-[180px] mx-4 z-10">
                      <p className="text-[#4F5B73] text-[13px] md:text-[14px] leading-relaxed whitespace-pre-wrap">
                        {review.text}
                      </p>
                    </div>

                    {/* Bottom Right Quote */}
                    <span className="absolute bottom-6 -right-2 text-[60px] text-gray-200 font-serif leading-none select-none">”</span>

                    <div className="mt-8">
                      <p className="text-[#0B1C40] text-[12px] font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                        <span className="w-4 h-[1.5px] bg-black"></span> {review.name}
                      </p>
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
