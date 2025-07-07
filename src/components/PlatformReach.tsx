import React from 'react';
import { Users, Eye, Play } from 'lucide-react';

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const PlatformReach = () => {
  const platforms = [
    {
      name: "Facebook",
      users: "34M+",
      icon: Users,
      color: "#1877F2"
    },
    {
      name: "Google",
      users: "57M+",
      icon: Eye,
      color: "#4285F4"
    },
    {
      name: "YouTube",
      users: "45M+",
      icon: Play,
      color: "#FF0000"
    },
    {
      name: "TikTok",
      users: "38M+",
      icon: TikTokIcon,
      color: "#000000"
    },
    {
      name: "Yenibiriş Database",
      users: "15M+",
      icon: Users,
      color: "#1C4DA1"
    },
    {
      name: "Indeed",
      users: "25M+",
      icon: Eye,
      color: "#2164F3"
    },
    {
      name: "Jooble",
      users: "1.5M+",
      description: "monthly visitors",
      icon: Users,
      color: "#00A651"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Platform Erişimi
          </h2>
          <p className="text-xl text-gray-600">
            İlanınız milyonlarca adaya ulaşsın
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: platform.color + '20' }}
              >
                <platform.icon className="w-8 h-8" style={{ color: platform.color }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-2xl font-bold text-[#1C4DA1]">{platform.users}</p>
              {platform.description && (
                <p className="text-sm text-gray-600 mt-1">{platform.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformReach;