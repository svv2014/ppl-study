import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import type { Lesson } from '../lib/types';
import { TOPIC_LABELS } from '../lib/curriculum';
import { readSpeed, writeSpeed, readPosition, writePosition, clearAudioPosition } from '../lib/audio-state';
import PlaylistQueue from './player/PlaylistQueue';
import { useMediaSession } from './MediaSessionBridge';
import SleepTimer from './player/SleepTimer';

const SPEEDS = [0.75, 1, 1.1, 1.25, 1.5, 1.75, 2] as const;
type Speed = (typeof SPEEDS)[number];

const MONO = "'SF Mono', 'JetBrains Mono', Consolas, monospace";

interface PlaylistPlayerProps {
  lessons: Lesson[];
}

export default function PlaylistPlayer({ lessons }: PlaylistPlayerProps) {
  const [playlist] = useState<Lesson[]>(() => lessons.filter((l) => l.audio !== null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playedIndices, setPlayedIndices] = useState<ReadonlySet<number>>(() => new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<Speed>(() => {
    const saved = readSpeed();
    return (SPEEDS as readonly number[]).includes(saved) ? (saved as Speed) : 1;
  });
  const audioRef = useRef<HTMLAudioElement>(null);
  const savePositionRef = useRef<() => void>(() => {});

  const current = playlist[currentIndex];

  // Keep savePositionRef current without recreating effects
  savePositionRef.current = () => {
    const audio = audioRef.current;
    const lesson = playlist[currentIndex];
    if (audio && lesson) {
      writePosition(lesson.id, audio.currentTime);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    audio.playbackRate = speed;
    const savedPos = readPosition(playlist[currentIndex]?.id ?? '');
    const onCanPlay = () => {
      if (savedPos > 0) {
        audio.currentTime = savedPos;
      }
      audio.play().catch(() => {});
    };
    audio.addEventListener('canplay', onCanPlay, { once: true });
    return () => {
      audio.removeEventListener('canplay', onCanPlay);
    };
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  // Save position periodically and on pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => savePositionRef.current();
    const onPause = () => savePositionRef.current();
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('pause', onPause);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function jumpTo(index: number) {
    savePositionRef.current();
    setPlayedIndices((prev: ReadonlySet<number>) => {
      const next = new Set(prev);
      next.add(currentIndex);
      return next;
    });
    setCurrentIndex(index);
  }

  function handlePrev() {
    jumpTo(Math.max(0, currentIndex - 1));
  }

  function handleNext() {
    jumpTo(Math.min(playlist.length - 1, currentIndex + 1));
  }

  useMediaSession({
    title: current?.title ?? '',
    artist: current ? (TOPIC_LABELS[current.topic] ?? current.topic) : '',
    audioRef,
    onPrev: currentIndex > 0 ? handlePrev : null,
    onNext: currentIndex < playlist.length - 1 ? handleNext : null,
  });

  if (playlist.length === 0) return null;

  function handleEnded() {
    const lesson = playlist[currentIndex];
    if (lesson) {
      clearAudioPosition(lesson.id);
    }
    setPlayedIndices((prev: ReadonlySet<number>) => {
      const next = new Set(prev);
      next.add(currentIndex);
      return next;
    });
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex((i: number) => i + 1);
    }
    setIsPlaying(false);
  }

  function handlePlayPause() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  }

  function handleSkipBack() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - 15);
  }

  function handleSkipForward() {
    const audio = audioRef.current;
    if (!audio) return;
    const dur = isFinite(audio.duration) ? audio.duration : 0;
    audio.currentTime = Math.min(dur, audio.currentTime + 15);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleSkipBack();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleSkipForward();
    }
  }

  function handleSpeedChange(e: SelectChangeEvent<Speed>) {
    const val = Number(e.target.value) as Speed;
    setSpeed(val);
    writeSpeed(val);
  }

  return (
    <Box tabIndex={0} onKeyDown={handleKeyDown} sx={{ my: 2, width: '100%', outline: 'none' }}>
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
        <SleepTimer audioRef={audioRef} />
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
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton
            onClick={handleSkipBack}
            aria-label="Skip back 15 seconds"
            sx={{ width: 48, height: 48 }}
          >
            <FastRewindIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, lineHeight: 1 }}>
            −15s
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            sx={{ width: 48, height: 48 }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, lineHeight: 1 }}>
            {isPlaying ? 'Pause' : 'Play'}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton
            onClick={handleSkipForward}
            aria-label="Skip forward 15 seconds"
            sx={{ width: 48, height: 48 }}
          >
            <FastForwardIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, lineHeight: 1 }}>
            +15s
          </Typography>
        </Box>
      </Box>
      <audio
        ref={audioRef}
        preload="none"
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ width: '100%', display: 'block' }}
      >
        <source src={current.audio!} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
      <PlaylistQueue
        playlist={playlist}
        currentIndex={currentIndex}
        playedIndices={playedIndices}
        onJump={jumpTo}
      />
    </Box>
  );
}
