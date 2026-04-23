import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStickyPlayer } from '../context/StickyPlayerContext';
import { readSpeed, writeSpeed, readPosition, writePosition } from '../lib/audio-state';
import { TOPIC_LABELS } from '../lib/curriculum';
import { typographyTokens } from '../tokens';
import PlaylistQueue from './player/PlaylistQueue';
import type { Lesson } from '../lib/types';

const SPEEDS = [0.75, 1, 1.1, 1.25, 1.5, 1.75, 2] as const;
type Speed = (typeof SPEEDS)[number];
const MONO = typographyTokens.fontFamily.mono;

// Height of MUI mobile BottomNavigation
const BOTTOM_NAV_H = 56;
// Compact bar height (total = SCRUB_H + BAR_H)
const SCRUB_H = 3;
const BAR_H = 69;

export default function StickyPlayerBar() {
  const { lessons: allLessons } = useStickyPlayer();
  const playlist: Lesson[] = allLessons.filter((l) => l.audio !== null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playedIndices, setPlayedIndices] = useState<ReadonlySet<number>>(() => new Set());
  const [speed, setSpeed] = useState<Speed>(() => {
    const saved = readSpeed();
    return (SPEEDS as readonly number[]).includes(saved) ? (saved as Speed) : 1;
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const savePositionRef = useRef<() => void>(() => {});

  savePositionRef.current = () => {
    const audio = audioRef.current;
    const lesson = playlist[currentIndex];
    if (audio && lesson) {
      writePosition(lesson.id, audio.currentTime);
    }
  };

  // Reset index when playlist shrinks to avoid out-of-bounds
  useEffect(() => {
    if (playlist.length > 0 && currentIndex >= playlist.length) {
      setCurrentIndex(0);
    }
  }, [playlist.length, currentIndex]);

  // Load audio when lesson changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || playlist.length === 0) return;
    audio.load();
    audio.playbackRate = speed;
    const savedPos = readPosition(playlist[currentIndex]?.id ?? '');
    const onCanPlay = () => {
      if (savedPos > 0) audio.currentTime = savedPos;
      audio.play().catch(() => {});
    };
    audio.addEventListener('canplay', onCanPlay, { once: true });
    return () => {
      audio.removeEventListener('canplay', onCanPlay);
    };
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync speed to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => {
      setIsPlaying(false);
      savePositionRef.current();
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      savePositionRef.current();
    };
    const onDurationChange = () => setDuration(isFinite(audio.duration) ? audio.duration : 0);
    const onEnded = () => {
      setPlayedIndices((prev) => {
        const next = new Set(prev);
        next.add(currentIndex);
        return next;
      });
      if (currentIndex < playlist.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentIndex, playlist.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasTracks = playlist.length > 0;
  const current = hasTracks ? playlist[Math.min(currentIndex, playlist.length - 1)] : null;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bottomOffset = isMobile ? `${BOTTOM_NAV_H}px` : '0px';

  function jumpTo(index: number) {
    savePositionRef.current();
    setPlayedIndices((prev) => {
      const next = new Set(prev);
      next.add(currentIndex);
      return next;
    });
    setCurrentIndex(index);
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

  function handleScrubClick(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  }

  function handleSpeedChange(e: SelectChangeEvent<Speed>) {
    const val = Number(e.target.value) as Speed;
    setSpeed(val);
    writeSpeed(val);
  }

  return (
    <Box
      component="section"
      aria-label="Audio player"
      sx={{
        position: 'fixed',
        bottom: bottomOffset,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar - 1,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        transform: hasTracks ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 200ms ease-out',
      }}
    >
      {/* Hidden audio element — single source of truth for playback */}
      <audio ref={audioRef} preload="none" style={{ display: 'none' }}>
        {current && <source src={current.audio!} type="audio/mp4" />}
      </audio>

      {/* Thin scrub bar */}
      <Box
        role="progressbar"
        aria-label="Playback progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        onClick={handleScrubClick}
        sx={{
          height: SCRUB_H,
          width: '100%',
          backgroundColor: 'divider',
          cursor: 'pointer',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${progress}%`,
            backgroundColor: 'primary.main',
            transition: 'width 100ms linear',
          }}
        />
      </Box>

      {/* Compact bar (always visible) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: { xs: 1, sm: 2 },
          height: BAR_H,
          gap: 1,
        }}
      >
        <IconButton
          onClick={handlePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          size="medium"
          sx={{ flexShrink: 0, color: 'primary.main', minWidth: 48, minHeight: 48 }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <Box
          sx={{ flex: 1, minWidth: 0, cursor: 'pointer', py: 0.5 }}
          onClick={() => setIsExpanded((v) => !v)}
        >
          {current && (
            <>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontFamily: MONO,
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'text.secondary',
                  lineHeight: 1.3,
                }}
              >
                {TOPIC_LABELS[current.topic] ?? current.topic}
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: 13,
                  color: 'text.primary',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  lineHeight: 1.4,
                }}
              >
                {current.title}
              </Typography>
            </>
          )}
        </Box>

        <IconButton
          onClick={() => setIsExpanded((v) => !v)}
          aria-label={isExpanded ? 'Collapse player' : 'Expand player'}
          aria-expanded={isExpanded}
          size="small"
          sx={{ flexShrink: 0, color: 'text.secondary', minWidth: 48, minHeight: 48 }}
        >
          {isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </Box>

      {/* Expanded panel */}
      <Box
        sx={{
          overflow: 'hidden',
          maxHeight: isExpanded ? 480 : 0,
          transition: 'max-height 200ms ease-out',
          borderTop: isExpanded ? '1px solid' : 'none',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ px: { xs: 1, sm: 2 }, pt: 1.5, pb: 2 }}>
          {/* Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
            <IconButton
              onClick={() => jumpTo(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              aria-label="Previous lesson"
              size="small"
            >
              <SkipPreviousIcon />
            </IconButton>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.08em' }}
            >
              {currentIndex + 1}&nbsp;/&nbsp;{playlist.length}
            </Typography>
            <IconButton
              onClick={() => jumpTo(Math.min(playlist.length - 1, currentIndex + 1))}
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
                '& .MuiSelect-select': { fontFamily: MONO, py: '13px' },
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

          {/* Queue */}
          <PlaylistQueue
            playlist={playlist}
            currentIndex={currentIndex}
            playedIndices={playedIndices}
            onJump={jumpTo}
          />
        </Box>
      </Box>
    </Box>
  );
}
