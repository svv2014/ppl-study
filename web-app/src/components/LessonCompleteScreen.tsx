import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { typographyTokens, radiusTokens } from '../tokens';
import type { CurriculumSlot } from '../lib/curriculum';

export interface LessonCompleteScreenProps {
  open: boolean;
  lessonId: string;
  lessonTitle: string;
  /** Quiz result — undefined if quiz was not taken */
  quizScore?: { score: number; total: number; percent: number };
  /** Next lesson in the topic, if any */
  nextLesson?: CurriculumSlot | null;
  /** SRS next-due date (ISO date string, YYYY-MM-DD) */
  srsNextDue?: string;
  onContinue: () => void;
  onClose: () => void;
}

export default function LessonCompleteScreen({
  open,
  lessonId,
  lessonTitle,
  quizScore,
  nextLesson,
  srsNextDue,
  onContinue,
  onClose,
}: LessonCompleteScreenProps) {
  const theme = useTheme();

  const scoreColor =
    quizScore === undefined
      ? theme.palette.text.secondary
      : quizScore.percent >= 80
        ? theme.palette.success.main
        : quizScore.percent >= 60
          ? theme.palette.primary.main
          : theme.palette.error.main;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderTop: `3px solid ${theme.palette.primary.main}`,
          borderRadius: `${radiusTokens.md}px`,
          backgroundImage: 'none',
          m: 2,
        },
      }}
    >
      <DialogContent sx={{ p: 3 }}>
        {/* Stamp line */}
        <Typography
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: typographyTokens.letterSpacing.wider,
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          ▸ {lessonId} · COMPLETE
        </Typography>

        {/* Lesson title */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: typographyTokens.fontFamily.sans,
            fontWeight: typographyTokens.weight.semibold,
            color: theme.palette.text.primary,
            mb: 3,
            lineHeight: 1.3,
          }}
        >
          {lessonTitle}
        </Typography>

        {/* Quiz score */}
        {quizScore !== undefined && (
          <Box
            sx={{
              backgroundColor: theme.palette.background.surfaceRaised,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: `${radiusTokens.sm}px`,
              p: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontFamily: typographyTokens.fontFamily.mono,
                fontSize: '0.6875rem',
                letterSpacing: typographyTokens.letterSpacing.wider,
                textTransform: 'uppercase',
                color: theme.palette.text.secondary,
              }}
            >
              QUIZ SCORE
            </Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Typography
                sx={{
                  fontFamily: typographyTokens.fontFamily.mono,
                  fontSize: '1.5rem',
                  fontWeight: typographyTokens.weight.bold,
                  color: scoreColor,
                  lineHeight: 1,
                }}
              >
                {quizScore.percent}%
              </Typography>
              <Typography
                sx={{
                  fontFamily: typographyTokens.fontFamily.mono,
                  fontSize: '0.625rem',
                  color: theme.palette.text.secondary,
                  letterSpacing: typographyTokens.letterSpacing.wide,
                }}
              >
                {quizScore.score}/{quizScore.total} CORRECT
              </Typography>
            </Box>
          </Box>
        )}

        {/* SRS next-due */}
        {srsNextDue && (
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontFamily: typographyTokens.fontFamily.mono,
                fontSize: '0.6875rem',
                letterSpacing: typographyTokens.letterSpacing.wider,
                textTransform: 'uppercase',
                color: theme.palette.text.secondary,
              }}
            >
              NEXT REVIEW
            </Typography>
            <Typography
              sx={{
                fontFamily: typographyTokens.fontFamily.mono,
                fontSize: '0.75rem',
                fontWeight: typographyTokens.weight.semibold,
                color: theme.palette.text.primary,
                letterSpacing: typographyTokens.letterSpacing.wide,
              }}
            >
              {srsNextDue}
            </Typography>
          </Box>
        )}

        {/* Actions */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 3 }}>
          {nextLesson && (
            <Button
              variant="contained"
              color="primary"
              onClick={onContinue}
              fullWidth
              sx={{ minHeight: 48, color: theme.palette.text.onAccent }}
            >
              ▸ BEGIN {nextLesson.id}
            </Button>
          )}
          <Button
            variant="outlined"
            onClick={onClose}
            fullWidth
            sx={{ minHeight: 48 }}
          >
            BACK TO LESSONS
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
