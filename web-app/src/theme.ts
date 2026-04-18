import { createTheme } from '@mui/material/styles';

let theme = createTheme({
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
    body1: {
      lineHeight: 1.75,
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h3: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
      },
    },
    h4: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h5: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    h6: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem',
      },
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg' as const,
      },
    },
  },
});

export default theme;
