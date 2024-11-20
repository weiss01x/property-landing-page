import React from 'react';
import HeroSection from './components/HeroSection';
import OurTeam from './components/OurTeam';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <HeroSection />
      <ProjectShowcase />
      <OurTeam />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
