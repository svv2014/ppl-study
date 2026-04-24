import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { radiusTokens, typographyTokens } from '../tokens';

interface Props {
  topic: string;
  lessonCount: number;
  completedCount: number;
  masteryPercent: number;
}

export default function TopicMasteryCard({
  topic,
  lessonCount,
  completedCount,
  masteryPercent,
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

      <Typography
        component="div"
        sx={{
          fontFamily: typographyTokens.fontFamily.mono,
          fontSize: '0.6875rem',
          fontWeight: typographyTokens.weight.medium,
          letterSpacing: typographyTokens.letterSpacing.wider,
          textTransform: 'uppercase',
          color: theme.palette.text.secondary,
          mb: 1.5,
        }}
      >
        {completedCount} / {lessonCount} LESSONS
      </Typography>

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
