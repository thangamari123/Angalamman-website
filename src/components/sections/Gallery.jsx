import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Banner', 'Event 25 & 26', 'Events', 'ClassRoom'];

  const images = [
    // ── Event 25 & 26 – 30 real photos ──
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287153/1_ju4mw3.jpg',   title: 'Event 25 & 26 – Photo 1',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287152/3_1_lmbwzq.jpg', title: 'Event 25 & 26 – Photo 2',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287148/6_wqd3c5.jpg',   title: 'Event 25 & 26 – Photo 3',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287148/4_1_yg3ahg.jpg', title: 'Event 25 & 26 – Photo 4',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287148/2_1_p9wtcx.jpg', title: 'Event 25 & 26 – Photo 5',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287147/7_ye44iu.jpg',   title: 'Event 25 & 26 – Photo 6',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287147/5_ie6c3h.jpg',   title: 'Event 25 & 26 – Photo 7',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287147/1_1_icowac.jpg', title: 'Event 25 & 26 – Photo 8',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287149/8_1_ovrfds.jpg', title: 'Event 25 & 26 – Photo 9',  category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287146/3_2_iwcnaq.jpg', title: 'Event 25 & 26 – Photo 10', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287146/9_bxbjsm.jpg',   title: 'Event 25 & 26 – Photo 11', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287146/7_1_ylszbt.jpg', title: 'Event 25 & 26 – Photo 12', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287146/6_1_bueuie.jpg', title: 'Event 25 & 26 – Photo 13', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287145/2_2_a7qyol.jpg', title: 'Event 25 & 26 – Photo 14', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287145/9_1_x1skdz.jpg', title: 'Event 25 & 26 – Photo 15', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287145/8_2_kh7mua.jpg', title: 'Event 25 & 26 – Photo 16', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287145/4_2_vrkl50.jpg', title: 'Event 25 & 26 – Photo 17', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287144/19_duzrbd.jpg',  title: 'Event 25 & 26 – Photo 18', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287144/5_1_htfbnt.jpg', title: 'Event 25 & 26 – Photo 19', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287143/10_tjtcnu.jpg',  title: 'Event 25 & 26 – Photo 20', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287143/17_poylsw.jpg',  title: 'Event 25 & 26 – Photo 21', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287143/18_ws5cve.jpg',  title: 'Event 25 & 26 – Photo 22', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287142/20_bl5ev0.jpg',  title: 'Event 25 & 26 – Photo 23', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287142/21_swmszn.jpg',  title: 'Event 25 & 26 – Photo 24', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287142/11_x57fiw.jpg',  title: 'Event 25 & 26 – Photo 25', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287141/12_k8v0xz.jpg',  title: 'Event 25 & 26 – Photo 26', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287141/13_xamvv5.jpg',  title: 'Event 25 & 26 – Photo 27', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287140/14_t9ifwy.jpg',  title: 'Event 25 & 26 – Photo 28', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287139/15_lkik2z.jpg',  title: 'Event 25 & 26 – Photo 29', category: 'Event 25 & 26' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287138/16_epigxm.jpg',  title: 'Event 25 & 26 – Photo 30', category: 'Event 25 & 26' },
    // ── Banner – 9 real photos ──
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287825/1_khhrgk.jpg',  title: 'Banner – Photo 1', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287816/12_zzvfup.jpg', title: 'Banner – Photo 2', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287815/2_pbjbwy.jpg',  title: 'Banner – Photo 3', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287811/17_chekjg.jpg', title: 'Banner – Photo 4', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287811/18_zkkygp.jpg', title: 'Banner – Photo 5', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287810/9_ciqjvg.jpg',  title: 'Banner – Photo 6', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287809/8_gn2sc8.jpg',  title: 'Banner – Photo 7', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287808/14_ptsxdz.jpg', title: 'Banner – Photo 8', category: 'Banner' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782287807/0_pd66od.jpg',  title: 'Banner – Photo 9', category: 'Banner' },
    // ── ClassRoom – 13 real photos ──
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288179/1_bbxl1z.jpg',  title: 'ClassRoom – Photo 1',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288178/2_yajiwk.jpg',  title: 'ClassRoom – Photo 2',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288177/3_ayymct.jpg',  title: 'ClassRoom – Photo 3',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288171/4_brrlyy.jpg',  title: 'ClassRoom – Photo 4',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288170/5_lznhn4.jpg',  title: 'ClassRoom – Photo 5',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288169/6_mfn2on.jpg',  title: 'ClassRoom – Photo 6',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288168/7_srrxaf.jpg',  title: 'ClassRoom – Photo 7',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288168/8_ne49io.jpg',  title: 'ClassRoom – Photo 8',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288167/9_x6kfla.jpg',  title: 'ClassRoom – Photo 9',  category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288166/16_sjtafu.jpg', title: 'ClassRoom – Photo 10', category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288166/17_x5nkmk.jpg', title: 'ClassRoom – Photo 11', category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288163/21_afniav.jpg', title: 'ClassRoom – Photo 12', category: 'ClassRoom' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288162/24_irw3fi.jpg', title: 'ClassRoom – Photo 13', category: 'ClassRoom' },
    // ── Events – 11 real photos ──
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288483/3_epexuz.jpg',  title: 'Events – Photo 1',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288481/4_dmx1x5.jpg',  title: 'Events – Photo 2',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288462/5_rbmvrd.jpg',  title: 'Events – Photo 3',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288462/6_tnvlei.jpg',  title: 'Events – Photo 4',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288461/11_raqtfy.jpg', title: 'Events – Photo 5',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288461/7_gexjms.jpg',  title: 'Events – Photo 6',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288459/9_uvrfv7.jpg',  title: 'Events – Photo 7',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288458/8_o7kzxk.jpg',  title: 'Events – Photo 8',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288457/10_fyiztz.jpg', title: 'Events – Photo 9',  category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288455/12_hmlopl.jpg', title: 'Events – Photo 10', category: 'Events' },
    { src: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1782288455/1_ivjde1.jpg',  title: 'Events – Photo 11', category: 'Events' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section id="gallery" className="py-8 md:py-14 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[1400px]">

        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E] rounded-full"></div>
            <span className="text-[#F23B4E] font-bold tracking-widest text-[12px] md:text-[14px] uppercase">Our Moments</span>
            <div className="h-[2px] w-8 md:w-14 bg-[#F23B4E] rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-4xl font-[900] text-[#0B1C40] mb-2">Photo Gallery</h2>
          <p className="text-[#4F5B73] text-[13px] md:text-[16px] max-w-xl mx-auto">
            A glimpse into the vibrant campus life, events, and advanced facilities at SAPI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full font-[700] text-[11px] md:text-[14px] transition-all duration-300 border-2 flex items-center gap-1.5 ${
                filter === cat
                  ? 'bg-[#F23B4E] text-white border-[#F23B4E] shadow-lg shadow-[#F23B4E]/25'
                  : 'bg-white text-[#4F5B73] border-gray-200 hover:border-[#F23B4E] hover:text-[#F23B4E]'
              }`}
            >
              {cat}
              {cat === 'Event 25 & 26' && (
                <span className={`text-[9px] md:text-[11px] font-[900] px-1.5 py-0.5 rounded-full ${
                  filter === cat ? 'bg-white/30 text-white' : 'bg-[#F23B4E] text-white'
                }`}>30</span>
              )}
              {cat === 'Banner' && (
                <span className={`text-[9px] md:text-[11px] font-[900] px-1.5 py-0.5 rounded-full ${
                  filter === cat ? 'bg-white/30 text-white' : 'bg-[#0B1C40] text-white'
                }`}>9</span>
              )}
              {cat === 'ClassRoom' && (
                <span className={`text-[9px] md:text-[11px] font-[900] px-1.5 py-0.5 rounded-full ${
                  filter === cat ? 'bg-white/30 text-white' : 'bg-[#16A34A] text-white'
                }`}>13</span>
              )}
              {cat === 'Events' && (
                <span className={`text-[9px] md:text-[11px] font-[900] px-1.5 py-0.5 rounded-full ${
                  filter === cat ? 'bg-white/30 text-white' : 'bg-[#7C3AED] text-white'
                }`}>11</span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={image.src}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.22 }}
                className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer group shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-2 md:p-3 w-full">
                    <span className="text-[#F23B4E] text-[9px] md:text-[10px] font-[900] uppercase tracking-wider block mb-0.5">{image.category}</span>
                    <h4 className="text-white font-[700] text-[11px] md:text-[13px] leading-tight">{image.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Photo count */}
        <p className="text-center text-[#4F5B73] text-[12px] md:text-[14px] font-medium mt-5 md:mt-8">
          Showing <span className="font-[900] text-[#0B1C40]">{filteredImages.length}</span> photo{filteredImages.length !== 1 ? 's' : ''}
          {filter !== 'All' && <span> in <span className="text-[#F23B4E] font-[800]">"{filter}"</span></span>}
        </p>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={filteredImages.map(img => ({ src: img.src, title: img.title }))}
        />
      </div>
    </section>
  );
};

export default Gallery;
