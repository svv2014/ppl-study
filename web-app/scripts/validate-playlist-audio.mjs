/**
 * Playlist audio smoke test — prevents the regression where a topic card
 * appears in the playlist with zero audio lessons (Apr 2026 topicsWithAudio bug).
 *
 * Reads all lesson markdown frontmatter under lessons/, groups by topic, and
 * exits 1 if any topic has zero lessons with a real audio URL.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const lessonsDir = resolve(__dirname, '../../lessons');

function walkMd(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkMd(full));
    } else if (entry.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

const files = walkMd(lessonsDir);

// topic -> { total, withAudio }
const topics = {};

for (const file of files) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const topic = fm.match(/^topic:\s*(.+)$/m)?.[1]?.trim();
  const audioLine = fm.match(/^audio:\s*(.+)$/m)?.[1]?.trim();
  const hasAudio = audioLine && audioLine !== 'null' && audioLine !== '~' && audioLine !== '';

  if (!topic) continue;

  if (!topics[topic]) topics[topic] = { total: 0, withAudio: 0 };
  topics[topic].total += 1;
  if (hasAudio) topics[topic].withAudio += 1;
}

let failed = false;

for (const [topic, { total, withAudio }] of Object.entries(topics).sort()) {
  if (withAudio === 0) {
    console.log(`✗ ${topic}: ${total} lessons, 0 with audio  ← FAIL`);
    failed = true;
  } else {
    console.log(`✓ ${topic}: ${total} lessons, ${withAudio} with audio`);
  }
}

if (failed) {
  console.error('\nValidation failed: one or more topics have no audio lessons.');
  process.exit(1);
}

console.log('\nAll topics have at least one audio lesson. ✓');
