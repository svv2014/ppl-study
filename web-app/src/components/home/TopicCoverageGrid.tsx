import Box from '@mui/material/Box';
import { typographyTokens } from '../../tokens';
import type { TopicStat } from './ReadinessGauge';

const MONO = typographyTokens.fontFamily.mono;

interface Props {
  stats: TopicStat[];
}

export default function TopicCoverageGrid({ stats }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: '14px',
      }}
    >
      {stats.map((s) => (
        <Box
          key={s.code}
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            p: 2,
          }}
        >
          <Box sx={{ fontFamily: MONO, fontSize: '10px', color: 'text.secondary', letterSpacing: '0.1em' }}>
            {s.code} · {Math.round(s.weight * 100)}% Weight
          </Box>
          <Box sx={{ fontSize: '15px', fontWeight: 600, mt: '6px', mb: '12px' }}>
            {s.label}
          </Box>
          <Box
            sx={{
              height: '2px',
              bgcolor: 'divider',
              borderRadius: '1px',
              overflow: 'hidden',
              mb: 1,
            }}
          >
            <Box sx={{ height: '100%', bgcolor: 'primary.main', width: `${s.pct}%`, transition: 'width 0.3s' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: MONO,
              fontSize: '11px',
              color: 'text.secondary',
            }}
          >
            <Box component="span">{s.done} / {s.total} lessons</Box>
            <Box component="strong" sx={{ color: 'primary.main', fontWeight: 500 }}>{s.pct}%</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
