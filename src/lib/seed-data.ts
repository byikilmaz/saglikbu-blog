import { db, dbHelpers } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import type { Category, Doctor } from '@/types';

// Sample kategoriler
export const sampleCategories: Omit<Category, 'id'>[] = [
  {
    name: "Kalp Sağlığı",
    slug: "kalp-sagligi",
    description: "Kardiyovasküler sistem sağlığı, kalp hastalıkları ve korunma yolları",
    icon: "heart",
    color: "text-red-500",
    postCount: 0
  },
  {
    name: "Beslenme",
    slug: "beslenme",
    description: "Sağlıklı beslenme rehberleri, diyet önerileri ve besin değerleri",
    icon: "utensils",
    color: "text-green-500",
    postCount: 0
  },
  {
    name: "Ruh Sağlığı",
    slug: "ruh-sagligi",
    description: "Mental sağlık, psikoloji ve stresle başa çıkma yöntemleri",
    icon: "brain",
    color: "text-purple-500",
    postCount: 0
  },
  {
    name: "Kadın Sağlığı",
    slug: "kadin-sagligi",
    description: "Kadına özel sağlık konuları, gebelik ve jinekoloji",
    icon: "shield",
    color: "text-pink-500",
    postCount: 0
  },
  {
    name: "Çocuk Sağlığı",
    slug: "cocuk-sagligi",
    description: "Pediatri, çocuk gelişimi ve çocuk hastalıkları",
    icon: "baby",
    color: "text-blue-500",
    postCount: 0
  },
  {
    name: "Spor Sağlığı",
    slug: "spor-sagligi",
    description: "Egzersiz, fitness ve spor yaralanmaları rehberleri",
    icon: "activity",
    color: "text-orange-500",
    postCount: 0
  }
];

// Sample doktorlar
export const sampleDoctors: Omit<Doctor, 'id' | 'createdAt'>[] = [
  {
    name: "Dr. Emily Johnson",
    title: "Kardiyoloji Uzmanı",
    specialization: "Kalp ve Damar Hastalıkları",
    experience: 15,
    education: [
      "Harvard Medical School - Tıp Doktoru",
      "Johns Hopkins Hospital - Kardiyoloji Uzmanlığı",
      "Mayo Clinic - İleri Kardiyoloji Fellowship"
    ],
    avatar: "/images/doctors/dr-emily-johnson.jpg",
    bio: "Dr. Emily Johnson, 15 yıllık deneyimi ile kalp ve damar hastalıkları alanında uzman bir kardiyologdur. Önleyici kardiyoloji ve minimal invaziv kalp ameliyatları konularında öncü çalışmalar yapmaktadır.",
    languages: ["İngilizce", "Türkçe"],
    isActive: true
  },
  {
    name: "Dr. Michael Chen",
    title: "Beslenme ve Diyet Uzmanı",
    specialization: "Klinik Beslenme",
    experience: 12,
    education: [
      "Stanford University - Beslenme Bilimleri Doktorası",
      "UC San Francisco - Klinik Beslenme Uzmanlığı",
      "Cornell University - Gıda Bilimleri Yüksek Lisans"
    ],
    avatar: "/images/doctors/dr-michael-chen.jpg",
    bio: "Dr. Michael Chen, obezite, diyabet ve metabolik sendrom tedavisinde beslenme temelli yaklaşımlar konusunda uzmandır. Kişiselleştirilmiş beslenme planları geliştirir.",
    languages: ["İngilizce", "Türkçe", "Çince"],
    isActive: true
  },
  {
    name: "Dr. Sarah Williams",
    title: "Psikiyatri Uzmanı",
    specialization: "Ruh Sağlığı ve Psikoterapi",
    experience: 18,
    education: [
      "Yale Medical School - Tıp Doktoru",
      "Massachusetts General Hospital - Psikiyatri Uzmanlığı",
      "Columbia University - Bilişsel Davranışsal Terapi Sertifikası"
    ],
    avatar: "/images/doctors/dr-sarah-williams.jpg",
    bio: "Dr. Sarah Williams, anksiyete, depresyon ve stres yönetimi konularında uzman bir psikiyatrist. Bilişsel davranışsal terapi ve mindfulness teknikleri kullanır.",
    languages: ["İngilizce", "Türkçe"],
    isActive: true
  },
  {
    name: "Dr. Maria Rodriguez",
    title: "Jinekolog ve Doğum Uzmanı",
    specialization: "Kadın Sağlığı",
    experience: 14,
    education: [
      "Johns Hopkins Medical School - Tıp Doktoru",
      "Cleveland Clinic - Jinekoloji ve Obstetrik Uzmanlığı",
      "Mount Sinai Hospital - Maternal-Fetal Medicine Fellowship"
    ],
    avatar: "/images/doctors/dr-maria-rodriguez.jpg",
    bio: "Dr. Maria Rodriguez, kadın sağlığı, gebelik takibi ve doğum konularında uzman. Minimal invaziv cerrahi teknikleri ve yüksek riskli gebelik takibi yapır.",
    languages: ["İngilizce", "Türkçe", "İspanyolca"],
    isActive: true
  },
  {
    name: "Dr. James Thompson",
    title: "Pediatri Uzmanı",
    specialization: "Çocuk Sağlığı ve Gelişimi",
    experience: 16,
    education: [
      "University of Pennsylvania - Tıp Doktoru",
      "Children's Hospital of Philadelphia - Pediatri Uzmanlığı",
      "Boston Children's Hospital - Pediatrik Kardiyoloji Fellowship"
    ],
    avatar: "/images/doctors/dr-james-thompson.jpg",
    bio: "Dr. James Thompson, yenidoğan bakımından ergen sağlığına kadar çocuk sağlığının tüm alanlarında deneyimli. Çocuk gelişimi ve aşılama konularında uzman.",
    languages: ["İngilizce", "Türkçe"],
    isActive: true
  },
  {
    name: "Dr. Lisa Park",
    title: "Spor Hekimliği Uzmanı",
    specialization: "Spor Yaralanmaları ve Rehabilitasyon",
    experience: 10,
    education: [
      "University of Michigan - Tıp Doktoru",
      "Mayo Clinic - Spor Hekimliği Uzmanlığı",
      "US Olympic Training Center - Spor Fizyolojisi Fellowship"
    ],
    avatar: "/images/doctors/dr-lisa-park.jpg",
    bio: "Dr. Lisa Park, sporcu sağlığı, yaralanma önleme ve rehabilitasyon konularında uzman. Olimpik sporcularla çalışma deneyimi bulunmaktadır.",
    languages: ["İngilizce", "Türkçe", "Korece"],
    isActive: true
  }
];

// Sample blog postları
export const sampleBlogPosts = [
  {
    title: "Kalp Sağlığını Korumak İçin 10 Altın Kural",
    slug: "kalp-sagligini-korumak-icin-10-altin-kural",
    excerpt: "Kalp sağlığınızı korumak için günlük hayatınızda uygulayabileceğiniz basit ama etkili yöntemler ve uzman doktor tavsiyelerini keşfedin.",
    content: `
# Kalp Sağlığını Korumak İçin 10 Altın Kural

Kalp hastalıkları dünya genelinde en önemli ölüm nedenlerinden biri. Ancak bu hastalıkların büyük bir kısmı önlenebilir. İşte kalp sağlığınızı korumak için uygulayabileceğiniz 10 altın kural:

## 1. Düzenli Egzersiz Yapın
Haftada en az 150 dakika orta şiddetli egzersiz kalp sağlığınız için kritik öneme sahip.

## 2. Sağlıklı Beslenin
Omega-3 açısından zengin balık, sebze, meyve ve tam tahılları diyetinize dahil edin.

## 3. Sigarayı Bırakın
Sigara kalp hastalığı riskini 2-4 kat artırır.

## 4. Stresle Başa Çıkın
Kronik stres kalp sağlığınızı olumsuz etkiler. Meditasyon ve yoga deneyin.

## 5. Yeterli Uyuyun
Günde 7-9 saat kaliteli uyku kalp sağlığı için vazgeçilmez.

## Sonuç
Bu basit adımları hayatınıza entegre ederek kalp sağlığınızı koruyabilir ve daha uzun, sağlıklı bir yaşam sürebilirsiniz.
    `,
    featuredImage: "/images/blog/kalp-sagligi.jpg",
    author: "Dr. Emily Johnson",
    authorAvatar: "/images/doctors/dr-emily-johnson.jpg",
    category: {
      id: "kalp-sagligi",
      name: "Kalp Sağlığı",
      slug: "kalp-sagligi",
      description: "Kardiyovasküler sistem sağlığı",
      icon: "heart",
      color: "text-red-500",
      postCount: 1
    },
    tags: ["kalp sağlığı", "egzersiz", "beslenme", "önleyici tıp"],
    readingTime: 5,
    isPublished: true,
    isFeatured: true,
    views: 0,
    likes: 0,
    publishedAt: new Date('2024-01-15')
  },
  {
    title: "Sağlıklı Beslenme Rehberi: Ne Yemeli, Ne Yememeli?",
    slug: "saglikli-beslenme-rehberi",
    excerpt: "Uzman doktorlardan sağlıklı beslenme önerileri, dengeli diyet planı oluşturma rehberi ve besin seçimi konusunda pratik ipuçları.",
    content: `
# Sağlıklı Beslenme Rehberi: Ne Yemeli, Ne Yememeli?

Sağlıklı beslenme, iyi bir yaşam kalitesi için temel taştır. Doğru besin seçimleri yaparak hem fiziksel hem de mental sağlığınızı koruyabilirsiniz.

## Tabağınızda Bulunması Gerekenler

### Sebze ve Meyveler
- Günde en az 5 porsiyon sebze ve meyve tüketin
- Renkli sebzeler vitamins ve mineral açısından zengin
- Mevsimlik ürünleri tercih edin

### Tam Tahıllar
- Beyaz ekmek yerine tam buğday ekmeği
- Esmer pirinç, quinoa, yulaf gibi tam tahıllar

### Protein Kaynakları
- Yağsız et, tavuk, balık
- Baklagiller, yumurta
- Kuruyemişler (ölçülü tüketim)

## Sınırlandırılması Gerekenler
- İşlenmiş gıdalar
- Şekerli içecekler
- Aşırı tuz ve şeker
- Trans yağlar

## Sonuç
Dengeli beslenme bir yaşam tarzıdır. Küçük değişikliklerle büyük faydalar elde edebilirsiniz.
    `,
    featuredImage: "/images/blog/beslenme.jpg",
    author: "Dr. Michael Chen",
    authorAvatar: "/images/doctors/dr-michael-chen.jpg",
    category: {
      id: "beslenme",
      name: "Beslenme",
      slug: "beslenme",
      description: "Sağlıklı beslenme rehberleri",
      icon: "utensils",
      color: "text-green-500",
      postCount: 1
    },
    tags: ["beslenme", "diyet", "sağlıklı yaşam", "besin değerleri"],
    readingTime: 7,
    isPublished: true,
    isFeatured: true,
    views: 0,
    likes: 0,
    publishedAt: new Date('2024-01-12')
  },
  {
    title: "Mental Sağlık: Stresle Başa Çıkma Yolları",
    slug: "mental-saglik-stresle-basa-cikma",
    excerpt: "Modern yaşamın getirdiği stresle başa çıkmak için psikoloji uzmanlarından etkili yöntemler ve zihinsel sağlığı koruma teknikleri.",
    content: `
# Mental Sağlık: Stresle Başa Çıkma Yolları

Modern yaşamın hızlı temposu ve sürekli baskılar mental sağlığımızı olumsuz etkileyebilir. Stresle sağlıklı başa çıkma yöntemleri öğrenmek yaşam kalitenizi artıracaktır.

## Stresin Belirtileri
- Sürekli gerginlik hissi
- Uyku sorunları
- Konsantrasyon güçlüğü
- Fiziksel şikayetler (baş ağrısı, mide problemleri)

## Stresle Başa Çıkma Teknikleri

### 1. Nefes Egzersizleri
Derin nefes alma tekniklerini öğrenerek stres anında kendinizi sakinleştirebilirsiniz.

### 2. Mindfulness ve Meditasyon
Günde 10-15 dakika meditasyon yaparak zihinsel berraklığınızı artırabilirsiniz.

### 3. Fiziksel Aktivite
Düzenli egzersiz endorfin salgılanmasını artırarak doğal stres giderici görevi görür.

### 4. Sosyal Destek
Aile ve arkadaşlarınızla kaliteli zaman geçirmek mental sağlığınızı destekler.

### 5. Hobiler ve İlgi Alanları
Sevdiğiniz aktivitelerle uğraşmak stresi azaltır ve mutluluk verir.

## Ne Zaman Yardım Almalısınız?
Stres günlük yaşamınızı ciddi şekilde etkiliyorsa mutlaka bir uzman desteği alın.

## Sonuç
Mental sağlık fiziksel sağlık kadar önemlidir. Stresi yönetmeyi öğrenmek daha mutlu ve sağlıklı bir yaşam için kritiktir.
    `,
    featuredImage: "/images/blog/mental-saglik.jpg",
    author: "Dr. Sarah Williams",
    authorAvatar: "/images/doctors/dr-sarah-williams.jpg",
    category: {
      id: "ruh-sagligi",
      name: "Ruh Sağlığı",
      slug: "ruh-sagligi",
      description: "Mental sağlık ve psikoloji",
      icon: "brain",
      color: "text-purple-500",
      postCount: 1
    },
    tags: ["mental sağlık", "stres yönetimi", "meditasyon", "psikoloji"],
    readingTime: 6,
    isPublished: true,
    isFeatured: true,
    views: 0,
    likes: 0,
    publishedAt: new Date('2024-01-10')
  }
];

// Seed fonksiyonları
export async function seedCategories() {
  try {
    const promises = sampleCategories.map(category => 
      addDoc(collection(db, 'categories'), category)
    );
    await Promise.all(promises);
    console.log('Categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}

export async function seedDoctors() {
  try {
    const promises = sampleDoctors.map(doctor => 
      addDoc(collection(db, 'doctors'), {
        ...doctor,
        createdAt: new Date()
      })
    );
    await Promise.all(promises);
    console.log('Doctors seeded successfully');
  } catch (error) {
    console.error('Error seeding doctors:', error);
  }
}

export async function seedBlogPosts() {
  try {
    const promises = sampleBlogPosts.map(post => 
      dbHelpers.createPost(post)
    );
    await Promise.all(promises);
    console.log('Blog posts seeded successfully');
  } catch (error) {
    console.error('Error seeding blog posts:', error);
  }
}

export async function seedAllData() {
  console.log('Starting to seed data...');
  await seedCategories();
  await seedDoctors();
  await seedBlogPosts();
  console.log('All data seeded successfully!');
} 