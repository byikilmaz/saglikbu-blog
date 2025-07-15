import Link from "next/link";

// Sample data
const featuredPosts = [
  {
    id: 1,
    title: "Kalp Sağlığını Korumak İçin 10 Altın Kural",
    excerpt: "Kalp sağlığınızı korumak için günlük hayatınızda uygulayabileceğiniz basit ama etkili yöntemler.",
    category: "Kalp Sağlığı",
    readingTime: 5,
    author: "Dr. Mehmet Özkan"
  },
  {
    id: 2,
    title: "Sağlıklı Beslenme Rehberi: Ne Yemeli, Ne Yememeli?",
    excerpt: "Uzmanlardan sağlıklı beslenme önerileri ve dengeli diyet planı oluşturma rehberi.",
    category: "Beslenme",
    readingTime: 7,
    author: "Dr. Ayşe Demir"
  },
  {
    id: 3,
    title: "Mental Sağlık: Stresle Başa Çıkma Yolları",
    excerpt: "Modern yaşamın getirdiği stresle başa çıkmak için psikoloji uzmanlarından öneriler.",
    category: "Ruh Sağlığı",
    readingTime: 6,
    author: "Dr. Can Yılmaz"
  }
];

const categories = [
  {
    name: "Kalp Sağlığı",
    description: "Kardiyovasküler sistem sağlığı",
    icon: "❤️",
    postCount: 24,
  },
  {
    name: "Beslenme",
    description: "Sağlıklı beslenme rehberleri",
    icon: "🥗",
    postCount: 31,
  },
  {
    name: "Ruh Sağlığı",
    description: "Mental sağlık ve psikoloji",
    icon: "🧠",
    postCount: 18,
  },
  {
    name: "Kadın Sağlığı",
    description: "Kadına özel sağlık konuları",
    icon: "🛡️",
    postCount: 22,
  },
  {
    name: "Çocuk Sağlığı",
    description: "Pediatri ve çocuk gelişimi",
    icon: "👶",
    postCount: 16,
  },
  {
    name: "Spor Sağlığı",
    description: "Egzersiz ve fitness rehberleri",
    icon: "⚡",
    postCount: 12,
  }
];

const popularPosts = [
  { title: "COVID-19 Aşısı Hakkında Bilinmesi Gerekenler", readingTime: 4 },
  { title: "D Vitamini Eksikliği Belirtileri ve Çözümleri", readingTime: 3 },
  { title: "Uyku Kalitesini Artırmak İçin 8 Etkili Yöntem", readingTime: 5 },
  { title: "Migren Ağrılarından Kurtulmanın Doğal Yolları", readingTime: 6 }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1 className="mb-4">
                Sağlığınız İçin
                <br />
                <span className="text-primary">Güvenilir Kaynak</span>
              </h1>
              <p className="mb-8 text-gray-600" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
                Uzman doktorlardan sağlık tavsiyeleri, güncel tıp haberleri ve 
                kapsamlı sağlık rehberleri ile sağlıklı yaşamın anahtarını keşfedin.
              </p>
              
              <div className="flex gap-4" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                <Link href="/blog" className="btn btn-primary">
                  Sağlık Bloglarını Keşfet →
                </Link>
                <Link href="/doctors" className="btn btn-outline">
                  Uzman Doktorlarımız
                </Link>
              </div>

              <div className="flex gap-8 py-8" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <div className="flex items-center gap-4">
                  <span>👁️</span>
                  <span className="text-gray-600">10,000+ okuyucu</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>❤️</span>
                  <span className="text-gray-600">500+ makale</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.2) 0%, rgba(0, 170, 136, 0.2) 100%)',
                borderRadius: '24px',
                padding: '3rem',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>❤️</div>
                <h3 className="mb-4">SağlıkBu</h3>
                <p className="text-gray-600">Sağlığınız bizim önceliğimiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Öne Çıkan Sağlık Makaleleri</h2>
            <p className="text-gray-600" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Uzman doktorlarımızın hazırladığı en güncel ve en çok okunan sağlık rehberleri
            </p>
          </div>

          <div className="grid md-grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="card">
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.2) 0%, rgba(0, 170, 136, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  ❤️
                </div>
                
                <div className="card-header">
                  <div className="flex justify-between items-center mb-4">
                    <span style={{
                      backgroundColor: 'rgba(0, 102, 204, 0.1)',
                      color: '#0066cc',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {post.category}
                    </span>
                    <span className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                      ⏱️ {post.readingTime} dk
                    </span>
                  </div>
                  <h3 className="card-title mb-4">{post.title}</h3>
                  <p className="card-description">{post.excerpt}</p>
                </div>
                
                <div className="card-content">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600" style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                      {post.author}
                    </span>
                    <Link href={`/blog/${post.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link href="/blog" className="btn btn-outline">
              Tüm Makaleleri Görüntüle →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Sağlık Kategorileri</h2>
            <p className="text-gray-600" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              İlgilendiğiniz sağlık konularını keşfedin ve uzman tavsiyeleri alın
            </p>
          </div>

          <div className="grid md-grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="card category-card text-center">
                <div className="card-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="card-title mb-4">{category.name}</h3>
                  <p className="card-description">{category.description}</p>
                </div>
                <div className="card-content">
                  <span style={{
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {category.postCount} makale
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SağlıkBu Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg-grid-cols-3 gap-8">
            <div style={{ gridColumn: 'span 2' }}>
              <div className="mb-12">
                <h2 className="mb-4">Neden SağlıkBu?</h2>
                <p className="text-gray-600" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
                  Sağlığınız için güvenilir, uzman onaylı ve güncel bilgilere tek yerden ulaşın
                </p>
              </div>
              
              <div className="grid md-grid-cols-2 gap-8">
                <div className="card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.1) 100%)' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div style={{ padding: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '8px' }}>
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>🛡️</span>
                    </div>
                    <h3>Güvenilir İçerik</h3>
                  </div>
                  <p className="text-gray-600">
                    Tüm makalelerimiz uzman doktorlar tarafından yazılır ve tıbbi açıdan doğrulanır.
                  </p>
                </div>
                
                <div className="card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0.1) 100%)' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div style={{ padding: '0.5rem', backgroundColor: '#22c55e', borderRadius: '8px' }}>
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>❤️</span>
                    </div>
                    <h3>Kişiselleştirilmiş</h3>
                  </div>
                  <p className="text-gray-600">
                    İhtiyaçlarınıza göre özelleştirilmiş sağlık tavsiyeleri ve rehberler.
                  </p>
                </div>
                
                <div className="card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.1) 100%)' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div style={{ padding: '0.5rem', backgroundColor: '#a855f7', borderRadius: '8px' }}>
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>⚡</span>
                    </div>
                    <h3>Güncel Bilgiler</h3>
                  </div>
                  <p className="text-gray-600">
                    En son tıp araştırmalarına dayalı güncel sağlık bilgileri.
                  </p>
                </div>
                
                <div className="card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(245, 101, 67, 0.05) 0%, rgba(245, 101, 67, 0.1) 100%)' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div style={{ padding: '0.5rem', backgroundColor: '#f56543', borderRadius: '8px' }}>
                      <span style={{ color: 'white', fontSize: '1.5rem' }}>🧠</span>
                    </div>
                    <h3>Kolay Anlaşılır</h3>
                  </div>
                  <p className="text-gray-600">
                    Karmaşık tıbbi konuları herkesin anlayabileceği dilde açıklıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card mb-8">
                <div className="card-header">
                  <h3 className="card-title">Popüler Makaleler</h3>
                </div>
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-start gap-4 py-4" style={{ borderBottom: index < popularPosts.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                      <span style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#0066cc',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </span>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                          {post.title}
                        </h4>
                        <div className="flex items-center text-gray-600" style={{ fontSize: '0.75rem' }}>
                          <span>⏱️</span>
                          <span style={{ marginLeft: '0.25rem' }}>{post.readingTime} dk okuma</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 170, 136, 0.1) 100%)' }}>
                <div className="card-header">
                  <h3 className="card-title">Sağlık Haberleri</h3>
                  <p className="card-description">
                    Haftalık sağlık bültenimize abone olun ve güncel sağlık haberlerini kaçırmayın
                  </p>
                </div>
                <div className="card-content">
                  <button className="btn btn-primary" style={{ width: '100%' }}>
                    Ücretsiz Abone Ol →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
