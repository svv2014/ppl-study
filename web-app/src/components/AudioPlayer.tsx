import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { readSpeed, writeSpeed } from '../lib/audio-state';

const SPEEDS = [0.75, 1, 1.1, 1.25, 1.5, 1.75, 2] as const;
type Speed = (typeof SPEEDS)[number];

const MONO = "'SF Mono', 'JetBrains Mono', Consolas, monospace";

interface AudioPlayerProps {
  src: string | null;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const [speed, setSpeed] = useState<Speed>(() => {
    const saved = readSpeed();
    return (SPEEDS as readonly number[]).includes(saved) ? (saved as Speed) : 1;
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  function handleLoaded() {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
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
    <Box sx={{ my: 2 }}>
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
      <audio
        ref={audioRef}
        controls
        preload="none"
        onLoadedMetadata={handleLoaded}
        style={{ width: '100%', display: 'block' }}
      >
        <source src={src} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
}
