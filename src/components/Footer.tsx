import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-[#6CBE45]" />
                <span className="text-gray-400">0850 266 85 70</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-[#6CBE45]" />
                <span className="text-gray-400">mustafa.oral@yenibiris.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-[#6CBE45] mt-1" />
                <span className="text-gray-400">
                  Maslak Mahallesi, Büyükdere Caddesi<br />
                  No: 255 K: 19 D: 56<br />
                  Şişli / İstanbul
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Kullanım Koşulları</li>
              <li>Gizlilik Politikası</li>
              <li>KVKK</li>
              <li>Çerez Politikası</li>
              <li>İptal ve İade</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="space-y-6">
            <div className="text-gray-400 text-sm leading-relaxed">
              <p className="mb-4">
                Yenibiris.com, Yenibiriş Dijital İnsan Kaynakları ve Teknoloji Anonim Şirketi'ne ait bir sitedir. 
                Yenibiriş Dijital İnsan Kaynakları ve Teknoloji Anonim Şirketi, 4904 sayılı Türkiye İş Kurumu Kanununun 
                19. maddesi gereği, işarayanlardan hiçbir ücret ve menfaat talep etmeyen bir kurum olup, Türkiye İş Kurumu 
                İstanbul İl Müdürlüğü'ne bağlı olarak 09.01.2023 tarihli, 164 numaralı izin belgesi ile faaliyet göstermektedir.
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold mb-3">İŞKUR Şişli Hizmet Merkezi</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Adres:</strong> Abidei-Hürriyet Cad. Palazoğlu Sok No:10 34381 Şişli/İstanbul</p>
                    <p><strong>İletişim Hattı:</strong> 444 75 87</p>
                  </div>
                  <div>
                    <p><strong>Telefon:</strong> (0212) 234 68 06</p>
                    <p><strong>Faks:</strong> (0 212) 291 09 24</p>
                    <p><strong>E-Posta:</strong> sisli@iskur.gov.tr</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-400 text-sm text-center">
                © 2024 Yenibiriş. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;