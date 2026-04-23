const KEY = 'ppl.audio.speed';
const DEFAULT_SPEED = 1;

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
