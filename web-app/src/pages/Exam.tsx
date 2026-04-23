import { useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';
import { useExamTrack } from '../context/ExamTrackContext';
import { scoreQuiz } from '../lib/quiz';
import type { QuizResult } from '../lib/quiz';
import type { QuizAttempt } from '../lib/types';
import { TOPIC_LABELS, TOPICS } from '../lib/curriculum';
import QuizRunner from '../components/QuizRunner';
import QuizOption from '../components/QuizOption';
import type { QuizOptionState } from '../components/QuizOption';
import { colorTokens, typographyTokens, radiusTokens } from '../tokens';

type Phase = 'select' | 'quiz' | 'results';
type TopicFilter = 'all' | typeof TOPICS[number];

const FILTER_OPTIONS: { key: TopicFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  ...TOPICS.map((t) => ({ key: t as TopicFilter, label: TOPIC_LABELS[t] })),
];

function deriveOptionState(
  isSelected: boolean,
  isSubmitted: boolean,
  isCorrectAnswer: boolean,
): QuizOptionState {
  if (!isSubmitted) return isSelected ? 'selected' : 'default';
  if (isCorrectAnswer) return 'correct';
  if (isSelected) return 'wrong';
  return 'default';
}

export default function Exam() {
  const [searchParams] = useSearchParams();
  const { store: activeStore } = useExamTrack();
  const { progress, store } = useProgress(activeStore);

  const lessons = getAllLessons().filter((l) => l.questions.length > 0);

  const [topicFilter, setTopicFilter] = useState<TopicFilter>('all');
  const [selectedLessonId, setSelectedLessonId] = useState<string>(() => {
    const fromUrl = searchParams.get('lesson');
    if (fromUrl && lessons.some((l) => l.id === fromUrl)) return fromUrl;
    return lessons[0]?.id ?? '';
  });
  const [phase, setPhase] = useState<Phase>('select');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [pendingLessonId, setPendingLessonId] = useState<string | null>(null);

  const filteredLessons =
    topicFilter === 'all' ? lessons : lessons.filter((l) => l.topic === topicFilter);

  const selectedLesson = lessons.find((l) => l.id === selectedLessonId);

  function getLastAttempt(lessonId: string): QuizAttempt | undefined {
    return [...progress.quizHistory].reverse().find((a) => a.lessonId === lessonId);
  }

  function handleLessonSelect(newId: string) {
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
    store.recordQuizAttempt({
      lessonId: selectedLesson.id,
      timestamp: new Date().toISOString(),
      score: result.correct,
      total: result.total,
      percent: result.percent,
      answers,
    });
    setQuizResult(result);
    setPhase('results');
  }

  function handleRetake() {
    setPhase('select');
    setQuizResult(null);
  }

  if (lessons.length === 0) {
    return (
      <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Practice Quiz
        </Typography>
        <Box
          sx={{
            p: 2,
            borderRadius: `${radiusTokens.sm}px`,
            border: `1px solid ${colorTokens.info.main}`,
            backgroundColor: alpha(colorTokens.info.main, 0.1),
          }}
        >
          <Typography variant="body1" color="info.main">
            No lessons with quiz questions found.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Practice Quiz
      </Typography>

      {/* Inline confirm — replaces MUI Dialog */}
      {pendingLessonId !== null && (
        <Box
          role="alertdialog"
          aria-label="Switch lesson confirmation"
          sx={{
            mb: 3,
            p: 2,
            backgroundColor: colorTokens.background.surfaceRaised,
            border: `1px solid ${colorTokens.divider}`,
            borderLeft: `4px solid ${colorTokens.primary.main}`,
            borderRadius: `0 ${radiusTokens.sm}px ${radiusTokens.sm}px 0`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              fontFamily: typographyTokens.fontFamily.sans,
              color: colorTokens.text.primary,
            }}
          >
            Your current quiz progress will be lost. Switch to the new lesson?
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant="contained" size="small" onClick={handleConfirmSwitch}>
              Switch
            </Button>
            <Button variant="outlined" size="small" onClick={handleCancelSwitch}>
              Cancel
            </Button>
          </Box>
        </Box>
      )}

      {/* Topic filter chips */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mb: 3,
        }}
      >
        {FILTER_OPTIONS.map((fo) => (
          <Chip
            key={fo.key}
            label={fo.label}
            onClick={() => setTopicFilter(fo.key)}
            variant={topicFilter === fo.key ? 'filled' : 'outlined'}
            color={topicFilter === fo.key ? 'primary' : 'default'}
          />
        ))}
      </Box>

      {/* Select phase */}
      {phase === 'select' && (
        <Box>
          {filteredLessons.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              No lessons with quiz questions in this topic.
            </Typography>
          )}
          {filteredLessons.map((lesson) => {
            const isSelected = lesson.id === selectedLessonId;
            const lastAttempt = getLastAttempt(lesson.id);
            return (
              <Box
                key={lesson.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => handleLessonSelect(lesson.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleLessonSelect(lesson.id);
                  }
                }}
                sx={{
                  mb: 1,
                  p: 2,
                  minHeight: 64,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: isSelected
                    ? alpha(colorTokens.primary.main, 0.1)
                    : colorTokens.background.paper,
                  border: `1px solid ${colorTokens.divider}`,
                  borderLeft: `4px solid ${isSelected ? colorTokens.primary.main : colorTokens.divider}`,
                  borderRadius: `0 ${radiusTokens.sm}px ${radiusTokens.sm}px 0`,
                  cursor: 'pointer',
                  transition: 'transform 150ms ease-out',
                  '&:hover': { transform: 'translateY(-1px)' },
                  '&:focus-visible': {
                    outline: `2px solid ${colorTokens.primary.main}`,
                    outlineOffset: 2,
                  },
                }}
              >
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{ display: 'block', mb: 0.25, lineHeight: 1.4 }}
                  >
                    {lesson.id.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ lineHeight: 1.4, fontFamily: typographyTokens.fontFamily.sans }}
                  >
                    {lesson.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {lesson.questions.length} question{lesson.questions.length !== 1 ? 's' : ''}
                    {lastAttempt
                      ? ` · Last score: ${lastAttempt.score}/${lastAttempt.total}`
                      : ''}
                  </Typography>
                </Box>
                {isSelected && (
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartQuiz();
                    }}
                    sx={{ ml: 2, flexShrink: 0 }}
                  >
                    Start
                  </Button>
                )}
              </Box>
            );
          })}
        </Box>
      )}

      {/* Quiz phase */}
      {phase === 'quiz' && selectedLesson && (
        <QuizRunner
          questions={selectedLesson.questions}
          onComplete={handleQuizComplete}
          renderOption={(props) => (
            <QuizOption
              key={props.optionKey}
              optionKey={props.optionKey}
              label={props.label}
              state={deriveOptionState(props.isSelected, props.isSubmitted, props.isCorrectAnswer)}
              disabled={props.disabled}
              onClick={props.onSelect}
            />
          )}
        />
      )}

      {/* Results phase */}
      {phase === 'results' && quizResult && selectedLesson && (
        <Box>
          {/* Score summary */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex', flexShrink: 0 }}>
              <CircularProgress
                variant="determinate"
                value={quizResult.percent}
                size={80}
                thickness={5}
                color={quizResult.percent >= 60 ? 'success' : 'error'}
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
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h5">
                {quizResult.correct}/{quizResult.total} · {quizResult.percent}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedLesson.title}
              </Typography>
            </Box>
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
            <Button variant="outlined" onClick={handleRetake}>
              Try Again
            </Button>
            <Button
              variant="text"
              component={RouterLink}
              to={`/lessons/${selectedLesson.topic}/${selectedLesson.slug}`}
            >
              Open this Lesson
            </Button>
            <Button variant="text" onClick={handleRetake}>
              Try Another
            </Button>
          </Box>

          {/* Missed questions */}
          {quizResult.perQuestion.some((pq) => !pq.isCorrect) && (
            <>
              <Divider sx={{ mb: 3 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Missed Questions
              </Typography>
              {quizResult.perQuestion
                .filter((pq) => !pq.isCorrect)
                .map((pq, idx, arr) => {
                  const q = selectedLesson.questions.find((sq) => sq.id === pq.questionId);
                  const lessonUrl = `/lessons/${selectedLesson.topic}/${selectedLesson.slug}`;
                  return (
                    <Box key={pq.questionId} sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Missed {idx + 1}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1.5 }}>
                        {pq.prompt}
                      </Typography>
                      <Box
                        sx={{
                          p: 1.5,
                          mb: 1,
                          border: `1px solid ${colorTokens.divider}`,
                          borderLeft: `4px solid ${colorTokens.error.main}`,
                          backgroundColor: alpha(colorTokens.error.main, 0.08),
                          borderRadius: `0 ${radiusTokens.sm}px ${radiusTokens.sm}px 0`,
                        }}
                      >
                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                          Your answer:{' '}
                          {pq.userAnswer
                            ? `${pq.userAnswer}. ${q?.choices[pq.userAnswer] ?? ''}`
                            : 'No answer given'}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: colorTokens.success.main }}
                        >
                          Correct: {pq.correctAnswer}. {q?.choices[pq.correctAnswer] ?? ''}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                        {pq.explanation}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to={lessonUrl}
                        variant="text"
                        size="small"
                        sx={{ pl: 0 }}
                      >
                        Back to Lesson
                      </Button>
                      {idx < arr.length - 1 && <Divider sx={{ mt: 2 }} />}
                    </Box>
                  );
                })}
            </>
          )}
        </Box>
      )}
    </Container>
  );
}
