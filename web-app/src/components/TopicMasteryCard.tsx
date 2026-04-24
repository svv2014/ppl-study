import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { typographyTokens, radiusTokens } from '../tokens';
import type { CurriculumSlot } from '../lib/curriculum';

export interface TopicMasteryCardProps {
  topicCode: string;
  topicLabel: string;
  slots: CurriculumSlot[];
  completedIds: string[];
}

export default function TopicMasteryCard({
  topicCode,
  topicLabel,
  slots,
  completedIds,
}: TopicMasteryCardProps) {
  const theme = useTheme();
  const total = slots.length;
  const done = slots.filter((s) => completedIds.includes(s.id)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: `${radiusTokens.md}px`,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        transition: 'border-color 150ms ease-out, transform 150ms ease-out',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          transform: 'translateY(-1px)',
        },
      }}
    >
      {/* Top row: monospace code + lesson count label */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography
          component="span"
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
          }}
        >
          {topicCode}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: typographyTokens.letterSpacing.wide,
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
          }}
        >
          {done}/{total} LESSONS
        </Typography>
      </Box>

      {/* Topic name */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: typographyTokens.fontFamily.sans,
          fontSize: '0.9375rem',
          fontWeight: typographyTokens.weight.semibold,
          color: theme.palette.text.primary,
          lineHeight: 1.35,
        }}
      >
        {topicLabel}
      </Typography>

      {/* Amber progress bar — 2px thin */}
      <LinearProgress
        variant="determinate"
        value={pct}
        sx={{
          height: 2,
          borderRadius: radiusTokens.pill,
          backgroundColor: `${theme.palette.primary.main}22`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: radiusTokens.pill,
          },
        }}
      />

      {/* Footer: mastery % */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Typography
          component="span"
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.875rem',
            fontWeight: typographyTokens.weight.semibold,
            color: pct === 0 ? theme.palette.text.disabled : theme.palette.primary.main,
          }}
        >
          {pct}%
        </Typography>
      </Box>
    </Box>
  );
}
