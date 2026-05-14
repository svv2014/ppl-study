import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useExamTrack } from '../context/ExamTrackContext';
import { getLessonsByTrack } from '../lib/lesson-loader';
import { useSRSStore } from '../hooks/useSRSStore';
import type { SRSGrade } from '../lib/sm2';
import { typographyTokens } from '../tokens';

const MONO = typographyTokens.fontFamily.mono;

type Phase = 'review' | 'summary';

interface ReviewedCard {
  lessonSlug: string;
  questionIndex: number;
  prompt: string;
  grade: SRSGrade;
  newInterval: number;
}

const GRADE_LABELS: { grade: SRSGrade; label: string; desc: string }[] = [
  { grade: 0, label: 'Again', desc: 'Forgot' },
  { grade: 2, label: 'Hard', desc: 'Difficult recall' },
  { grade: 3, label: 'Good', desc: 'Recalled with effort' },
  { grade: 4, label: 'Easy', desc: 'Perfect recall' },
];

function intervalLabel(days: number): string {
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  if (days < 30) return `${Math.round(days / 7)}w`;
  return `${Math.round(days / 30)}mo`;
}

function SectionHead({ title, meta }: { title: string; meta: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        mt: '40px',
        mb: '16px',
        borderBottom: '1px solid',
        borderColor: 'divider',
        pb: '10px',
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: MONO,
          fontSize: '12px',
          color: 'text.secondary',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        ◆ {title}
      </Typography>
      <Box sx={{ fontFamily: MONO, fontSize: '11px', color: 'primary.main' }}>{meta}</Box>
    </Box>
  );
}

export default function SRSQueue() {
  const theme = useTheme();
  const { activeTrack } = useExamTrack();
  const { updateCard, getDueCards } = useSRSStore(activeTrack.id);

  const allLessons = useMemo(
    () => getLessonsByTrack(activeTrack.id),
    [activeTrack.id],
  );

  const lessonSlugs = useMemo(() => allLessons.map((l) => l.slug), [allLessons]);
  const questionsPerLesson = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of allLessons) {
      map[l.slug] = l.questions.length;
    }
    return map;
  }, [allLessons]);

  const lessonBySlug = useMemo(() => {
    const map: Record<string, (typeof allLessons)[number]> = {};
    for (const l of allLessons) map[l.slug] = l;
    return map;
  }, [allLessons]);

  const initialQueue = useMemo(
    () => getDueCards(lessonSlugs, questionsPerLesson),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTrack.id],
  );

  const [queue] = useState(initialQueue);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>(queue.length === 0 ? 'summary' : 'review');
  const [reviewed, setReviewed] = useState<ReviewedCard[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = queue[currentIndex];
  const lesson = current ? lessonBySlug[current.lessonSlug] : undefined;
  const question = lesson?.questions[current?.questionIndex ?? -1];

  function handleGrade(grade: SRSGrade) {
    if (!current || !question) return;
    const updated = updateCard(current.lessonSlug, current.questionIndex, grade);
    setReviewed((prev) => [
      ...prev,
      {
        lessonSlug: current.lessonSlug,
        questionIndex: current.questionIndex,
        prompt: question.prompt,
        grade,
        newInterval: updated.interval,
      },
    ]);
    const next = currentIndex + 1;
    if (next >= queue.length) {
      setPhase('summary');
    } else {
      setCurrentIndex(next);
      setShowAnswer(false);
    }
  }

  if (phase === 'summary') {
    return (
      <Box id="main-content" tabIndex={-1} sx={{ minHeight: '100vh', pb: 8 }}>
        <Container maxWidth="sm" sx={{ pt: { xs: 3, md: 5 } }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: MONO,
              fontSize: '12px',
              color: 'primary.main',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              mb: '24px',
              display: 'inline-block',
              '&:hover': { opacity: 0.8 },
            }}
          >
            ← Home
          </Box>

          <SectionHead
            title="Session Complete"
            meta={`${activeTrack.code} · SRS`}
          />

          {reviewed.length === 0 ? (
            <Box
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                p: '24px',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  fontFamily: MONO,
                  fontSize: '11px',
                  color: 'text.secondary',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  mb: '12px',
                }}
              >
                ◆ No Cards Due
              </Box>
              <Typography variant="body1" color="text.secondary">
                All cards are up to date. Check back tomorrow.
              </Typography>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '4px',
                  p: '24px',
                  mb: '16px',
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    mb: '20px',
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        fontFamily: MONO,
                        fontSize: '11px',
                        color: 'text.secondary',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        mb: '4px',
                      }}
                    >
                      Cards Reviewed
                    </Box>
                    <Box
                      sx={{
                        fontFamily: MONO,
                        fontSize: '28px',
                        color: 'primary.main',
                        fontWeight: 700,
                      }}
                    >
                      {reviewed.length}
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        fontFamily: MONO,
                        fontSize: '11px',
                        color: 'text.secondary',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        mb: '4px',
                      }}
                    >
                      Correct (Good+Easy)
                    </Box>
                    <Box
                      sx={{
                        fontFamily: MONO,
                        fontSize: '28px',
                        color: 'success.main',
                        fontWeight: 700,
                      }}
                    >
                      {reviewed.filter((r) => r.grade >= 3).length}
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    fontFamily: MONO,
                    fontSize: '11px',
                    color: 'text.secondary',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    mb: '12px',
                  }}
                >
                  Card Intervals
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {reviewed.map((r, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                        pb: '8px',
                        '&:last-child': { borderBottom: 'none', pb: 0 },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ flex: 1, mr: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                      >
                        {r.prompt}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                        <Box
                          sx={{
                            fontFamily: MONO,
                            fontSize: '11px',
                            color: r.grade >= 3 ? 'success.main' : 'error.main',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {GRADE_LABELS.find((g) => g.grade === r.grade)?.label}
                        </Box>
                        <Box
                          sx={{
                            fontFamily: MONO,
                            fontSize: '11px',
                            color: 'primary.main',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {intervalLabel(r.newInterval)}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </>
          )}

          <Box sx={{ display: 'flex', gap: '12px', mt: '24px' }}>
            <Button
              component={RouterLink}
              to="/"
              variant="outlined"
              sx={{
                fontFamily: MONO,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '3px',
                minHeight: 48,
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': { borderColor: 'primary.main' },
              }}
            >
              ← Home
            </Button>
            <Button
              component={RouterLink}
              to="/lessons"
              variant="contained"
              sx={{
                fontFamily: MONO,
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '3px',
                minHeight: 48,
                bgcolor: 'primary.main',
                color: 'text.onAccent',
                '&:hover': { opacity: 0.9, bgcolor: 'primary.main' },
              }}
            >
              Study Lessons →
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  if (!current || !lesson || !question) {
    return null;
  }

  const progress = `${currentIndex + 1} / ${queue.length}`;

  return (
    <Box id="main-content" tabIndex={-1} sx={{ minHeight: '100vh', pb: 8 }}>
      <Container maxWidth="sm" sx={{ pt: { xs: 3, md: 5 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '24px',
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: MONO,
              fontSize: '12px',
              color: 'primary.main',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            ← Home
          </Box>
          <Box
            sx={{
              fontFamily: MONO,
              fontSize: '12px',
              color: 'text.secondary',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {activeTrack.code} · SRS · {progress}
          </Box>
        </Box>

        {/* Progress bar */}
        <Box
          sx={{
            height: '2px',
            bgcolor: 'divider',
            borderRadius: '1px',
            mb: '24px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${((currentIndex) / queue.length) * 100}%`,
              bgcolor: 'primary.main',
              transition: 'width 0.2s ease-out',
            }}
          />
        </Box>

        {/* Card */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderLeft: '3px solid',
            borderLeftColor: 'primary.main',
            borderRadius: '4px',
            p: '24px',
            mb: '16px',
          }}
        >
          <Box
            sx={{
              fontFamily: MONO,
              fontSize: '11px',
              color: 'primary.main',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              mb: '12px',
            }}
          >
            ▸ {lesson.id} · Q{current.questionIndex + 1}
          </Box>

          <Typography
            variant="body1"
            sx={{ mb: showAnswer ? '20px' : 0, lineHeight: 1.55 }}
          >
            {question.prompt}
          </Typography>

          {showAnswer && (
            <>
              <Box
                sx={{
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  pt: '16px',
                  mt: '4px',
                }}
              >
                <Box
                  sx={{
                    fontFamily: MONO,
                    fontSize: '11px',
                    color: 'text.secondary',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    mb: '8px',
                  }}
                >
                  Correct Answer
                </Box>
                <Typography variant="body1" sx={{ mb: '8px', color: 'success.main', fontWeight: 600 }}>
                  {question.answer}. {question.choices[question.answer]}
                </Typography>
                {question.explanation && (
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    {question.explanation}
                  </Typography>
                )}
              </Box>

              {/* All choices */}
              <Box sx={{ mt: '16px' }}>
                {Object.entries(question.choices).map(([key, text]) => (
                  <Box
                    key={key}
                    sx={{
                      display: 'flex',
                      gap: '8px',
                      mb: '6px',
                      opacity: key === question.answer ? 1 : 0.55,
                    }}
                  >
                    <Box
                      sx={{
                        fontFamily: MONO,
                        fontSize: '12px',
                        color: key === question.answer ? 'success.main' : 'text.secondary',
                        minWidth: '20px',
                        fontWeight: key === question.answer ? 600 : 400,
                      }}
                    >
                      {key}.
                    </Box>
                    <Typography variant="body2" color={key === question.answer ? 'success.main' : 'text.secondary'}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>

        {!showAnswer ? (
          <Button
            onClick={() => setShowAnswer(true)}
            variant="contained"
            fullWidth
            sx={{
              fontFamily: MONO,
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '3px',
              minHeight: 48,
              bgcolor: 'primary.main',
              color: 'text.onAccent',
              '&:hover': { opacity: 0.9, bgcolor: 'primary.main' },
            }}
          >
            Show Answer
          </Button>
        ) : (
          <Box>
            <Box
              sx={{
                fontFamily: MONO,
                fontSize: '11px',
                color: 'text.secondary',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                mb: '12px',
                textAlign: 'center',
              }}
            >
              How well did you recall?
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
              }}
            >
              {GRADE_LABELS.map(({ grade, label, desc }) => (
                <Button
                  key={grade}
                  onClick={() => handleGrade(grade)}
                  variant="outlined"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                    fontFamily: MONO,
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderRadius: '3px',
                    minHeight: 56,
                    py: '10px',
                    borderColor: grade === 0 ? 'error.main' : grade === 2 ? 'warning.main' : grade === 3 ? 'info.main' : 'success.main',
                    color: grade === 0 ? 'error.main' : grade === 2 ? 'warning.main' : grade === 3 ? 'info.main' : 'success.main',
                    '&:hover': {
                      borderColor: grade === 0 ? 'error.main' : grade === 2 ? 'warning.main' : grade === 3 ? 'info.main' : 'success.main',
                      bgcolor: grade === 0
                        ? alpha(theme.palette.error.main, 0.08)
                        : grade === 2
                        ? alpha(theme.palette.warning.main, 0.08)
                        : grade === 3
                        ? alpha(theme.palette.info.main, 0.08)
                        : alpha(theme.palette.success.main, 0.08),
                    },
                  }}
                >
                  <Box sx={{ fontWeight: 600 }}>{label}</Box>
                  <Box
                    sx={{
                      fontSize: '9px',
                      color: 'text.secondary',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {desc}
                  </Box>
                </Button>
              ))}
            </Box>
          </Box>
        )}

        {/* Overdue hint */}
        {current.card.dueDate < new Date().toISOString().slice(0, 10) && (
          <Box
            sx={{
              mt: '16px',
              fontFamily: MONO,
              fontSize: '11px',
              color: 'warning.main',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            ⦿ Overdue · Due {current.card.dueDate}
          </Box>
        )}
      </Container>
    </Box>
  );
}
