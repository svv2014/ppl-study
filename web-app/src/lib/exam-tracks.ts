import type { Lesson, Topic } from './types';
import { TOPICS, CURRICULUM } from './curriculum';

/** Returns only topics that have at least one lesson with a non-null audio URL. */
function topicsWithAudio(topics: readonly Topic[]): readonly Topic[] {
  return topics.filter((topic) =>
    CURRICULUM.some((slot) => slot.topic === topic && slot.audio !== null),
  );
}

export interface Track {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  heroHeading: string;
  heroSubtitle: string;
  status: 'active' | 'coming-soon';
}

export const DEFAULT_TRACK_SLUG = 'ppl-a';

export const TRACKS: Track[] = [
  {
    slug: 'ppl-a',
    label: 'Private Pilot · Aeroplane',
    shortLabel: 'PPL-A',
    description: 'Transport Canada Private Pilot Licence (Aeroplane)',
    heroHeading: 'Pass the Canadian PPL written exam — 20 minutes a day',
    heroSubtitle: 'Structured lessons covering PSTAR and the full Transport Canada PPL syllabus.',
    status: 'active',
  },
  {
    slug: 'pstar',
    label: 'Pre-Solo Standards',
    shortLabel: 'PSTAR',
    description: 'Pre-Solo Standard Test of Air Regulations',
    heroHeading: 'Pass the PSTAR — Pre-Solo Standard Test of Air Regulations',
    heroSubtitle: 'Air Law focus. 50 questions, 40 minutes, 90% pass mark.',
    status: 'active',
  },
  {
    slug: 'night',
    label: 'Night Rating',
    shortLabel: 'NIGHT',
    description: 'Transport Canada Night Rating',
    heroHeading: 'Earn your Night Rating. Twenty minutes a day.',
    heroSubtitle: 'Focused lessons for the Transport Canada Night Rating. Audio-first, exam-weighted.',
    status: 'active',
  },
];

export type TrackStatus = 'active' | 'coming-soon' | 'locked';

export interface ExamTrack {
  id: string;
  /** Short code shown in the pill, e.g. "PPL-A" */
  code: string;
  /** Full track name, e.g. "Private Pilot · Aeroplane" */
  name: string;
  /** One-line description shown in the dropdown */
  tagline: string;
  /** Heading shown on the Exam practice page */
  examHeading: string;
  status: TrackStatus;
  /** Hint shown on locked tracks explaining how to unlock */
  unlockHint?: string;
  /** Small monospace label above the hero heading */
  byline: string;
  /** Main hero heading text */
  heroHeading: string;
  /** Optional phrase within heroHeading to render in primary.main amber; a <br /> is inserted after it */
  heroHeadingAccent?: string;
  /** Hero subtitle / description paragraph */
  heroSubtitle: string;
  /** Short credibility tag shown below the subtitle */
  credibilityTag: string;
  /** Returns true for lessons that belong to this track */
  lessonFilter: (l: Lesson) => boolean;
  /** Topics shown on the playlist index for this track */
  playlistTopics: readonly Topic[];
  /** Heading shown on the playlist index page */
  playlistHeading: string;
}

const noLessons = (_l: Lesson) => false;

export const EXAM_TRACKS: ExamTrack[] = [
  {
    id: 'ppl-a',
    code: 'PPL-A',
    name: 'Private Pilot · Aeroplane',
    tagline: 'Transport Canada Private Pilot Licence (Aeroplane)',
    examHeading: 'Practice Quiz',
    status: 'active',
    byline: 'Pre-Flight Briefing · 20 Min / Day',
    heroHeading: 'Pass the PPL written exam. Twenty minutes a day.',
    heroHeadingAccent: 'PPL written',
    heroSubtitle: 'Structured lessons covering PSTAR and the full Transport Canada syllabus. Audio-first, exam-weighted.',
    credibilityTag: 'Covers PSTAR & PPL written exam',
    lessonFilter: () => true,
    playlistTopics: ['air-law', 'navigation', 'meteorology', 'general-knowledge'] as const,
    playlistHeading: 'Study Playlist',
  },
  {
    id: 'pstar',
    code: 'PSTAR',
    name: 'Pre-Solo Standards',
    tagline: 'Pre-Solo Standard Test of Air Regulations',
    examHeading: 'PSTAR Practice',
    status: 'active',
    byline: 'Pre-Solo Air Law · 20 Min / Day',
    heroHeading: 'Ace the PSTAR exam. Twenty minutes a day.',
    heroSubtitle: 'Focused Air Law lessons covering the Pre-Solo Standard Test of Air Regulations. Audio-first, exam-weighted.',
    credibilityTag: 'Covers PSTAR Air Law · 90% pass mark',
    lessonFilter: (l) => l.topic === 'air-law',
    playlistTopics: ['air-law'] as const,
    playlistHeading: 'PSTAR Playlist',
  },
  {
    id: 'rroe',
    code: 'RROE',
    name: 'Radio Operator',
    tagline: 'Restricted Radiotelephone Operator Certificate (Aeronautical)',
    examHeading: 'ROC-A Practice',
    status: 'active',
    byline: 'Radio Operator Certificate · 20 Min / Day',
    heroHeading: 'Pass the RROE exam. Twenty minutes a day.',
    heroSubtitle: 'Focused radio operator lessons covering the Restricted Radiotelephone Operator Certificate (Aeronautical).',
    credibilityTag: 'Covers aeronautical radio operator topics',
    lessonFilter: (l) => l.topic === 'radio',
    playlistTopics: ['radio'] as const,
    playlistHeading: 'RROE Playlist',
  },
  {
    id: 'ppl-h',
    code: 'PPL-H',
    name: 'Private Pilot · Helicopter',
    tagline: 'Transport Canada Private Pilot Licence (Helicopter)',
    examHeading: 'Practice Quiz',
    status: 'active',
    byline: 'Pre-Flight Briefing · 20 Min / Day',
    heroHeading: 'Pass the PPL-H written exam. Twenty minutes a day.',
    heroHeadingAccent: 'PPL-H written',
    heroSubtitle: 'Structured lessons for the Transport Canada Private Pilot Licence (Helicopter). Audio-first, exam-weighted.',
    credibilityTag: 'Covers TC PPL-H written exam',
    lessonFilter: (l) => l.topic === 'helicopter',
    playlistTopics: ['helicopter'] as const,
    playlistHeading: 'PPL-H Playlist',
  },
  {
    id: 'cpl-a',
    code: 'CPL-A',
    name: 'Commercial Pilot · Aeroplane',
    tagline: 'Transport Canada Commercial Pilot Licence (Aeroplane)',
    examHeading: 'Practice Quiz',
    status: 'active',
    byline: 'Pre-Flight Briefing · 20 Min / Day',
    heroHeading: 'Pass the CPL written exam. Twenty minutes a day.',
    heroHeadingAccent: 'CPL written',
    heroSubtitle: 'Structured lessons for the Transport Canada Commercial Pilot Licence (Aeroplane). Audio-first, exam-weighted.',
    credibilityTag: 'Covers TC CPL-A written exam',
    lessonFilter: (l) => l.topic === 'cpl-a',
    playlistTopics: ['cpl-a'] as const,
    playlistHeading: 'CPL-A Playlist',
  },
  {
    id: 'night',
    code: 'NIGHT',
    name: 'Night Rating',
    tagline: 'Transport Canada Night Rating',
    examHeading: 'Night Rating Practice',
    status: 'active',
    byline: 'Night Rating · 20 Min / Day',
    heroHeading: 'Earn your Night Rating. Twenty minutes a day.',
    heroHeadingAccent: 'Night Rating',
    heroSubtitle: 'Structured lessons for the Transport Canada Night Rating. Audio-first, exam-weighted.',
    credibilityTag: 'Covers TC Night Rating written exam',
    lessonFilter: (l) => l.topic === 'night',
    playlistTopics: ['night'] as const,
    playlistHeading: 'Night Rating Playlist',
  },
  {
    id: 'ifr',
    code: 'IFR',
    name: 'Instrument Rating',
    tagline: 'Transport Canada Instrument Rating',
    examHeading: 'Practice Quiz',
    status: 'coming-soon',
    byline: 'Coming Soon · 20 Min / Day',
    heroHeading: 'Instrument Rating. Coming soon.',
    heroSubtitle: 'Structured lessons for the Transport Canada Instrument Rating. Audio-first, exam-weighted.',
    credibilityTag: 'Covers TC IFR written exam',
    lessonFilter: noLessons,
    playlistTopics: [] as const,
    playlistHeading: 'IFR Playlist',
  },
  {
    id: 'instructor',
    code: 'FI',
    name: 'Flight Instructor',
    tagline: 'Transport Canada Flight Instructor Rating',
    examHeading: 'Practice Quiz',
    status: 'locked',
    unlockHint: 'Complete PPL-A and CPL-A first',
    byline: 'Locked · Complete Prerequisites First',
    heroHeading: 'Flight Instructor Rating. Unlock after PPL-A and CPL-A.',
    heroSubtitle: 'Structured lessons for the Transport Canada Flight Instructor Rating.',
    credibilityTag: 'Covers TC Flight Instructor Rating',
    lessonFilter: noLessons,
    playlistTopics: [] as const,
    playlistHeading: 'FI Playlist',
  },
];

export function getTrack(id: string): ExamTrack | undefined {
  return EXAM_TRACKS.find((t) => t.id === id);
}
