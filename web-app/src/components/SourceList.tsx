import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { SOURCE_URLS } from '../lib/sources';

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
        {sources.map((src) => {
          const url = SOURCE_URLS[src];
          if (url) {
            return (
              <Chip
                key={src}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                label={src}
                size="small"
                variant="outlined"
                sx={{ color: 'text.secondary', borderColor: 'text.disabled', minHeight: 44, py: '10px' }}
              />
            );
          }
          return (
            <Tooltip key={src} title="No public link">
              <Chip
                label={src}
                size="small"
                variant="outlined"
                sx={{ color: 'text.secondary', borderColor: 'text.disabled', minHeight: 44, py: '10px' }}
              />
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}
