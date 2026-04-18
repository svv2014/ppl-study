import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

interface SourceListProps {
  sources: string[];
}

export default function SourceList({ sources }: SourceListProps) {
  if (!sources.length) return null;
  return (
    <Box sx={{ mt: 3 }}>
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
        Sources
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {sources.map((src) => (
          <Chip
            key={src}
            label={src}
            size="small"
            variant="outlined"
            sx={{ color: 'text.secondary', borderColor: 'text.disabled' }}
          />
        ))}
      </Box>
    </Box>
  );
}
