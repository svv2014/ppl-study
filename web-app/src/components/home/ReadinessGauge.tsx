import Box from '@mui/material/Box';
import { typographyTokens } from '../../tokens';

const MONO = typographyTokens.fontFamily.mono;
const R = 48;
const CIRCUMFERENCE = 2 * Math.PI * R;

export interface TopicStat {
  code: string;
  label: string;
  weight: number;
  pct: number;
  done: number;
  total: number;
}

interface Props {
  weightedPct: number;
  topicStats: TopicStat[];
}

export default function ReadinessGauge({ weightedPct, topicStats }: Props) {
  const dashoffset = CIRCUMFERENCE * (1 - weightedPct / 100);
  const delta = Math.round(weightedPct - 80);
  const row1 = topicStats.slice(0, 2);
  const row2 = topicStats.slice(2, 4);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: 2.5,
      }}
    >
      <Box
        sx={{
          fontFamily: MONO,
          fontSize: '10px',
          color: 'text.secondary',
          letterSpacing: '0.15em',
          mb: 1.25,
          textTransform: 'uppercase',
        }}
      >
        ⦿ Exam Readiness · Weighted
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
        <Box
          component="svg"
          viewBox="0 0 120 120"
          width={110}
          height={110}
          sx={{ flexShrink: 0 }}
        >
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(26,53,80,0.6)" strokeWidth="1" />
          <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(26,53,80,0.8)" strokeWidth="6" />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="#f5a623"
            strokeWidth="6"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashoffset}
            transform="rotate(-90 60 60)"
            strokeLinecap="butt"
          />
          <g stroke="rgba(122,154,181,0.7)" strokeWidth="1">
            <line x1="60" y1="6" x2="60" y2="12" />
            <line x1="108" y1="60" x2="114" y2="60" />
            <line x1="60" y1="108" x2="60" y2="114" />
            <line x1="6" y1="60" x2="12" y2="60" />
          </g>
          <text x="60" y="22" textAnchor="middle" fill="rgba(122,154,181,0.7)" fontFamily="monospace" fontSize="7">100</text>
          <text x="100" y="63" textAnchor="middle" fill="rgba(122,154,181,0.7)" fontFamily="monospace" fontSize="7">25</text>
          <text x="60" y="103" textAnchor="middle" fill="rgba(122,154,181,0.7)" fontFamily="monospace" fontSize="7">50</text>
          <text x="20" y="63" textAnchor="middle" fill="rgba(122,154,181,0.7)" fontFamily="monospace" fontSize="7">75</text>
        </Box>
        <Box>
          <Box
            sx={{
              fontFamily: MONO,
              fontSize: { xs: '38px', md: '48px' },
              color: 'primary.main',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {Math.round(weightedPct)}
            <Box component="span" sx={{ fontSize: '18px', color: 'text.secondary', ml: '2px' }}>
              %
            </Box>
          </Box>
          <Box sx={{ fontFamily: MONO, fontSize: '11px', color: 'text.secondary', lineHeight: 1.9, mt: 0.75 }}>
            <Box>
              {row1.map((s, i) => (
                <Box key={s.code} component="span">
                  {s.code}{' '}
                  <Box component="span" sx={{ color: s.pct >= 70 ? 'success.main' : 'primary.main' }}>
                    {s.pct}%
                  </Box>
                  {i < row1.length - 1 && <Box component="span"> · </Box>}
                </Box>
              ))}
            </Box>
            <Box>
              {row2.map((s, i) => (
                <Box key={s.code} component="span">
                  {s.code}{' '}
                  <Box component="span" sx={{ color: s.pct >= 70 ? 'success.main' : 'primary.main' }}>
                    {s.pct}%
                  </Box>
                  {i < row2.length - 1 && <Box component="span"> · </Box>}
                </Box>
              ))}
            </Box>
            <Box sx={{ mt: '6px', color: delta >= 0 ? 'success.main' : 'primary.main' }}>
              Target 80 — Delta {delta >= 0 ? '+' : ''}{delta}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
