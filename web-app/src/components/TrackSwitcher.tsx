import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useTrack } from '../context/TrackContext';
import { TRACKS } from '../lib/exam-tracks';

const CHIP_BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  px: '10px',
  py: '4px',
  minHeight: '28px',
  borderRadius: '100px',
  border: '1px solid',
  fontSize: '0.625rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  fontFamily: 'inherit',
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
  transition: 'background-color 0.15s, border-color 0.15s, color 0.15s',
} as const;

export default function TrackSwitcher() {
  const { activeTrack, setActiveTrack } = useTrack();

  return (
    <Box
      role="group"
      aria-label="Exam track"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', minWidth: 0 }}
    >
      {TRACKS.map((track) => {
        const isActive = track.slug === activeTrack.slug;
        const isComingSoon = track.status === 'coming-soon';

        if (isComingSoon) {
          return (
            <Tooltip
              key={track.slug}
              title={`${track.label} — coming soon`}
              placement="bottom"
            >
              {/* span wrapper required: Tooltip doesn't receive events on disabled buttons */}
              <span style={{ display: 'inline-flex' }}>
                <Box
                  component="button"
                  disabled
                  aria-label={`${track.label} — coming soon`}
                  sx={(theme) => ({
                    ...CHIP_BASE,
                    cursor: 'default',
                    borderColor: theme.palette.divider,
                    backgroundColor: 'transparent',
                    color: theme.palette.text.disabled,
                  })}
                >
                  {track.shortLabel}
                </Box>
              </span>
            </Tooltip>
          );
        }

        return (
          <Box
            key={track.slug}
            component="button"
            onClick={() => setActiveTrack(track.slug)}
            aria-pressed={isActive}
            aria-label={track.label}
            sx={(theme) => ({
              ...CHIP_BASE,
              cursor: 'pointer',
              ...(isActive
                ? {
                    borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.primaryMuted,
                    color: theme.palette.primary.main,
                  }
                : {
                    borderColor: theme.palette.divider,
                    backgroundColor: 'transparent',
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.primaryMuted,
                    },
                  }),
            })}
          >
            {track.shortLabel}
          </Box>
        );
      })}
    </Box>
  );
}
