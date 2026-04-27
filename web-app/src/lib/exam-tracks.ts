import type { Lesson, Topic } from './types';
import { TOPICS } from './curriculum';

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
    playlistTopics: TOPICS,
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
    status: 'coming-soon',
    byline: 'Coming Soon · 20 Min / Day',
    heroHeading: 'PPL Helicopter. Coming soon.',
    heroSubtitle: 'Structured lessons for the Transport Canada Private Pilot Licence (Helicopter). Audio-first, exam-weighted.',
    credibilityTag: 'Covers TC PPL-H written exam',
    lessonFilter: noLessons,
    playlistTopics: TOPICS,
    playlistHeading: 'PPL-H Playlist',
  },
  {
    id: 'cpl-a',
    code: 'CPL-A',
    name: 'Commercial Pilot · Aeroplane',
    tagline: 'Transport Canada Commercial Pilot Licence (Aeroplane)',
    examHeading: 'Practice Quiz',
    status: 'coming-soon',
    byline: 'Coming Soon · 20 Min / Day',
    heroHeading: 'CPL Aeroplane. Coming soon.',
    heroSubtitle: 'Structured lessons for the Transport Canada Commercial Pilot Licence (Aeroplane). Audio-first, exam-weighted.',
    credibilityTag: 'Covers TC CPL-A written exam',
    lessonFilter: noLessons,
    playlistTopics: TOPICS,
    playlistHeading: 'CPL-A Playlist',
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
    playlistTopics: TOPICS,
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
    playlistTopics: TOPICS,
    playlistHeading: 'FI Playlist',
  },
];

export function getTrack(id: string): ExamTrack | undefined {
  return EXAM_TRACKS.find((t) => t.id === id);
}
