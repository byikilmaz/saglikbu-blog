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
  { number: "1000+", label: "Sağlık Makalesi", icon: "📚" },
  { number: "50+", label: "Uzman Doktor", icon: "👨‍⚕️" },
  { number: "100K+", label: "Mutlu Okuyucu", icon: "😊" },
  { number: "24/7", label: "Destek", icon: "🕰️" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <h1 className="fade-in-up">
              Sağlıklı Yaşamın 
              <br />
              Güvenilir Rehberi
            </h1>
            <p className="fade-in-up">
              Uzman doktorlarımızdan güncel sağlık bilgileri, beslenme önerileri ve 
              yaşam kalitesini artıracak ipuçları. Sağlığınız için güvenilir kaynak.
            </p>
            <div className="flex gap-4 justify-center fade-in-up">
              <Link href="/blog" className="btn btn-primary">
                📖 Makaleleri Keşfet
              </Link>
              <Link href="/doctors" className="btn btn-outline">
                👨‍⚕️ Uzman Doktorlar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">
              Öne Çıkan Sağlık Makaleleri
            </h2>
            <p className="section-subtitle">
              Uzman doktorlarımız tarafından hazırlanan, güncel ve güvenilir sağlık bilgileri
            </p>
          </div>
          
          <div className="posts-grid">
            {featuredPosts.map((post) => (
              <article key={post.id} className="post-card fade-in-up">
                <div className="post-card-content">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{post.image}</div>
                  </div>
                  <span className="post-category">{post.category}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>👨‍⚕️ {post.author}</span>
                    <span>⏱️ {post.readingTime} dk</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="btn btn-primary w-full">
                    Makaleyi Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <div className="text-center mb-16">
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
                className="category-card fade-in-up"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              📧 Sağlık Bültenimize Abone Olun
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Haftalık sağlık ipuçları ve yeni makalelerimizden haberdar olun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn btn-secondary whitespace-nowrap">
                ✉️ Abone Ol
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              İstediğiniz zaman abonelikten çıkabilirsiniz
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Sağlığınız İçin Doğru Adrestesiniz
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Uzman doktorlarımızla iletişime geçin, sorularınızı sorun ve 
              kişiselleştirilmiş sağlık tavsiyeleri alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn btn-primary">
                🏥 Doktorlarımızla İletişim
              </Link>
              <Link href="/hakkimizda" className="btn btn-outline">
                ℹ️ Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// CSS Styles for this component (already added to globals.css)
const styles = `
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #0066CC;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #6b7280;
  font-weight: 500;
}

.newsletter-section {
  background: linear-gradient(135deg, #0066CC 0%, #00AA88 100%);
  color: white;
  padding: 5rem 0;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.newsletter-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}

@media (max-width: 640px) {
  .newsletter-form {
    flex-direction: column;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem 1rem;
  }
}

.w-full { width: 100%; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-md { max-width: 28rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.mb-16 { margin-bottom: 4rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-1 { margin-bottom: 0.25rem; }
.mt-4 { margin-top: 1rem; }
.text-center { text-align: center; }
.text-4xl { font-size: 2.25rem; }
.text-3xl { font-size: 1.875rem; }
.text-xl { font-size: 1.25rem; }
.text-sm { font-size: 0.875rem; }
.text-5xl { font-size: 3rem; }
.font-bold { font-weight: 700; }
.text-primary { color: #0066CC; }
.text-gray-600 { color: #6b7280; }
.text-gray-900 { color: #1f2937; }
.bg-white { background-color: white; }
.opacity-90 { opacity: 0.9; }
.opacity-75 { opacity: 0.75; }
.whitespace-nowrap { white-space: nowrap; }
.focus\\:outline-none:focus { outline: none; }
.focus\\:ring-2:focus { box-shadow: 0 0 0 2px; }
.focus\\:ring-white:focus { --tw-ring-color: white; }

.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }

@media (min-width: 768px) {
  .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (min-width: 640px) {
  .sm\\:flex-row { flex-direction: row; }
}
`;
