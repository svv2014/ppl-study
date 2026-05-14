import type { Topic } from './types';

export interface CurriculumSlot {
  id: string;
  slug: string;
  title: string;
  topic: Topic;
  order: number;
  audio?: string | null;
  visual?: string;
}

export const CURRICULUM: CurriculumSlot[] = [
  // Air Law (18)
  { id: 'AL-001', slug: 'airspace-classifications', title: 'Canadian Airspace Classes A–G', topic: 'air-law', order: 1 },
  { id: 'AL-002', slug: 'controlled-vs-uncontrolled', title: 'Controlled vs Uncontrolled Airspace', topic: 'air-law', order: 2 },
  { id: 'AL-003', slug: 'vfr-weather-minimums', title: 'VFR Weather Minimums', topic: 'air-law', order: 3 },
  { id: 'AL-004', slug: 'altimeter-settings', title: 'Altimeter Settings', topic: 'air-law', order: 4 },
  { id: 'AL-005', slug: 'right-of-way-rules', title: 'Right-of-Way Rules', topic: 'air-law', order: 5 },
  { id: 'AL-006', slug: 'aerodrome-traffic-circuit', title: 'Aerodrome Traffic Circuit', topic: 'air-law', order: 6 },
  { id: 'AL-007', slug: 'radio-communications', title: 'Radio Communications', topic: 'air-law', order: 7 },
  { id: 'AL-008', slug: 'atc-services-clearances', title: 'ATC Services and Clearances', topic: 'air-law', order: 8 },
  { id: 'AL-009', slug: 'flight-plans-itineraries', title: 'VFR Flight Plans and Itineraries', topic: 'air-law', order: 9 },
  { id: 'AL-010', slug: 'notams', title: 'NOTAMs', topic: 'air-law', order: 10 },
  { id: 'AL-011', slug: 'cars-structure', title: 'CARs Structure', topic: 'air-law', order: 11 },
  { id: 'AL-012', slug: 'pilot-licences-recency', title: 'Pilot Licences and Recency', topic: 'air-law', order: 12 },
  { id: 'AL-013', slug: 'aircraft-documents', title: 'Aircraft Documents', topic: 'air-law', order: 13 },
  { id: 'AL-014', slug: 'emergency-procedures-law', title: 'Emergency Procedures (Legal)', topic: 'air-law', order: 14 },
  { id: 'AL-015', slug: 'transponder-codes', title: 'Transponder Codes', topic: 'air-law', order: 15 },
  { id: 'AL-016', slug: 'wake-turbulence', title: 'Wake Turbulence', topic: 'air-law', order: 16 },
  { id: 'AL-017', slug: 'low-level-flight-rules', title: 'Low-Level Flight Rules', topic: 'air-law', order: 17 },
  { id: 'AL-018', slug: 'special-use-airspace', title: 'Special Use Airspace', topic: 'air-law', order: 18 },

  // Navigation (14)
  { id: 'NAV-001', slug: 'vfr-charts', title: 'VFR Aeronautical Charts', topic: 'navigation', order: 1 },
  { id: 'NAV-002', slug: 'lat-lon-map-reading', title: 'Latitude, Longitude, and Map Reading', topic: 'navigation', order: 2 },
  { id: 'NAV-003', slug: 'true-magnetic-compass', title: 'True vs Magnetic vs Compass Heading', topic: 'navigation', order: 3 },
  { id: 'NAV-004', slug: 'dead-reckoning-basics', title: 'Dead Reckoning', topic: 'navigation', order: 4 },
  { id: 'NAV-005', slug: 'wind-correction-angle', title: 'Wind Correction Angle', topic: 'navigation', order: 5 },
  { id: 'NAV-006', slug: 'time-speed-distance', title: 'Time-Speed-Distance Calculations', topic: 'navigation', order: 6 },
  { id: 'NAV-007', slug: 'fuel-planning', title: 'Fuel Planning', topic: 'navigation', order: 7 },
  { id: 'NAV-008', slug: 'cross-country-planning', title: 'Cross-Country Planning', topic: 'navigation', order: 8 },
  { id: 'NAV-009', slug: 'pilotage', title: 'Pilotage', topic: 'navigation', order: 9 },
  { id: 'NAV-010', slug: 'vor-navigation', title: 'VOR Navigation', topic: 'navigation', order: 10 },
  { id: 'NAV-011', slug: 'gps-basics', title: 'GPS Basics', topic: 'navigation', order: 11 },
  { id: 'NAV-012', slug: 'altitude-types', title: 'Altitude Types', topic: 'navigation', order: 12 },
  { id: 'NAV-013', slug: 'density-altitude', title: 'Density Altitude', topic: 'navigation', order: 13 },
  { id: 'NAV-014', slug: 'lost-procedure', title: 'Lost Procedure and Diversion', topic: 'navigation', order: 14 },

  // Meteorology (14)
  { id: 'MET-001', slug: 'atmosphere-structure', title: 'Atmosphere Structure', topic: 'meteorology', order: 1 },
  { id: 'MET-002', slug: 'temp-pressure-humidity', title: 'Temperature, Pressure, Humidity', topic: 'meteorology', order: 2 },
  { id: 'MET-003', slug: 'clouds-types', title: 'Cloud Types and Formation', topic: 'meteorology', order: 3 },
  { id: 'MET-004', slug: 'fog-types', title: 'Fog Formation and Types', topic: 'meteorology', order: 4 },
  { id: 'MET-005', slug: 'metar-decoding', title: 'METAR Decoding', topic: 'meteorology', order: 5 },
  { id: 'MET-006', slug: 'taf-decoding', title: 'TAF Decoding', topic: 'meteorology', order: 6 },
  { id: 'MET-007', slug: 'gfa', title: 'GFA — Graphical Forecast for Aviation', topic: 'meteorology', order: 7 },
  { id: 'MET-008', slug: 'pireps', title: 'PIREPs', topic: 'meteorology', order: 8 },
  { id: 'MET-009', slug: 'thunderstorms', title: 'Thunderstorms', topic: 'meteorology', order: 9 },
  { id: 'MET-010', slug: 'icing', title: 'Icing', topic: 'meteorology', order: 10 },
  { id: 'MET-011', slug: 'turbulence', title: 'Turbulence', topic: 'meteorology', order: 11 },
  { id: 'MET-012', slug: 'wind-shear-microburst', title: 'Wind Shear and Microburst', topic: 'meteorology', order: 12 },
  { id: 'MET-013', slug: 'fronts', title: 'Fronts', topic: 'meteorology', order: 13 },
  { id: 'MET-014', slug: 'wx-decision-making', title: 'Weather Decision-Making', topic: 'meteorology', order: 14 },

  // General Knowledge (14)
  { id: 'GK-001', slug: 'aircraft-parts-controls', title: 'Aircraft Parts and Controls', topic: 'general-knowledge', order: 1 },
  { id: 'GK-002', slug: 'four-forces', title: 'Four Forces of Flight', topic: 'general-knowledge', order: 2 },
  { id: 'GK-003', slug: 'piston-engines', title: 'Piston Engines', topic: 'general-knowledge', order: 3 },
  { id: 'GK-004', slug: 'fuel-system', title: 'Fuel System', topic: 'general-knowledge', order: 4 },
  { id: 'GK-005', slug: 'electrical-system', title: 'Electrical System', topic: 'general-knowledge', order: 5 },
  { id: 'GK-006', slug: 'pitot-static-instruments', title: 'Pitot-Static System', topic: 'general-knowledge', order: 6 },
  { id: 'GK-007', slug: 'gyroscopic-instruments', title: 'Gyroscopic Instruments', topic: 'general-knowledge', order: 7 },
  { id: 'GK-008', slug: 'engine-instruments', title: 'Engine Instruments', topic: 'general-knowledge', order: 8 },
  { id: 'GK-009', slug: 'weight-and-balance', title: 'Weight and Balance', topic: 'general-knowledge', order: 9 },
  { id: 'GK-010', slug: 'performance-charts', title: 'Performance Charts', topic: 'general-knowledge', order: 10 },
  { id: 'GK-011', slug: 'takeoff-landing-perf', title: 'Takeoff and Landing Performance', topic: 'general-knowledge', order: 11 },
  { id: 'GK-012', slug: 'stalls-spins', title: 'Stalls and Spins', topic: 'general-knowledge', order: 12 },
  { id: 'GK-013', slug: 'load-factor', title: 'Load Factor and Maneuvering Speed', topic: 'general-knowledge', order: 13 },
  { id: 'GK-014', slug: 'preflight-inspection', title: 'Pre-Flight Inspection and Maintenance', topic: 'general-knowledge', order: 14 },

  // Night Rating (6) — pedagogical order: regulations & recency → physiology / vision → aircraft lighting → aerodrome lighting → night navigation → night emergencies
  // Intentional: NIGHT-006 is order:1 because it was authored last but taught first. IDs reflect authoring sequence; order reflects pedagogy — see #483.
  { id: 'NIGHT-006', slug: 'night-cars-regulations', title: 'Night CARs and Regulations — CAR 401.42 and Recency', topic: 'night', order: 1 },
  { id: 'NIGHT-001', slug: 'visual-illusions-dark-adaptation', title: 'Visual Illusions at Night and Dark Adaptation', topic: 'night', order: 2 },
  { id: 'NIGHT-002', slug: 'aircraft-lighting', title: 'Aircraft Lighting — Interior and Exterior', topic: 'night', order: 3 },
  { id: 'NIGHT-003', slug: 'aerodrome-lighting', title: 'Aerodrome Lighting — PAPI, VASI, Runway and Beacon', topic: 'night', order: 4 },
  { id: 'NIGHT-004', slug: 'night-navigation', title: 'Night Navigation', topic: 'night', order: 5 },
  { id: 'NIGHT-005', slug: 'night-emergency-procedures', title: 'Night Emergency Procedures', topic: 'night', order: 6 },

  // Radio (ROC-A) (9)
  { id: 'ROC-001', slug: 'phonetic-alphabet-numbers', title: 'Phonetic Alphabet and Numbers', topic: 'radio', order: 1, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/001-phonetic-alphabet-numbers.m4a', visual: '' },
  { id: 'ROC-002', slug: 'standard-phraseology-readback', title: 'Standard Phraseology and Readback', topic: 'radio', order: 2, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/002-standard-phraseology-readback.m4a', visual: '' },
  { id: 'ROC-003', slug: 'frequencies-reference', title: 'Frequencies Reference', topic: 'radio', order: 3, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/003-frequencies-reference.m4a', visual: '' },
  { id: 'ROC-004', slug: 'position-reporting', title: 'Position Reporting', topic: 'radio', order: 4, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/004-position-reporting.m4a', visual: '' },
  { id: 'ROC-005', slug: 'vfr-ifr-comms-overview', title: 'VFR/IFR Communications Overview', topic: 'radio', order: 5, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/005-vfr-ifr-comms-overview.m4a', visual: '' },
  { id: 'ROC-006', slug: 'emergency-comms', title: 'Emergency Communications', topic: 'radio', order: 6, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/006-emergency-comms.m4a', visual: '' },
  { id: 'ROC-007', slug: 'light-signals', title: 'Light Signals', topic: 'radio', order: 7, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/007-light-signals.m4a', visual: '' },
  { id: 'ROC-008', slug: 'regulatory-framework', title: 'Regulatory Framework', topic: 'radio', order: 8, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/008-regulatory-framework.m4a', visual: '' },
  { id: 'ROC-009', slug: 'radio-etiquette', title: 'Radio Etiquette', topic: 'radio', order: 9, audio: 'https://media.suprun.workers.dev/ppl/lessons/radio/009-radio-etiquette.m4a', visual: '' },
];

export const TOPIC_LABELS: Record<string, string> = {
  'air-law': 'Air Law',
  'navigation': 'Navigation',
  'meteorology': 'Meteorology',
  'general-knowledge': 'General Knowledge',
  'radio': 'Radio (ROC-A)',
  'helicopter': 'Helicopter',
  'night': 'Night Rating',
};

export const TOPICS = ['air-law', 'navigation', 'meteorology', 'general-knowledge', 'radio', 'cpl-a', 'helicopter', 'night'] as const;
