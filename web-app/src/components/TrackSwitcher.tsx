import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import { useExamTrack } from '../context/ExamTrackContext';
import { getLessonsByTrack } from '../lib/lesson-loader';

export default function TrackSwitcher() {
  const theme = useTheme();
  const { activeTrack, setActiveTrack, availableTracks, trackProgress } = useExamTrack();

  const progressPct = useMemo(() => {
    const trackLessons = getLessonsByTrack(activeTrack.id);
    if (trackLessons.length === 0) return 0;
    const trackIds = new Set(trackLessons.map((l) => l.id));
    const done = trackProgress.completed.filter((id) => trackIds.has(id)).length;
    return Math.round((done / trackLessons.length) * 100);
  }, [activeTrack.id, trackProgress.completed]);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget);
  const handleClose = () => setAnchor(null);

  const handleSelect = (trackId: string) => {
    setActiveTrack(trackId);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Active exam track: ${activeTrack.name}. Click to switch.`}
        endIcon={<ExpandMoreIcon sx={{ fontSize: '0.875rem !important', ml: -0.5 }} />}
        sx={{
          borderRadius: '999px',
          px: 1.5,
          py: 0.375,
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          minWidth: 0,
          whiteSpace: 'nowrap',
          lineHeight: 1.5,
          '&:hover': {
            backgroundColor: theme.palette.primaryMuted,
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        {activeTrack.code} · {progressPct}%
      </Button>

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              minWidth: 240,
              maxWidth: 'min(280px, calc(100vw - 32px))',
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
            },
          },
        }}
      >
        <Box sx={{ px: 2, pt: 1.5, pb: 0.75 }}>
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ fontSize: '0.625rem', letterSpacing: '0.12em' }}
          >
            Exam Track
          </Typography>
        </Box>

        {availableTracks.map((track) => {
          const isActiveTrack = track.id === activeTrack.id;
          const isSelectable = track.status === 'active';

          return (
            <MenuItem
              key={track.id}
              onClick={isSelectable ? () => handleSelect(track.id) : undefined}
              selected={isActiveTrack}
              disableRipple={!isSelectable}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1,
                py: 1,
                cursor: isSelectable ? 'pointer' : 'default',
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primaryMuted,
                  '&:hover': { backgroundColor: theme.palette.primaryMuted },
                },
                '&:hover': {
                  backgroundColor: isSelectable ? theme.palette.primaryMuted : 'transparent',
                },
              }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: isActiveTrack ? 600 : 400,
                    color: isSelectable ? 'text.primary' : 'text.disabled',
                    lineHeight: 1.3,
                  }}
                >
                  {track.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2 }}>
                  {track.tagline}
                </Typography>
              </Box>
              {track.status === 'locked' && (
                <LockIcon sx={{ fontSize: '1rem', color: 'text.disabled', flexShrink: 0 }} />
              )}
              {track.status === 'coming-soon' && (
                <Chip
                  label="Soon"
                  size="small"
                  sx={{
                    fontSize: '0.5625rem',
                    height: 16,
                    flexShrink: 0,
                    backgroundColor: theme.palette.background.surfaceRaised,
                    color: theme.palette.text.secondary,
                    '& .MuiChip-label': { px: 0.75 },
                  }}
                />
              )}
            </MenuItem>
          );
        })}

        <Divider sx={{ my: 0.5 }} />

        <MenuItem
          disabled
          sx={{
            opacity: '0.45 !important',
            py: 0.875,
          }}
        >
          <AddIcon sx={{ fontSize: '1rem', mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            Add another track
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
