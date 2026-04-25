import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { radiusTokens, typographyTokens } from '../tokens';

interface Props {
  topic: string;
  lessonCount: number;
  completedCount: number;
  masteryPercent: number;
  playlistUrl?: string;
}

export default function TopicMasteryCard({
  topic,
  lessonCount,
  completedCount,
  masteryPercent,
  playlistUrl,
}: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: `${radiusTokens.lg}px`,
        p: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 0.5, lineHeight: 1.35 }}
      >
        {topic}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Typography
          component="div"
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: typographyTokens.weight.medium,
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
          }}
        >
          {completedCount} / {lessonCount} LESSONS
        </Typography>
        {playlistUrl && (
          <Button
            component="a"
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            variant="outlined"
            sx={{
              fontFamily: typographyTokens.fontFamily.mono,
              fontSize: '0.6875rem',
              fontWeight: typographyTokens.weight.medium,
              letterSpacing: typographyTokens.letterSpacing.wide,
              textTransform: 'uppercase',
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              borderRadius: `${radiusTokens.xs}px`,
              py: 0,
              px: 1,
              minWidth: 0,
              lineHeight: 1.8,
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.primaryMuted,
              },
            }}
          >
            ▶ Playlist
          </Button>
        )}
      </Box>

      <LinearProgress
        variant="determinate"
        value={masteryPercent}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          borderRadius: 0,
          '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
}
