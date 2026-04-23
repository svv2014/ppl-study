import type { Question } from './types';
import { scoreQuiz } from './quiz';
import { getAllLessons } from './lesson-loader';
import { TOPIC_LABELS } from './curriculum';

export type { QuizResult } from './quiz';

export interface ExamQuestion extends Question {
  lessonId: string;
  lessonSlug: string;
  lessonTopic: string;
}

export interface ExamPerQuestion {
  questionId: string;
  prompt: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
  lessonId: string;
  lessonSlug: string;
  lessonTopic: string;
}

export interface TopicBreakdown {
  topic: string;
  label: string;
  correct: number;
  total: number;
  percent: number;
}

export interface ExamResult {
  correct: number;
  total: number;
  percent: number;
  passed: boolean;
  hitTarget: boolean;
  perQuestion: ExamPerQuestion[];
  perTopic: TopicBreakdown[];
}

export const TOPIC_WEIGHTS: Record<string, number> = {
  'air-law': 30,
  'navigation': 25,
  'meteorology': 25,
  'general-knowledge': 20,
};

export const POOL_CONFIGS = {
  full: { count: 100, minutes: 210 },
  quick: { count: 40, minutes: 90 },
} as const;

function seededRng(seed: number): () => number {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), s | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildExamPool(totalCount: number, seed?: number): ExamQuestion[] {
  const rng = seededRng(seed !== undefined ? seed : (Date.now() >>> 0));
  const lessons = getAllLessons().filter((l) => l.questions.length > 0);

  const byTopic: Record<string, ExamQuestion[]> = {};
  for (const lesson of lessons) {
    if (!byTopic[lesson.topic]) byTopic[lesson.topic] = [];
    for (const q of lesson.questions) {
      byTopic[lesson.topic].push({
        ...q,
        lessonId: lesson.id,
        lessonSlug: lesson.slug,
        lessonTopic: lesson.topic,
      });
    }
  }

  const topics = Object.keys(TOPIC_WEIGHTS);
  const totalWeight = topics.reduce((sum, t) => sum + (TOPIC_WEIGHTS[t] ?? 0), 0);

  const result: ExamQuestion[] = [];
  let remaining = totalCount;

  topics.forEach((topic, i) => {
    const available = shuffle(byTopic[topic] ?? [], rng);
    if (available.length === 0) return;

    const isLast = i === topics.length - 1;
    const count = isLast
      ? remaining
      : Math.round(((TOPIC_WEIGHTS[topic] ?? 0) / totalWeight) * totalCount);
    remaining -= count;

    for (let j = 0; j < count; j++) {
      result.push(available[j % available.length]);
    }
  });

  return shuffle(result, rng);
}

export function scoreExam(answers: Record<string, string>, questions: ExamQuestion[]): ExamResult {
  const base = scoreQuiz(answers, questions as Question[]);

  const topicMap: Record<string, { correct: number; total: number }> = {};
  questions.forEach((q, i) => {
    const pq = base.perQuestion[i];
    if (!pq) return;
    if (!topicMap[q.lessonTopic]) topicMap[q.lessonTopic] = { correct: 0, total: 0 };
    topicMap[q.lessonTopic].total++;
    if (pq.isCorrect) topicMap[q.lessonTopic].correct++;
  });

  const perTopic: TopicBreakdown[] = Object.entries(topicMap).map(([topic, { correct, total }]) => ({
    topic,
    label: TOPIC_LABELS[topic] ?? topic,
    correct,
    total,
    percent: total > 0 ? Math.round((correct / total) * 100) : 0,
  }));

  const perQuestion: ExamPerQuestion[] = base.perQuestion.map((pq, i) => ({
    ...pq,
    lessonId: questions[i]?.lessonId ?? '',
    lessonSlug: questions[i]?.lessonSlug ?? '',
    lessonTopic: questions[i]?.lessonTopic ?? '',
  }));

  return {
    correct: base.correct,
    total: base.total,
    percent: base.percent,
    passed: base.percent >= 60,
    hitTarget: base.percent >= 80,
    perQuestion,
    perTopic,
  };
}

export function formatTime(totalSeconds: number): string {
  if (totalSeconds <= 0) return '0:00';
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}
