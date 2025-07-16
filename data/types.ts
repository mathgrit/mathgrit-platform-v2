// Lokasi: data/types.ts

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
  questions: QuizQuestion[]; // Pastikan properti ini ada
}

export interface QuizResults {
  quizId: string; // Pastikan properti ini ada
  score: number;
  totalQuestions: number;
}