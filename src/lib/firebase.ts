import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import type { Question, Answer, BlogPost } from '@/types';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SKSqnLNWe38iLe3TN28gXd-oSz9qsXQ",
  authDomain: "saglikbu-bfa94.firebaseapp.com",
  projectId: "saglikbu-bfa94",
  storageBucket: "saglikbu-bfa94.firebasestorage.app",
  messagingSenderId: "63700740589",
  appId: "1:63700740589:web:be9109a0d5d14745e15fe4",
  measurementId: "G-B9SXZBVB43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Database helper functions
export const dbHelpers = {
  // Blog posts
  async getAllPosts() {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('isPublished', '==', true), orderBy('publishedAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async getFeaturedPosts() {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('isFeatured', '==', true), where('isPublished', '==', true), limit(6));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async getPostBySlug(slug: string) {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('slug', '==', slug));
    const snapshot = await getDocs(q);
    return snapshot.empty ? null : { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
  },

  async getPostsByCategory(categoryId: string) {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('category.id', '==', categoryId), where('isPublished', '==', true));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // Categories
  async getAllCategories() {
    const categoriesRef = collection(db, 'categories');
    const snapshot = await getDocs(categoriesRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // Doctors
  async getAllDoctors() {
    const doctorsRef = collection(db, 'doctors');
    const q = query(doctorsRef, where('isActive', '==', true));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async getDoctorById(id: string) {
    const doctorRef = doc(db, 'doctors', id);
    const snapshot = await getDoc(doctorRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  },

  // Questions & Answers
  async getQuestionsByPostId(postId: string) {
    const questionsRef = collection(db, 'questions');
    const q = query(questionsRef, where('blogPostId', '==', postId), where('isPublic', '==', true));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async getAnswersByQuestionId(questionId: string) {
    const answersRef = collection(db, 'answers');
    const q = query(answersRef, where('questionId', '==', questionId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async addQuestion(questionData: Omit<Question, 'id' | 'createdAt' | 'isAnswered' | 'isPublic'>) {
    const questionsRef = collection(db, 'questions');
    return await addDoc(questionsRef, {
      ...questionData,
      createdAt: new Date(),
      isAnswered: false,
      isPublic: true
    });
  },

  async addAnswer(answerData: Omit<Answer, 'id' | 'createdAt'>) {
    const answersRef = collection(db, 'answers');
    const result = await addDoc(answersRef, {
      ...answerData,
      createdAt: new Date()
    });

    // Update question as answered
    const questionRef = doc(db, 'questions', answerData.questionId);
    await updateDoc(questionRef, { isAnswered: true });

    return result;
  },

  // Newsletter
  async addNewsletterSubscriber(email: string) {
    const newsletterRef = collection(db, 'newsletter');
    return await addDoc(newsletterRef, {
      email,
      isActive: true,
      subscribedAt: new Date()
    });
  },

  // Admin functions
  async createPost(postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt' | 'views' | 'likes'>) {
    const postsRef = collection(db, 'posts');
    return await addDoc(postsRef, {
      ...postData,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0,
      likes: 0
    });
  },

  async updatePost(postId: string, updates: Partial<Omit<BlogPost, 'id' | 'createdAt'>>) {
    const postRef = doc(db, 'posts', postId);
    return await updateDoc(postRef, {
      ...updates,
      updatedAt: new Date()
    });
  },

  async deletePost(postId: string) {
    const postRef = doc(db, 'posts', postId);
    return await deleteDoc(postRef);
  },

  async incrementPostViews(postId: string) {
    const postRef = doc(db, 'posts', postId);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      const currentViews = postSnap.data().views || 0;
      await updateDoc(postRef, { views: currentViews + 1 });
    }
  }
};

export default app; 