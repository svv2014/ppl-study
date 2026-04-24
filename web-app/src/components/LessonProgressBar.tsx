import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface LessonProgressBarProps {
  current: number;
  total: number;
}

export default function LessonProgressBar({ current, total }: LessonProgressBarProps) {
  const theme = useTheme();
  const pct = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  return (
    <Box
      sx={{
        width: '100%',
        height: 4,
        bgcolor: theme.palette.divider,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${pct}%`,
          bgcolor: 'primary.main',
          borderRadius: 0,
        }}
      />
    </Box>
  );
}
