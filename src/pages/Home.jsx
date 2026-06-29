import React from 'react';
import Hero from '../components/sections/Hero';
import AnnouncementBar from '../components/sections/AnnouncementBar';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Courses from '../components/sections/Courses';
import Strategy from '../components/sections/Strategy';
import Achievements from '../components/sections/Achievements';
import Testimonials from '../components/sections/Testimonials';
import AdmissionCriteria from '../components/sections/AdmissionCriteria';
import HowToApply from '../components/sections/HowToApply';
import LatestNews from '../components/sections/LatestNews';
import Branches from '../components/sections/Branches';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <AnnouncementBar />
      <About />
      <WhyChooseUs />
      <Courses />
      <Strategy />
      <Achievements />
      <Testimonials />
      <AdmissionCriteria />
      <HowToApply />
      <LatestNews />
      <Branches />
      <Contact />
    </main>
  );
};

export default Home;
