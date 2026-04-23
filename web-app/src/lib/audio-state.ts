const KEY = 'ppl.audio.speed';
const DEFAULT_SPEED = 1;
const POS_PREFIX = 'ppl.audio.pos.';

export function readSpeed(): number {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) return DEFAULT_SPEED;
    const val = parseFloat(raw);
    return isNaN(val) ? DEFAULT_SPEED : val;
  } catch {
    return DEFAULT_SPEED;
  }
}

export function writeSpeed(speed: number): void {
  try {
    localStorage.setItem(KEY, String(speed));
  } catch {
    // ignore storage errors (private browsing, quota)
  }
}

export function readPosition(lessonId: string): number {
  try {
    const raw = localStorage.getItem(POS_PREFIX + lessonId);
    if (raw === null) return 0;
    const val = parseFloat(raw);
    return isNaN(val) ? 0 : val;
  } catch {
    return 0;
  }
}

export function writePosition(lessonId: string, time: number): void {
  try {
    localStorage.setItem(POS_PREFIX + lessonId, String(time));
  } catch {
    // ignore storage errors (private browsing, quota)
  }
}
