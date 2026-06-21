import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

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

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-white overflow-x-hidden flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
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
          </Routes>
        </div>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
