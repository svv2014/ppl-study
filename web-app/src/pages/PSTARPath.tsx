import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { CURRICULUM } from '../lib/curriculum';
import { getAllLessons } from '../lib/lesson-loader';
import { useProgress } from '../lib/progress';

const TIER_1_LESSON_IDS = new Set([
  'AL-001', 'AL-002', 'AL-003', 'AL-004',
  'AL-005', 'AL-006', 'AL-007', 'AL-014',
]);

const AL_LESSONS = CURRICULUM.filter((s) => s.topic === 'air-law');

export default function PSTARPath() {
  const { isComplete } = useProgress();

  const authoredIds = useMemo(() => {
    const lessons = getAllLessons();
    return new Set(lessons.map((l) => l.id));
  }, []);

  const completedCount = AL_LESSONS.filter((s) => isComplete(s.id)).length;
  const overallPercent =
    AL_LESSONS.length > 0 ? Math.round((completedCount / AL_LESSONS.length) * 100) : 0;

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      {/* ── Page header ── */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          PSTAR Path
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Pre-Solo Standard Test of Air Regulations — pass mark: 90%
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Study resource:{' '}
          <Link
            href="https://tc.canada.ca/en/aviation/publications/transport-canada-aeronautical-information-manual-tc-aim/tp-14371"
            target="_blank"
            rel="noopener noreferrer"
          >
            TP 13014E — Air Regulations (Transport Canada)
          </Link>
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {completedCount} / {AL_LESSONS.length} lessons complete · {overallPercent}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={overallPercent}
          sx={{ height: 10, borderRadius: 5, mb: 3 }}
        />
      </Box>

      {/* ── Lesson list ── */}
      <Typography variant="h6" gutterBottom>
        Air Law Lessons
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <List dense disablePadding sx={{ mb: 4 }}>
        {AL_LESSONS.map((slot) => {
          const authored = authoredIds.has(slot.id);
          const done = isComplete(slot.id);
          const isTier1 = TIER_1_LESSON_IDS.has(slot.id);

          return (
            <ListItem
              key={slot.id}
              disablePadding
              sx={{ py: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}
            >
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

              {/* Title */}
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
                  {slot.title}
                </Typography>
              ) : (
                <Typography variant="body2" color="text.disabled" sx={{ flex: 1 }}>
                  {slot.title}
                </Typography>
              )}

              {/* Tier 1 chip */}
              {isTier1 && (
                <Chip label="Core" size="small" color="primary" variant="outlined" />
              )}
            </ListItem>
          );
        })}
      </List>

      {/* ── CTA ── */}
      <Box sx={{ textAlign: 'center' }}>
        <Button
          component={RouterLink}
          to="/pstar-exam"
          variant="contained"
          size="large"
        >
          Take PSTAR Practice Exam
        </Button>
      </Box>
    </Container>
  );
}
