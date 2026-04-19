import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    surfaceRaised: string;
  }
  interface TypeText {
    onAccent: string;
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a1628',
      paper: '#0d1f3c',
      surfaceRaised: '#0d1f3c',
    },
    primary: {
      main: '#f5a623',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      onAccent: '#000000',
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
