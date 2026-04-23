import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../context/ThemeModeContext';

export default function ModeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const label = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <Tooltip title={label} placement="right">
      <IconButton
        onClick={toggleMode}
        aria-label={label}
        size="medium"
        sx={{
          minWidth: 48,
          minHeight: 48,
          color: 'text.secondary',
          '&:hover': { color: 'primary.main' },
        }}
      >
        {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
