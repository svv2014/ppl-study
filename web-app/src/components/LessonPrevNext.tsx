import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { Lesson } from '../lib/types';

interface LessonPrevNextProps {
  prev: Lesson | null;
  next: Lesson | null;
  variant: 'compact' | 'full';
}

export default function LessonPrevNext({ prev, next, variant }: LessonPrevNextProps) {
  const navigate = useNavigate();

  if (variant === 'compact') {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        {prev ? (
          <Button
            variant="outlined"
            size="small"
            startIcon={<ArrowBackIcon fontSize="small" />}
            onClick={() => navigate(`/lessons/${prev.topic}/${prev.slug}`)}
            title={prev.title}
            aria-label={`Previous lesson: ${prev.title}`}
            sx={{
              minHeight: 48,
              minWidth: 48,
              px: 1.5,
              borderRadius: '3px',
              fontFamily: "'SF Mono', 'JetBrains Mono', Consolas, monospace",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              justifyContent: 'flex-start',
              flexShrink: 0,
              maxWidth: { xs: '50%', md: 'none' },
              overflow: 'hidden',
              '& .MuiButton-startIcon': { flexShrink: 0 },
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                overflow: 'hidden',
              }}
            >
              <Box component="span" sx={{ flexShrink: 0 }}>
                {prev.id}
              </Box>
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', md: 'inline' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textTransform: 'none',
                  letterSpacing: 'normal',
                  fontSize: '0.75rem',
                  color: 'text.secondary',
                }}
              >
                {prev.title}
              </Box>
            </Box>
          </Button>
        ) : (
          <Box sx={{ minWidth: 48, minHeight: 48 }} />
        )}

        {next ? (
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            onClick={() => navigate(`/lessons/${next.topic}/${next.slug}`)}
            title={next.title}
            aria-label={`Next lesson: ${next.title}`}
            sx={{
              minHeight: 48,
              minWidth: 48,
              px: 1.5,
              borderRadius: '3px',
              fontFamily: "'SF Mono', 'JetBrains Mono', Consolas, monospace",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              justifyContent: 'flex-end',
              flexShrink: 0,
              maxWidth: { xs: '50%', md: 'none' },
              overflow: 'hidden',
              '& .MuiButton-endIcon': { flexShrink: 0 },
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                overflow: 'hidden',
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', md: 'inline' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  textTransform: 'none',
                  letterSpacing: 'normal',
                  fontSize: '0.75rem',
                  color: 'text.secondary',
                }}
              >
                {next.title}
              </Box>
              <Box component="span" sx={{ flexShrink: 0 }}>
                {next.id}
              </Box>
            </Box>
          </Button>
        ) : (
          <Box sx={{ minWidth: 48, minHeight: 48 }} />
        )}
      </Box>
    );
  }

  // full variant — the existing bottom row
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}
    >
      {prev ? (
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(`/lessons/${prev.topic}/${prev.slug}`)}
          title={prev.title}
          aria-label={`Previous lesson: ${prev.title}`}
          sx={{
            minHeight: 48,
            flex: '1 1 0',
            minWidth: 0,
            justifyContent: 'flex-start',
            overflow: 'hidden',
            '& .MuiButton-startIcon': { flexShrink: 0 },
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {prev.title}
          </Box>
        </Button>
      ) : (
        <Box sx={{ flex: '1 1 0' }} />
      )}

      {next ? (
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate(`/lessons/${next.topic}/${next.slug}`)}
          title={next.title}
          aria-label={`Next lesson: ${next.title}`}
          sx={{
            minHeight: 48,
            flex: '1 1 0',
            minWidth: 0,
            justifyContent: 'flex-end',
            overflow: 'hidden',
            '& .MuiButton-endIcon': { flexShrink: 0 },
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {next.title}
          </Box>
        </Button>
      ) : (
        <Box sx={{ flex: '1 1 0' }} />
      )}
    </Box>
  );
}
