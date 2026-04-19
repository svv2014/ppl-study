import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
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

const theme = createTheme(baseTheme, {
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 300,
      lineHeight: 1.167,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 300,
      lineHeight: 1.235,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
      lineHeight: 1.235,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.334,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '1.375rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
    },
  },
});

export default theme;
