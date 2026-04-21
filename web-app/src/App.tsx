import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Nav from './components/Nav';
import Home from './pages/Home';
import LessonsIndex from './pages/LessonsIndex';
import LessonDetail from './pages/LessonDetail';
import LessonQuiz from './pages/LessonQuiz';
import Exam from './pages/Exam';
import Plan from './pages/Plan';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
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
        <Box sx={{ pb: { xs: 7, sm: 7, md: 0 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<LessonsIndex />} />
            <Route path="/lessons/:topic/:slug" element={<LessonDetail />} />
            <Route path="/lessons/:topic/:slug/quiz" element={<LessonQuiz />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/plan" element={<Plan />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
