import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

const ARTWORK: MediaImage[] = [
  { src: '/icons/ppl-512.svg', sizes: '512x512', type: 'image/svg+xml' },
];

interface MediaSessionOptions {
  title: string;
  artist: string;
  audioRef: RefObject<HTMLAudioElement | null>;
  onPrev?: (() => void) | null;
  onNext?: (() => void) | null;
}

export function useMediaSession({ title, artist, audioRef, onPrev, onNext }: MediaSessionOptions) {
  const prevRef = useRef(onPrev);
  const nextRef = useRef(onNext);

  useEffect(() => { prevRef.current = onPrev; });
  useEffect(() => { nextRef.current = onNext; });

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      album: 'PPL Study',
      artwork: ARTWORK,
    });
  }, [title, artist]);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;
    const audio = audioRef.current;
    if (!audio) return;

    navigator.mediaSession.setActionHandler('play', () => audio.play().catch(() => {}));
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());
    navigator.mediaSession.setActionHandler(
      'previoustrack',
      onPrev != null ? () => prevRef.current?.() : null,
    );
    navigator.mediaSession.setActionHandler(
      'nexttrack',
      onNext != null ? () => nextRef.current?.() : null,
    );
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
      if (!audio) return;
      audio.currentTime = Math.max(0, audio.currentTime - (details.seekOffset ?? 15));
    });
    navigator.mediaSession.setActionHandler('seekforward', (details) => {
      if (!audio) return;
      audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + (details.seekOffset ?? 15));
    });

    return () => {
      if (!('mediaSession' in navigator)) return;
      (['play', 'pause', 'previoustrack', 'nexttrack', 'seekbackward', 'seekforward'] as const).forEach(
        (action) => navigator.mediaSession.setActionHandler(action, null),
      );
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef, onPrev != null, onNext != null]);
}
