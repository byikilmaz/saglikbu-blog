'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Sağlık Blogları', href: '/blog' },
  { name: 'Kategoriler', href: '/kategoriler' },
  { name: 'Doktorlarımız', href: '/doktorlar' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo">
              <Link href="/" className="logo-link">
                <div className="logo-icon">❤️</div>
                <span className="logo-text">SağlıkBu</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="header-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="header-actions">
              {/* Search Button */}
              <button
                className="search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                🔍
              </button>

              {/* Admin Panel Link */}
              <Link href="/admin" className="admin-btn">
                Admin Panel
              </Link>

              {/* Mobile menu button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="search-bar">
              <div className="search-container">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Sağlık konularında arayın..."
                  className="search-input"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mobile-menu-divider"></div>
              <Link
                href="/admin"
                className="mobile-admin-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Panel
              </Link>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 102, 204, 0.1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .header-logo {
          display: flex;
          align-items: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-link:hover {
          transform: scale(1.05);
        }

        .logo-icon {
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

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #0066CC 0%, #00AA88 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #0066CC;
          background: rgba(0, 102, 204, 0.1);
          transform: translateY(-1px);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .search-btn {
          background: rgba(0, 102, 204, 0.1);
          border: none;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .search-btn:hover {
          background: rgba(0, 102, 204, 0.2);
          transform: scale(1.1);
        }

        .admin-btn {
          background: linear-gradient(135deg, #0066CC 0%, #0052A3 100%);
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.2);
        }

        .admin-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #0066CC;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(0, 102, 204, 0.1);
        }

        .search-bar {
          border-top: 1px solid rgba(0, 102, 204, 0.1);
          padding: 20px 0;
          animation: slideDown 0.3s ease;
        }

        .search-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
          color: #6b7280;
        }

        .search-input {
          width: 100%;
          height: 48px;
          border: 2px solid rgba(0, 102, 204, 0.2);
          border-radius: 12px;
          padding: 0 16px 0 50px;
          font-size: 16px;
          background: white;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #0066CC;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
        }

        .mobile-menu {
          display: none;
          background: white;
          border-top: 1px solid rgba(0, 102, 204, 0.1);
          animation: slideDown 0.3s ease;
        }

        .mobile-menu-content {
          padding: 20px;
        }

        .mobile-nav-link {
          display: block;
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 4px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #0066CC;
          background: rgba(0, 102, 204, 0.1);
        }

        .mobile-menu-divider {
          border-top: 1px solid rgba(0, 102, 204, 0.1);
          margin: 16px 0;
        }

        .mobile-admin-link {
          display: block;
          color: #0066CC;
          text-decoration: none;
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-admin-link:hover {
          background: rgba(0, 102, 204, 0.1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .header-nav {
            display: none;
          }

          .search-btn {
            display: none;
          }

          .admin-btn {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-menu {
            display: block;
          }

          .logo-text {
            font-size: 20px;
          }

          .logo-icon {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            height: 60px;
          }

          .container {
            padding: 0 15px;
          }

          .logo-text {
            font-size: 18px;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
} 