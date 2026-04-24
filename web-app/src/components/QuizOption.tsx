import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { typographyTokens, radiusTokens } from '../tokens';

export type QuizOptionState = 'default' | 'selected' | 'correct' | 'wrong';

export interface QuizOptionProps {
  optionKey: string;
  label: string;
  state: QuizOptionState;
  disabled?: boolean;
  onClick?: () => void;
}

export default function QuizOption({ optionKey, label, state, disabled, onClick }: QuizOptionProps) {
  const theme = useTheme();

  function accentColor(s: QuizOptionState): string {
    switch (s) {
      case 'correct': return theme.palette.success.main;
      case 'wrong': return theme.palette.error.main;
      case 'selected': return theme.palette.primary.main;
      default: return theme.palette.divider;
    }
  }

  function bgColor(s: QuizOptionState): string {
    switch (s) {
      case 'correct': return alpha(theme.palette.success.main, 0.1);
      case 'wrong': return alpha(theme.palette.error.main, 0.1);
      case 'selected': return alpha(theme.palette.primary.main, 0.08);
      default: return theme.palette.background.paper;
    }
  }

  const accent = accentColor(state);
  const bg = bgColor(state);
  const isInteractive = !disabled && state === 'default' || state === 'selected';

  return (
    <Box
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={state === 'selected' || state === 'correct' || state === 'wrong'}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
        width: '100%',
        px: 2,
        py: 1.25,
        gap: 1.5,
        backgroundColor: bg,
        border: `1px solid ${theme.palette.divider}`,
        borderLeft: `4px solid ${accent}`,
        borderRadius: `0 ${radiusTokens.sm}px ${radiusTokens.sm}px 0`,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'transform 150ms ease-out, background-color 150ms ease-out, border-left-color 150ms ease-out',
        userSelect: 'none',
        outline: 'none',
        '&:hover': isInteractive
          ? { transform: 'translateY(-1px)' }
          : {},
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: typographyTokens.fontFamily.mono,
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: accent === theme.palette.divider ? theme.palette.text.secondary : accent,
          minWidth: 20,
          flexShrink: 0,
        }}
      >
        {optionKey}.
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: typographyTokens.fontFamily.sans,
          fontSize: '1rem',
          lineHeight: 1.5,
          color: theme.palette.text.primary,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
