import Box from '@mui/material/Box';
import { typographyTokens } from '../../tokens';

const MONO = typographyTokens.fontFamily.mono;
export const LAST_SESSION_KEY = 'ppl-last-session';

function formatLastSession(iso: string | null): string {
  if (!iso) return '—';
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return 'JUST NOW';
  if (mins < 60) return `${mins}M AGO`;
  if (mins < 1440) return `${Math.round(mins / 60)}H AGO`;
  return `${Math.round(mins / 1440)}D AGO`;
}

interface Props {
  completedCount: number;
  totalLessons: number;
  lastSession: string | null;
}

export default function StatusBar({ completedCount, totalLessons, lastSession }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: '10px',
        fontFamily: MONO,
        fontSize: '11px',
        color: 'text.secondary',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        mb: '28px',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              bgcolor: 'success.main',
              flexShrink: 0,
            }}
          />
          System Ready
        </Box>
        <Box component="span">
          Transport Canada PPL
          <Box component="strong" sx={{ color: 'primary.main', ml: '6px', fontWeight: 600 }}>
            Aeroplane
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        <Box component="span">
          Lessons
          <Box component="strong" sx={{ color: 'primary.main', ml: '6px', fontWeight: 600 }}>
            {completedCount} / {totalLessons}
          </Box>
        </Box>
        <Box component="span">
          Last Session
          <Box component="strong" sx={{ color: 'primary.main', ml: '6px', fontWeight: 600 }}>
            {formatLastSession(lastSession)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
