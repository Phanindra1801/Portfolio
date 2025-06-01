import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { setupSmoothScrolling } from './utils/animations';

function App() {
  useEffect(() => {
    setupSmoothScrolling();
    
    document.title = 'Phanindra\'s | Portfolio';
    document.body.classList.add('custom-cursor');
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;