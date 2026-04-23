import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PlaylistPlayer from '../components/PlaylistPlayer';
import { getAllLessons } from '../lib/lesson-loader';
import { getPlaylist } from '../lib/user-playlists';

export default function UserPlaylistPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const playlist = useMemo(() => (id ? getPlaylist(id) : undefined), [id]);

  const lessons = useMemo(() => {
    if (!playlist) return [];
    const all = getAllLessons();
    const byId = new Map(all.map((l) => [l.id, l]));
    return playlist.lessonIds
      .map((lid) => byId.get(lid))
      .filter((l): l is NonNullable<typeof l> => l !== undefined && l.audio !== null);
  }, [playlist]);

  if (!playlist) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Playlist not found
        </Typography>
        <Button variant="outlined" onClick={() => navigate('/playlist')}>
          Back to Playlists
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <Typography variant="h4" sx={{ flex: 1 }}>
          {playlist.name}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate(`/playlist/user/${playlist.id}/edit`)}
        >
          Edit
        </Button>
      </Box>
      {lessons.length === 0 ? (
        <Typography color="text.secondary">
          No audio lessons available in this playlist yet.
        </Typography>
      ) : (
        <PlaylistPlayer lessons={lessons} />
      )}
    </Container>
  );
}
