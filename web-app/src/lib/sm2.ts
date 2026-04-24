export interface SRSCard {
  repetitions: number;
  easeFactor: number;
  interval: number;
  dueDate: string; // ISO date YYYY-MM-DD
}

export type SRSGrade = 0 | 2 | 3 | 4; // Again=0, Hard=2, Good=3, Easy=4

const MIN_EASE_FACTOR = 1.3;

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function createCard(): SRSCard {
  return {
    repetitions: 0,
    easeFactor: 2.5,
    interval: 1,
    dueDate: todayISO(),
  };
}

export function reviewCard(card: SRSCard, grade: SRSGrade): SRSCard {
  let { repetitions, easeFactor, interval } = card;

  if (grade < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor);

  const dueDate = addDays(todayISO(), interval);

  return { repetitions, easeFactor, interval, dueDate };
}

export function isDue(card: SRSCard): boolean {
  return card.dueDate <= todayISO();
}

export function isMastered(card: SRSCard): boolean {
  return card.interval > 21;
}
