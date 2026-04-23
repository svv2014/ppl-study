// Design tokens for PPL Study — source of truth for all theme values.
// No MUI blue #1976d2. Green reserved for correct/complete semantics only.

// Dark scheme — verbatim from web-app/public/design-lab/variant-a-cockpit.html :root
const darkScheme = {
  background: {
    default: '#071020',       // --bg
    paper: '#0f1f33',         // --surface
    surfaceRaised: '#142a40', // --surface-2
  },
  primary: {
    main: '#f0c040',          // --amber
    muted: 'rgba(240,192,64,0.15)',
    dim: '#8b6f24',           // --amber-dim
  },
  secondary: {
    main: '#e4ecf5',          // --text (warm white for secondary elements)
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
    primary: '#e4ecf5',       // --text
    secondary: '#7a9ab5',     // --muted
    disabled: 'rgba(228,236,245,0.35)',
    onAccent: '#071020',
  },
  divider: '#1a3550',         // --border
} as const;

// Light scheme — derived from Variant A dark palette inversion
// (variant-a-cockpit-light.html was not present in the repo at implementation time)
const lightScheme = {
  background: {
    default: '#f5f8fc',
    paper: '#ffffff',
    surfaceRaised: '#eaf0f9',
  },
  primary: {
    main: '#a05000',          // darkened amber for WCAG AA on white (~5:1)
    muted: 'rgba(160,80,0,0.10)',
    dim: '#d49030',
  },
  secondary: {
    main: '#071020',
  },
  info: {
    main: '#0369a1',
  },
  success: {
    main: '#15803d',
  },
  error: {
    main: '#dc2626',
  },
  text: {
    primary: '#071020',       // inverted from dark bg
    secondary: '#4a6a85',     // inverted from dark muted
    disabled: 'rgba(7,16,32,0.35)',
    onAccent: '#ffffff',
  },
  divider: '#c0d4e8',
} as const;

export const colorTokens = {
  dark: darkScheme,
  light: lightScheme,
  // Backward compat — flat keys default to dark scheme
  ...darkScheme,
} as const;

export const typographyTokens = {
  fontFamily: {
    sans: "'Inter', system-ui, sans-serif",                           // --sans verbatim
    mono: "'SF Mono', 'JetBrains Mono', Consolas, monospace",        // --mono verbatim
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.15em',
    mono: '0.08em',
  },
} as const;

export const radiusTokens = {
  xs: 3,
  sm: 4,
  md: 6,
  lg: 8,
  pill: 100,
} as const;
