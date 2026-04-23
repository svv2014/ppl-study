import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { TOPICS, TOPIC_LABELS } from '../lib/curriculum';
import { getAllLessons } from '../lib/lesson-loader';
import {
  createPlaylist,
  getPlaylist,
  updatePlaylist,
} from '../lib/user-playlists';

export default function PlaylistEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = !id;

  const existing = useMemo(() => (id ? getPlaylist(id) : undefined), [id]);

  const allLessons = useMemo(
    () => getAllLessons().filter((l) => l.status !== 'planning' && l.audio !== null),
    [],
  );

  const [name, setName] = useState(existing?.name ?? '');
  const [selectedIds, setSelectedIds] = useState<string[]>(existing?.lessonIds ?? []);

  const lessonById = useMemo(
    () => new Map(allLessons.map((l) => [l.id, l])),
    [allLessons],
  );

  function toggleLesson(lessonId: string) {
    setSelectedIds((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId],
    );
  }

  function moveUp(index: number) {
    if (index === 0) return;
    setSelectedIds((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  }

  function moveDown(index: number) {
    setSelectedIds((prev) => {
      if (index >= prev.length - 1) return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  }

  function handleSave() {
    const trimmed = name.trim();
    if (!trimmed) return;
    if (isNew) {
      const playlist = createPlaylist(trimmed, selectedIds);
      navigate(`/playlist/user/${playlist.id}`, { replace: true });
    } else {
      updatePlaylist(id!, { name: trimmed, lessonIds: selectedIds });
      navigate(`/playlist/user/${id}`, { replace: true });
    }
  }

  return (
    <Container id="main-content" tabIndex={-1} maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {isNew ? 'New Playlist' : 'Edit Playlist'}
      </Typography>

      <TextField
        label="Playlist name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mb: 4 }}
        inputProps={{ maxLength: 80 }}
      />

      {/* Selected order */}
      {selectedIds.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Selected Lessons ({selectedIds.length})
          </Typography>
          <Divider sx={{ mb: 1 }} />
          <List dense disablePadding>
            {selectedIds.map((lessonId, index) => {
              const lesson = lessonById.get(lessonId);
              if (!lesson) return null;
              return (
                <ListItem
                  key={lessonId}
                  disablePadding
                  sx={{ py: 0.25 }}
                  secondaryAction={
                    <Box sx={{ display: 'flex', gap: 0 }}>
                      <IconButton
                        size="small"
                        onClick={() => moveUp(index)}
                        disabled={index === 0}
                        aria-label="Move up"
                      >
                        <ArrowUpwardIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => moveDown(index)}
                        disabled={index === selectedIds.length - 1}
                        aria-label="Move down"
                      >
                        <ArrowDownwardIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Typography variant="caption" color="text.secondary">
                      {index + 1}
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={lesson.title}
                    secondary={TOPIC_LABELS[lesson.topic] ?? lesson.topic}
                    primaryTypographyProps={{ variant: 'body2' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}

      {/* Lesson picker grouped by topic */}
      <Typography variant="h6" gutterBottom>
        Add Lessons
      </Typography>
      {TOPICS.map((topic) => {
        const topicLessons = allLessons.filter((l) => l.topic === topic);
        if (topicLessons.length === 0) return null;
        return (
          <Box key={topic} sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
              {TOPIC_LABELS[topic]}
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <List dense disablePadding>
              {topicLessons.map((lesson) => {
                const checked = selectedIds.includes(lesson.id);
                return (
                  <ListItem key={lesson.id} disablePadding sx={{ py: 0.25 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Checkbox
                        edge="start"
                        size="small"
                        checked={checked}
                        onChange={() => toggleLesson(lesson.id)}
                        sx={{ p: 0.5 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={lesson.title}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: checked ? 'text.secondary' : 'text.primary',
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!name.trim() || selectedIds.length === 0}
        >
          Save Playlist
        </Button>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
}
