import { useState, useEffect, useRef } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { getAllLessons } from '../lib/lesson-loader';
import { scoreQuiz } from '../lib/quiz';
import type { QuizResult } from '../lib/quiz';
import type { Question } from '../lib/types';
import QuizRunner from '../components/QuizRunner';

type Phase = 'intro' | 'exam' | 'results';

const EXAM_QUESTION_COUNT = 50;
const EXAM_DURATION_SECONDS = 40 * 60;
const PASS_THRESHOLD = 90;

interface PooledQuestion extends Question {
  _lessonId: string;
}

function poolAirLawQuestions(): PooledQuestion[] {
  const lessons = getAllLessons().filter(
    (l) => l.topic === 'air-law' && l.questions.length > 0,
  );
  const pooled: PooledQuestion[] = [];
  for (const lesson of lessons) {
    for (const q of lesson.questions) {
      pooled.push({ ...q, id: `${lesson.id}-${q.id}`, _lessonId: lesson.id });
    }
  }
  return pooled;
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function PSTARExam() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const examQuestionsRef = useRef<PooledQuestion[]>([]);
  const pendingAnswersRef = useRef<Record<string, string>>({});
  const finishedRef = useRef(false);

  const pool = poolAirLawQuestions();
  const totalAvailable = pool.length;

  useEffect(() => {
    if (phase !== 'exam') return;
    const id = setInterval(() => {
      setTimeLeft((t) => (t <= 1 ? 0 : t - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === 'exam' && timeLeft === 0 && !finishedRef.current) {
      finishedRef.current = true;
      const result = scoreQuiz(pendingAnswersRef.current, examQuestionsRef.current);
      setQuizResult(result);
      setPhase('results');
    }
  }, [timeLeft, phase]);

  function handleStartExam() {
    const sliced = shuffle(pool).slice(0, Math.min(EXAM_QUESTION_COUNT, pool.length));
    examQuestionsRef.current = sliced;
    pendingAnswersRef.current = {};
    finishedRef.current = false;
    setTimeLeft(EXAM_DURATION_SECONDS);
    setQuizResult(null);
    setPhase('exam');
  }

  function handleQuizComplete(answers: Record<string, string>) {
    if (finishedRef.current) return;
    finishedRef.current = true;
    pendingAnswersRef.current = answers;
    const result = scoreQuiz(answers, examQuestionsRef.current);
    setQuizResult(result);
    setPhase('results');
  }

  function handleRetake() {
    finishedRef.current = false;
    setQuizResult(null);
    setPhase('intro');
  }

  function computeLessonBreakdown() {
    if (!quizResult) return [];
    const map = new Map<string, { lessonId: string; correct: number; total: number }>();
    for (const pq of quizResult.perQuestion) {
      const pq2 = examQuestionsRef.current.find((q) => q.id === pq.questionId);
      const lessonId = pq2?._lessonId ?? 'Unknown';
      if (!map.has(lessonId)) map.set(lessonId, { lessonId, correct: 0, total: 0 });
      const entry = map.get(lessonId)!;
      entry.total += 1;
      if (pq.isCorrect) entry.correct += 1;
    }
    return Array.from(map.values()).sort((a, b) => a.lessonId.localeCompare(b.lessonId));
  }

  const isPassing = quizResult ? quizResult.percent >= PASS_THRESHOLD : false;

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        PSTAR Practice Exam
      </Typography>

      {phase === 'intro' && (
        <Box>
          {totalAvailable === 0 ? (
            <Alert severity="info" sx={{ mb: 2 }}>
              No Air Law questions found. Complete some Air Law lessons first.
            </Alert>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 1 }}>
                The Pre-Solo Standard of Air Regulations (PSTAR) exam requires{' '}
                <strong>{PASS_THRESHOLD}%</strong> to pass.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {totalAvailable < EXAM_QUESTION_COUNT
                  ? `Only ${totalAvailable} questions are available (fewer than the ${EXAM_QUESTION_COUNT}-question target) — all will be shown.`
                  : `${EXAM_QUESTION_COUNT} questions will be randomly selected from ${totalAvailable} available questions.`}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Time limit: 40:00 · Pass threshold: {PASS_THRESHOLD}%
              </Typography>
              <Button variant="contained" onClick={handleStartExam}>
                Begin Exam
              </Button>
            </>
          )}
        </Box>
      )}

      {phase === 'exam' && (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              Air Law — PSTAR Practice
            </Typography>
            <Typography
              variant="h6"
              color={timeLeft <= 300 ? 'error' : 'text.primary'}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {formatTime(timeLeft)}
            </Typography>
          </Box>
          <QuizRunner
            questions={examQuestionsRef.current}
            onComplete={handleQuizComplete}
          />
        </Box>
      )}

      {phase === 'results' && quizResult && (
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={quizResult.percent}
                size={80}
                thickness={5}
                color={isPassing ? 'success' : 'error'}
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
              <Typography variant="h6" color={isPassing ? 'success.main' : 'error.main'}>
                {isPassing ? 'PASS' : 'FAIL'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pass threshold: {PASS_THRESHOLD}%
              </Typography>
            </Box>
          </Box>

          <Button variant="outlined" onClick={handleRetake} sx={{ mb: 3 }}>
            Try Again
          </Button>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" sx={{ mb: 2 }}>
            Per-Lesson Breakdown
          </Typography>
          {computeLessonBreakdown().map(({ lessonId, correct, total }) => {
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
            return (
              <Box key={lessonId} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2">{lessonId}</Typography>
                  <Typography variant="body2">
                    {correct}/{total} ({pct}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={pct}
                  color={pct >= PASS_THRESHOLD ? 'success' : 'error'}
                />
              </Box>
            );
          })}
        </Box>
      )}
    </Container>
  );
}
