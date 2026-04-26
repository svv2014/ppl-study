import { useEffect, useRef, type KeyboardEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Lesson } from '../../lib/types';
import { typographyTokens } from '../../tokens';

const MONO = typographyTokens.fontFamily.mono;

interface PlaylistQueueProps {
  playlist: Lesson[];
  currentIndex: number;
  playedIndices: ReadonlySet<number>;
  onJump: (index: number) => void;
}

export default function PlaylistQueue({
  playlist,
  currentIndex,
  playedIndices,
  onJump,
}: PlaylistQueueProps) {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    rowRefs.current[currentIndex]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [currentIndex]);

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>, index: number) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.min(playlist.length - 1, index + 1);
      rowRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = Math.max(0, index - 1);
      rowRefs.current[prev]?.focus();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      onJump(index);
    }
  }

  return (
    <Box
      role="list"
      aria-label="Playlist queue"
      sx={{
        mt: 1,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '4px',
        overflow: 'hidden',
        maxHeight: { xs: 220, sm: 320 },
        overflowY: 'auto',
      }}
    >
      {playlist.map((lesson, index) => {
        const isCurrent = index === currentIndex;
        const isPlayed = playedIndices.has(index);
        const icon = isCurrent ? '▶' : isPlayed ? '✓' : '·';

        return (
          <Box
            key={lesson.id}
            ref={(el: HTMLDivElement | null) => {
              rowRefs.current[index] = el;
            }}
            role="listitem"
            tabIndex={0}
            onClick={() => onJump(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-label={`${lesson.id} ${lesson.title}${isCurrent ? ', currently playing' : isPlayed ? ', played' : ''}`}
            aria-current={isCurrent ? 'true' : undefined}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              minHeight: 48,
              cursor: 'pointer',
              borderLeft: '3px solid',
              borderLeftColor: isCurrent ? 'primary.main' : 'transparent',
              backgroundColor: isCurrent ? 'action.selected' : 'transparent',
              borderBottom: index < playlist.length - 1 ? '1px solid' : 'none',
              borderBottomColor: 'divider',
              transition: 'background-color 150ms ease-out, border-color 150ms ease-out',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: '-2px',
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: MONO,
                fontSize: 11,
                fontWeight: 500,
                color: isCurrent ? 'primary.main' : 'text.secondary',
                minWidth: 14,
                textAlign: 'center',
                flexShrink: 0,
              }}
            >
              {icon}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: MONO,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.1em',
                color: isCurrent ? 'primary.main' : 'text.secondary',
                textTransform: 'uppercase',
                flexShrink: 0,
                minWidth: 60,
              }}
            >
              {lesson.id}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: 13,
                color: isCurrent ? 'text.primary' : isPlayed ? 'text.secondary' : 'text.primary',
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {lesson.title}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: MONO,
                fontSize: 11,
                color: 'text.secondary',
                flexShrink: 0,
                letterSpacing: '0.08em',
              }}
            >
              {lesson.duration_min}&nbsp;MIN
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
