import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#1C4DA1] to-[#6CBE45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            İş İlanınız Ücretsiz,<br />
            Beğendiğiniz Adaylar İçin Ödeyin
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
            Artık size uygun olmayan adaylara boşa para harcamayın. Aradığınız yeteneğe en hızlı ve bütçe dostu yolla ulaşın
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button 
              onClick={scrollToContact}
              className="bg-[#6CBE45] hover:bg-[#5aa83a] text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 transition-all hover:scale-105"
            >
              <span>Hemen Ücretsiz İlan Verin</span>
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:08502668570" 
              className="bg-white text-[#1C4DA1] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 transition-all hover:scale-105"
            >
              <Phone size={20} />
              <span>0850 266 85 70</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;