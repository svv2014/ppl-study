import React, { createContext, useContext, useState } from 'react';
import type { Track } from '../lib/exam-tracks';
import { TRACKS, DEFAULT_TRACK_SLUG } from '../lib/exam-tracks';

const LS_KEY = 'ppl-active-track';

function readSlug(): string {
  try {
    return localStorage.getItem(LS_KEY) ?? DEFAULT_TRACK_SLUG;
  } catch {
    return DEFAULT_TRACK_SLUG;
  }
}

function findTrack(slug: string): Track {
  return TRACKS.find((t) => t.slug === slug) ?? TRACKS.find((t) => t.slug === DEFAULT_TRACK_SLUG)!;
}

interface TrackContextValue {
  activeTrack: Track;
  setActiveTrack: (slug: string) => void;
}

const TrackContext = createContext<TrackContextValue | null>(null);

export function TrackProvider({ children }: { children: React.ReactNode }) {
  const [activeTrack, setActiveTrackState] = useState<Track>(() => findTrack(readSlug()));

  const setActiveTrack = (slug: string) => {
    try {
      localStorage.setItem(LS_KEY, slug);
    } catch {
      // ignore storage errors
    }
    setActiveTrackState(findTrack(slug));
  };

  return (
    <TrackContext.Provider value={{ activeTrack, setActiveTrack }}>
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack(): TrackContextValue {
  const ctx = useContext(TrackContext);
  if (!ctx) throw new Error('useTrack must be used within TrackProvider');
  return ctx;
}
