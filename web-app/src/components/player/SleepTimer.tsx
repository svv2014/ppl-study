import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const SLEEP_OPTIONS = [
  { label: 'Off', value: 'off' as const },
  { label: '5 min', value: 5 },
  { label: '15 min', value: 15 },
  { label: '30 min', value: 30 },
  { label: '60 min', value: 60 },
  { label: 'End of lesson', value: 'lesson' as const },
] as const;

type SleepOption = (typeof SLEEP_OPTIONS)[number]['value'];

interface SleepTimerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const MONO = "'SF Mono', 'JetBrains Mono', Consolas, monospace";

function formatCountdown(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `sleep in ${m}:${s}`;
}

export default function SleepTimer({ audioRef }: SleepTimerProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const remainingRef = useRef<number | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function cancelAll() {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    if (fadeRef.current) {
      clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
    const audio = audioRef.current;
    if (audio) audio.volume = 1;
    remainingRef.current = null;
    setRemaining(null);
  }

  function startFade() {
    if (fadeRef.current) return;
    const audio = audioRef.current;
    const steps = 100; // 100ms × 100 = 10s
    let step = 0;
    fadeRef.current = setInterval(() => {
      step++;
      if (audio) audio.volume = Math.max(0, 1 - step / steps);
      if (step >= steps) {
        clearInterval(fadeRef.current!);
        fadeRef.current = null;
        if (audio) {
          audio.pause();
          audio.volume = 1;
        }
        remainingRef.current = null;
        setRemaining(null);
      }
    }, 100);
  }

  function startTimer(seconds: number) {
    cancelAll();
    remainingRef.current = seconds;
    setRemaining(seconds);
    tickRef.current = setInterval(() => {
      if (remainingRef.current === null) return;
      remainingRef.current -= 1;
      if (remainingRef.current <= 0) {
        clearInterval(tickRef.current!);
        tickRef.current = null;
        setRemaining(0);
        startFade();
      } else {
        setRemaining(remainingRef.current);
      }
    }, 1000);
  }

  function handleSelect(value: SleepOption) {
    setAnchorEl(null);
    if (value === 'off') {
      cancelAll();
      return;
    }
    if (value === 'lesson') {
      const audio = audioRef.current;
      const secs =
        audio && isFinite(audio.duration)
          ? Math.max(1, Math.floor(audio.duration - audio.currentTime))
          : 0;
      if (secs > 0) startTimer(secs);
      return;
    }
    startTimer(value * 60);
  }

  useEffect(() => {
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
      if (fadeRef.current) clearInterval(fadeRef.current);
      const audio = audioRef.current;
      if (audio) audio.volume = 1;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isActive = remaining !== null;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {isActive && (
        <Typography
          sx={{
            fontFamily: MONO,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: 'primary.main',
            userSelect: 'none',
          }}
        >
          {formatCountdown(remaining!)}
        </Typography>
      )}
      <IconButton
        size="small"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        aria-label="Sleep timer"
        aria-haspopup="true"
        sx={{
          minWidth: 48,
          minHeight: 48,
          color: isActive ? 'primary.main' : 'text.secondary',
          transition: 'color 150ms ease-out',
          '&:hover': { color: 'primary.main' },
        }}
      >
        <BedtimeIcon fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {SLEEP_OPTIONS.map(({ label, value }) => (
          <MenuItem
            key={String(value)}
            onClick={() => handleSelect(value)}
            sx={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.05em' }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
