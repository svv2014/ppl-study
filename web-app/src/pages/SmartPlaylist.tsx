import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PlaylistPlayer from '../components/PlaylistPlayer';
import { useProgress } from '../lib/progress';
import { weakestTopicFirst, dueForReview } from '../lib/smart-playlists';

const KIND_META: Record<string, { label: string; description: string; empty: string }> = {
  weakest: {
    label: 'Weakest Topic First',
    description:
      "Incomplete lessons interleaved across topics — the topic you've covered least comes first.",
    empty:
      "No incomplete lessons with audio are available. You've covered everything — great work!",
  },
  due: {
    label: 'Due for Review',
    description: 'Lessons you completed more than 7 days ago. Time to keep them fresh.',
    empty: 'No lessons are due for review right now. Check back in a few days!',
  },
};

export default function SmartPlaylist() {
  const { kind } = useParams<{ kind: string }>();
  const { progress } = useProgress();

  const meta = kind ? KIND_META[kind] : undefined;

  if (!meta) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Smart Playlist
        </Typography>
        <Typography color="text.secondary">Unknown playlist type.</Typography>
      </Container>
    );
  }

  const lessons =
    kind === 'weakest'
      ? weakestTopicFirst(progress)
      : kind === 'due'
        ? dueForReview(progress)
        : [];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {meta.label}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {meta.description}
      </Typography>
      {lessons.length === 0 ? (
        <Typography color="text.secondary">{meta.empty}</Typography>
      ) : (
        <PlaylistPlayer lessons={lessons} />
      )}
    </Container>
  );
}
