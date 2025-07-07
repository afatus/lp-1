import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import PlatformReach from './components/PlatformReach';
import AboutSection from './components/AboutSection';
import HowItWorks from './components/HowItWorks';
import SuccessMetrics from './components/SuccessMetrics';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ValueProposition />
      <PlatformReach />
      <AboutSection />
      <HowItWorks />
      <SuccessMetrics />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;