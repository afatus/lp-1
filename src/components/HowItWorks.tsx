import React from 'react';
import { FileText, Users, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: "İlan Verin",
      description: "İş ilanınızı ücretsiz olarak yayınlayın ve kriterlerinizi belirleyin."
    },
    {
      step: 2,
      icon: Users,
      title: "Başvuruları İnceleyin",
      description: "Nitelikli adaylardan gelen başvuruları değerlendirin ve seçin."
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Beğendiğiniz İçin Ödeyin",
      description: "Sadece beğendiğiniz ve görüştüğünüz adaylar için ödeme yapın."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-xl text-gray-600">
            3 basit adımda işe alım sürecinizi başlatın
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#6CBE45] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1C4DA1] rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;