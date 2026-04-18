import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Browse Lessons', to: '/lessons' },
  { label: 'Practice Exam', to: '/exam' },
  { label: 'Study Plan', to: '/plan' },
];

export default function Nav() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a1628' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#f5a623', fontWeight: 700 }}>
          PPL Study
        </Typography>
        {NAV_LINKS.map(({ label, to }) => (
          <Button key={to} component={RouterLink} to={to} sx={{ color: '#ffffff' }}>
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
