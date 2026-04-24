// SM-2 spaced-repetition algorithm
// EF (Easiness Factor) initial = 2.5, minimum = 1.3
// Quality: 0 = complete blackout, 5 = perfect recall

const EF_INITIAL = 2.5;
const EF_MIN = 1.3;

export interface SRSCard {
  lessonId: string;
  ef: number;
  interval: number;
  repetitions: number;
  nextDue: string; // YYYY-MM-DD
}

export type SRSData = Record<string, SRSCard>;

const LS_KEY_PREFIX = 'ppl.srs.';

function today(): string {
  return new Date().toISOString().split('T')[0];
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

export function sm2Update(card: SRSCard, quality: number): SRSCard {
  let { ef, interval, repetitions } = card;

  if (quality < 3) {
    interval = 1;
    repetitions = 0;
  } else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * ef);
    repetitions += 1;
  }

  ef = ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  ef = Math.max(EF_MIN, ef);

  return {
    lessonId: card.lessonId,
    ef,
    interval,
    repetitions,
    nextDue: addDays(interval),
  };
}

export function newCard(lessonId: string): SRSCard {
  return {
    lessonId,
    ef: EF_INITIAL,
    interval: 1,
    repetitions: 0,
    nextDue: today(),
  };
}

export function loadSRSData(trackId: string): SRSData {
  try {
    const raw = localStorage.getItem(`${LS_KEY_PREFIX}${trackId}`);
    return raw ? (JSON.parse(raw) as SRSData) : {};
  } catch {
    return {};
  }
}

export function saveSRSData(trackId: string, data: SRSData): void {
  try {
    localStorage.setItem(`${LS_KEY_PREFIX}${trackId}`, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

export function getDueCards(data: SRSData, lessonIds: string[]): SRSCard[] {
  const t = today();
  return lessonIds
    .map((id) => data[id] ?? newCard(id))
    .filter((card) => card.nextDue <= t);
}
