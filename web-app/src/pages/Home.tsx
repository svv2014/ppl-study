import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import HeroMotif from '../components/HeroMotif';
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

  const hasProgress = progress.completed.length > 0;

  return (
    <>
      {/* Hero — full-width, above fold on 375 px mobile */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 6 } }}>
        {/* Heading-rose motif — decorative background */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: '-10%', md: '2%' },
            transform: 'translateY(-50%)',
            width: { xs: 280, md: 420 },
            height: { xs: 280, md: 420 },
            opacity: 0.08,
            pointerEvents: 'none',
          }}
        >
          <HeroMotif />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2, fontSize: { xs: '1.875rem', md: '3rem' } }}
          >
            Pass the Canadian PPL written exam — 20 minutes a day
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 560 }}
          >
            Structured lessons covering PSTAR and the full Transport Canada PPL syllabus.
          </Typography>
          <Button
            component={RouterLink}
            to="/lessons"
            variant="contained"
            size="large"
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            Start studying
          </Button>
        </Container>
      </Box>

      {/* Credibility strip */}
      <Box sx={{ bgcolor: 'background.paper', py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary">Covers PSTAR &amp; PPL written exam</Typography>
            <Typography variant="body2" color="text.secondary">Transport Canada syllabus aligned</Typography>
            <Typography variant="body2" color="text.secondary">Target 80%+ on your written</Typography>
          </Box>
        </Container>
      </Box>

      {/* Progress section — only when at least one lesson is complete */}
      {hasProgress && (
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="body2" color="text.secondary">Overall progress</Typography>
              <Typography variant="body2" color="text.secondary">
                {completedCount} / {totalLessons} · {overallPercent}%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={overallPercent} sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: nextUp ? 'primary.main' : 'success.main',
              bgcolor: 'background.paper',
            }}
          >
            {nextUp ? (
              <>
                <Typography variant="overline" color="primary.main">Next Up</Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>{nextUp.id} — {nextUp.title}</Typography>
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
                  <Typography variant="body2" color="text.disabled">Lesson coming soon</Typography>
                )}
              </>
            ) : (
              <>
                <Typography variant="overline" color="success.main">All done!</Typography>
                <Typography variant="body1">
                  You&apos;ve completed all available lessons. Good luck on the exam!
                </Typography>
              </>
            )}
          </Box>
        </Container>
      )}

      {/* Topic cards — 2-col ≥600 px, single-col xs */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
          {TOPICS.map((topic) => {
            const slots = CURRICULUM.filter((s) => s.topic === topic);
            const done = slots.filter((s) => isComplete(s.id)).length;
            const pct = slots.length > 0 ? Math.round((done / slots.length) * 100) : 0;
            return (
              <Card key={topic} variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>{TOPIC_LABELS[topic]}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {done} / {slots.length} lessons · {pct}%
                  </Typography>
                  <LinearProgress variant="determinate" value={pct} sx={{ height: 6, borderRadius: 3, mb: 1.5 }} />
                  <Button component={RouterLink} to={`/lessons#${topic}`} size="small" variant="outlined">
                    View lessons
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </>
  );
}
