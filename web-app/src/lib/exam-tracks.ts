export type TrackStatus = 'active' | 'coming-soon' | 'locked';

export interface ExamTrack {
  id: string;
  label: string;
  shortLabel: string;
  status: TrackStatus;
  /** Topic filter for this track. null = all topics. */
  topics: string[] | null;
  description: string;
}

export const EXAM_TRACKS: ExamTrack[] = [
  {
    id: 'ppl-a',
    label: 'PPL — Aeroplane',
    shortLabel: 'PPL-A',
    status: 'active',
    topics: null,
    description: 'Transport Canada Private Pilot Licence (Aeroplane)',
  },
  {
    id: 'pstar',
    label: 'PSTAR',
    shortLabel: 'PSTAR',
    status: 'active',
    topics: ['air-law'],
    description: 'Pre-Solo Standard Test of Air Regulations',
  },
  {
    id: 'ppl-h',
    label: 'PPL — Helicopter',
    shortLabel: 'PPL-H',
    status: 'coming-soon',
    topics: null,
    description: 'Transport Canada Private Pilot Licence (Helicopter)',
  },
  {
    id: 'cpl-a',
    label: 'CPL — Aeroplane',
    shortLabel: 'CPL-A',
    status: 'coming-soon',
    topics: null,
    description: 'Transport Canada Commercial Pilot Licence (Aeroplane)',
  },
  {
    id: 'ifr',
    label: 'Instrument Rating',
    shortLabel: 'IFR',
    status: 'coming-soon',
    topics: null,
    description: 'Transport Canada Instrument Rating',
  },
  {
    id: 'night',
    label: 'Night Rating',
    shortLabel: 'Night',
    status: 'locked',
    topics: null,
    description: 'Transport Canada Night Rating',
  },
  {
    id: 'ame-m1',
    label: 'AME — M1',
    shortLabel: 'AME-M1',
    status: 'locked',
    topics: null,
    description: 'Aircraft Maintenance Engineer M1',
  },
];

export function getTrack(id: string): ExamTrack | undefined {
  return EXAM_TRACKS.find((t) => t.id === id);
}
