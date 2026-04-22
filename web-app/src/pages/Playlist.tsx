import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PlaylistPlayer from '../components/PlaylistPlayer';
import { getLessonsByTopic } from '../lib/lesson-loader';
import { TOPICS, TOPIC_LABELS } from '../lib/curriculum';

export default function Playlist() {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();

  if (topic) {
    const lessons = getLessonsByTopic(topic).filter(
      (l) => l.status !== 'planning' && l.audio !== null,
    );

    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          {TOPIC_LABELS[topic] ?? topic} — Playlist
        </Typography>
        {lessons.length === 0 ? (
          <Typography color="text.secondary">
            No audio lessons are available for this topic yet.
          </Typography>
        ) : (
          <PlaylistPlayer lessons={lessons} />
        )}
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Study Playlist
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Select a topic to listen to all available audio lessons in order.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {TOPICS.map((t) => (
          <Button
            key={t}
            variant="outlined"
            onClick={() => navigate(`/playlist/${t}`)}
          >
            {TOPIC_LABELS[t]}
          </Button>
        ))}
      </Box>
    </Container>
  );
}
