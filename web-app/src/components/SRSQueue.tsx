import { useState, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { typographyTokens, radiusTokens, colorTokens } from '../tokens';
import { sm2Update, newCard, loadSRSData, saveSRSData, getDueCards } from '../lib/srs';
import type { SRSCard } from '../lib/srs';
import type { Lesson } from '../lib/types';

// Quality values mapped to buttons
const RATINGS = [
  { label: 'AGAIN', quality: 1, color: colorTokens.error.main },
  { label: 'HARD',  quality: 2, color: colorTokens.primary.dim },
  { label: 'GOOD',  quality: 4, color: colorTokens.primary.main },
  { label: 'EASY',  quality: 5, color: colorTokens.success.main },
] as const;

export interface SRSQueueProps {
  trackId: string;
  completedLessons: Lesson[];
}

type Phase = 'front' | 'back' | 'done';

export default function SRSQueue({ trackId, completedLessons }: SRSQueueProps) {
  const theme = useTheme();

  const [srsData, setSrsData] = useState(() => loadSRSData(trackId));
  const [queueIndex, setQueueIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('front');

  const lessonMap = useMemo(
    () => new Map(completedLessons.map((l) => [l.id, l])),
    [completedLessons],
  );

  const dueCards: SRSCard[] = useMemo(
    () => getDueCards(srsData, completedLessons.map((l) => l.id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const current = dueCards[queueIndex];
  const lesson = current ? lessonMap.get(current.lessonId) : undefined;
  const remaining = dueCards.length - queueIndex;

  const handleRate = useCallback(
    (quality: number) => {
      if (!current) return;
      const updated = sm2Update(current, quality);
      const next = { ...srsData, [current.lessonId]: updated };
      setSrsData(next);
      saveSRSData(trackId, next);

      if (queueIndex + 1 >= dueCards.length) {
        setPhase('done');
      } else {
        setQueueIndex((i) => i + 1);
        setPhase('front');
      }
    },
    [current, srsData, queueIndex, dueCards.length, trackId],
  );

  const handleShowBack = () => setPhase('back');

  if (dueCards.length === 0) {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: `${radiusTokens.md}px`,
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.75rem',
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
            mb: 1,
          }}
        >
          ◆ DAILY REVIEW
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 1 }}>
          No reviews due
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Complete lessons to start spaced repetition reviews.
        </Typography>
      </Box>
    );
  }

  if (phase === 'done') {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: `${radiusTokens.md}px`,
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.75rem',
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
            mb: 1,
          }}
        >
          ◆ SESSION COMPLETE
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 1 }}>
          {dueCards.length} card{dueCards.length !== 1 ? 's' : ''} reviewed
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Next session scheduled based on your ratings.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: `${radiusTokens.md}px`,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 2,
          py: 1,
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
          }}
        >
          ◆ DAILY REVIEW
        </Typography>
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            color: theme.palette.text.secondary,
            letterSpacing: typographyTokens.letterSpacing.wide,
          }}
        >
          {remaining} REMAINING
        </Typography>
      </Box>

      {/* Card face */}
      <Box sx={{ p: 3 }}>
        {/* Lesson ID stamp */}
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
            mb: 1,
          }}
        >
          ▸ {current.lessonId}
        </Typography>

        {/* Lesson title (front) */}
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontFamily: typographyTokens.fontFamily.sans,
            mb: 2,
          }}
        >
          {lesson?.title ?? current.lessonId}
        </Typography>

        {/* Back side: first question as recall prompt */}
        {phase === 'back' && lesson?.questions[0] && (
          <Box
            sx={{
              backgroundColor: theme.palette.background.surfaceRaised,
              border: `1px solid ${theme.palette.divider}`,
              borderLeft: `3px solid ${theme.palette.primary.main}`,
              borderRadius: `0 ${radiusTokens.sm}px ${radiusTokens.sm}px 0`,
              p: 2,
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: typographyTokens.fontFamily.mono,
                fontSize: '0.6875rem',
                letterSpacing: typographyTokens.letterSpacing.wider,
                textTransform: 'uppercase',
                color: theme.palette.text.secondary,
                mb: 1,
              }}
            >
              RECALL PROMPT
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary, fontFamily: typographyTokens.fontFamily.sans }}
            >
              {lesson.questions[0].prompt}
            </Typography>
            <Box
              sx={{
                mt: 1.5,
                pt: 1.5,
                borderTop: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: typographyTokens.fontFamily.mono,
                  fontSize: '0.6875rem',
                  letterSpacing: typographyTokens.letterSpacing.wider,
                  textTransform: 'uppercase',
                  color: theme.palette.text.secondary,
                  mb: 0.5,
                }}
              >
                ANSWER
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.primary, fontFamily: typographyTokens.fontFamily.sans }}
              >
                {lesson.questions[0].explanation}
              </Typography>
            </Box>
          </Box>
        )}

        {phase === 'front' ? (
          <Button
            variant="outlined"
            onClick={handleShowBack}
            fullWidth
            sx={{ minHeight: 48 }}
          >
            SHOW ANSWER
          </Button>
        ) : (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {RATINGS.map(({ label, quality, color }) => (
              <Button
                key={label}
                onClick={() => handleRate(quality)}
                sx={{
                  flex: '1 1 0',
                  minHeight: 48,
                  minWidth: 64,
                  fontFamily: typographyTokens.fontFamily.mono,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: typographyTokens.letterSpacing.wide,
                  color,
                  border: `1px solid ${color}`,
                  borderRadius: `${radiusTokens.sm}px`,
                  '&:hover': {
                    backgroundColor: `${color}18`,
                    borderColor: color,
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Box>

      {/* SRS meta */}
      <Box
        sx={{
          px: 2,
          py: 1,
          borderTop: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.625rem',
            letterSpacing: typographyTokens.letterSpacing.wide,
            textTransform: 'uppercase',
            color: theme.palette.text.disabled,
          }}
        >
          EF {current.ef.toFixed(1)} · INTERVAL {current.interval}D · REP {current.repetitions}
        </Typography>
      </Box>
    </Box>
  );
}
