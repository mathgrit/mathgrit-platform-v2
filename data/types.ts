// Lokasi: data/types.ts

import type { User as SupabaseUser } from '@supabase/supabase-js';

// Tipe data untuk Pengguna (User)
// ---
interface Profile {
  full_name: string;
  xp: number;
  level: number;
  streak: number;
}
export type User = SupabaseUser & Profile;
// ---

export interface Problem {
  id: string;
  contest: string;
  year: number;
  problemNumber: number;
  difficulty: number;
  statement: string;
  solution: string;
  topics: string[];
}

export interface Contest {
  id: string;
  name: string;
  year: number;
  problemCount: number;
  difficulty: "High School" | "Undergraduate" | "Graduate";
  description: string;
  problems: Problem[];
}

export interface QuizQuestion {
  id: string;
  type: "multiple_choice" | "fill_blank" | "step_proof";
  question: string;
  options?: string[];
  answer: string | number;
  explanation: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  course: string;
  category: string;
  questionCount: number;
  estimatedTime: number;
  difficulty: number;
  description: string;
  completions: number;
  questions: QuizQuestion[];
}

export interface QuizResults {
  quizId: string;
  score: number;
  totalQuestions: number;
}

export interface ContentBlock {
  type: 'heading' | 'text' | 'formula' | 'image';
  content: string;
}

export interface Slide {
  content: ContentBlock[];
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  topic: string;
  description: string;
  rating: number;
  students: number;
  videoPlaylist?: string;
  materials?: { name: string; type: string; url: string }[];
  
  // Tambahkan properti-properti yang hilang di sini
  slides?: Slide[];
  interactiveExamples?: any[];
  keyFormulas?: any[];
}