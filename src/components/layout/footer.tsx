'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Newsletter kaydınız başarıyla oluşturuldu!');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Sağlık Haberleri için Abone Olun</h3>
            <p className="text-gray-400 mb-6">
              En güncel sağlık makalelerini ve uzman doktor tavsiyelerini e-postanıza alın.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                className="flex-1 rounded-lg border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Abone Ol
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">SağlıkBu</span>
            </div>
            <p className="text-gray-400 mb-6">
              Güvenilir sağlık bilgileri, uzman doktor tavsiyeleri ve en güncel tıp haberleri için 
              tek durağınız. Sağlığınız bizim önceliğimiz.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Sağlık Blogları
                </Link>
              </li>
              <li>
                <Link href="/kategoriler" className="text-gray-400 hover:text-white transition-colors">
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link href="/doktorlar" className="text-gray-400 hover:text-white transition-colors">
                  Uzman Doktorlar
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popüler Kategoriler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/kalp-sagligi" className="text-gray-400 hover:text-white transition-colors">
                  Kalp Sağlığı
                </Link>
              </li>
              <li>
                <Link href="/blog/beslenme" className="text-gray-400 hover:text-white transition-colors">
                  Beslenme
                </Link>
              </li>
              <li>
                <Link href="/blog/ruh-sagligi" className="text-gray-400 hover:text-white transition-colors">
                  Ruh Sağlığı
                </Link>
              </li>
              <li>
                <Link href="/blog/kadin-sagligi" className="text-gray-400 hover:text-white transition-colors">
                  Kadın Sağlığı
                </Link>
              </li>
              <li>
                <Link href="/blog/cocuk-sagligi" className="text-gray-400 hover:text-white transition-colors">
                  Çocuk Sağlığı
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@saglikbu.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+90 (212) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-400">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 SağlıkBu. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cerez-politikasi" className="text-gray-400 hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 