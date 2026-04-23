import { useState, useEffect, useCallback } from 'react';
import type { Progress, ProgressStore, QuizAttempt } from './types';

const LEGACY_KEY = 'ppl-study-progress';

function storageKey(trackId: string): string {
  return `ppl.progress.${trackId}`;
}

function emptyProgress(): Progress {
  return {
    completed: [],
    lastExamScores: {},
    quizHistory: [],
    lastUpdated: new Date().toISOString(),
  };
}

function loadRaw(key: string): Progress {
  try {
    const raw = localStorage.getItem(key);
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

function saveRaw(key: string, progress: Progress): void {
  localStorage.setItem(key, JSON.stringify(progress));
}

function migrateLegacy(trackId: string): void {
  if (trackId !== 'ppl-a') return;
  const key = storageKey(trackId);
  try {
    // Only migrate if new key is empty and legacy key has data
    if (!localStorage.getItem(key) && localStorage.getItem(LEGACY_KEY)) {
      const legacy = localStorage.getItem(LEGACY_KEY)!;
      localStorage.setItem(key, legacy);
      localStorage.removeItem(LEGACY_KEY);
    }
  } catch {
    // ignore storage errors
  }
}

export class LocalStorageProgressStore implements ProgressStore {
  readonly storageKey: string;

  constructor(trackId = 'ppl-a') {
    this.storageKey = storageKey(trackId);
    migrateLegacy(trackId);
  }

  getProgress(): Progress {
    return loadRaw(this.storageKey);
  }

  markComplete(lessonId: string): void {
    const p = loadRaw(this.storageKey);
    if (!p.completed.includes(lessonId)) {
      p.completed = [...p.completed, lessonId];
      p.lastUpdated = new Date().toISOString();
      saveRaw(this.storageKey, p);
    }
  }

  markIncomplete(lessonId: string): void {
    const p = loadRaw(this.storageKey);
    p.completed = p.completed.filter((id) => id !== lessonId);
    p.lastUpdated = new Date().toISOString();
    saveRaw(this.storageKey, p);
  }

  recordQuizAttempt(attempt: QuizAttempt): void {
    const p = loadRaw(this.storageKey);
    p.quizHistory = [...p.quizHistory, attempt];
    p.lastExamScores[attempt.lessonId] = attempt.percent;
    p.lastUpdated = new Date().toISOString();
    saveRaw(this.storageKey, p);
  }

  setLastExamScore(lessonId: string, percent: number): void {
    const p = loadRaw(this.storageKey);
    p.lastExamScores[lessonId] = percent;
    p.lastUpdated = new Date().toISOString();
    saveRaw(this.storageKey, p);
  }

  reset(): void {
    localStorage.removeItem(this.storageKey);
  }
}

const defaultStore = new LocalStorageProgressStore('ppl-a');

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
  const key =
    store instanceof LocalStorageProgressStore ? store.storageKey : storageKey('ppl-a');

  const [progress, setProgress] = useState<Progress>(() => store.getProgress());

  // Sync across tabs
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === key) {
        setProgress(store.getProgress());
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [store, key]);

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
