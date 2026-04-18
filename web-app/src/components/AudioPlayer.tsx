import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

interface AudioPlayerProps {
  src: string | null;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  if (!src) {
    return (
      <Chip
        label="Audio: In production"
        size="small"
        variant="outlined"
        sx={{ color: 'primary.main', borderColor: 'primary.main' }}
      />
    );
  }

  return (
    <Box sx={{ my: 2 }}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          display: 'block',
          mb: 1,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          fontSize: 11,
        }}
      >
        Lesson Audio
      </Typography>
      <audio
        controls
        src={src}
        preload="none"
        style={{ width: '100%', display: 'block' }}
      />
    </Box>
  );
}
