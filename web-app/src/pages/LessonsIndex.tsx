import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { CURRICULUM, TOPIC_LABELS, TOPICS } from '../lib/curriculum';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';
import type { LessonStatus } from '../lib/types';

function statusChipProps(status: LessonStatus) {
  if (status === 'complete') return { label: 'Complete', color: 'success' as const };
  if (status === 'draft') return { label: 'Draft', color: 'warning' as const };
  return { label: 'Planning', color: 'default' as const };
}

export default function LessonsIndex() {
  const { isComplete } = useProgress();

  const lessonMap = useMemo(() => {
    const map = new Map(getAllLessons().map((l) => [l.id, l]));
    return map;
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Browse Lessons
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        {CURRICULUM.length} lessons across {TOPICS.length} topics
      </Typography>

      {TOPICS.map((topic) => {
        const slots = CURRICULUM.filter((s) => s.topic === topic);

        return (
          <Box key={topic} id={topic} sx={{ mb: 5 }}>
            <Typography variant="h5" gutterBottom>
              {TOPIC_LABELS[topic]}
            </Typography>
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
                    <Card key={slot.id} variant="outlined" sx={{ opacity: 0.5 }}>
                      <CardContent sx={{ pb: '12px !important' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Chip label={slot.id} size="small" variant="outlined" color="default" sx={{ fontFamily: 'monospace', fontWeight: 600 }} />
                          <Chip label="Planning" size="small" color="default" />
                        </Box>
                        <Typography variant="body2" color="text.disabled">
                          {slot.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                }

                const chipProps = statusChipProps(lesson.status);

                return (
                  <Card
                    key={slot.id}
                    variant="outlined"
                    sx={{ opacity: done ? 0.7 : 1 }}
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
                          <Chip label={`${lesson.duration_min} min`} size="small" variant="outlined" color="info" />
                          <Chip {...chipProps} size="small" />
                          {lesson.audio ? (
                            <Chip label="▶ Audio" size="small" color="warning" />
                          ) : (
                            <Chip label="Pending" size="small" color="default" />
                          )}
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
