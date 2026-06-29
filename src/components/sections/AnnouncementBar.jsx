import React from 'react';

const AnnouncementBar = () => {
  const content = (
    <>
      <span className="mx-3 md:mx-6 text-lg md:text-xl">🎓</span> <strong className="font-bold">Admissions Open 2026–2027</strong>
      <span className="mx-3 md:mx-6 text-[#F23B4E]">|</span> <strong className="font-bold">Call Us:</strong> <span className="text-[#FBD5D9] ml-1">+91 97519 20888 • +91 77081 23707</span>
      <span className="mx-3 md:mx-6 text-[#F23B4E]">|</span> <span className="text-lg md:text-xl mr-1">☎</span> <strong className="font-bold">Landline:</strong> <span className="text-[#FBD5D9] ml-1">04342 291882</span>
      <span className="mx-5 md:mx-12 text-[#F23B4E]">✦</span>
    </>
  );

  return (
    <div className="w-full bg-[#0B1C40] text-white py-2.5 md:py-3 overflow-hidden relative flex items-center border-b-2 border-[#F23B4E] shadow-md z-10">
      <div className="animate-marquee tracking-wide flex items-center cursor-default text-[12px] sm:text-[13px] md:text-[15px] whitespace-nowrap">
        <div className="flex items-center shrink-0">
          {content}{content}{content}{content}{content}
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {content}{content}{content}{content}{content}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
