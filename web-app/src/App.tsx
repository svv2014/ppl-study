import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { buildTheme } from './theme';
import { useThemeMode } from './context/ThemeModeContext';
import { useStickyPlayer } from './context/StickyPlayerContext';
import { TrackProvider } from './context/TrackContext';
import Nav from './components/Nav';
import StickyPlayerBar from './components/StickyPlayerBar';
import AppErrorBoundary from './components/AppErrorBoundary';
import Home from './pages/Home';
import LessonsIndex from './pages/LessonsIndex';
import LessonDetail from './pages/LessonDetail';
import LessonQuiz from './pages/LessonQuiz';
import Exam from './pages/Exam';
import FinalExam from './pages/FinalExam';
import PSTARExam from './pages/PSTARExam';
import Plan from './pages/Plan';
import Playlist from './pages/Playlist';
import SmartPlaylist from './pages/SmartPlaylist';
import PlaylistEditor from './pages/PlaylistEditor';
import UserPlaylistPage from './pages/UserPlaylistPage';
import PSTARPath from './pages/PSTARPath';
import SRSQueue from './pages/SRSQueue';

function PlaylistTopicRedirect() {
  const { topic } = useParams<{ topic: string }>();
  return <Navigate to={`/playlist/topic/${topic}`} replace />;
}

const RAIL_EXPANDED = 240;
const RAIL_COLLAPSED = 64;
const LS_KEY = 'ppl-nav-collapsed';

export default function App() {
  const { mode } = useThemeMode();
  const theme = useMemo(() => buildTheme(mode), [mode]);
  const { lessons } = useStickyPlayer();
  const playerVisible = lessons.some((l) => l.audio !== null);

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LS_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === LS_KEY) {
        setCollapsed(e.newValue === 'true');
      }
    };
    window.addEventListener('storage', onStorage);
    const id = setInterval(() => {
      try {
        setCollapsed(localStorage.getItem(LS_KEY) === 'true');
      } catch {
        // ignore
      }
    }, 100);
    return () => {
      window.removeEventListener('storage', onStorage);
      clearInterval(id);
    };
  }, []);

  const railWidth = collapsed ? RAIL_COLLAPSED : RAIL_EXPANDED;

  return (
    <TrackProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Box
            component="a"
            href="#main-content"
            sx={{
              position: 'absolute',
              top: -9999,
              left: -9999,
              zIndex: 9999,
              p: 1,
              bgcolor: 'background.paper',
              color: 'text.primary',
              '&:focus': {
                top: 8,
                left: 8,
              },
            }}
          >
            Skip to main content
          </Box>
          <Nav />
          <Box
            component="main"
            sx={{
              flex: 1,
              minWidth: 0,
              pt: { xs: '48px', md: 0 },
              pb: playerVisible
                ? { xs: '200px', sm: '200px', md: '80px' }
                : { xs: 7, sm: 7, md: 0 },
              ml: { xs: 0, md: `${railWidth}px` },
              transition: theme.transitions.create('margin-left', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
              }),
            }}
          >
            <AppErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<LessonsIndex />} />
              <Route path="/lessons/:topic/:slug" element={<LessonDetail />} />
              <Route path="/lessons/:topic/:slug/quiz" element={<LessonQuiz />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/final-exam" element={<FinalExam />} />
              <Route path="/pstar-exam" element={<PSTARExam />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/playlist/topic/:topic" element={<Playlist />} />
              <Route path="/playlist/smart/:kind" element={<SmartPlaylist />} />
              <Route path="/playlist/curated/:id" element={<Playlist />} />
              <Route path="/playlist/new" element={<PlaylistEditor />} />
              <Route path="/playlist/user/:id" element={<UserPlaylistPage />} />
              <Route path="/playlist/user/:id/edit" element={<PlaylistEditor />} />
              <Route path="/playlist/:topic" element={<PlaylistTopicRedirect />} />
              <Route path="/pstar" element={<PSTARPath />} />
              <Route path="/srs" element={<SRSQueue />} />
            </Routes>
            </AppErrorBoundary>
          </Box>
          <StickyPlayerBar />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
    </TrackProvider>
  );
}
