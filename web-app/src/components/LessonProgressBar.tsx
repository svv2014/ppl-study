import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { radiusTokens } from '../tokens';

export interface LessonProgressBarProps {
  /** 1-based position of the current lesson in the topic */
  position: number;
  /** Total lessons in the topic */
  total: number;
  /** Accessible label for the bar, e.g. "Lesson 3 of 18 in Air Law" */
  label?: string;
}

export default function LessonProgressBar({ position, total, label }: LessonProgressBarProps) {
  const theme = useTheme();
  const pct = total > 0 ? (position / total) * 100 : 0;
  const ariaLabel = label ?? `Lesson ${position} of ${total}`;

  return (
    <Tooltip title={ariaLabel} placement="bottom">
      <Box
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuenow={position}
        aria-valuemin={1}
        aria-valuemax={total}
        sx={{ width: '100%', height: 3 }}
      >
        {/* Track */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: `${theme.palette.primary.main}22`,
            borderRadius: `0 0 ${radiusTokens.pill}px ${radiusTokens.pill}px`,
            overflow: 'hidden',
          }}
        >
          {/* Fill */}
          <Box
            sx={{
              width: `${pct}%`,
              height: '100%',
              backgroundColor: theme.palette.primary.main,
              transition: 'width 200ms ease-out',
            }}
          />
        </Box>
      </Box>
    </Tooltip>
  );
}
