const STORAGE_KEY = 'ppl.checkins.v1';

function today(): string {
  return new Date().toLocaleDateString('en-CA');
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString('en-CA');
}

function load(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is string => typeof v === 'string');
  } catch {
    return [];
  }
}

function save(dates: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
  } catch {
    // quota or private mode — ignore
  }
}

export function recordCheckin(): void {
  const dates = load();
  const t = today();
  if (dates.includes(t)) return;
  save([...dates, t].sort());
}

export function getCheckins(): string[] {
  return load().sort();
}

export function getCurrentStreak(): number {
  const dates = new Set(load());
  const t = today();
  const yest = yesterday();

  let cursor: string;
  if (dates.has(t)) {
    cursor = t;
  } else if (dates.has(yest)) {
    cursor = yest;
  } else {
    return 0;
  }

  let streak = 0;
  let current = new Date(cursor + 'T12:00:00');
  while (true) {
    const key = current.toLocaleDateString('en-CA');
    if (!dates.has(key)) break;
    streak++;
    current.setDate(current.getDate() - 1);
  }
  return streak;
}

export function getTotalDays(): number {
  return load().length;
}
