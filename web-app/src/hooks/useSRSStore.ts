import { useCallback, useMemo } from 'react';
import { createCard, reviewCard, isDue, isMastered, todayISO } from '../lib/sm2';
import type { SRSCard, SRSGrade } from '../lib/sm2';

export interface SRSCardRef {
  track: string;
  lessonSlug: string;
  questionIndex: number;
  card: SRSCard;
}

function storageKey(track: string, lessonSlug: string, questionIndex: number): string {
  return `srs:${track}:${lessonSlug}:${questionIndex}`;
}

function readCard(track: string, lessonSlug: string, questionIndex: number): SRSCard {
  try {
    const raw = localStorage.getItem(storageKey(track, lessonSlug, questionIndex));
    if (raw) return JSON.parse(raw) as SRSCard;
  } catch {
    // ignore parse errors
  }
  return createCard();
}

function writeCard(track: string, lessonSlug: string, questionIndex: number, card: SRSCard): void {
  try {
    localStorage.setItem(storageKey(track, lessonSlug, questionIndex), JSON.stringify(card));
  } catch {
    // ignore storage errors
  }
}

export interface UseSRSStoreReturn {
  getCard: (lessonSlug: string, questionIndex: number) => SRSCard;
  updateCard: (lessonSlug: string, questionIndex: number, grade: SRSGrade) => SRSCard;
  getDueCards: (lessonSlugs: string[], questionsPerLesson: Record<string, number>) => SRSCardRef[];
  getDueCount: (lessonSlugs: string[], questionsPerLesson: Record<string, number>) => number;
}

export function useSRSStore(track: string): UseSRSStoreReturn {
  const getCard = useCallback(
    (lessonSlug: string, questionIndex: number): SRSCard =>
      readCard(track, lessonSlug, questionIndex),
    [track],
  );

  const updateCard = useCallback(
    (lessonSlug: string, questionIndex: number, grade: SRSGrade): SRSCard => {
      const existing = readCard(track, lessonSlug, questionIndex);
      const updated = reviewCard(existing, grade);
      writeCard(track, lessonSlug, questionIndex, updated);
      return updated;
    },
    [track],
  );

  const getDueCards = useCallback(
    (lessonSlugs: string[], questionsPerLesson: Record<string, number>): SRSCardRef[] => {
      const today = todayISO();
      const refs: SRSCardRef[] = [];
      for (const lessonSlug of lessonSlugs) {
        const count = questionsPerLesson[lessonSlug] ?? 0;
        for (let i = 0; i < count; i++) {
          const card = readCard(track, lessonSlug, i);
          if (card.dueDate <= today && !isMastered(card)) {
            refs.push({ track, lessonSlug, questionIndex: i, card });
          }
        }
      }
      return refs.sort((a, b) => a.card.dueDate.localeCompare(b.card.dueDate));
    },
    [track],
  );

  const getDueCount = useCallback(
    (lessonSlugs: string[], questionsPerLesson: Record<string, number>): number =>
      getDueCards(lessonSlugs, questionsPerLesson).length,
    [getDueCards],
  );

  return useMemo(
    () => ({ getCard, updateCard, getDueCards, getDueCount }),
    [getCard, updateCard, getDueCards, getDueCount],
  );
}

export { isDue, isMastered };
