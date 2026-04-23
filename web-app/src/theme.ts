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

export function buildTheme(mode: 'dark' | 'light') {
  const c = colorTokens[mode];
  const gridLineColor = mode === 'dark'
    ? 'rgba(26,53,80,0.15)'
    : 'rgba(192,212,232,0.30)';

  return createTheme({
    palette: {
      mode,
      background: {
        default: c.background.default,
        paper: c.background.paper,
        surfaceRaised: c.background.surfaceRaised,
      },
      primary: {
        main: c.primary.main,
      },
      secondary: {
        main: c.secondary.main,
      },
      info: {
        main: c.info.main,
      },
      success: {
        main: c.success.main,
      },
      error: {
        main: c.error.main,
      },
      text: {
        primary: c.text.primary,
        secondary: c.text.secondary,
        disabled: c.text.disabled,
        onAccent: c.text.onAccent,
      },
      divider: c.divider,
      primaryMuted: c.primary.muted,
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
        lineHeight: 1.1,
        letterSpacing: typographyTokens.letterSpacing.tight,
        '@media (min-width:900px)': {
          fontSize: '2.75rem',
        },
      },
      h2: {
        fontFamily: typographyTokens.fontFamily.sans,
        fontSize: '1.5rem',
        fontWeight: typographyTokens.weight.bold,
        lineHeight: 1.2,
        letterSpacing: typographyTokens.letterSpacing.tight,
        '@media (min-width:900px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontFamily: typographyTokens.fontFamily.sans,
        fontSize: '1.25rem',
        fontWeight: typographyTokens.weight.semibold,
        lineHeight: 1.3,
        '@media (min-width:900px)': {
          fontSize: '1.5rem',
        },
      },
      h4: {
        fontFamily: typographyTokens.fontFamily.sans,
        fontSize: '1.125rem',
        fontWeight: typographyTokens.weight.semibold,
        lineHeight: 1.35,
        '@media (min-width:900px)': {
          fontSize: '1.25rem',
        },
      },
      h5: {
        fontFamily: typographyTokens.fontFamily.sans,
        fontSize: '1rem',
        fontWeight: typographyTokens.weight.semibold,
        lineHeight: 1.4,
        '@media (min-width:900px)': {
          fontSize: '1.125rem',
        },
      },
      h6: {
        fontFamily: typographyTokens.fontFamily.sans,
        fontSize: '0.9375rem',
        fontWeight: typographyTokens.weight.semibold,
        lineHeight: 1.4,
        '@media (min-width:900px)': {
          fontSize: '1rem',
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
      // Monospace variant for lesson IDs, CARs citations, code
      overline: {
        fontFamily: typographyTokens.fontFamily.mono,
        fontSize: '0.6875rem',
        fontWeight: typographyTokens.weight.regular,
        lineHeight: 1.5,
        letterSpacing: typographyTokens.letterSpacing.wider,
        textTransform: 'uppercase',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*, *::before, *::after': {
            transition:
              'background-color 180ms ease, color 180ms ease, border-color 180ms ease',
          },
          body: {
            backgroundColor: c.background.default,
            color: c.text.primary,
          },
          'body::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: `
              linear-gradient(${gridLineColor} 1px, transparent 1px),
              linear-gradient(90deg, ${gridLineColor} 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 48,
            borderRadius: radiusTokens.sm,
            fontFamily: typographyTokens.fontFamily.sans,
            fontWeight: typographyTokens.weight.semibold,
            textTransform: 'uppercase' as const,
            letterSpacing: typographyTokens.letterSpacing.wide,
            fontSize: '0.8125rem',
            border: `1px solid ${c.divider}`,
          },
          containedPrimary: {
            color: c.text.onAccent,
            border: 'none',
          },
          outlined: {
            borderColor: c.divider,
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
            border: `1px solid ${c.divider}`,
            backgroundImage: 'none',
            backgroundColor: c.background.paper,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: c.background.paper,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: c.background.paper,
            borderBottom: `1px solid ${c.divider}`,
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
            fontFamily: typographyTokens.fontFamily.mono,
            fontWeight: typographyTokens.weight.semibold,
            fontSize: '0.6875rem',
            letterSpacing: typographyTokens.letterSpacing.wider,
            borderRadius: radiusTokens.xs,
            border: `1px solid ${c.divider}`,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: typographyTokens.fontFamily.sans,
            fontSize: '0.75rem',
            borderRadius: radiusTokens.sm,
            backgroundColor: c.background.surfaceRaised,
            border: `1px solid ${c.divider}`,
            color: c.text.primary,
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: radiusTokens.pill,
            height: 4,
            backgroundColor: c.primary.muted,
          },
          bar: {
            borderRadius: radiusTokens.pill,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: 'none',
            backgroundColor: c.background.paper,
            borderRight: `1px solid ${c.divider}`,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: c.divider,
          },
        },
      },
    },
  });
}

// Dark is the default theme (backward compat for App.tsx import during migration)
export default buildTheme('dark');
