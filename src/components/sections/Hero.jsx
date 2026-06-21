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
    className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 items-center justify-center bg-white/80 hover:bg-white text-[#0B1C40] rounded-full shadow-md transition-all focus:outline-none"
    aria-label="Previous Slide"
  >
    <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" strokeWidth={2.5} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button 
    onClick={onClick}
    style={{ display: 'flex' }}
    className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 items-center justify-center bg-white/80 hover:bg-white text-[#0B1C40] rounded-full shadow-md transition-all focus:outline-none"
    aria-label="Next Slide"
  >
    <ChevronRight className="w-5 h-5 md:w-8 md:h-8" strokeWidth={2.5} />
  </button>
);

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '15px', width: '100%' }}>
        <ul className="m-0 flex justify-center items-center">{dots}</ul>
      </div>
    )
  };

  const images = [
    "/images/heroimg (1).png",
    "/images/heroimg (2).png",
    "/images/heroimg (3).png",
    "/images/hero-imge4.webp",
  ];

  return (
    <section id="home" className="w-full overflow-hidden bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        .hero-slider .slick-dots li button:before { color: white; font-size: 8px; opacity: 0.6; }
        .hero-slider .slick-dots li.slick-active button:before { color: white; opacity: 1; font-size: 10px; }
        .hero-slider .slick-slide > div { display: flex; }
      `}} />
      <div className="hero-slider relative w-full">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="outline-none">
              <div className="w-full bg-white h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] xl:h-[650px] relative">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
