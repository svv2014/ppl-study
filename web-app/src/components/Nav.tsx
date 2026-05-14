import { useState, useEffect } from 'react';
import { getCurrentStreak } from '../lib/checkins';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import GradingIcon from '@mui/icons-material/Grading';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { colorTokens, radiusTokens } from '../tokens';
import { useThemeMode } from '../context/ThemeModeContext';
import ModeToggle from './ModeToggle';
import TrackSwitcher from './TrackSwitcher';

const NAV_LINKS = [
  { label: 'Home', shortLabel: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Browse Lessons', shortLabel: 'Browse', to: '/lessons', icon: <MenuBookIcon /> },
  { label: 'Practice Quiz', shortLabel: 'Quiz', to: '/exam', icon: <QuizIcon /> },
  { label: 'Final Exam', shortLabel: 'Final', to: '/final-exam', icon: <GradingIcon /> },
  { label: 'Study Plan', shortLabel: 'Plan', to: '/plan', icon: <ChecklistIcon /> },
  { label: 'Listen', shortLabel: 'Listen', to: '/playlist', icon: <HeadphonesIcon /> },
];

const RAIL_EXPANDED = 240;
const RAIL_COLLAPSED = 64;
const LS_KEY = 'ppl-nav-collapsed';

function isActiveRoute(pathname: string, to: string): boolean {
  return to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/');
}

export default function Nav() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const c = colorTokens[mode];
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LS_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, String(collapsed));
    } catch {
      // ignore storage errors
    }
  }, [collapsed]);

  useEffect(() => {
    setStreak(getCurrentStreak());
  }, [location.pathname]);

  const activeIndex = NAV_LINKS.findIndex(({ to }) => isActiveRoute(location.pathname, to));
  const railWidth = collapsed ? RAIL_COLLAPSED : RAIL_EXPANDED;

  if (isDesktop) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: railWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: railWidth,
            boxSizing: 'border-box',
            backgroundColor: c.background.paper,
            borderRight: `1px solid ${c.divider}`,
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* Branding */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 2,
            minHeight: 56,
            borderBottom: `1px solid ${c.divider}`,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography
            component="span"
            sx={{
              color: c.primary.main,
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.01em',
              flexShrink: 0,
            }}
          >
            <span aria-hidden="true">✈ </span>
            {!collapsed && 'PPL Study'}
          </Typography>
          {streak > 0 && (
            <Box
              component="span"
              aria-label={`${streak}-day streak`}
              sx={{
                ml: collapsed ? 'auto' : 1,
                fontSize: '0.7rem',
                fontWeight: 700,
                color: c.primary.main,
                backgroundColor: c.primary.muted,
                borderRadius: `${radiusTokens.sm}px`,
                px: 0.75,
                py: 0.25,
                lineHeight: 1.4,
                flexShrink: 0,
              }}
            >
              {collapsed ? '🔥' : `🔥 ${streak}`}
            </Box>
          )}
        </Box>

        {/* Track switcher */}
        <Box
          sx={{
            px: collapsed ? 0.5 : 2,
            py: 1.25,
            borderBottom: `1px solid ${c.divider}`,
            display: 'flex',
            justifyContent: collapsed ? 'center' : 'flex-start',
            overflow: 'hidden',
          }}
        >
          <TrackSwitcher />
        </Box>

        {/* Nav links */}
        <Box component="nav" aria-label="Primary navigation" sx={{ flex: 1, py: 1 }}>
          {NAV_LINKS.map(({ label, to, icon }) => {
            const active = isActiveRoute(location.pathname, to);
            return (
              <Tooltip
                key={to}
                title={collapsed ? label : ''}
                placement="right"
                disableHoverListener={!collapsed}
              >
                <Box
                  component={RouterLink}
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: collapsed ? 0 : 2,
                    py: 1.25,
                    mx: 1,
                    borderRadius: '4px',
                    textDecoration: 'none',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    borderLeft: active
                      ? `3px solid ${c.primary.main}`
                      : '3px solid transparent',
                    color: active ? c.primary.main : c.text.secondary,
                    backgroundColor: active ? c.primary.muted : 'transparent',
                    transition: 'color 0.15s, background-color 0.15s',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    '&:hover': {
                      color: c.primary.main,
                      backgroundColor: c.primary.muted,
                    },
                    '& svg': {
                      flexShrink: 0,
                      fontSize: '1.25rem',
                    },
                  }}
                >
                  {icon}
                  {!collapsed && (
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'inherit',
                      }}
                    >
                      {label}
                    </Typography>
                  )}
                </Box>
              </Tooltip>
            );
          })}
        </Box>

        {/* Mode toggle — bottom of sidebar */}
        <Box
          sx={{
            borderTop: `1px solid ${c.divider}`,
            display: 'flex',
            justifyContent: collapsed ? 'center' : 'flex-start',
            px: collapsed ? 0 : 1,
            py: 0.5,
          }}
        >
          <ModeToggle />
        </Box>

        {/* Collapse toggle */}
        <Box
          sx={{
            borderTop: `1px solid ${c.divider}`,
            display: 'flex',
            justifyContent: collapsed ? 'center' : 'flex-end',
            px: collapsed ? 0 : 1,
            py: 1,
          }}
        >
          <IconButton
            onClick={() => setCollapsed((cv) => !cv)}
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            size="small"
            sx={{ color: c.text.secondary }}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      </Drawer>
    );
  }

  // Mobile: top app bar (branding + track switcher + mode toggle) + bottom nav
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: c.background.paper,
          borderBottom: `1px solid ${c.divider}`,
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            minHeight: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              component="span"
              sx={{
                color: c.primary.main,
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.01em',
              }}
            >
              <span aria-hidden="true">✈ </span>
              PPL Study
            </Typography>
            {streak > 0 && (
              <Box
                component="span"
                aria-label={`${streak}-day streak`}
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: c.primary.main,
                  backgroundColor: c.primary.muted,
                  borderRadius: `${radiusTokens.sm}px`,
                  px: 0.75,
                  py: 0.25,
                  lineHeight: 1.4,
                }}
              >
                {streak}
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <ModeToggle />
            <TrackSwitcher />
          </Box>
        </Toolbar>
      </AppBar>

      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          pb: 'env(safe-area-inset-bottom)',
          backgroundColor: c.background.paper,
          borderTop: `1px solid ${c.divider}`,
        }}
      >
        <BottomNavigation
          value={activeIndex}
          onChange={(_, newValue: number) => navigate(NAV_LINKS[newValue].to)}
          sx={{
            backgroundColor: c.background.paper,
            '& .MuiBottomNavigationAction-root': {
              color: c.text.secondary,
              minWidth: 0,
            },
            '& .MuiBottomNavigationAction-root.Mui-selected': {
              color: c.primary.main,
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.7rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            },
          }}
        >
          {NAV_LINKS.map(({ shortLabel, to, icon }, idx) => {
            const active = isActiveRoute(location.pathname, to);
            return (
              <BottomNavigationAction
                key={to}
                label={shortLabel}
                icon={icon}
                aria-current={active ? 'page' : undefined}
                component={RouterLink}
                to={to}
                value={idx}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
    </>
  );
}
