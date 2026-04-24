import { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { buildExamPool, scoreExam, formatTime, POOL_CONFIGS } from '../lib/final-exam';
import type { ExamQuestion, ExamResult } from '../lib/final-exam';

type Phase = 'config' | 'running' | 'results';
type PoolType = 'full' | 'quick' | 'custom';

interface SavedState {
  questions: ExamQuestion[];
  answers: Record<string, string>;
  flagged: string[];
  currentIndex: number;
  poolType: PoolType;
  customCount: number;
  startedAt: number;
  totalSeconds: number;
}

interface HistoryEntry {
  date: string;
  percent: number;
  correct: number;
  total: number;
  poolType: string;
}

const LS_STATE_KEY = 'ppl-final-exam-state';
const LS_HISTORY_KEY = 'ppl-final-exam-history';

function loadSavedState(): SavedState | null {
  try {
    const raw = localStorage.getItem(LS_STATE_KEY);
    return raw ? (JSON.parse(raw) as SavedState) : null;
  } catch {
    return null;
  }
}

function persistSavedState(state: SavedState): void {
  try {
    localStorage.setItem(LS_STATE_KEY, JSON.stringify(state));
  } catch { /* ignore */ }
}

function clearSavedState(): void {
  try { localStorage.removeItem(LS_STATE_KEY); } catch { /* ignore */ }
}

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(LS_HISTORY_KEY);
    return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
  } catch {
    return [];
  }
}

function persistHistory(history: HistoryEntry[]): void {
  try {
    localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(history));
  } catch { /* ignore */ }
}

function poolLabel(type: PoolType): string {
  if (type === 'full') return 'Full (100q)';
  if (type === 'quick') return 'Quick (50q)';
  return 'Custom';
}

export default function FinalExam() {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const seedParam = searchParams.get('seed');
  const seedValue = seedParam !== null ? Number(seedParam) : undefined;

  const [phase, setPhase] = useState<Phase>('config');
  const [poolType, setPoolType] = useState<PoolType>('full');
  const [customCount, setCustomCount] = useState(60);
  const [savedState, setSavedState] = useState<SavedState | null>(() => loadSavedState());

  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startedAt, setStartedAt] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  const [tick, setTick] = useState(0);
  const autoSubmitted = useRef(false);
  const submitRef = useRef<() => void>(() => { /* noop until exam starts */ });

  const [jumpOpen, setJumpOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>(() => loadHistory());

  // 1-second tick for timer
  useEffect(() => {
    if (phase !== 'running') return;
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const timeRemaining =
    phase === 'running' && startedAt > 0
      ? Math.max(0, totalSeconds - Math.floor((Date.now() - startedAt) / 1000))
      : totalSeconds;

  // Persist running state whenever key values change
  useEffect(() => {
    if (phase !== 'running' || questions.length === 0) return;
    persistSavedState({
      questions,
      answers,
      flagged: [...flagged],
      currentIndex,
      poolType,
      customCount,
      startedAt,
      totalSeconds,
    });
  }, [phase, answers, flagged, currentIndex, questions, poolType, customCount, startedAt, totalSeconds]);

  function doSubmit() {
    const result = scoreExam(answers, questions);
    const entry: HistoryEntry = {
      date: new Date().toISOString(),
      percent: result.percent,
      correct: result.correct,
      total: result.total,
      poolType,
    };
    const newHistory = [entry, ...history].slice(0, 5);
    setHistory(newHistory);
    persistHistory(newHistory);
    clearSavedState();
    setExamResult(result);
    setPhase('results');
  }

  // Keep ref to latest doSubmit for auto-submit effect
  submitRef.current = doSubmit;

  // Auto-submit when timer reaches zero
  useEffect(() => {
    if (
      phase === 'running' &&
      startedAt > 0 &&
      timeRemaining === 0 &&
      !autoSubmitted.current
    ) {
      autoSubmitted.current = true;
      submitRef.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  function startExam(type: PoolType, count: number) {
    const total =
      type === 'full' ? POOL_CONFIGS.full.count :
      type === 'quick' ? POOL_CONFIGS.quick.count :
      count;
    const mins =
      type === 'full' ? POOL_CONFIGS.full.minutes :
      type === 'quick' ? POOL_CONFIGS.quick.minutes :
      Math.round(count * 2.1);

    const qs = buildExamPool(total, seedValue);
    const now = Date.now();
    const secs = mins * 60;

    autoSubmitted.current = false;
    setQuestions(qs);
    setAnswers({});
    setFlagged(new Set());
    setCurrentIndex(0);
    setStartedAt(now);
    setTotalSeconds(secs);
    setPhase('running');
  }

  function resumeExam(state: SavedState) {
    const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
    const remaining = Math.max(0, state.totalSeconds - elapsed);

    if (remaining === 0) {
      const result = scoreExam(state.answers, state.questions);
      const entry: HistoryEntry = {
        date: new Date().toISOString(),
        percent: result.percent,
        correct: result.correct,
        total: result.total,
        poolType: state.poolType,
      };
      const newHistory = [entry, ...history].slice(0, 5);
      setHistory(newHistory);
      persistHistory(newHistory);
      clearSavedState();
      setSavedState(null);
      setExamResult(result);
      setPhase('results');
      return;
    }

    autoSubmitted.current = false;
    setQuestions(state.questions);
    setAnswers(state.answers);
    setFlagged(new Set(state.flagged));
    setCurrentIndex(state.currentIndex);
    setPoolType(state.poolType);
    setCustomCount(state.customCount);
    setStartedAt(state.startedAt);
    setTotalSeconds(state.totalSeconds);
    setSavedState(null);
    setPhase('running');
  }

  function handleSubmitConfirmed() {
    setConfirmOpen(false);
    doSubmit();
  }

  function selectAnswer(questionId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function toggleFlag(questionId: string) {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      return next;
    });
  }

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const flaggedCount = flagged.size;
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;
  const timerWarning = timeRemaining > 0 && timeRemaining < 300;

  // ---- Config phase ----
  if (phase === 'config') {
    return (
      <Container id="main-content" tabIndex={-1} maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
          Final Exam
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Simulates the Transport Canada PPL written exam. Topic-weighted questions — no per-question
          feedback. Results shown at the end.
        </Typography>

        {savedState && (
          <Box
            sx={{
              mb: 4,
              p: 2,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              bgcolor: theme.palette.primaryMuted,
            }}
          >
            <Typography variant="overline" color="primary.main">
              Saved Exam
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              {savedState.questions.length} questions · {poolLabel(savedState.poolType)} ·{' '}
              {Object.keys(savedState.answers).length} answered
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="contained" size="small" onClick={() => resumeExam(savedState)}>
                Resume
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => { clearSavedState(); setSavedState(null); }}
              >
                Discard
              </Button>
            </Box>
          </Box>
        )}

        <Typography variant="h6" sx={{ mb: 2 }}>
          Choose exam length
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
          {([
            { type: 'full' as PoolType, label: 'Full Exam', detail: '100 questions · 3 h 30 min' },
            { type: 'quick' as PoolType, label: 'Quick Exam', detail: '50 questions · 1 h 30 min' },
            { type: 'custom' as PoolType, label: 'Custom', detail: 'Choose question count' },
          ]).map(({ type, label, detail }) => (
            <Box
              key={type}
              onClick={() => setPoolType(type)}
              sx={{
                p: 2,
                border: '1px solid',
                borderColor: poolType === type ? 'primary.main' : 'divider',
                borderRadius: 2,
                cursor: 'pointer',
                bgcolor: poolType === type ? theme.palette.primaryMuted : 'transparent',
                '&:hover': { borderColor: 'primary.main' },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail}
              </Typography>
            </Box>
          ))}
        </Box>

        {poolType === 'custom' && (
          <TextField
            label="Number of questions"
            type="number"
            value={customCount}
            onChange={(e) => {
              const v = Math.max(10, Math.min(200, Number(e.target.value)));
              setCustomCount(isNaN(v) ? 60 : v);
            }}
            inputProps={{ min: 10, max: 200 }}
            sx={{ mb: 3 }}
            fullWidth
          />
        )}

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={() => startExam(poolType, customCount)}
        >
          Start Exam
        </Button>

        {history.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recent Attempts
            </Typography>
            {history.map((h, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1.5,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {new Date(h.date).toLocaleDateString()} · {poolLabel(h.poolType as PoolType)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color:
                      h.percent >= 80
                        ? 'success.main'
                        : h.percent >= 60
                        ? 'primary.main'
                        : 'error.main',
                  }}
                >
                  {h.percent}% ({h.correct}/{h.total})
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    );
  }

  // ---- Running phase ----
  if (phase === 'running') {
    if (!currentQuestion) {
      return (
        <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
          <Alert severity="warning">
            No questions available for this exam pool. Please go back and try again.
          </Alert>
          <Button sx={{ mt: 2 }} variant="outlined" onClick={() => setPhase('config')}>
            Back to Config
          </Button>
        </Container>
      );
    }

    return (
      <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 3 }}>
        {/* Header bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2,
            flexWrap: 'wrap',
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              minWidth: 72,
              color: timerWarning ? 'error.main' : 'text.primary',
              fontWeight: 700,
            }}
          >
            {formatTime(timeRemaining)}
          </Typography>

          <Box sx={{ flex: 1, minWidth: 120 }}>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 6, borderRadius: 3, mb: 0.5 }} />
            <Typography variant="caption" color="text.secondary">
              {answeredCount}/{questions.length} answered
              {flaggedCount > 0 ? ` · ${flaggedCount} flagged` : ''}
            </Typography>
          </Box>

          <Button size="small" variant="outlined" onClick={() => setJumpOpen(true)}>
            Q List
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => setConfirmOpen(true)}
          >
            Submit
          </Button>
        </Box>

        {/* Question */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Question {currentIndex + 1} of {questions.length}
            </Typography>
            <Button
              size="small"
              variant={flagged.has(currentQuestion.id) ? 'contained' : 'outlined'}
              color="warning"
              onClick={() => toggleFlag(currentQuestion.id)}
              sx={{ ml: 2, flexShrink: 0 }}
            >
              {flagged.has(currentQuestion.id) ? 'Flagged ⚑' : 'Flag for Review'}
            </Button>
          </Box>

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

        {/* Jump-to-question dialog */}
        <Dialog open={jumpOpen} onClose={() => setJumpOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Jump to Question</DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {questions.map((q, i) => {
                const isAnswered = !!answers[q.id];
                const isFlagged = flagged.has(q.id);
                const isCurrent = i === currentIndex;
                return (
                  <Button
                    key={i}
                    size="small"
                    variant={isCurrent ? 'contained' : 'outlined'}
                    onClick={() => {
                      setCurrentIndex(i);
                      setJumpOpen(false);
                    }}
                    sx={{
                      minWidth: 40,
                      px: 0.5,
                      borderColor: isFlagged
                        ? 'warning.main'
                        : isAnswered
                        ? 'info.main'
                        : 'divider',
                      color: isCurrent
                        ? undefined
                        : isFlagged
                        ? 'warning.main'
                        : isAnswered
                        ? 'info.main'
                        : 'text.disabled',
                    }}
                  >
                    {i + 1}
                  </Button>
                );
              })}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Current" color="primary" size="small" />
              <Chip
                label="Answered"
                size="small"
                sx={{ borderColor: 'info.main', color: 'info.main' }}
                variant="outlined"
              />
              <Chip
                label="Flagged"
                size="small"
                sx={{ borderColor: 'warning.main', color: 'warning.main' }}
                variant="outlined"
              />
              <Chip label="Unanswered" size="small" variant="outlined" />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setJumpOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Submit confirmation */}
        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>Submit Exam?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {answeredCount < questions.length
                ? `You have ${questions.length - answeredCount} unanswered question(s). Submit anyway?`
                : 'All questions answered. Submit the exam?'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmitConfirmed}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }

  // ---- Results phase ----
  if (phase === 'results' && examResult) {
    const missed = examResult.perQuestion.filter((pq) => !pq.isCorrect);

    return (
      <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
          Exam Results
        </Typography>

        {/* Overall score */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            {examResult.percent}%
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {examResult.correct} / {examResult.total} correct
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Alert severity={examResult.passed ? 'success' : 'error'} sx={{ flex: 1 }}>
              {examResult.passed ? 'Pass — ≥60%' : 'Fail — below 60%'}
            </Alert>
            <Alert severity={examResult.hitTarget ? 'success' : 'warning'} sx={{ flex: 1 }}>
              {examResult.hitTarget ? 'Target reached — ≥80%' : 'Below target (80%)'}
            </Alert>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Per-topic breakdown */}
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

        {/* Missed questions */}
        {missed.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Missed Questions ({missed.length})
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
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    {pq.prompt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    Your answer: {pq.userAnswer || '(none)'} · Correct: {pq.correctAnswer}
                  </Typography>
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

        {/* Last 5 attempts history */}
        {history.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Last Attempts
            </Typography>
            <Box sx={{ mb: 4 }}>
              {history.map((h, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {new Date(h.date).toLocaleDateString()} · {poolLabel(h.poolType as PoolType)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color:
                        h.percent >= 80
                          ? 'success.main'
                          : h.percent >= 60
                          ? 'primary.main'
                          : 'error.main',
                    }}
                  >
                    {h.percent}% ({h.correct}/{h.total})
                  </Typography>
                </Box>
              ))}
            </Box>
          </>
        )}

        <Button variant="contained" onClick={() => setPhase('config')}>
          Start New Exam
        </Button>
      </Container>
    );
  }

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      <Alert severity="info">Loading…</Alert>
    </Container>
  );
}
