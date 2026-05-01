import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { getLessonBySlug, getAdjacentLessons } from '../lib/lesson-loader';
import { scoreQuiz } from '../lib/quiz';
import type { QuizResult } from '../lib/quiz';
import { useExamTrack } from '../context/ExamTrackContext';
import QuizRunner from '../components/QuizRunner';

type Phase = 'intro' | 'quiz' | 'results';

const TOUCH_TARGET = { minHeight: 48, minWidth: 48 };

export default function LessonQuiz() {
  const { topic, slug } = useParams<{ topic: string; slug: string }>();
  const navigate = useNavigate();
  const { store } = useExamTrack();

  const lesson = topic && slug ? getLessonBySlug(topic, slug) : undefined;

  const [phase, setPhase] = useState<Phase>('intro');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  if (!lesson) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          Lesson not found: {topic}/{slug}.
        </Alert>
        <Button variant="outlined" onClick={() => navigate('/lessons')} sx={TOUCH_TARGET}>
          Back to Lessons
        </Button>
      </Container>
    );
  }

  const lessonPath = `/lessons/${lesson.topic}/${lesson.slug}`;
  const backToLesson = () => navigate(lessonPath);

  const { next: nextLesson } = getAdjacentLessons(lesson.topic, lesson.slug);

  if (lesson.questions.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button
          component={Link}
          to={lessonPath}
          variant="text"
          sx={{ mb: 2, pl: 0, ...TOUCH_TARGET }}
        >
          ← Back to lesson
        </Button>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {lesson.title} — Quiz
        </Typography>
        <Alert severity="info" sx={{ mb: 2 }}>
          No quiz questions available for this lesson.
        </Alert>
        <Button variant="outlined" onClick={backToLesson} sx={TOUCH_TARGET}>
          Back to Lesson
        </Button>
      </Container>
    );
  }

  function handleStartQuiz() {
    setPhase('quiz');
    setQuizResult(null);
  }

  function handleQuizComplete(answers: Record<string, string>) {
    const result = scoreQuiz(answers, lesson!.questions);
    store.recordQuizAttempt({
      lessonId: lesson!.id,
      timestamp: new Date().toISOString(),
      score: result.correct,
      total: result.total,
      percent: result.percent,
      answers,
    });
    try {
      localStorage.setItem(
        `ppl-quiz-result-${lesson!.id}`,
        JSON.stringify({ correct: result.correct, total: result.total }),
      );
    } catch {
      // storage unavailable — non-fatal
    }
    setQuizResult(result);
    setPhase('results');
  }

  function handleRetake() {
    setPhase('intro');
    setQuizResult(null);
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        component={Link}
        to={lessonPath}
        variant="text"
        sx={{ mb: 2, pl: 0, ...TOUCH_TARGET }}
      >
        ← Back to lesson
      </Button>

      <Typography variant="h5" sx={{ mb: 3 }}>
        {lesson.title} — Quiz
      </Typography>

      {phase === 'intro' && (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {lesson.questions.length} question
            {lesson.questions.length !== 1 ? 's' : ''} · {lesson.title}
          </Typography>
          <Button variant="contained" onClick={handleStartQuiz} sx={TOUCH_TARGET}>
            Start Quiz
          </Button>
        </Box>
      )}

      {phase === 'quiz' && (
        <QuizRunner questions={lesson.questions} onComplete={handleQuizComplete} />
      )}

      {phase === 'results' && quizResult && (
        <Box>
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
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
                    {quizResult.correct}/{quizResult.total} correct
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Score: {quizResult.percent}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {lesson.title}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  onClick={handleRetake}
                  sx={TOUCH_TARGET}
                >
                  Retake
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate(lessonPath, { state: { showComplete: true } })}
                  sx={TOUCH_TARGET}
                >
                  Review lesson
                </Button>
                {nextLesson ? (
                  <Button
                    component={Link}
                    to={`/lessons/${nextLesson.topic}/${nextLesson.slug}`}
                    variant="outlined"
                    color="secondary"
                    sx={TOUCH_TARGET}
                  >
                    Next lesson →
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to="/lessons"
                    variant="outlined"
                    color="secondary"
                    sx={TOUCH_TARGET}
                  >
                    All lessons
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>

          <Divider sx={{ mb: 3 }} />

          {quizResult.perQuestion.map((pq, idx) => {
            const q = lesson.questions.find((sq) => sq.id === pq.questionId);
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
    </Container>
  );
}
