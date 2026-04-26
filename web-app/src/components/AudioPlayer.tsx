import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { readSpeed, writeSpeed, readPosition, writePosition, clearAudioPosition } from '../lib/audio-state';
import { useMediaSession } from './MediaSessionBridge';

const SPEEDS = [0.75, 1, 1.1, 1.25, 1.5, 1.75, 2] as const;
type Speed = (typeof SPEEDS)[number];

const MONO = "'SF Mono', 'JetBrains Mono', Consolas, monospace";

interface AudioPlayerProps {
  src: string | null;
  title?: string;
  topic?: string;
  lessonId?: string;
}

export default function AudioPlayer({ src, title, topic, lessonId }: AudioPlayerProps) {
  const [speed, setSpeed] = useState<Speed>(() => {
    const saved = readSpeed();
    return (SPEEDS as readonly number[]).includes(saved) ? (saved as Speed) : 1;
  });
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useMediaSession({
    title: title ?? '',
    artist: topic ?? '',
    audioRef,
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !lessonId) return;

    function savePos() {
      if (!audio || !lessonId) return;
      writePosition(lessonId, audio.currentTime);
    }

    function handleLoadedMetadata() {
      if (!audio || !lessonId) return;
      const saved = readPosition(lessonId);
      if (saved > 10 && isFinite(audio.duration) && saved < audio.duration - 10) {
        audio.currentTime = saved;
      }
    }

    function handlePlay() {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(savePos, 5000);
    }

    function handlePause() {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      savePos();
    }

    function handleSeeked() {
      savePos();
    }

    function handleEnded() {
      if (!lessonId) return;
      clearAudioPosition(lessonId);
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('seeked', handleSeeked);
    audio.addEventListener('ended', handleEnded);
    window.addEventListener('beforeunload', savePos);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('seeked', handleSeeked);
      audio.removeEventListener('ended', handleEnded);
      window.removeEventListener('beforeunload', savePos);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [lessonId]);

  function handleLoaded() {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
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

  if (!src) {
    return (
      <Chip
        label="Audio: In production"
        size="small"
        variant="outlined"
        color="info"
      />
    );
  }

  return (
    <Box tabIndex={0} onKeyDown={handleKeyDown} sx={{ my: 2, outline: 'none', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1,
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            fontSize: 11,
          }}
        >
          Lesson Audio
        </Typography>
        <Select<Speed>
          value={speed}
          onChange={handleSpeedChange}
          size="small"
          inputProps={{ 'aria-label': 'Playback speed' }}
          renderValue={(v: Speed) => `${v}×`}
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          <IconButton
            onClick={handleSkipBack}
            aria-label="Skip back 15 seconds"
            sx={{ width: 48, height: 48 }}
          >
            <FastRewindIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, lineHeight: 1, display: { xs: 'none', sm: 'block' } }}>
            −15s
          </Typography>
        </Box>
        <audio
          ref={audioRef}
          controls
          preload="none"
          onLoadedMetadata={handleLoaded}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, display: 'block', minWidth: 0, width: '100%' }}
        >
          <source src={src} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
          <IconButton
            onClick={handleSkipForward}
            aria-label="Skip forward 15 seconds"
            sx={{ width: 48, height: 48 }}
          >
            <FastForwardIcon />
          </IconButton>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: 10, lineHeight: 1, display: { xs: 'none', sm: 'block' } }}>
            +15s
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
