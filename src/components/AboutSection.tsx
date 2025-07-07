import React from 'react';
import { Award, Users, Building, Globe } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "15M+",
      title: "Aktif Kullanıcı",
      description: "Büyük aday havuzumuz"
    },
    {
      icon: Building,
      number: "16K+",
      title: "İşveren Firması",
      description: "Güvenilir iş ortakları"
    },
    {
      icon: Globe,
      number: "25+",
      title: "Yıl Deneyim",
      description: "Sektörde köklü tecrübe"
    }
  ];

  return (
    <section className="py-20 bg-[#1C4DA1] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Yenibiriş Hakkında
          </h2>
          <p className="text-xl text-blue-100">
            Türkiye'nin lider iş ve işçi bulma platformu
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#6CBE45] rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{achievement.number}</div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-blue-100">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;