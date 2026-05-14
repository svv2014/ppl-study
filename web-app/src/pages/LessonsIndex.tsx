import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { CURRICULUM, TOPIC_LABELS, TOPICS } from '../lib/curriculum';
import { TOPIC_PLAYLISTS } from '../data/playlists';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';
import { useExamTrack } from '../context/ExamTrackContext';
import TopicMasteryCard from '../components/TopicMasteryCard';

export default function LessonsIndex() {
  const theme = useTheme();
  const { store, activeTrack } = useExamTrack();
  const { isComplete } = useProgress(store);

  const visibleLessons = useMemo(
    () => getAllLessons().filter(activeTrack.lessonFilter),
    [activeTrack],
  );

  const lessonMap = useMemo(
    () => new Map(visibleLessons.map((l) => [l.id, l])),
    [visibleLessons],
  );

  const visibleTopics = useMemo(
    () => TOPICS.filter((t) => visibleLessons.some((l) => l.topic === t)),
    [visibleLessons],
  );

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Browse Lessons
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        {visibleLessons.length} lessons across {visibleTopics.length} topics
      </Typography>

      {visibleTopics.map((topic) => {
        const slots = CURRICULUM.filter((s) => s.topic === topic && lessonMap.has(s.id));

        return (
          <Box key={topic} id={topic} sx={{ mb: 5 }}>
            <TopicMasteryCard
              topic={TOPIC_LABELS[topic]}
              lessonCount={slots.length}
              completedCount={0}
              masteryPercent={0}
              playlistUrl={TOPIC_PLAYLISTS[topic]}
            />
            <Divider sx={{ mb: 2 }} />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 1.5,
              }}
            >
              {slots.map((slot) => {
                const lesson = lessonMap.get(slot.id);
                const done = isComplete(slot.id);

                if (!lesson) {
                  return (
                    <Card key={slot.id} variant="outlined" sx={{ opacity: 0.5, borderLeft: `3px solid ${alpha(theme.palette.divider, 0.12)}` }}>
                      <CardContent sx={{ pb: '12px !important' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Chip label={slot.id} size="small" variant="outlined" color="default" sx={{ fontFamily: 'monospace', fontWeight: 600 }} />
                        </Box>
                        <Typography variant="body2" color="text.disabled">
                          {slot.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                }

                return (
                  <Card
                    key={slot.id}
                    variant="outlined"
                    sx={{
                      opacity: done ? 0.7 : 1,
                      borderLeft: '3px solid',
                      borderColor: done ? 'success.main' : 'primary.main',
                      willChange: 'transform',
                      transition: 'all 0.15s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    }}
                  >
                    <CardActionArea
                      component={RouterLink}
                      to={`/lessons/${lesson.topic}/${lesson.slug}`}
                      sx={{ height: '100%' }}
                    >
                      <CardContent sx={{ pb: '12px !important' }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 0.75 }}>
                          <Chip
                            label={lesson.id}
                            size="small"
                            variant="outlined"
                            color="primary"
                            sx={{ fontFamily: 'monospace', fontWeight: 600 }}
                          />
                          {done && <Chip label="✓" size="small" color="success" />}
                        </Box>
                        <Typography variant="body2" sx={{ color: done ? 'text.secondary' : 'text.primary' }}>
                          {lesson.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Container>
  );
}
