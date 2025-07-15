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
    description: "Kardiyovasküler sistem sağlığı",
    icon: "❤️",
    postCount: 24,
    slug: "kalp-sagligi"
  },
  {
    name: "Beslenme",
    description: "Sağlıklı beslenme rehberleri",
    icon: "🥗",
    postCount: 31,
    slug: "beslenme"
  },
  {
    name: "Ruh Sağlığı",
    description: "Mental sağlık ve psikoloji",
    icon: "🧠",
    postCount: 18,
    slug: "ruh-sagligi"
  },
  {
    name: "Kadın Sağlığı",
    description: "Kadınlara özel sağlık konuları",
    icon: "🛡️",
    postCount: 22,
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
    name: "Spor Sağlığı",
    description: "Egzersiz ve fitness rehberi",
    icon: "⚡",
    postCount: 15,
    slug: "spor-sagligi"
  }
];

const stats = [
  { number: "1000+", label: "Sağlık Makalesi" },
  { number: "50+", label: "Uzman Doktor" },
  { number: "100K+", label: "Mutlu Okuyucu" }
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
                Sağlıklı Yaşamın <span className="highlight">Güvenilir Rehberi</span>
              </h1>
              <p className="hero-description">
                Uzman doktorlarımızdan güncel sağlık bilgileri, beslenme önerileri ve 
                yaşam kalitesini artıracak ipuçları. Sağlığınız için güvenilir kaynak.
              </p>
              <div className="hero-buttons">
                <Link href="/blog" className="btn btn-primary">
                  📖 Makaleleri Keşfet
                </Link>
                <Link href="/doctors" className="btn btn-outline">
                  👨‍⚕️ Uzman Doktorlar
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-icon">
                ❤️
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
            <h2 className="section-title">Öne Çıkan Sağlık Makaleleri</h2>
            <p className="section-subtitle">
              Uzman doktorlarımız tarafından hazırlanan, güncel ve güvenilir sağlık bilgileri
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
                    <span>⏱️ {post.readingTime} dk</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="post-link">
                    Makaleyi Oku →
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
            <h2 className="section-title">Sağlık Kategorileri</h2>
            <p className="section-subtitle">
              İhtiyacınıza göre sağlık konularını kategoriler halinde keşfedin
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
              📧 Sağlık Bültenimize Abone Olun
            </h2>
            <p className="newsletter-description">
              Haftalık sağlık ipuçları ve yeni makalelerimizden haberdar olun
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            Sağlığınız İçin Doğru Adrestesiniz
          </h2>
          <p className="cta-description">
            Uzman doktorlarımızla iletişime geçin, sorularınızı sorun ve 
            kişiselleştirilmiş sağlık tavsiyeleri alın.
          </p>
          <div className="cta-buttons">
            <Link href="/iletisim" className="btn btn-primary">
              🏥 Doktorlarımızla İletişim
            </Link>
            <Link href="/hakkimizda" className="btn btn-outline">
              ℹ️ Hakkımızda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
