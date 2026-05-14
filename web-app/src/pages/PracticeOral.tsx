import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { buildPracticeOralPool, scoreExam } from '../lib/final-exam';
import type { ExamQuestion, ExamResult } from '../lib/final-exam';
import { EXAM_TRACKS } from '../lib/exam-tracks';

interface Props {
  trackId: string;
  count: number;
}

type Phase = 'running' | 'results';

export default function PracticeOral({ trackId, count }: Props) {
  const theme = useTheme();

  const track = EXAM_TRACKS.find((t) => t.id === trackId);

  const questions: ExamQuestion[] = useMemo(
    () => buildPracticeOralPool(trackId, count),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trackId, count],
  );

  const [phase, setPhase] = useState<Phase>('running');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  const currentQuestion: ExamQuestion | undefined = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  function selectAnswer(questionId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function doSubmit() {
    const result = scoreExam(answers, questions);
    setExamResult(result);
    setPhase('results');
  }

  if (questions.length === 0) {
    return (
      <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="warning">
          No questions found for this track. Make sure the night lessons are loaded.
        </Alert>
        <Button sx={{ mt: 2 }} variant="outlined" component={RouterLink} to="/plan">
          Back to Plan
        </Button>
      </Container>
    );
  }

  // ---- Running phase ----
  if (phase === 'running' && currentQuestion) {
    return (
      <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 3 }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2,
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ flex: 1, minWidth: 120 }}>
            <Typography variant="overline" color="primary.main" sx={{ display: 'block', mb: 0.5 }}>
              Practice Oral · {track?.code ?? trackId.toUpperCase()}
            </Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3, mb: 0.5 }} />
            <Typography variant="caption" color="text.secondary">
              {answeredCount} / {questions.length} answered
            </Typography>
          </Box>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={doSubmit}
          >
            Submit
          </Button>
        </Box>

        {/* Question */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Question {currentIndex + 1} of {questions.length}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            {currentQuestion.prompt}
          </Typography>
          <FormControl component="fieldset" sx={{ width: '100%' }}>
            <RadioGroup
              value={answers[currentQuestion.id] ?? ''}
              onChange={(e) => selectAnswer(currentQuestion.id, e.target.value)}
            >
              {Object.entries(currentQuestion.choices).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  value={key}
                  control={<Radio />}
                  label={`${key}. ${value}`}
                  sx={{ mb: 0.5 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Navigation */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => i - 1)}
          >
            ← Prev
          </Button>
          <Button
            variant="outlined"
            disabled={currentIndex === questions.length - 1}
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Next →
          </Button>
        </Box>
      </Container>
    );
  }

  // ---- Results phase ----
  if (phase === 'results' && examResult) {
    const missed = examResult.perQuestion.filter((pq) => !pq.isCorrect);

    return (
      <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="overline" color="primary.main" sx={{ display: 'block', mb: 1 }}>
          Practice Oral · {track?.code ?? trackId.toUpperCase()}
        </Typography>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Oral Results
        </Typography>

        {/* Score — no pass/fail, just X / 20 */}
        <Box
          sx={{
            mb: 4,
            p: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: theme.palette.primaryMuted,
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            {examResult.correct} / {examResult.total}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {examResult.percent}% correct
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Per-topic breakdown */}
        {examResult.perTopic.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Topic Breakdown
            </Typography>
            <Box sx={{ mb: 4 }}>
              {examResult.perTopic.map((t) => (
                <Box key={t.topic} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">{t.label}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.correct}/{t.total} · {t.percent}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={t.percent}
                    color={t.percent >= 80 ? 'success' : t.percent >= 60 ? 'primary' : 'error'}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Box>
          </>
        )}

        {/* Missed questions with explanations */}
        {missed.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Review Missed Questions ({missed.length})
            </Typography>
            <Box sx={{ mb: 4 }}>
              {missed.map((pq) => (
                <Box
                  key={pq.questionId}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
                    {pq.prompt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                    Your answer: {pq.userAnswer || '(none)'} · Correct: {pq.correctAnswer}
                  </Typography>
                  {pq.explanation && (
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                      {pq.explanation}
                    </Typography>
                  )}
                  <Button
                    component={RouterLink}
                    to={`/lessons/${pq.lessonTopic}/${pq.lessonSlug}`}
                    size="small"
                    variant="outlined"
                  >
                    Review Lesson
                  </Button>
                </Box>
              ))}
            </Box>
          </>
        )}

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={() => {
              setAnswers({});
              setCurrentIndex(0);
              setExamResult(null);
              setPhase('running');
            }}
          >
            Retake
          </Button>
          <Button variant="outlined" component={RouterLink} to="/plan">
            Back to Plan
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      <Alert severity="info">Loading…</Alert>
    </Container>
  );
}
