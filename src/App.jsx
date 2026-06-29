import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingSocials from './components/layout/FloatingSocials';
import MobileStickyBar from './components/layout/MobileStickyBar';
import AdmissionPopup from './components/layout/AdmissionPopup';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Excellence from './pages/Excellence';
import UnityDiversity from './pages/UnityDiversity';
import SocialResponsibility from './pages/SocialResponsibility';
import Application from './pages/Application';
import AboutPage from './pages/AboutPage';
import UniversityLifePage from './pages/UniversityLifePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import StudentPortal from './pages/StudentPortal';
import FacilitiesPage from './pages/FacilitiesPage';
import NewsEventsPage from './pages/NewsEventsPage';
import CareersPage from './pages/CareersPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-white overflow-x-hidden flex flex-col">
        <Navbar />
        
        <div className="flex-grow pb-[48px] md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/university-life" element={<UniversityLifePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/excellence" element={<Excellence />} />
            <Route path="/unity-diversity" element={<UnityDiversity />} />
            <Route path="/social-responsibility" element={<SocialResponsibility />} />
            <Route path="/application" element={<Application />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>

        <Footer />
        <MobileStickyBar />
        <FloatingSocials />
        <AdmissionPopup />
      </div>
    </Router>
  );
}

export default App;
