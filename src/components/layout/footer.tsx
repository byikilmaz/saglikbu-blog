'use client';

import Link from 'next/link';
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
    <>
      <footer className="footer">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <h3 className="newsletter-title">📧 Sağlık Haberleri için Abone Olun</h3>
              <p className="newsletter-description">
                En güncel sağlık makalelerini ve uzman doktor tavsiyelerini e-postanıza alın.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresinizi girin"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  ✉️ Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              {/* Brand Column */}
              <div className="footer-brand">
                <div className="brand-header">
                  <div className="brand-icon">❤️</div>
                  <span className="brand-name">SağlıkBu</span>
                </div>
                <p className="brand-description">
                  Güvenilir sağlık bilgileri, uzman doktor tavsiyeleri ve en güncel tıp haberleri için 
                  tek durağınız. Sağlığınız bizim önceliğimiz.
                </p>
                <div className="social-links">
                  <Link href="#" className="social-link">📘</Link>
                  <Link href="#" className="social-link">🐦</Link>
                  <Link href="#" className="social-link">📷</Link>
                  <Link href="#" className="social-link">📺</Link>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h4 className="section-title">🔗 Hızlı Bağlantılar</h4>
                <ul className="link-list">
                  <li>
                    <Link href="/blog" className="footer-link">
                      Sağlık Blogları
                    </Link>
                  </li>
                  <li>
                    <Link href="/kategoriler" className="footer-link">
                      Kategoriler
                    </Link>
                  </li>
                  <li>
                    <Link href="/doktorlar" className="footer-link">
                      Uzman Doktorlar
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda" className="footer-link">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim" className="footer-link">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="footer-section">
                <h4 className="section-title">📋 Popüler Kategoriler</h4>
                <ul className="link-list">
                  <li>
                    <Link href="/blog/kalp-sagligi" className="footer-link">
                      ❤️ Kalp Sağlığı
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/beslenme" className="footer-link">
                      🥗 Beslenme
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ruh-sagligi" className="footer-link">
                      🧠 Ruh Sağlığı
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/kadin-sagligi" className="footer-link">
                      🛡️ Kadın Sağlığı
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/cocuk-sagligi" className="footer-link">
                      👶 Çocuk Sağlığı
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-section">
                <h4 className="section-title">📞 İletişim</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <span className="contact-text">info@saglikbu.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span className="contact-text">+90 (212) 555-0123</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span className="contact-text">İstanbul, Türkiye</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container">
            <div className="bottom-content">
              <p className="copyright">
                © 2024 SağlıkBu. Tüm hakları saklıdır.
              </p>
              <div className="legal-links">
                <Link href="/gizlilik" className="legal-link">
                  Gizlilik Politikası
                </Link>
                <Link href="/kullanim-sartlari" className="legal-link">
                  Kullanım Şartları
                </Link>
                <Link href="/cerez-politikasi" className="legal-link">
                  Çerez Politikası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
        }

        .newsletter-section {
          background: linear-gradient(135deg, #0066CC 0%, #00AA88 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .newsletter-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,0 1000,200 1000,1000 0,800"/></svg>');
          background-size: cover;
        }

        .newsletter-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .newsletter-description {
          font-size: 1.2rem;
          margin-bottom: 32px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          gap: 16px;
          flex-direction: column;
        }

        .newsletter-input {
          flex: 1;
          padding: 16px 20px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.95);
          color: #1f2937;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
          background: white;
        }

        .newsletter-input::placeholder {
          color: #6b7280;
        }

        .newsletter-btn {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8A65 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
        }

        .footer-main {
          padding: 80px 0;
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .footer-brand {
          grid-column: span 1;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0066CC 0%, #00AA88 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
        }

        .brand-name {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #0066CC 0%, #00AA88 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-description {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 15px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(0, 102, 204, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 20px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(0, 102, 204, 0.2);
          transform: translateY(-2px);
        }

        .footer-section {
          padding: 0;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: #0066CC;
          transform: translateX(4px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          font-size: 18px;
          color: #0066CC;
        }

        .contact-text {
          color: #d1d5db;
          font-size: 15px;
        }

        .footer-bottom {
          background: #111827;
          padding: 24px 0;
          border-top: 1px solid #374151;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        .legal-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .legal-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .legal-link:hover {
          color: #0066CC;
        }

        @media (min-width: 640px) {
          .newsletter-form {
            flex-direction: row;
          }
        }

        @media (max-width: 768px) {
          .newsletter-section {
            padding: 40px 0;
          }

          .newsletter-title {
            font-size: 2rem;
          }

          .newsletter-description {
            font-size: 1rem;
          }

          .footer-main {
            padding: 60px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .legal-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .brand-header {
            justify-content: center;
            text-align: center;
          }

          .brand-description {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .contact-info {
            align-items: center;
          }
        }
      `}</style>
    </>
  );
} 