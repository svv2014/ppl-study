import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { typographyTokens } from '../tokens';

export interface LessonScore {
  correct: number;
  total: number;
}

interface Props {
  lessonTitle: string;
  score: LessonScore | null;
  hasNext: boolean;
  onNextLesson: () => void;
  onReviewLesson: () => void;
  onBackToTopics: () => void;
}

export default function LessonCompleteScreen({
  lessonTitle,
  score,
  hasNext,
  onNextLesson,
  onReviewLesson,
  onBackToTopics,
}: Props) {
  const theme = useTheme();

  const passed = score !== null && score.total > 0 && score.correct / score.total >= 0.7;
  const scoreColor =
    score !== null
      ? passed
        ? theme.palette.success.main
        : theme.palette.error.main
      : theme.palette.text.secondary;

  const encouragement =
    score === null
      ? 'Lesson marked complete.'
      : passed
      ? 'Cleared for next. Proceed when ready.'
      : 'Below threshold. Review material and retake before continuing.';

  return (
    <Container
      id="main-content"
      tabIndex={-1}
      maxWidth={false}
      sx={{ maxWidth: 700, mx: 'auto', px: { xs: 2, sm: 3 }, py: 4 }}
    >
      <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
        ◆ LESSON COMPLETE
      </Typography>

      <Typography variant="h3" gutterBottom>
        {lessonTitle}
      </Typography>

      {score !== null && (
        <Box sx={{ mb: 2 }}>
          <Typography
            component="div"
            sx={{
              fontFamily: typographyTokens.fontFamily.mono,
              fontSize: '2.5rem',
              fontWeight: typographyTokens.weight.bold,
              lineHeight: 1.1,
              color: scoreColor,
            }}
          >
            {score.correct}/{score.total}
          </Typography>
          <Typography
            variant="overline"
            sx={{ color: scoreColor, display: 'block', mt: 0.5 }}
          >
            {Math.round((score.correct / score.total) * 100)}%
            {' · '}
            {passed ? 'PASS' : 'BELOW 70%'}
            {' · 70% REQUIRED'}
          </Typography>
        </Box>
      )}

      <Typography variant="body1" sx={{ mt: 1, mb: 3, color: score !== null ? scoreColor : 'text.primary' }}>
        {encouragement}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={onNextLesson}
          sx={{ minHeight: 48, flex: { sm: 1 } }}
        >
          {hasNext ? 'Next Lesson ▸' : 'All Lessons ▸'}
        </Button>
        <Button
          variant="outlined"
          onClick={onReviewLesson}
          sx={{ minHeight: 48, flex: { sm: 1 } }}
        >
          Review Lesson
        </Button>
        <Button
          variant="outlined"
          onClick={onBackToTopics}
          sx={{ minHeight: 48, flex: { sm: 1 } }}
        >
          Back to Topics
        </Button>
      </Box>
    </Container>
  );
}
