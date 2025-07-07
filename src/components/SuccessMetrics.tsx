import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const SuccessMetrics = () => {
  const additionalMetrics = [
    {
      title: "Nitelikli Başvuru Artışı",
      description: "Hedeflenen programatik yaklaşımlarla nitelikli aday sayısında gözle görülür artış.",
      percentage: "+%62"
    },
    {
      title: "İşe Alım Başına Maliyet Azalması",
      description: "Akıllı bütçe optimizasyonu sayesinde işe alım maliyetlerinde önemli düşüş.",
      percentage: "-%55"
    },
    {
      title: "Tüm Kanallarda Başvuru Hacmi Artışı",
      description: "Sosyal medya ve diğer kanalların entegrasyonuyla genel başvuru sayısında artış.",
      percentage: "+%35"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Küresel Başarı Metrikleri
          </h2>
          <p className="text-xl text-gray-300">
            Müşterilerimizin elde ettiği sonuçlar
          </p>
        </div>
        
        {/* Additional metrics section */}
        <div className="space-y-8">
          {additionalMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                  <p className="text-gray-300">{metric.description}</p>
                </div>
                {metric.percentage && (
                  <div className="text-2xl font-bold text-[#6CBE45]">
                    {metric.percentage}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;