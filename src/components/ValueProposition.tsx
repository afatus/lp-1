import React from 'react';
import { Target, Clock, TrendingUp } from 'lucide-react';

// Turkish Lira icon component
const TurkishLiraIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4v16"/>
    <path d="M5 8h6"/>
    <path d="M5 12h6"/>
    <path d="M7 16c2 0 4-1 6-3"/>
  </svg>
);

const ValueProposition = () => {
  const benefits = [
    {
      icon: TurkishLiraIcon,
      title: "Sadece Nitelikli Başvurular İçin Ödeme",
      description: "Boş başvurulara para harcamayın, sadece kaliteli adaylar için ödeme yapın."
    },
    {
      icon: Target,
      title: "Hedef Kitle Odaklı İlan",
      description: "İlanınız sadece aradığınız kriterlere uygun adaylara gösterilir."
    },
    {
      icon: Clock,
      title: "Hızlı Sonuç",
      description: "24 saat içinde nitelikli başvurular almaya başlayın."
    },
    {
      icon: TrendingUp,
      title: "ROI Maksimizasyonu",
      description: "Bütçenizi en verimli şekilde kullanın ve geri dönüşünüzü artırın."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Neden Nitelikli Başvuru Başına Ödeme Modeli?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#1C4DA1] rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;