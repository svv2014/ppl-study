import { useParams, useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import SourceList from '../components/SourceList';
import { getLessonBySlug } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';

function InlineCode({ children }: { children?: React.ReactNode }) {
  return (
    <code style={{ fontFamily: 'monospace', background: 'rgba(255,255,255,0.08)', padding: '2px 4px', borderRadius: 3, fontSize: '0.875em' }}>
      {children}
    </code>
  );
}

const mdOptions = {
  overrides: {
    h1: { component: Typography, props: { variant: 'h4', gutterBottom: true, sx: { mt: 3 } } },
    h2: { component: Typography, props: { variant: 'h5', gutterBottom: true, sx: { mt: 3 } } },
    h3: { component: Typography, props: { variant: 'h6', gutterBottom: true, sx: { mt: 2 } } },
    h4: { component: Typography, props: { variant: 'subtitle1', gutterBottom: true, sx: { mt: 2, fontWeight: 600 } } },
    p: { component: Typography, props: { variant: 'body1', paragraph: true } },
    li: { component: Typography, props: { component: 'li', variant: 'body1', sx: { mb: 0.5 } } },
    code: { component: InlineCode },
  },
};

export default function LessonDetail() {
  const { topic, slug } = useParams<{ topic: string; slug: string }>();
  const navigate = useNavigate();
  const { isComplete, markComplete } = useProgress();
  const [showSuccess, setShowSuccess] = useState(false);

  const lesson = topic && slug ? getLessonBySlug(topic, slug) : undefined;

  if (!lesson) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
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
    setShowSuccess(true);
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 1, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <Chip
          label={lesson.topic.replace(/-/g, ' ')}
          size="small"
          sx={{ textTransform: 'capitalize', bgcolor: 'primary.main', color: '#000' }}
        />
        <Chip label={lesson.id} size="small" variant="outlined" />
        <Chip label={`${lesson.duration_min} min`} size="small" variant="outlined" />
        {completed && (
          <Chip label="Completed" size="small" color="success" variant="outlined" />
        )}
      </Box>

      <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
        {lesson.title}
      </Typography>

      <AudioPlayer src={lesson.audio} />

      <Box sx={{ mt: 2, mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          size="small"
          href={lesson.visual}
        >
          View Visual Reference
        </Button>
        <Button
          variant="outlined"
          size="small"
          href={`/exam?lesson=${lesson.id}`}
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

      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }} onClose={() => setShowSuccess(false)}>
          Lesson marked as complete!
        </Alert>
      )}

      <Button
        variant={completed ? 'outlined' : 'contained'}
        color="primary"
        onClick={handleMarkComplete}
        disabled={completed}
      >
        {completed ? 'Completed' : 'Mark Complete'}
      </Button>
    </Container>
  );
}
