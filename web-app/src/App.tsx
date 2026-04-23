import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Nav from './components/Nav';
import Home from './pages/Home';
import LessonsIndex from './pages/LessonsIndex';
import LessonDetail from './pages/LessonDetail';
import LessonQuiz from './pages/LessonQuiz';
import Exam from './pages/Exam';
import PSTARExam from './pages/PSTARExam';
import Plan from './pages/Plan';
import Playlist from './pages/Playlist';
import PSTARPath from './pages/PSTARPath';

const RAIL_EXPANDED = 240;
const RAIL_COLLAPSED = 64;
const LS_KEY = 'ppl-nav-collapsed';

export default function App() {
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
    // Poll localStorage so same-tab Nav toggle updates App layout
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
              pb: { xs: 7, sm: 7, md: 0 },
              ml: { xs: 0, md: `${railWidth}px` },
              transition: theme.transitions.create('margin-left', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
              }),
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<LessonsIndex />} />
              <Route path="/lessons/:topic/:slug" element={<LessonDetail />} />
              <Route path="/lessons/:topic/:slug/quiz" element={<LessonQuiz />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/pstar-exam" element={<PSTARExam />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/playlist/:topic" element={<Playlist />} />
              <Route path="/pstar" element={<PSTARPath />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
