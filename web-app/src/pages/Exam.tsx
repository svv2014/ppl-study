import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';
import { scoreQuiz } from '../lib/quiz';
import type { QuizResult } from '../lib/quiz';
import QuizRunner from '../components/QuizRunner';

type Phase = 'select' | 'quiz' | 'results';

function formatLessonLabel(id: string, title: string): string {
  return `${id.toUpperCase()} · ${title}`;
}

export default function Exam() {
  const [searchParams] = useSearchParams();
  const { store } = useProgress();

  const lessons = getAllLessons().filter((l) => l.questions.length > 0);

  const [selectedLessonId, setSelectedLessonId] = useState<string>(() => {
    const fromUrl = searchParams.get('lesson');
    if (fromUrl && lessons.some((l) => l.id === fromUrl)) return fromUrl;
    return lessons[0]?.id ?? '';
  });
  const [phase, setPhase] = useState<Phase>('select');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [pendingLessonId, setPendingLessonId] = useState<string | null>(null);

  const selectedLesson = lessons.find((l) => l.id === selectedLessonId);

  function handleLessonChange(newId: string) {
    if (phase === 'quiz') {
      setPendingLessonId(newId);
    } else {
      setSelectedLessonId(newId);
      setPhase('select');
      setQuizResult(null);
    }
  }

  function handleConfirmSwitch() {
    if (pendingLessonId) {
      setSelectedLessonId(pendingLessonId);
      setPhase('select');
      setQuizResult(null);
      setPendingLessonId(null);
    }
  }

  function handleCancelSwitch() {
    setPendingLessonId(null);
  }

  function handleStartQuiz() {
    setPhase('quiz');
    setQuizResult(null);
  }

  function handleQuizComplete(answers: Record<string, string>) {
    if (!selectedLesson) return;
    const result = scoreQuiz(answers, selectedLesson.questions);
    store.setLastExamScore(selectedLesson.id, result.percent);
    setQuizResult(result);
    setPhase('results');
  }

  function handleRetake() {
    setPhase('select');
    setQuizResult(null);
  }

  if (lessons.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Practice Exam
        </Typography>
        <Alert severity="info">No lessons with quiz questions found.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Practice Exam
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="lesson-select-label">Lesson</InputLabel>
        <Select
          labelId="lesson-select-label"
          value={selectedLessonId}
          label="Lesson"
          onChange={(e) => handleLessonChange(e.target.value)}
        >
          {lessons.map((l) => (
            <MenuItem key={l.id} value={l.id}>
              {formatLessonLabel(l.id, l.title)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {phase === 'select' && selectedLesson && (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedLesson.questions.length} question
            {selectedLesson.questions.length !== 1 ? 's' : ''} · {selectedLesson.title}
          </Typography>
          <Button variant="contained" onClick={handleStartQuiz}>
            Start Quiz
          </Button>
        </Box>
      )}

      {phase === 'quiz' && selectedLesson && (
        <QuizRunner questions={selectedLesson.questions} onComplete={handleQuizComplete} />
      )}

      {phase === 'results' && quizResult && selectedLesson && (
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={quizResult.percent}
                size={80}
                thickness={5}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" component="div" color="text.secondary">
                  {quizResult.percent}%
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h5">
                {quizResult.correct}/{quizResult.total} · {quizResult.percent}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedLesson.title}
              </Typography>
            </Box>
          </Box>

          <Button variant="outlined" onClick={handleRetake} sx={{ mb: 3 }}>
            Retake
          </Button>

          <Divider sx={{ mb: 3 }} />

          {quizResult.perQuestion.map((pq, idx) => {
            const q = selectedLesson.questions.find((sq) => sq.id === pq.questionId);
            return (
              <Box key={pq.questionId} sx={{ mb: 3 }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                  Question {idx + 1}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {pq.prompt}
                </Typography>
                <Alert severity={pq.isCorrect ? 'success' : 'error'} sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    Your answer: {pq.userAnswer}
                    {q ? `. ${q.choices[pq.userAnswer]}` : ''}
                  </Typography>
                  {!pq.isCorrect && (
                    <Typography variant="body2">
                      Correct answer: {pq.correctAnswer}
                      {q ? `. ${q.choices[pq.correctAnswer]}` : ''}
                    </Typography>
                  )}
                </Alert>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  {pq.explanation}
                </Typography>
                {idx < quizResult.perQuestion.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            );
          })}
        </Box>
      )}

      <Dialog open={pendingLessonId !== null} onClose={handleCancelSwitch}>
        <DialogTitle>Switch Lesson?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your current quiz progress will be lost. Switch to the new lesson?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelSwitch}>Cancel</Button>
          <Button onClick={handleConfirmSwitch} variant="contained">
            Switch
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
