import type { Lesson } from './types';

export type TrackStatus = 'active' | 'coming-soon' | 'locked';

export interface ExamTrack {
  id: string;
  /** Short code shown in the pill, e.g. "PPL-A" */
  code: string;
  /** Full track name, e.g. "Private Pilot · Aeroplane" */
  name: string;
  /** One-line description shown in the dropdown */
  tagline: string;
  status: TrackStatus;
  /** Hint shown on locked tracks explaining how to unlock */
  unlockHint?: string;
  /** Returns true for lessons that belong to this track */
  lessonFilter: (l: Lesson) => boolean;
}

const noLessons = (_l: Lesson) => false;

export const EXAM_TRACKS: ExamTrack[] = [
  {
    id: 'ppl-a',
    code: 'PPL-A',
    name: 'Private Pilot · Aeroplane',
    tagline: 'Transport Canada Private Pilot Licence (Aeroplane)',
    status: 'active',
    lessonFilter: () => true,
  },
  {
    id: 'pstar',
    code: 'PSTAR',
    name: 'Pre-Solo Standards',
    tagline: 'Pre-Solo Standard Test of Air Regulations',
    status: 'active',
    lessonFilter: (l) => l.topic === 'air-law',
  },
  {
    id: 'rroe',
    code: 'RROE',
    name: 'Radio Operator',
    tagline: 'Restricted Radiotelephone Operator Certificate (Aeronautical)',
    status: 'coming-soon',
    lessonFilter: noLessons,
  },
  {
    id: 'ppl-h',
    code: 'PPL-H',
    name: 'Private Pilot · Helicopter',
    tagline: 'Transport Canada Private Pilot Licence (Helicopter)',
    status: 'coming-soon',
    lessonFilter: noLessons,
  },
  {
    id: 'cpl-a',
    code: 'CPL-A',
    name: 'Commercial Pilot · Aeroplane',
    tagline: 'Transport Canada Commercial Pilot Licence (Aeroplane)',
    status: 'coming-soon',
    lessonFilter: noLessons,
  },
  {
    id: 'ifr',
    code: 'IFR',
    name: 'Instrument Rating',
    tagline: 'Transport Canada Instrument Rating',
    status: 'coming-soon',
    lessonFilter: noLessons,
  },
  {
    id: 'instructor',
    code: 'FI',
    name: 'Flight Instructor',
    tagline: 'Transport Canada Flight Instructor Rating',
    status: 'locked',
    unlockHint: 'Complete PPL-A and CPL-A first',
    lessonFilter: noLessons,
  },
];

export function getTrack(id: string): ExamTrack | undefined {
  return EXAM_TRACKS.find((t) => t.id === id);
}
