// SağlıkBu Blog Sistemi Type Definitions

// Kullanıcı türleri
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'doctor' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// Doktor profil türü
export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: number;
  education: string[];
  avatar: string;
  bio: string;
  languages: string[];
  isActive: boolean;
  createdAt: Date;
}

// Blog post türü
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  authorAvatar?: string;
  category: Category;
  tags: string[];
  readingTime: number;
  isPublished: boolean;
  isFeatured: boolean;
  views: number;
  likes: number;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Kategori türü
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  postCount: number;
}

// Soru-cevap türleri
export interface Question {
  id: string;
  question: string;
  askerName: string;
  askerEmail: string;
  blogPostId: string;
  isAnswered: boolean;
  isPublic: boolean;
  createdAt: Date;
}

export interface Answer {
  id: string;
  questionId: string;
  answer: string;
  doctorId: string;
  doctorName: string;
  createdAt: Date;
}

// Newsletter türü
export interface Newsletter {
  id: string;
  email: string;
  isActive: boolean;
  subscribedAt: Date;
}

// Comment türü
export interface Comment {
  id: string;
  blogPostId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  isApproved: boolean;
  createdAt: Date;
}

// API Response türleri
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Writesonic API türleri
export interface WritesonicRequest {
  topic: string;
  language: string;
  tone: string;
  length: 'short' | 'medium' | 'long';
  keywords?: string[];
}

export interface WritesonicResponse {
  content: string;
  title: string;
  excerpt: string;
}

// Form türleri
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuestionForm {
  question: string;
  askerName: string;
  askerEmail: string;
  blogPostId: string;
}

// Admin Dashboard türleri
export interface DashboardStats {
  totalPosts: number;
  totalUsers: number;
  totalViews: number;
  totalQuestions: number;
  monthlyGrowth: {
    posts: number;
    users: number;
    views: number;
  };
}

// SEO Meta türleri
export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
} 