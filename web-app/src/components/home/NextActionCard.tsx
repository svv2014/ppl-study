import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { typographyTokens } from '../../tokens';

const MONO = typographyTokens.fontFamily.mono;

export interface NextLesson {
  id: string;
  title: string;
  topic: string;
  slug: string;
  durationMin: number;
  hasAudio: boolean;
  questionCount: number;
}

const TOPIC_LABELS: Record<string, string> = {
  'air-law': 'Air Law',
  navigation: 'Navigation',
  meteorology: 'Meteorology',
  'general-knowledge': 'General Knowledge',
};

interface Props {
  lesson: NextLesson | null;
  lastSessionAgo: string;
}

export default function NextActionCard({ lesson, lastSessionAgo }: Props) {
  if (!lesson) return null;

  const topicLabel = (TOPIC_LABELS[lesson.topic] ?? lesson.topic).toUpperCase();

  return (
    <Box
      component={RouterLink}
      to={`/lessons/${lesson.topic}/${lesson.slug}`}
      sx={(theme) => ({
        display: 'block',
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.primary.main}55`,
        borderRight: `1px solid ${theme.palette.primary.main}55`,
        borderBottom: `1px solid ${theme.palette.primary.main}55`,
        borderLeft: `3px solid ${theme.palette.primary.main}`,
        p: '18px 22px',
        fontFamily: MONO,
        fontSize: '13px',
        lineHeight: 1.9,
        textDecoration: 'none',
        color: 'text.primary',
        minHeight: 48,
        '&:hover': { opacity: 0.88 },
      })}
    >
      <Box
        sx={{
          color: 'primary.main',
          letterSpacing: '0.15em',
          fontSize: '10px',
          textTransform: 'uppercase',
          mb: '6px',
        }}
      >
        ▸ Lesson {lesson.id}
      </Box>
      <Box
        sx={{
          fontSize: '18px',
          color: 'text.primary',
          mb: '10px',
          fontFamily: typographyTokens.fontFamily.sans,
          fontWeight: 600,
          letterSpacing: '-0.01em',
        }}
      >
        {lesson.title}
      </Box>
      <Box sx={{ color: 'text.secondary', flexWrap: 'wrap', display: 'flex', gap: '0 22px' }}>
        <Box component="span">
          Dur
          <Box component="strong" sx={{ color: 'text.primary', ml: '4px' }}>
            {lesson.durationMin} Min
          </Box>
        </Box>
        <Box component="span">
          Audio
          <Box component="strong" sx={{ color: 'text.primary', ml: '4px' }}>
            {lesson.hasAudio ? 'Ready' : '—'}
          </Box>
        </Box>
        <Box component="span">
          Questions
          <Box component="strong" sx={{ color: 'text.primary', ml: '4px' }}>
            {lesson.questionCount}
          </Box>
        </Box>
        <Box component="span">
          Topic
          <Box component="strong" sx={{ color: 'text.primary', ml: '4px' }}>
            {topicLabel}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: '14px',
          color: 'primary.main',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '11px',
        }}
      >
        ▸ {lastSessionAgo === '—' ? 'Begin Session' : 'Resume Session'}
      </Box>
    </Box>
  );
}
