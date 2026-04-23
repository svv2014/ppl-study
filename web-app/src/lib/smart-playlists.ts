import { getAllLessons } from './lesson-loader';
import type { Lesson, Progress } from './types';
import { TOPICS } from './curriculum';

// Returns incomplete lessons interleaved round-robin, weakest topic (lowest completion %) first.
export function weakestTopicFirst(progress: Progress): Lesson[] {
  const all = getAllLessons();
  const completed = new Set(progress.completed);

  const available = (topic: string): Lesson[] =>
    all.filter(
      (l) =>
        l.topic === topic &&
        l.status !== 'planning' &&
        l.audio !== null &&
        !completed.has(l.id),
    );

  const completionRate = (topic: string): number => {
    const pool = all.filter(
      (l) => l.topic === topic && l.status !== 'planning' && l.audio !== null,
    );
    if (pool.length === 0) return 1;
    return pool.filter((l) => completed.has(l.id)).length / pool.length;
  };

  // Sort topics weakest (lowest completion) first, stable across equal rates
  const sortedTopics = [...TOPICS].sort((a, b) => completionRate(a) - completionRate(b));

  // Mutable queues per topic
  const queues = Object.fromEntries(sortedTopics.map((t) => [t, available(t)]));

  // Round-robin until all queues empty
  const result: Lesson[] = [];
  let anyLeft = true;
  while (anyLeft) {
    anyLeft = false;
    for (const topic of sortedTopics) {
      const lesson = queues[topic].shift();
      if (lesson) {
        result.push(lesson);
        anyLeft = true;
      }
    }
  }
  return result;
}

// Returns completed lessons whose last quiz attempt is older than 7 days (or never attempted).
export function dueForReview(progress: Progress): Lesson[] {
  const all = getAllLessons();
  const completed = new Set(progress.completed);
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  // Latest quiz timestamp per lesson
  const latestQuiz: Record<string, number> = {};
  for (const attempt of progress.quizHistory) {
    const ts = new Date(attempt.timestamp).getTime();
    if (!latestQuiz[attempt.lessonId] || ts > latestQuiz[attempt.lessonId]) {
      latestQuiz[attempt.lessonId] = ts;
    }
  }

  return all.filter((l) => {
    if (!completed.has(l.id) || l.audio === null) return false;
    const lastReviewed = latestQuiz[l.id] ?? 0;
    return now - lastReviewed > sevenDaysMs;
  });
}
