import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import type { Lesson } from '../lib/types';
import { TOPIC_LABELS } from '../lib/curriculum';
import { readSpeed, writeSpeed } from '../lib/audio-state';

const SPEEDS = [0.75, 1, 1.1, 1.25, 1.5, 1.75, 2] as const;
type Speed = (typeof SPEEDS)[number];

const MONO = "'SF Mono', 'JetBrains Mono', Consolas, monospace";

interface PlaylistPlayerProps {
  lessons: Lesson[];
}

export default function PlaylistPlayer({ lessons }: PlaylistPlayerProps) {
  const [playlist] = useState<Lesson[]>(() => lessons.filter((l) => l.audio !== null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState<Speed>(() => {
    const saved = readSpeed();
    return (SPEEDS as readonly number[]).includes(saved) ? (saved as Speed) : 1;
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    audio.playbackRate = speed;
    audio.play().catch(() => {});
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

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

  function handleSpeedChange(e: SelectChangeEvent<Speed>) {
    const val = Number(e.target.value) as Speed;
    setSpeed(val);
    writeSpeed(val);
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
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
        <Select<Speed>
          value={speed}
          onChange={handleSpeedChange}
          size="small"
          inputProps={{ 'aria-label': 'Playback speed' }}
          renderValue={(v) => `${v}×`}
          sx={{
            fontFamily: MONO,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.1em',
            minWidth: 72,
            minHeight: 48,
            borderRadius: '3px',
            '& .MuiSelect-select': {
              fontFamily: MONO,
              py: '13px',
            },
          }}
        >
          {SPEEDS.map((s) => (
            <MenuItem
              key={s}
              value={s}
              sx={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.08em' }}
            >
              {s}×
            </MenuItem>
          ))}
        </Select>
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
