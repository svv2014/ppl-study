export type Topic = 'air-law' | 'navigation' | 'meteorology' | 'general-knowledge';
export type LessonStatus = 'planning' | 'draft' | 'complete';

export interface Question {
  id: string;
  prompt: string;
  choices: Record<string, string>;
  answer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  topic: Topic;
  order: number;
  slug: string;
  title: string;
  duration_min: number;
  status: LessonStatus;
  audio: string | null;
  visual: string;
  sources: string[];
  questions: Question[];
  body: string;
}

export interface QuizAttempt {
  lessonId: string;
  timestamp: string;
  score: number;
  total: number;
  percent: number;
  answers: Record<string, string>;
}

export interface Progress {
  completed: string[];
  lastExamScores: Record<string, number>;
  quizHistory: QuizAttempt[];
  lastUpdated: string;
}

export interface ProgressStore {
  getProgress(): Progress;
  markComplete(lessonId: string): void;
  markIncomplete(lessonId: string): void;
  recordQuizAttempt(attempt: QuizAttempt): void;
  setLastExamScore(lessonId: string, percent: number): void;
  reset(): void;
}
