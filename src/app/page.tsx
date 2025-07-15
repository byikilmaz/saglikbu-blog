import Link from "next/link";

// Sample data
const featuredPosts = [
  {
    id: 1,
    title: "Kalp Sağlığını Korumak İçin 10 Altın Kural",
    excerpt: "Kalp sağlığınızı korumak için günlük hayatınızda uygulayabileceğiniz basit ama etkili yöntemler.",
    category: "Kalp Sağlığı",
    readingTime: 5,
    author: "Dr. Mehmet Özkan",
    image: "❤️"
  },
  {
    id: 2,
    title: "Sağlıklı Beslenme Rehberi: Ne Yemeli, Ne Yememeli?",
    excerpt: "Uzmanlardan sağlıklı beslenme önerileri ve dengeli diyet planı oluşturma rehberi.",
    category: "Beslenme",
    readingTime: 7,
    author: "Dr. Ayşe Demir",
    image: "🥗"
  },
  {
    id: 3,
    title: "Mental Sağlık: Stresle Başa Çıkma Yolları",
    excerpt: "Modern yaşamın getirdiği stresle başa çıkmak için psikoloji uzmanlarından öneriler.",
    category: "Ruh Sağlığı",
    readingTime: 6,
    author: "Dr. Can Yılmaz",
    image: "🧠"
  }
];

const categories = [
  {
    name: "Kalp Sağlığı",
    description: "Kardiyovasküler sistem ve kalp hastalıkları",
    icon: "❤️",
    postCount: 28,
    slug: "kalp-sagligi"
  },
  {
    name: "Beslenme & Diyet",
    description: "Sağlıklı beslenme ve diyet programları",
    icon: "🥗",
    postCount: 35,
    slug: "beslenme"
  },
  {
    name: "Ruh Sağlığı",
    description: "Mental sağlık ve psikolojik destek",
    icon: "🧠",
    postCount: 22,
    slug: "ruh-sagligi"
  },
  {
    name: "Kadın Sağlığı",
    description: "Kadınlara özel sağlık konuları",
    icon: "🌸",
    postCount: 26,
    slug: "kadin-sagligi"
  },
  {
    name: "Çocuk Sağlığı",
    description: "Pediatri ve çocuk gelişimi",
    icon: "👶",
    postCount: 19,
    slug: "cocuk-sagligi"
  },
  {
    name: "Fitness & Spor",
    description: "Egzersiz, fitness ve spor sağlığı",
    icon: "🏃‍♀️",
    postCount: 31,
    slug: "spor-sagligi"
  }
];

const stats = [
  { number: "2.5K+", label: "Sağlık Makalesi" },
  { number: "150+", label: "Uzman Doktor" },
  { number: "500K+", label: "Mutlu Okuyucu" }
];

export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Sağlıklı Yaşamın <span className="highlight">Modern Rehberi</span>
              </h1>
              <p className="hero-description">
                🌟 Uzman doktorlarımızdan güncel sağlık bilgileri, modern tıp yaklaşımları ve 
                yaşam kalitenizi artıracak profesyonel öneriler. Sağlığınız için en güvenilir dijital platform.
              </p>
              <div className="hero-buttons">
                <Link href="/blog" className="btn btn-primary">
                  🔥 Makaleleri Keşfet
                </Link>
                <Link href="/doctors" className="btn btn-outline">
                  ⚡ Uzman Doktorlar
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-icon">
                💊
              </div>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="hero-stat">
                    <span className="hero-stat-number">{stat.number}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🔥 Trend Sağlık Makaleleri</h2>
            <p className="section-subtitle">
              Uzman doktorlarımız tarafından hazırlanan, en güncel ve popüler sağlık rehberleri
            </p>
          </div>
          
          <div className="posts-grid">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <div className="post-emoji">{post.image}</div>
                </div>
                <div className="post-content">
                  <span className="post-category">{post.category}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>👨‍⚕️ {post.author}</span>
                    <span>⏱️ {post.readingTime} dk okuma</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="post-link">
                    Detayları Gör →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🎯 Sağlık Kategorileri</h2>
            <p className="section-subtitle">
              İhtiyacınıza göre uzman doktor tavsiyelerini kategoriler halinde keşfedin
            </p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/kategori/${category.slug}`}
                className="category-card"
              >
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <span className="category-count">{category.postCount} Makale</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              💌 Premium Sağlık Bülteni
            </h2>
            <p className="newsletter-description">
              🚀 Haftalık özel sağlık ipuçları, yeni makale bildirimleri ve uzman doktor önerilerini ilk siz öğrenin
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="E-posta adresinizi girin..."
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Katıl 🎉
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            Sağlığınız İçin En Doğru Adres
          </h2>
          <p className="cta-description">
            🏥 Uzman doktorlarımızla iletişime geçin, kişiselleştirilmiş sağlık tavsiyeleri alın ve 
            sağlıklı yaşam yolculuğunuzda profesyonel destek bulun.
          </p>
          <div className="cta-buttons">
            <Link href="/iletisim" className="btn btn-primary">
              🩺 Uzman Danışmanlık
            </Link>
            <Link href="/hakkimizda" className="btn btn-outline">
              🌟 Platform Hakkında
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
