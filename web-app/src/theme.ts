import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a1628',
      paper: '#0d1f3c',
    },
    primary: {
      main: '#f5a623',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          minWidth: 48,
          minHeight: 48,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 12,
        },
      },
    },
  },
});

export default theme;
