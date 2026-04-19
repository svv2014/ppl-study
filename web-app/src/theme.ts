import { createTheme } from '@mui/material/styles';

const { breakpoints } = createTheme();

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
    body1: {
      lineHeight: 1.75,
    },
    h3: {
      [breakpoints.down('md')]: { fontSize: '1.875rem' },
      [breakpoints.down('sm')]: { fontSize: '1.375rem' },
    },
    h4: {
      [breakpoints.down('md')]: { fontSize: '1.5rem' },
      [breakpoints.down('sm')]: { fontSize: '1.25rem' },
    },
    h5: {
      [breakpoints.down('md')]: { fontSize: '1.25rem' },
      [breakpoints.down('sm')]: { fontSize: '1.125rem' },
    },
    h6: {
      [breakpoints.down('sm')]: { fontSize: '1rem' },
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
