import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import type { Lesson } from '../lib/types';
import { TOPIC_LABELS } from '../lib/curriculum';

interface PlaylistPlayerProps {
  lessons: Lesson[];
}

export default function PlaylistPlayer({ lessons }: PlaylistPlayerProps) {
  const [playlist] = useState<Lesson[]>(() => lessons.filter((l) => l.audio !== null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    audio.play().catch(() => {});
  }, [currentIndex]);

  if (playlist.length === 0) return null;

  const current = playlist[currentIndex];

  function handlePrev() {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }

  function handleNext() {
    setCurrentIndex((i) => Math.min(playlist.length - 1, i + 1));
  }

  function handleEnded() {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  }

  return (
    <Box sx={{ my: 2, width: '100%' }}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          display: 'block',
          mb: 0.5,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          fontSize: 11,
        }}
      >
        Playlist
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mb: 0.5, fontSize: 11 }}
      >
        {TOPIC_LABELS[current.topic] ?? current.topic}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {current.title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <IconButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous lesson"
          size="small"
        >
          <SkipPreviousIcon />
        </IconButton>
        <Typography variant="caption" color="text.secondary">
          {currentIndex + 1} / {playlist.length}
        </Typography>
        <IconButton
          onClick={handleNext}
          disabled={currentIndex === playlist.length - 1}
          aria-label="Next lesson"
          size="small"
        >
          <SkipNextIcon />
        </IconButton>
      </Box>
      <audio
        ref={audioRef}
        preload="none"
        onEnded={handleEnded}
        style={{ width: '100%', display: 'block' }}
      >
        <source src={current.audio!} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
}
