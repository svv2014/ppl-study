import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Browse Lessons', to: '/lessons' },
  { label: 'Practice Exam', to: '/exam' },
  { label: 'Study Plan', to: '/plan' },
];

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a1628' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#f5a623', fontWeight: 700 }}>
          PPL Study
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{ sx: { backgroundColor: '#0d1f3c', minWidth: 200 } }}
            >
              <List>
                {NAV_LINKS.map(({ label, to }) => (
                  <ListItemButton
                    key={to}
                    component={RouterLink}
                    to={to}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={label} sx={{ color: '#ffffff' }} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          NAV_LINKS.map(({ label, to }) => (
            <Button key={to} component={RouterLink} to={to} sx={{ color: '#ffffff' }}>
              {label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}
