/// <reference types="vite/client" />
import jsYaml from 'js-yaml';
import type { Lesson, Question, Topic } from './types';
import { getTrack } from './exam-tracks';

// Relative to this file (web-app/src/lib/), lessons/ is three levels up at ppl-study/lessons/
const modules = import.meta.glob('../../../lessons/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const TOPIC_ORDER: Record<string, number> = {
  'air-law': 0,
  navigation: 1,
  meteorology: 2,
  'general-knowledge': 3,
};

function parseFrontmatter(raw: string): { fm: Record<string, unknown>; body: string } {
  if (!raw.startsWith('---')) {
    return { fm: {}, body: raw };
  }
  const close = raw.indexOf('\n---', 3);
  if (close === -1) {
    return { fm: {}, body: raw };
  }
  const fmText = raw.slice(3, close);
  const body = raw.slice(close + 4).trimStart();
  const fm = (jsYaml.load(fmText) ?? {}) as Record<string, unknown>;
  return { fm, body };
}

function toLesson(fm: Record<string, unknown>, body: string): Lesson {
  return {
    id: fm.id as string,
    topic: fm.topic as Topic,
    order: fm.order as number,
    slug: fm.slug as string,
    title: fm.title as string,
    duration_min: fm.duration_min as number,
    status: fm.status as Lesson['status'],
    audio: (fm.audio ?? null) as string | null,
    visual: fm.visual as string,
    sources: (fm.sources ?? []) as string[],
    questions: (fm.questions ?? []) as Question[],
    body,
  };
}

let _cache: Lesson[] | null = null;

export function getAllLessons(): Lesson[] {
  if (_cache) return _cache;

  const lessons: Lesson[] = [];

  for (const raw of Object.values(modules)) {
    if (typeof raw !== 'string') continue;
    const { fm, body } = parseFrontmatter(raw);
    if (!fm.id) continue;
    lessons.push(toLesson(fm, body));
  }

  _cache = lessons.sort((a, b) => {
    const td = (TOPIC_ORDER[a.topic] ?? 99) - (TOPIC_ORDER[b.topic] ?? 99);
    return td !== 0 ? td : a.order - b.order;
  });

  return _cache;
}

export function getLessonBySlug(topic: string, slug: string): Lesson | undefined {
  return getAllLessons().find((l) => l.topic === topic && l.slug === slug);
}

export function getLessonsByTopic(topic: string): Lesson[] {
  return getAllLessons().filter((l) => l.topic === topic);
}

export function getLessonsByTrack(trackId: string): Lesson[] {
  const track = getTrack(trackId);
  if (!track) return getAllLessons();
  return getAllLessons().filter((l) => track.lessonFilter(l));
}

export function getAdjacentLessons(
  topic: string,
  slug: string,
): { prev: Lesson | null; next: Lesson | null } {
  const lessons = getLessonsByTopic(topic);
  const idx = lessons.findIndex((l) => l.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? lessons[idx - 1] : null,
    next: idx < lessons.length - 1 ? lessons[idx + 1] : null,
  };
}
