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
    slug: "kalp-sagligi",
    color: "#E53E3E"
  },
  {
    name: "Beslenme",
    description: "Sağlıklı beslenme rehberleri",
    icon: "🥗",
    postCount: 31,
    slug: "beslenme",
    color: "#38A169"
  },
  {
    name: "Ruh Sağlığı",
    description: "Mental sağlık ve psikoloji",
    icon: "🧠",
    postCount: 18,
    slug: "ruh-sagligi",
    color: "#805AD5"
  },
  {
    name: "Kadın Sağlığı",
    description: "Kadınlara özel sağlık konuları",
    icon: "🛡️",
    postCount: 22,
    slug: "kadin-sagligi",
    color: "#D53F8C"
  },
  {
    name: "Çocuk Sağlığı",
    description: "Pediatri ve çocuk gelişimi",
    icon: "👶",
    postCount: 19,
    slug: "cocuk-sagligi",
    color: "#3182CE"
  },
  {
    name: "Spor Sağlığı",
    description: "Egzersiz ve fitness rehberi",
    icon: "⚡",
    postCount: 15,
    slug: "spor-sagligi",
    color: "#DD6B20"
  }
];

const stats = [
  { number: "1000+", label: "Sağlık Makalesi", icon: "📚" },
  { number: "50+", label: "Uzman Doktor", icon: "👨‍⚕️" },
  { number: "100K+", label: "Mutlu Okuyucu", icon: "😊" },
  { number: "24/7", label: "Destek", icon: "🕰️" }
];

const testimonials = [
  {
    name: "Ayşe K.",
    text: "SağlıkBu sayesinde sağlıklı beslenme konusunda çok şey öğrendim. Uzman doktor tavsiyeleri gerçekten çok değerli.",
    rating: 5
  },
  {
    name: "Mehmet B.",
    text: "Kalp sağlığım konusunda endişelerim vardı. Buradaki makaleler sayesinde doktoruma gitmeden önce bilgi sahibi oldum.",
    rating: 5
  },
  {
    name: "Fatma Y.",
    text: "Çocuğumun sağlığı konusunda sürekli SağlıkBu'yu takip ediyorum. Çok güvenilir bir kaynak.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Sağlıklı Yaşamın
                <br />
                <span className="highlight">Güvenilir Rehberi</span>
              </h1>
              <p className="hero-description">
                Uzman doktorlarımızdan güncel sağlık bilgileri, beslenme önerileri ve 
                yaşam kalitesini artıracak ipuçları. Sağlığınız için güvenilir kaynak.
              </p>
              <div className="hero-buttons">
                <Link href="/blog" className="btn btn-primary btn-large">
                  <span className="btn-icon">📖</span>
                  Makaleleri Keşfet
                </Link>
                <Link href="/doctors" className="btn btn-secondary btn-large">
                  <span className="btn-icon">👨‍⚕️</span>
                  Uzman Doktorlar
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card">
                <div className="card-icon">❤️</div>
                <h3>SağlıkBu</h3>
                <p>Sağlığınız bizim önceliğimiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Öne Çıkan Sağlık Makaleleri
            </h2>
            <p className="section-subtitle">
              Uzman doktorlarımız tarafından hazırlanan, güncel ve güvenilir sağlık bilgileri
            </p>
          </div>
          
          <div className="posts-grid">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="post-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="post-image">
                  <div className="post-emoji">{post.image}</div>
                  <div className="post-overlay"></div>
                </div>
                <div className="post-content">
                  <span className="post-category">{post.category}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <div className="post-author">
                      <span className="author-icon">👨‍⚕️</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="post-time">
                      <span className="time-icon">⏱️</span>
                      <span>{post.readingTime} dk</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="post-link">
                    Makaleyi Oku
                    <span className="link-arrow">→</span>
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
            <h2 className="section-title">
              Sağlık Kategorileri
            </h2>
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
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="category-icon-wrapper" style={{backgroundColor: `${category.color}15`}}>
                  <span className="category-icon">{category.icon}</span>
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-footer">
                  <span className="category-count">{category.postCount} Makale</span>
                  <span className="category-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kullanıcılarımız Ne Diyor?</h2>
            <p className="section-subtitle">
              Binlerce kullanıcımızın deneyimleri
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👤</div>
                  <span className="author-name">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-bg"></div>
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-icon">📧</div>
            <h2 className="newsletter-title">
              Sağlık Bültenimize Abone Olun
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
                <span className="btn-icon">✉️</span>
                Abone Ol
              </button>
            </div>
            <p className="newsletter-note">
              İstediğiniz zaman abonelikten çıkabilirsiniz
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Sağlığınız İçin Doğru Adrestesiniz
            </h2>
            <p className="cta-description">
              Uzman doktorlarımızla iletişime geçin, sorularınızı sorun ve 
              kişiselleştirilmiş sağlık tavsiyeleri alın.
            </p>
            <div className="cta-buttons">
              <Link href="/iletisim" className="btn btn-primary btn-large">
                <span className="btn-icon">🏥</span>
                Doktorlarımızla İletişim
              </Link>
              <Link href="/hakkimizda" className="btn btn-outline btn-large">
                <span className="btn-icon">ℹ️</span>
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
