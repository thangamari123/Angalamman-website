import React from 'react';
import ReactSlider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ReactSlider.default || ReactSlider;

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{ display: 'flex' }}
    className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-13 md:h-13 items-center justify-center bg-white/85 hover:bg-white text-[#0B1C40] rounded-full shadow-lg transition-all duration-200 focus:outline-none backdrop-blur-sm"
    aria-label="Previous Slide"
  >
    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" strokeWidth={2.5} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{ display: 'flex' }}
    className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-13 md:h-13 items-center justify-center bg-white/85 hover:bg-white text-[#0B1C40] rounded-full shadow-lg transition-all duration-200 focus:outline-none backdrop-blur-sm"
    aria-label="Next Slide"
  >
    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" strokeWidth={2.5} />
  </button>
);

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', zIndex: 10 }}>
        <ul style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.5)',
        transition: 'all 0.3s',
      }} />
    ),
  };

  const images = [
    "/images/heroimg (1).png",
    "/images/heroimg (2).png",
    "/images/heroimg (3).png",
    "/images/hero-imge4.webp",
  ];

  return (
    <section id="home" className="w-full overflow-hidden bg-[#0B1C40]">
      <style dangerouslySetInnerHTML={{__html: `
        .hero-slider { position: relative; }
        .hero-slider .slick-list { overflow: hidden; }
        .hero-slider .slick-track { display: flex; }
        .hero-slider .slick-slide { flex-shrink: 0; }
        .hero-slider .slick-slide > div { display: flex; width: 100%; }
        .hero-slider .slick-dots { pointer-events: none; }
        .hero-slider .slick-dots li { margin: 0 3px; width: auto; height: auto; }
        .hero-slider .slick-dots li button { padding: 0; width: 8px; height: 8px; }
        .hero-slider .slick-dots li button:before { display: none; }
        .hero-slider .slick-dots li div { background: rgba(255,255,255,0.45); }
        .hero-slider .slick-dots li.slick-active div { background: #F23B4E; width: 22px; border-radius: 4px; }
        @media (min-width: 768px) {
          .hero-slider .slick-dots li button { width: 10px; height: 10px; }
          .hero-slider .slick-dots li div { width: 10px; height: 10px; }
          .hero-slider .slick-dots li.slick-active div { width: 28px; border-radius: 5px; }
        }
      `}} />

      <div className="hero-slider relative w-full">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="outline-none w-full">
              <div
                className="w-full relative"
                style={{
                  height: 'clamp(200px, 42vw, 680px)',
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  draggable={false}
                />
                {/* Subtle bottom gradient for dots readability */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
