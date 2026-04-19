import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Nav from './components/Nav';
import Home from './pages/Home';
import LessonsIndex from './pages/LessonsIndex';
import LessonDetail from './pages/LessonDetail';
import Exam from './pages/Exam';
import Plan from './pages/Plan';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <Box sx={{ pb: { xs: 7, sm: 7, md: 0 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<LessonsIndex />} />
            <Route path="/lessons/:topic/:slug" element={<LessonDetail />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/plan" element={<Plan />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
