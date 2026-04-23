import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import { useExamTrack } from '../context/ExamTrackContext';
import { colorTokens } from '../tokens';

export default function TrackSwitcher() {
  const { activeTrack, setActiveTrack, availableTracks } = useExamTrack();
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
        aria-label={`Active exam track: ${activeTrack.label}. Click to switch.`}
        endIcon={<ExpandMoreIcon sx={{ fontSize: '0.875rem !important', ml: -0.5 }} />}
        sx={{
          borderRadius: '999px',
          px: 1.5,
          py: 0.375,
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: colorTokens.primary.main,
          border: `1px solid ${colorTokens.primary.main}`,
          minWidth: 0,
          whiteSpace: 'nowrap',
          lineHeight: 1.5,
          '&:hover': {
            backgroundColor: colorTokens.primary.muted,
            borderColor: colorTokens.primary.main,
          },
        }}
      >
        {activeTrack.shortLabel}
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
              backgroundColor: colorTokens.background.paper,
              border: `1px solid ${colorTokens.divider}`,
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
                  backgroundColor: colorTokens.primary.muted,
                  '&:hover': { backgroundColor: colorTokens.primary.muted },
                },
                '&:hover': {
                  backgroundColor: isSelectable ? colorTokens.primary.muted : 'transparent',
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
                  {track.label}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2 }}>
                  {track.description}
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
                    backgroundColor: colorTokens.background.surfaceRaised,
                    color: colorTokens.text.secondary,
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
