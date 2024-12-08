import React from 'react';
import HeroSection from './components/HeroSection';
import OurTeam from './components/OurTeam';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For Bootstrap Icons
import './App.css'; // Include styles here

function App() {
  return (
    <div>
      <HeroSection />
      <ProjectShowcase />
      <OurTeam />
      <ServiceSection />
    {/* <ContactSection /> */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/60136152313" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
