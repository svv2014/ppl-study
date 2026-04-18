import { useState, useEffect, useCallback } from 'react';
import type { Progress, ProgressStore, QuizAttempt } from './types';

const STORAGE_KEY = 'ppl-study-progress';

function emptyProgress(): Progress {
  return {
    completed: [],
    lastExamScores: {},
    quizHistory: [],
    lastUpdated: new Date().toISOString(),
  };
}

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      completed: parsed.completed ?? [],
      lastExamScores: parsed.lastExamScores ?? {},
      quizHistory: parsed.quizHistory ?? [],
      lastUpdated: parsed.lastUpdated ?? new Date().toISOString(),
    };
  } catch {
    return emptyProgress();
  }
}

function save(progress: Progress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export class LocalStorageProgressStore implements ProgressStore {
  getProgress(): Progress {
    return load();
  }

  markComplete(lessonId: string): void {
    const p = load();
    if (!p.completed.includes(lessonId)) {
      p.completed = [...p.completed, lessonId];
      p.lastUpdated = new Date().toISOString();
      save(p);
    }
  }

  markIncomplete(lessonId: string): void {
    const p = load();
    p.completed = p.completed.filter((id) => id !== lessonId);
    p.lastUpdated = new Date().toISOString();
    save(p);
  }

  recordQuizAttempt(attempt: QuizAttempt): void {
    const p = load();
    p.quizHistory = [...p.quizHistory, attempt];
    p.lastExamScores[attempt.lessonId] = attempt.percent;
    p.lastUpdated = new Date().toISOString();
    save(p);
  }

  setLastExamScore(lessonId: string, percent: number): void {
    const p = load();
    p.lastExamScores[lessonId] = percent;
    p.lastUpdated = new Date().toISOString();
    save(p);
  }

  reset(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}

const defaultStore = new LocalStorageProgressStore();

export interface UseProgressResult {
  progress: Progress;
  store: ProgressStore;
  markComplete: (lessonId: string) => void;
  markIncomplete: (lessonId: string) => void;
  isComplete: (lessonId: string) => boolean;
  recordQuizAttempt: (attempt: QuizAttempt) => void;
  reset: () => void;
}

export function useProgress(store: ProgressStore = defaultStore): UseProgressResult {
  const [progress, setProgress] = useState<Progress>(() => store.getProgress());

  // Sync across tabs
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY) {
        setProgress(store.getProgress());
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [store]);

  const markComplete = useCallback(
    (lessonId: string) => {
      store.markComplete(lessonId);
      setProgress(store.getProgress());
    },
    [store],
  );

  const markIncomplete = useCallback(
    (lessonId: string) => {
      store.markIncomplete(lessonId);
      setProgress(store.getProgress());
    },
    [store],
  );

  const isComplete = useCallback(
    (lessonId: string) => progress.completed.includes(lessonId),
    [progress.completed],
  );

  const recordQuizAttempt = useCallback(
    (attempt: QuizAttempt) => {
      store.recordQuizAttempt(attempt);
      setProgress(store.getProgress());
    },
    [store],
  );

  const reset = useCallback(() => {
    store.reset();
    setProgress(emptyProgress());
  }, [store]);

  return { progress, store, markComplete, markIncomplete, isComplete, recordQuizAttempt, reset };
}
