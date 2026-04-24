import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState, useEffect, type ReactNode } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import LessonCompleteScreen from '../components/LessonCompleteScreen';
import type { LessonScore } from '../components/LessonCompleteScreen';
import LessonPrevNext from '../components/LessonPrevNext';
import LessonProgressBar from '../components/LessonProgressBar';
import SourceList from '../components/SourceList';
import { getLessonBySlug, getAdjacentLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';
import { useExamTrack } from '../context/ExamTrackContext';
import { CURRICULUM, TOPIC_LABELS } from '../lib/curriculum';
import { LAST_SESSION_KEY } from '../components/home/StatusBar';

const QUIZ_RESULT_KEY = (lessonId: string) => `ppl-quiz-result-${lessonId}`;

function MarkdownTable({ children }: { children?: ReactNode }) {
  return (
    <Box sx={{ overflowX: 'auto', width: '100%', my: 1 }}>
      <table>{children}</table>
    </Box>
  );
}

const mdOptions = {
  overrides: {
    h1: { component: Typography, props: { variant: 'h4', gutterBottom: true, sx: { mt: 3 } } },
    h2: { component: Typography, props: { variant: 'h5', gutterBottom: true, sx: { mt: 4 } } },
    h3: { component: Typography, props: { variant: 'h6', gutterBottom: true, sx: { mt: 3 } } },
    p: { component: Typography, props: { variant: 'body1', paragraph: true } },
    li: { component: Typography, props: { component: 'li', variant: 'body1', sx: { mb: 0.5 } } },
    code: {
      component: Box,
      props: {
        component: 'code',
        sx: {
          fontFamily: 'monospace',
          fontSize: '0.875em',
          bgcolor: 'rgba(255,255,255,0.08)',
          px: 0.75,
          py: 0.25,
          borderRadius: 1,
        },
      },
    },
    pre: {
      component: Box,
      props: {
        component: 'pre',
        sx: {
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 1,
          overflowX: 'auto',
          my: 2,
          '& code': { bgcolor: 'transparent', p: 0 },
        },
      },
    },
    table: { component: MarkdownTable },
    blockquote: {
      component: Box,
      props: {
        component: 'blockquote',
        sx: {
          borderLeft: '3px solid',
          borderColor: 'info.main',
          pl: 2,
          ml: 0,
          my: 2,
          color: 'text.secondary',
        },
      },
    },
  },
};

export default function LessonDetail() {
  const { topic, slug } = useParams<{ topic: string; slug: string }>();
  const navigate = useNavigate();
  const { store } = useExamTrack();
  const { isComplete, markComplete } = useProgress(store);
  const [showComplete, setShowComplete] = useState(false);

  const lesson = topic && slug ? getLessonBySlug(topic, slug) : undefined;
  const { prev, next } = topic && slug && lesson
    ? getAdjacentLessons(topic, slug)
    : { prev: null, next: null };

  const topicSlots = lesson ? CURRICULUM.filter((s) => s.topic === lesson.topic) : [];
  const lessonPosition = lesson ? (topicSlots.findIndex((s) => s.id === lesson.id) + 1) : 0;

  useEffect(() => {
    return () => {
      localStorage.setItem(LAST_SESSION_KEY, new Date().toISOString());
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;
      if (e.key === 'ArrowLeft' && prev) {
        navigate(`/lessons/${prev.topic}/${prev.slug}`);
      } else if (e.key === 'ArrowRight' && next) {
        navigate(`/lessons/${next.topic}/${next.slug}`);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [prev, next, navigate]);

  if (!lesson) {
    return (
      <Container id="main-content" tabIndex={-1} maxWidth={false} sx={{ maxWidth: 700, mx: 'auto', px: { xs: 2, sm: 3 }, py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Lesson not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          No lesson found at {topic}/{slug}.
        </Typography>
        <Button variant="outlined" onClick={() => navigate('/lessons')}>
          Back to Lessons
        </Button>
      </Container>
    );
  }

  const completed = isComplete(lesson.id);

  function handleMarkComplete() {
    markComplete(lesson!.id);
    setShowComplete(true);
  }

  function loadQuizScore(): LessonScore | null {
    try {
      const raw = localStorage.getItem(QUIZ_RESULT_KEY(lesson!.id));
      if (!raw) return null;
      const parsed = JSON.parse(raw) as { correct: number; total: number };
      if (typeof parsed.correct !== 'number' || typeof parsed.total !== 'number') return null;
      return parsed;
    } catch {
      return null;
    }
  }

  if (showComplete) {
    return (
      <LessonCompleteScreen
        lessonTitle={lesson.title}
        score={loadQuizScore()}
        hasNext={next !== null}
        onNextLesson={() => {
          if (next) {
            navigate(`/lessons/${next.topic}/${next.slug}`);
          } else {
            navigate('/lessons');
          }
        }}
        onReviewLesson={() => {
          setShowComplete(false);
          window.scrollTo({ top: 0 });
        }}
        onBackToTopics={() => navigate('/lessons')}
      />
    );
  }

  return (
    <Container id="main-content" tabIndex={-1} maxWidth={false} sx={{ maxWidth: 700, mx: 'auto', px: 0, py: 4 }}>
      {lesson && topicSlots.length > 0 && (
        <LessonProgressBar
          position={lessonPosition}
          total={topicSlots.length}
          label={`${TOPIC_LABELS[lesson.topic]} · Lesson ${lessonPosition} of ${topicSlots.length}`}
        />
      )}
      <Box sx={{ px: { xs: 2, sm: 3 } }}>
      <LessonPrevNext prev={prev} next={next} variant="compact" />

      <Box sx={{ mb: 1, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <Chip
          label={lesson.topic.replace(/-/g, ' ')}
          size="small"
          sx={{ textTransform: 'capitalize', bgcolor: 'primary.main', color: 'text.onAccent' }}
        />
        <Chip label={`${lesson.duration_min} min`} size="small" variant="outlined" color="info" />
        {completed && (
          <Chip label="Completed" size="small" color="success" variant="outlined" />
        )}
      </Box>

      <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
        {lesson.title}
      </Typography>

      <AudioPlayer
        key={lesson.id}
        src={lesson.audio}
        title={lesson.title}
        topic={TOPIC_LABELS[lesson.topic] ?? lesson.topic}
        lessonId={lesson.id}
      />

      <Box sx={{ mt: 2, mb: 3, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          size="small"
          href={lesson.visual}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          View Visual
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate(`/lessons/${lesson.topic}/${lesson.slug}/quiz`)}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          Take Practice Quiz
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ '& ul, & ol': { pl: 3 } }}>
        <Markdown options={mdOptions}>{lesson.body}</Markdown>
      </Box>

      <SourceList sources={lesson.sources} />

      <Divider sx={{ mt: 4, mb: 3 }} />

      <Button
        variant={completed ? 'outlined' : 'contained'}
        color="primary"
        onClick={handleMarkComplete}
        disabled={completed}
        sx={{ width: { xs: '100%', sm: 'auto' } }}
      >
        {completed ? 'Completed' : 'Mark Complete'}
      </Button>

      <Divider sx={{ mt: 3, mb: 2 }} />

      <LessonPrevNext prev={prev} next={next} variant="full" />
      </Box>
    </Container>
  );
}
