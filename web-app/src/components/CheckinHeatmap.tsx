import Box from '@mui/material/Box';
import { typographyTokens } from '../tokens';
import { getCheckins } from '../lib/checkins';

const MONO = typographyTokens.fontFamily.mono;

export default function CheckinHeatmap() {
  const checkinSet = new Set(getCheckins());

  const days: Array<{ date: string; studied: boolean }> = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const date = d.toLocaleDateString('en-CA');
    days.push({ date, studied: checkinSet.has(date) });
  }

  return (
    <Box>
      <Box
        aria-label="Study activity, last 30 days"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(15, 1fr)', sm: 'repeat(30, 1fr)' },
          gap: '3px',
        }}
      >
        {days.map(({ date, studied }) => (
          <Box
            key={date}
            aria-label={`${date}: ${studied ? 'studied' : 'not studied'}`}
            sx={{
              aspectRatio: '1',
              borderRadius: '3px',
              bgcolor: studied ? 'primary.main' : 'background.surfaceRaised',
              opacity: studied ? 1 : 0.6,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '6px',
          fontFamily: MONO,
          fontSize: '10px',
          color: 'text.secondary',
          letterSpacing: '0.08em',
        }}
      >
        <span>30 days ago</span>
        <span>today</span>
      </Box>
    </Box>
  );
}
