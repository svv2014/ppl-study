import type { Question } from './types';

export interface QuizPerQuestion {
  questionId: string;
  prompt: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizResult {
  correct: number;
  total: number;
  percent: number;
  perQuestion: QuizPerQuestion[];
}

export function scoreQuiz(
  answers: Record<string, string>,
  questions: Question[],
): QuizResult {
  const perQuestion: QuizPerQuestion[] = questions.map((q) => {
    const userAnswer = answers[q.id] ?? '';
    const isCorrect = userAnswer === q.answer;
    return {
      questionId: q.id,
      prompt: q.prompt,
      userAnswer,
      correctAnswer: q.answer,
      isCorrect,
      explanation: q.explanation,
    };
  });

  const correct = perQuestion.filter((r) => r.isCorrect).length;
  const total = questions.length;
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  return { correct, total, percent, perQuestion };
}
