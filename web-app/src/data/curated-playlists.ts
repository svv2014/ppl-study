export interface CuratedPlaylist {
  id: string;
  name: string;
  tagline: string;
  lessonIds: string[];
  badge?: string;
}

export const CURATED_PLAYLISTS: CuratedPlaylist[] = [
  {
    id: 'weather-essentials',
    name: 'Weather Essentials',
    tagline: 'Decode METARs, TAFs, GFAs, and PIREPs — the core wx briefing tools',
    lessonIds: ['MET-005', 'MET-006', 'MET-007', 'MET-008', 'MET-009', 'MET-010'],
    badge: 'Met',
  },
  {
    id: 'preflight-10min',
    name: 'Preflight in 10 min',
    tagline: 'Aircraft parts, fuel system, and inspection basics — fast refresh before a flight',
    lessonIds: ['GK-001', 'GK-003', 'GK-004', 'GK-014'],
  },
  {
    id: 'emergency-playbook',
    name: 'Emergency Playbook',
    tagline: 'Emergency procedures, stalls, and load factor — know them before you need them',
    lessonIds: ['AL-014', 'GK-012', 'GK-013'],
    badge: '!',
  },
  {
    id: 'nav-fundamentals',
    name: 'Nav Fundamentals',
    tagline: 'VFR charts, dead reckoning, and wind correction — the cross-country core',
    lessonIds: ['NAV-001', 'NAV-002', 'NAV-003', 'NAV-004', 'NAV-005'],
    badge: 'Nav',
  },
  {
    id: 'night-rating-full',
    name: 'Night Rating',
    tagline: 'Dark adaptation, lighting, aerodrome systems, navigation, and emergency procedures — TC night endorsement curriculum.',
    lessonIds: ['NIGHT-001', 'NIGHT-002', 'NIGHT-003', 'NIGHT-004', 'NIGHT-005', 'NIGHT-006'],
    badge: 'Night',
  },
  {
    id: 'helicopter-full',
    name: 'PPL-H Full Listen',
    tagline: 'Air law through human factors — the complete helicopter PPL ground-school curriculum',
    lessonIds: ['HEL-001', 'HEL-002', 'HEL-003', 'HEL-004', 'HEL-005', 'HEL-006', 'HEL-007', 'HEL-008'],
    badge: 'H',
  },
  {
    id: 'cpl-a-full',
    name: 'CPL-A Full Listen',
    tagline: 'Licensing through limitations — complete commercial airplane ground-school curriculum',
    lessonIds: [
      'CAL-001', 'CAL-002', 'CAL-003', 'CAL-004', 'CAL-005',
      'AMT-001', 'AMT-002', 'AMT-003', 'AMT-004',
      'ANV-001', 'ANV-002', 'ANV-003',
      'ADE-001', 'ADE-002', 'ADE-003',
      'PAL-001', 'PAL-002', 'PAL-003',
    ],
    badge: 'CPL',
  },
];
