import Link from "next/link";
import { ArrowRight, Heart, Activity, Brain, Baby, Utensils, Shield, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data - Bu veriler normalde database'den gelecek
const featuredPosts = [
  {
    id: 1,
    title: "Kalp Sağlığını Korumak İçin 10 Altın Kural",
    excerpt: "Kalp sağlığınızı korumak için günlük hayatınızda uygulayabileceğiniz basit ama etkili yöntemler.",
    image: "/images/kalp-sagligi.jpg",
    category: "Kalp Sağlığı",
    readingTime: 5,
    publishedAt: "2024-01-15",
    author: "Dr. Mehmet Özkan"
  },
  {
    id: 2,
    title: "Sağlıklı Beslenme Rehberi: Ne Yemeli, Ne Yememeli?",
    excerpt: "Uzmanlardan sağlıklı beslenme önerileri ve dengeli diyet planı oluşturma rehberi.",
    image: "/images/beslenme.jpg",
    category: "Beslenme",
    readingTime: 7,
    publishedAt: "2024-01-12",
    author: "Dr. Ayşe Demir"
  },
  {
    id: 3,
    title: "Mental Sağlık: Stresle Başa Çıkma Yolları",
    excerpt: "Modern yaşamın getirdiği stresle başa çıkmak için psikoloji uzmanlarından öneriler.",
    image: "/images/mental-saglik.jpg",
    category: "Ruh Sağlığı",
    readingTime: 6,
    publishedAt: "2024-01-10",
    author: "Dr. Can Yılmaz"
  }
];

const categories = [
  {
    name: "Kalp Sağlığı",
    description: "Kardiyovasküler sistem sağlığı",
    icon: Heart,
    postCount: 24,
    color: "text-red-500"
  },
  {
    name: "Beslenme",
    description: "Sağlıklı beslenme rehberleri",
    icon: Utensils,
    postCount: 31,
    color: "text-green-500"
  },
  {
    name: "Ruh Sağlığı",
    description: "Mental sağlık ve psikoloji",
    icon: Brain,
    postCount: 18,
    color: "text-purple-500"
  },
  {
    name: "Kadın Sağlığı",
    description: "Kadına özel sağlık konuları",
    icon: Shield,
    postCount: 22,
    color: "text-pink-500"
  },
  {
    name: "Çocuk Sağlığı",
    description: "Pediatri ve çocuk gelişimi",
    icon: Baby,
    postCount: 16,
    color: "text-blue-500"
  },
  {
    name: "Spor Sağlığı",
    description: "Egzersiz ve fitness rehberleri",
    icon: Activity,
    postCount: 12,
    color: "text-orange-500"
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sağlığınız İçin
                  <span className="text-primary block">Güvenilir Kaynak</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Uzman doktorlardan sağlık tavsiyeleri, güncel tıp haberleri ve 
                  kapsamlı sağlık rehberleri ile sağlıklı yaşamın anahtarını keşfedin.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Sağlık Bloglarını Keşfet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Uzman Doktorlarımız
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>10,000+ okuyucu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>500+ makale</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Heart className="h-24 w-24 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-900">SağlıkBu</h3>
                    <p className="text-gray-600">Sağlığınız bizim önceliğimiz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Öne Çıkan Sağlık Makaleleri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uzman doktorlarımızın hazırladığı en güncel ve en çok okunan sağlık rehberleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} dk</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        Devamını Oku
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" variant="outline">
                Tüm Makaleleri Görüntüle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Sağlık Kategorileri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İlgilendiğiniz sağlık konularını keşfedin ve uzman tavsiyeleri alın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <category.icon className={`h-12 w-12 ${category.color}`} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-sm text-gray-500">
                    {category.postCount} makale
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Posts Sidebar */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Neden SağlıkBu?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Güvenilir İçerik</h3>
                  </div>
                  <p className="text-gray-600">
                    Tüm makalelerimiz uzman doktorlar tarafından yazılır ve tıbbi açıdan doğrulanır.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Kişiselleştirilmiş</h3>
                  </div>
                  <p className="text-gray-600">
                    İhtiyaçlarınıza göre özelleştirilmiş sağlık tavsiyeleri ve rehberler.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Güncel Bilgiler</h3>
                  </div>
                  <p className="text-gray-600">
                    En son tıp araştırmalarına dayalı güncel sağlık bilgileri.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Kolay Anlaşılır</h3>
                  </div>
                  <p className="text-gray-600">
                    Karmaşık tıbbi konuları herkesin anlayabileceği dilde açıklıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Popüler Makaleler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm leading-snug">{post.title}</h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readingTime} dk okuma
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle>Sağlık Haberleri</CardTitle>
                  <CardDescription>
                    Haftalık sağlık bültenimize abone olun
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Ücretsiz Abone Ol
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
