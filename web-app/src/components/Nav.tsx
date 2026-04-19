import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Browse Lessons', to: '/lessons', icon: <MenuBookIcon /> },
  { label: 'Practice Exam', to: '/exam', icon: <QuizIcon /> },
  { label: 'Study Plan', to: '/plan', icon: <ChecklistIcon /> },
];

const BOTTOM_NAV_LABELS = ['Home', 'Browse', 'Exam', 'Plan'];

function isActiveRoute(pathname: string, to: string): boolean {
  return to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/');
}

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();

  const activeIndex = NAV_LINKS.findIndex(({ to }) => isActiveRoute(location.pathname, to));

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'background.default' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 700 }}>
            PPL Study
          </Typography>
          {!isMobile &&
            NAV_LINKS.map(({ label, to }) => {
              const active = isActiveRoute(location.pathname, to);
              return (
                <Button
                  key={to}
                  component={RouterLink}
                  to={to}
                  color="inherit"
                  sx={
                    active
                      ? {
                          color: 'primary.main',
                          borderBottom: '2px solid',
                          borderColor: 'primary.main',
                          borderRadius: 0,
                        }
                      : undefined
                  }
                >
                  {label}
                </Button>
              );
            })}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Paper
          elevation={3}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.appBar,
            pb: 'env(safe-area-inset-bottom)',
          }}
        >
          <BottomNavigation
            value={activeIndex}
            onChange={(_, newValue: number) => navigate(NAV_LINKS[newValue].to)}
          >
            {NAV_LINKS.map(({ icon }, i) => (
              <BottomNavigationAction key={NAV_LINKS[i].to} label={BOTTOM_NAV_LABELS[i]} icon={icon} />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </>
  );
}
