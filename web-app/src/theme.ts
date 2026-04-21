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
    info: {
      main: '#4fc3f7',
    },
    text: {
      onAccent: '#000000',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', 'Roboto', 'Helvetica', sans-serif",
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontFamily: "'Space Grotesk', 'Roboto', 'Helvetica', sans-serif",
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.25,
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontFamily: "'Space Grotesk', 'Roboto', 'Helvetica', sans-serif",
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (min-width:900px)': {
        fontSize: '1.875rem',
      },
    },
    h4: {
      fontFamily: "'Space Grotesk', 'Roboto', 'Helvetica', sans-serif",
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.35,
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
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
