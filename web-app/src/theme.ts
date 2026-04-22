import { createTheme } from '@mui/material/styles';
import { colorTokens, typographyTokens, radiusTokens } from './tokens';

declare module '@mui/material/styles' {
  interface TypeBackground {
    surfaceRaised: string;
  }
  interface TypeText {
    onAccent: string;
  }
  interface Palette {
    primaryMuted: string;
  }
  interface PaletteOptions {
    primaryMuted?: string;
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colorTokens.background.default,
      paper: colorTokens.background.paper,
      surfaceRaised: colorTokens.background.surfaceRaised,
    },
    primary: {
      main: colorTokens.primary.main,
    },
    secondary: {
      main: colorTokens.secondary.main,
    },
    info: {
      main: colorTokens.info.main,
    },
    success: {
      main: colorTokens.success.main,
    },
    text: {
      primary: colorTokens.text.primary,
      secondary: colorTokens.text.secondary,
      disabled: colorTokens.text.disabled,
      onAccent: colorTokens.text.onAccent,
    },
    divider: colorTokens.divider,
    primaryMuted: colorTokens.primary.muted,
  },
  shape: {
    borderRadius: radiusTokens.sm,
  },
  typography: {
    fontFamily: typographyTokens.fontFamily.sans,
    h1: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1.875rem',
      fontWeight: typographyTokens.weight.bold,
      lineHeight: 1.2,
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1.5rem',
      fontWeight: typographyTokens.weight.bold,
      lineHeight: 1.25,
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1.375rem',
      fontWeight: typographyTokens.weight.semibold,
      lineHeight: 1.3,
      '@media (min-width:900px)': {
        fontSize: '1.875rem',
      },
    },
    h4: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1.25rem',
      fontWeight: typographyTokens.weight.semibold,
      lineHeight: 1.35,
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1.125rem',
      fontWeight: typographyTokens.weight.semibold,
      lineHeight: 1.4,
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1rem',
      fontWeight: typographyTokens.weight.semibold,
      lineHeight: 1.4,
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '1rem',
      fontWeight: typographyTokens.weight.regular,
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '0.875rem',
      fontWeight: typographyTokens.weight.regular,
      lineHeight: 1.6,
    },
    caption: {
      fontFamily: typographyTokens.fontFamily.sans,
      fontSize: '0.75rem',
      fontWeight: typographyTokens.weight.regular,
      lineHeight: 1.5,
    },
    // Monospace variant for lesson IDs, CARs citations, and code
    overline: {
      fontFamily: typographyTokens.fontFamily.mono,
      fontSize: '0.75rem',
      fontWeight: typographyTokens.weight.regular,
      lineHeight: 1.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: radiusTokens.md,
          fontFamily: typographyTokens.fontFamily.sans,
          fontWeight: typographyTokens.weight.semibold,
          textTransform: 'none',
        },
        containedPrimary: {
          color: colorTokens.text.onAccent,
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: radiusTokens.md,
          border: `1px solid ${colorTokens.divider}`,
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colorTokens.background.paper,
          borderBottom: `1px solid ${colorTokens.divider}`,
          backdropFilter: 'blur(12px)',
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
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: typographyTokens.fontFamily.sans,
          fontWeight: typographyTokens.weight.semibold,
          borderRadius: radiusTokens.pill,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: typographyTokens.fontFamily.sans,
          fontSize: '0.75rem',
          borderRadius: radiusTokens.sm,
          backgroundColor: colorTokens.background.surfaceRaised,
          border: `1px solid ${colorTokens.divider}`,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: radiusTokens.pill,
          backgroundColor: colorTokens.primary.muted,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
