import { useState, useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import GradingIcon from '@mui/icons-material/Grading';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { colorTokens } from '../tokens';

const NAV_LINKS = [
  { label: 'Home', shortLabel: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'Browse Lessons', shortLabel: 'Browse', to: '/lessons', icon: <MenuBookIcon /> },
  { label: 'Practice Quiz', shortLabel: 'Quiz', to: '/exam', icon: <QuizIcon /> },
  { label: 'Final Exam', shortLabel: 'Final', to: '/final-exam', icon: <GradingIcon /> },
  { label: 'Study Plan', shortLabel: 'Plan', to: '/plan', icon: <ChecklistIcon /> },
];

const RAIL_EXPANDED = 240;
const RAIL_COLLAPSED = 64;
const LS_KEY = 'ppl-nav-collapsed';

function isActiveRoute(pathname: string, to: string): boolean {
  return to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/');
}

export default function Nav() {
  const theme = useTheme();
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

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, String(collapsed));
    } catch {
      // ignore storage errors
    }
  }, [collapsed]);

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
            backgroundColor: colorTokens.background.paper,
            borderRight: `1px solid ${colorTokens.divider}`,
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
            borderBottom: `1px solid ${colorTokens.divider}`,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography
            component="span"
            sx={{
              color: colorTokens.primary.main,
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.01em',
              flexShrink: 0,
            }}
          >
            <span aria-hidden="true">✈ </span>
            {!collapsed && 'PPL Study'}
          </Typography>
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
                      ? `3px solid ${colorTokens.primary.main}`
                      : '3px solid transparent',
                    color: active
                      ? colorTokens.primary.main
                      : colorTokens.text.secondary,
                    backgroundColor: active ? colorTokens.primary.muted : 'transparent',
                    transition: 'color 0.15s, background-color 0.15s',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    '&:hover': {
                      color: colorTokens.primary.main,
                      backgroundColor: colorTokens.primary.muted,
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

        {/* Collapse toggle */}
        <Box
          sx={{
            borderTop: `1px solid ${colorTokens.divider}`,
            display: 'flex',
            justifyContent: collapsed ? 'center' : 'flex-end',
            px: collapsed ? 0 : 1,
            py: 1,
          }}
        >
          <IconButton
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            size="small"
            sx={{ color: colorTokens.text.secondary }}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      </Drawer>
    );
  }

  // Mobile: bottom nav
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar,
        pb: 'env(safe-area-inset-bottom)',
        backgroundColor: colorTokens.background.paper,
        borderTop: `1px solid ${colorTokens.divider}`,
      }}
    >
      <BottomNavigation
        value={activeIndex}
        onChange={(_, newValue: number) => navigate(NAV_LINKS[newValue].to)}
        sx={{
          backgroundColor: colorTokens.background.paper,
          '& .MuiBottomNavigationAction-root': {
            color: colorTokens.text.secondary,
            minWidth: 0,
          },
          '& .MuiBottomNavigationAction-root.Mui-selected': {
            color: colorTokens.primary.main,
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
  );
}
