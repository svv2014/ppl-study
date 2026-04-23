import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Lesson } from '../lib/types';

interface StickyPlayerContextValue {
  lessons: Lesson[];
  setLessons: (lessons: Lesson[]) => void;
}

const StickyPlayerContext = createContext<StickyPlayerContextValue>({
  lessons: [],
  setLessons: () => {},
});

export function useStickyPlayer(): StickyPlayerContextValue {
  return useContext(StickyPlayerContext);
}

export function StickyPlayerProvider({ children }: { children: ReactNode }) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  return (
    <StickyPlayerContext.Provider value={{ lessons, setLessons }}>
      {children}
    </StickyPlayerContext.Provider>
  );
}
