import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import type { ExamTrack } from '../lib/exam-tracks';
import { EXAM_TRACKS, getTrack } from '../lib/exam-tracks';
import type { Progress } from '../lib/types';
import { LocalStorageProgressStore, PPL_PROGRESS_EVENT } from '../lib/progress';

const STORAGE_KEY = 'ppl.active-track';
const DEFAULT_TRACK_ID = 'ppl-a';

export interface ExamTrackContextValue {
  activeTrack: ExamTrack;
  setActiveTrack: (trackId: string) => void;
  availableTracks: ExamTrack[];
  trackProgress: Progress;
  store: LocalStorageProgressStore;
}

const ExamTrackContext = createContext<ExamTrackContextValue | null>(null);

export function ExamTrackProvider({ children }: { children: React.ReactNode }) {
  const [activeTrackId, setActiveTrackId] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_TRACK_ID;
    } catch {
      return DEFAULT_TRACK_ID;
    }
  });

  const activeTrack = getTrack(activeTrackId) ?? getTrack(DEFAULT_TRACK_ID)!;

  const store = useMemo(
    () => new LocalStorageProgressStore(activeTrack.id),
    [activeTrack.id],
  );

  const [trackProgress, setTrackProgress] = useState<Progress>(() => store.getProgress());

  useEffect(() => {
    setTrackProgress(store.getProgress());
  }, [store]);

  // Cross-tab sync for active track and progress
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === STORAGE_KEY && e.newValue) {
        setActiveTrackId(e.newValue);
      }
      if (e.key === store.storageKey) {
        setTrackProgress(store.getProgress());
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [store]);

  // Same-tab progress refresh — StorageEvent doesn't fire for same-tab writes
  useEffect(() => {
    function onProgressUpdate(e: Event) {
      const ev = e as CustomEvent<{ key: string }>;
      if (ev.detail?.key === store.storageKey) {
        setTrackProgress(store.getProgress());
      }
    }
    window.addEventListener(PPL_PROGRESS_EVENT, onProgressUpdate);
    return () => window.removeEventListener(PPL_PROGRESS_EVENT, onProgressUpdate);
  }, [store]);

  const setActiveTrack = (trackId: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, trackId);
    } catch {
      // ignore storage errors
    }
    setActiveTrackId(trackId);
  };

  const value = useMemo<ExamTrackContextValue>(
    () => ({
      activeTrack,
      setActiveTrack,
      availableTracks: EXAM_TRACKS,
      trackProgress,
      store,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTrack, trackProgress, store],
  );

  return <ExamTrackContext.Provider value={value}>{children}</ExamTrackContext.Provider>;
}

export function useExamTrack(): ExamTrackContextValue {
  const ctx = useContext(ExamTrackContext);
  if (!ctx) throw new Error('useExamTrack must be used within ExamTrackProvider');
  return ctx;
}
