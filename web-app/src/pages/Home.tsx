import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import { CURRICULUM, TOPIC_LABELS, TOPICS } from '../lib/curriculum';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';

export default function Home() {
  const { progress, isComplete } = useProgress();

  const authoredIds = useMemo(
    () => new Set(getAllLessons().map((l) => l.id)),
    [],
  );

  const totalLessons = CURRICULUM.length;
  const completedCount = CURRICULUM.filter((s) => isComplete(s.id)).length;
  const overallPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const nextUp = useMemo(() => {
    const allLessons = getAllLessons();
    return allLessons.find((l) => !progress.completed.includes(l.id)) ?? null;
  }, [progress.completed]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        PPL Study
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Transport Canada Private Pilot Licence — written exam prep
      </Typography>

      {/* Overall progress */}
      <Box sx={{ mb: 4, mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            Overall progress
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {completedCount} / {totalLessons} · {overallPercent}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={overallPercent}
          sx={{ height: 10, borderRadius: 5 }}
        />
      </Box>

      {/* Topic cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
          mb: 4,
        }}
      >
        {TOPICS.map((topic) => {
          const slots = CURRICULUM.filter((s) => s.topic === topic);
          const done = slots.filter((s) => isComplete(s.id)).length;
          const pct = slots.length > 0 ? Math.round((done / slots.length) * 100) : 0;

          return (
            <Card key={topic} variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {TOPIC_LABELS[topic]}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {done} / {slots.length} lessons · {pct}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={pct}
                  sx={{ height: 6, borderRadius: 3, mb: 1.5 }}
                />
                <Button
                  component={RouterLink}
                  to={`/lessons#${topic}`}
                  size="small"
                  variant="outlined"
                >
                  View lessons
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Next up */}
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          border: '1px solid',
          borderColor: nextUp ? 'primary.main' : 'success.main',
          backgroundColor: 'background.paper',
        }}
      >
        {nextUp ? (
          <>
            <Typography variant="overline" color="primary.main">
              Next Up
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {nextUp.id} — {nextUp.title}
            </Typography>
            {authoredIds.has(nextUp.id) ? (
              <Button
                component={RouterLink}
                to={`/lessons/${nextUp.topic}/${nextUp.slug}`}
                variant="contained"
                size="small"
              >
                Start lesson
              </Button>
            ) : (
              <Typography variant="body2" color="text.disabled">
                Lesson coming soon
              </Typography>
            )}
          </>
        ) : (
          <>
            <Typography variant="overline" color="success.main">
              All done!
            </Typography>
            <Typography variant="body1">
              You&apos;ve completed all available lessons. Good luck on the exam!
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
}
