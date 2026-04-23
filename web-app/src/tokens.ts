// Design tokens for PPL Study — source of truth for all theme values.
// No MUI blue #1976d2. Green reserved for correct/complete semantics only.

export const colorTokens = {
  background: {
    default: '#0a1628',
    paper: '#0d1f3c',
    surfaceRaised: '#112244',
  },
  primary: {
    main: '#f5a623',
    muted: 'rgba(245,166,35,0.15)',
  },
  secondary: {
    main: '#ffffff',
  },
  info: {
    main: '#4fc3f7',
  },
  success: {
    main: '#4caf50',
  },
  error: {
    main: '#ef4444',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.65)',
    disabled: 'rgba(255,255,255,0.35)',
    onAccent: '#000000',
  },
  divider: 'rgba(255,255,255,0.12)',
} as const;

export const typographyTokens = {
  fontFamily: {
    sans: "'IBM Plex Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    mono: "'IBM Plex Mono', 'Roboto Mono', 'Courier New', monospace",
  },
  weight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
} as const;

export const radiusTokens = {
  sm: 4,
  md: 8,
  lg: 12,
  pill: 100,
} as const;
