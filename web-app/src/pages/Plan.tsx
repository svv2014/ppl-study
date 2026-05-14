import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { CURRICULUM, TOPIC_LABELS, TOPICS } from '../lib/curriculum';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';
import { useExamTrack } from '../context/ExamTrackContext';
import type { Lesson } from '../lib/types';

export default function Plan() {
  const theme = useTheme();
  const [resetOpen, setResetOpen] = useState(false);
  const { store, activeTrack } = useExamTrack();
  const { progress, markComplete, markIncomplete, isComplete, reset } = useProgress(store);

  const { authoredIds, lessonTitleMap } = useMemo(() => {
    const lessons = getAllLessons();
    return {
      authoredIds: new Set(lessons.map((l) => l.id)),
      lessonTitleMap: new Map(lessons.map((l) => [l.id, l.title])),
    };
  }, []);

  const filteredCurriculum = useMemo(
    () => CURRICULUM.filter((slot) => activeTrack.lessonFilter({ topic: slot.topic } as Lesson)),
    [activeTrack],
  );
  const filteredTopics = useMemo(
    () => TOPICS.filter((t) => filteredCurriculum.some((s) => s.topic === t)),
    [filteredCurriculum],
  );

  const totalLessons = filteredCurriculum.length;
  const completedCount = filteredCurriculum.filter((s) => isComplete(s.id)).length;
  const overallPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  function handleToggle(lessonId: string) {
    if (isComplete(lessonId)) {
      markIncomplete(lessonId);
    } else {
      markComplete(lessonId);
    }
  }

  function handleReset() {
    reset();
    setResetOpen(false);
  }

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      {/* ── Page header ── */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Study Plan
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {completedCount} / {totalLessons} lessons complete · {overallPercent}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={overallPercent}
          sx={{ height: 10, borderRadius: 5, mb: 2 }}
        />
        <Button
          variant="outlined"
          color="warning"
          size="small"
          onClick={() => setResetOpen(true)}
        >
          Reset Progress
        </Button>
      </Box>

      {/* ── Practice Oral (night track only) ── */}
      {activeTrack.id === 'night' && (
        <Box
          component={RouterLink}
          to="/final-exam?mode=practice-oral&track=night"
          sx={{
            display: 'block',
            mb: 4,
            p: 2,
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
            bgcolor: theme.palette.primaryMuted,
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': { opacity: 0.85 },
          }}
        >
          <Typography variant="overline" color="primary.main" sx={{ display: 'block' }}>
            Night Rating · Practice Oral
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
            Practice Oral Exam
          </Typography>
          <Typography variant="body2" color="text.secondary">
            20 shuffled questions from all Night Rating lessons — no timer, full explanations.
          </Typography>
        </Box>
      )}

      {/* ── Topic sections ── */}
      {filteredTopics.map((topic) => {
        const slots = filteredCurriculum.filter((s) => s.topic === topic);
        const topicDone = slots.filter((s) => isComplete(s.id)).length;

        return (
          <Box key={topic} sx={{ mb: 4 }}>
            {/* Section header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography variant="h6">{TOPIC_LABELS[topic]}</Typography>
              <Chip
                label={`${topicDone} / ${slots.length}`}
                size="small"
                color={topicDone === slots.length && slots.length > 0 ? 'success' : 'default'}
                variant="outlined"
              />
            </Box>
            <LinearProgress
              variant="determinate"
              value={slots.length > 0 ? Math.round((topicDone / slots.length) * 100) : 0}
              sx={{ height: 4, borderRadius: 2, mb: 1 }}
            />
            <Divider sx={{ mb: 1 }} />

            {/* Lesson rows */}
            <List dense disablePadding>
              {slots.map((slot) => {
                const authored = authoredIds.has(slot.id);
                const done = isComplete(slot.id);

                return (
                  <ListItem key={slot.id} disablePadding sx={{ py: 0.25 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Checkbox
                        edge="start"
                        size="small"
                        checked={done}
                        disabled={!authored}
                        onChange={() => authored && handleToggle(slot.id)}
                        sx={{ p: 0.5 }}
                      />
                    </ListItemIcon>

                    {/* Lesson ID badge */}
                    <Typography
                      component="span"
                      variant="caption"
                      sx={{
                        minWidth: 68,
                        fontFamily: 'monospace',
                        color: authored ? 'primary.main' : 'text.disabled',
                        fontWeight: 600,
                      }}
                    >
                      {slot.id}
                    </Typography>

                    {/* Title — linked if authored, plain if not */}
                    {authored ? (
                      <Typography
                        component={RouterLink}
                        to={`/lessons/${slot.topic}/${slot.slug}`}
                        variant="body2"
                        sx={{
                          textDecoration: 'none',
                          color: done ? 'text.secondary' : 'text.primary',
                          '&:hover': { textDecoration: 'underline' },
                          flex: 1,
                        }}
                      >
                        {lessonTitleMap.get(slot.id) ?? slot.title}
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        color="text.disabled"
                        sx={{ flex: 1 }}
                      >
                        {lessonTitleMap.get(slot.id) ?? slot.title}
                      </Typography>
                    )}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}

      {/* ── Reset confirmation dialog ── */}
      <Dialog open={resetOpen} onClose={() => setResetOpen(false)}>
        <DialogTitle>Reset all progress?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will permanently clear all completed lessons and exam scores stored on
            this device. This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setResetOpen(false)}>Cancel</Button>
          <Button onClick={handleReset} color="error" variant="contained">
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
