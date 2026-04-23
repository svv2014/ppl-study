import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import PlaylistPlayer from '../components/PlaylistPlayer';
import { getAllLessons, getLessonsByTopic } from '../lib/lesson-loader';
import { TOPICS, TOPIC_LABELS, CURRICULUM } from '../lib/curriculum';
import type { Lesson } from '../lib/types';
import { CURATED_PLAYLISTS } from '../data/curated-playlists';
import { getUserPlaylists } from '../lib/user-playlists';
import { typographyTokens } from '../tokens';
import { useStickyPlayer } from '../context/StickyPlayerContext';

// ── Static metadata per topic ──────────────────────────────────────────────

const TOPIC_CODES: Record<string, string> = {
  'air-law': 'AL',
  'navigation': 'NAV',
  'meteorology': 'MET',
  'general-knowledge': 'GK',
};

const TOPIC_TAGLINES: Record<string, string> = {
  'air-law': 'CARs · Airspace · Rules of the Air',
  'navigation': 'Charts · Dead Reckoning · Cross-Country',
  'meteorology': 'METAR · TAF · GFA · Weather Decision-Making',
  'general-knowledge': 'Systems · Instruments · Weight & Balance',
};

const TOPIC_COVER_ANGLES: Record<string, number> = {
  'air-law': 135,
  'navigation': 45,
  'meteorology': 225,
  'general-knowledge': 315,
};

// ── §5.4 Section header ────────────────────────────────────────────────────
// ◆ TITLE ──────────────────────────── META

function SectionHeader({ title, meta }: { title: string; meta?: string }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mt: 5,
        mb: 2,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontFamily: typographyTokens.fontFamily.mono,
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: theme.palette.primary.main,
          whiteSpace: 'nowrap',
          lineHeight: 1.4,
        }}
      >
        ◆ {title}
      </Typography>
      <Box
        aria-hidden="true"
        sx={{
          flex: 1,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      />
      {meta && (
        <Typography
          component="span"
          sx={{
            fontFamily: typographyTokens.fontFamily.mono,
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap',
            lineHeight: 1.4,
          }}
        >
          {meta}
        </Typography>
      )}
    </Box>
  );
}

// ── Playlist card cover SVG ────────────────────────────────────────────────

function PlaylistCover({
  code,
  angle,
  primary,
  bg,
}: {
  code: string;
  angle: number;
  primary: string;
  bg: string;
}) {
  const safeId = `pg-${code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  const rad = (angle * Math.PI) / 180;
  const x2 = Math.round(50 + 50 * Math.cos(rad));
  const y2 = Math.round(50 + 50 * Math.sin(rad));

  return (
    <svg
      width="100%"
      height="80"
      viewBox="0 0 300 80"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id={safeId} x1="0%" y1="0%" x2={`${x2}%`} y2={`${y2}%`}>
          <stop offset="0%" stopColor={primary} stopOpacity="0.30" />
          <stop offset="100%" stopColor={primary} stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="300" height="80" fill={bg} />
      <rect width="300" height="80" fill={`url(#${safeId})`} />
      <text
        x="16"
        y="50"
        dominantBaseline="middle"
        fontFamily="'SF Mono', 'JetBrains Mono', Consolas, monospace"
        fontSize="20"
        fontWeight="700"
        fill={primary}
        letterSpacing="3"
        opacity="0.65"
      >
        {code}
      </text>
    </svg>
  );
}

// ── Duration formatter ─────────────────────────────────────────────────────

function fmtDuration(min: number): string {
  if (min <= 0) return '–';
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h > 0) return m > 0 ? `${h}H ${m}M` : `${h}H`;
  return `${m}M`;
}

// ── Unified card ───────────────────────────────────────────────────────────

interface CardEntry {
  id: string;
  name: string;
  tagline?: string;
  badge?: string;
  lessonCount: number | null;
  durationMin: number;
  href: string;
  coverCode: string;
  coverAngle: number;
}

function PlaylistCard({ entry }: { entry: CardEntry }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const count =
    entry.lessonCount === null ? '–' : `${entry.lessonCount} LESSON${entry.lessonCount !== 1 ? 'S' : ''}`;

  return (
    <ButtonBase
      onClick={() => navigate(entry.href)}
      aria-label={entry.name}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        textAlign: 'left',
        width: '100%',
        minHeight: 48,
        borderRadius: `${theme.shape.borderRadius}px`,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        overflow: 'hidden',
        transition: 'border-color 150ms ease-out, transform 150ms ease-out',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          transform: 'translateY(-1px)',
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }}
    >
      {/* Cover */}
      <PlaylistCover
        code={entry.coverCode}
        angle={entry.coverAngle}
        primary={theme.palette.primary.main}
        bg={theme.palette.background.surfaceRaised}
      />

      {/* Content */}
      <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {entry.badge && (
          <Typography
            component="span"
            sx={{
              display: 'block',
              fontFamily: typographyTokens.fontFamily.mono,
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: theme.palette.primary.main,
              mb: 0.5,
            }}
          >
            {entry.badge}
          </Typography>
        )}

        <Typography
          sx={{
            fontSize: '0.9375rem',
            fontWeight: 600,
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
            color: theme.palette.text.primary,
            mb: entry.tagline ? 0.5 : 0,
          }}
        >
          {entry.name}
        </Typography>

        {entry.tagline && (
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: theme.palette.text.secondary,
              lineHeight: 1.5,
              mb: 1.5,
            }}
          >
            {entry.tagline}
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 'auto',
            pt: entry.tagline ? 0 : 1,
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: typographyTokens.fontFamily.mono,
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: theme.palette.text.secondary,
            }}
          >
            {count}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: typographyTokens.fontFamily.mono,
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: theme.palette.text.secondary,
            }}
          >
            {fmtDuration(entry.durationMin)}
          </Typography>
        </Box>
      </Box>
    </ButtonBase>
  );
}

// ── Card grid ──────────────────────────────────────────────────────────────

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@media (min-width: 760px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
}

// ── Empty state ────────────────────────────────────────────────────────────

function EmptyState({ message }: { message: string }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: `${theme.shape.borderRadius}px`,
        color: theme.palette.text.secondary,
      }}
    >
      <Typography
        sx={{
          fontFamily: typographyTokens.fontFamily.mono,
          fontSize: '0.6875rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        ◌ {message}
      </Typography>
    </Box>
  );
}

// ── New playlist CTA card ──────────────────────────────────────────────────

function NewPlaylistCard() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() => navigate('/playlist/new')}
      aria-label="Create new playlist"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        minHeight: 160,
        borderRadius: `${theme.shape.borderRadius}px`,
        border: `1px dashed ${theme.palette.divider}`,
        backgroundColor: 'transparent',
        gap: 1,
        transition: 'border-color 150ms ease-out',
        '&:hover': {
          borderColor: theme.palette.primary.main,
        },
        '&:focus-visible': {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }}
    >
      <Typography
        component="span"
        sx={{
          fontSize: '1.5rem',
          lineHeight: 1,
          color: theme.palette.primary.main,
          opacity: 0.7,
        }}
      >
        +
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: typographyTokens.fontFamily.mono,
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: theme.palette.text.secondary,
        }}
      >
        New Playlist
      </Typography>
    </ButtonBase>
  );
}

// ── Library index (no topic param) ────────────────────────────────────────

function PlaylistLibrary() {
  // Section 1: Topic playlists
  const topicEntries: CardEntry[] = TOPICS.map((t) => {
    const count = CURRICULUM.filter((s) => s.topic === t).length;
    return {
      id: t,
      name: TOPIC_LABELS[t],
      tagline: TOPIC_TAGLINES[t],
      lessonCount: count,
      durationMin: count * 20,
      href: `/playlist/${t}`,
      coverCode: TOPIC_CODES[t],
      coverAngle: TOPIC_COVER_ANGLES[t],
    };
  });

  // Section 2: Curated playlists
  const curatedEntries: CardEntry[] = CURATED_PLAYLISTS.map((p) => ({
    id: p.id,
    name: p.name,
    tagline: p.tagline,
    badge: 'CURATED',
    lessonCount: p.lessonIds.length,
    durationMin: p.lessonIds.length * 20,
    href: `/playlist/curated/${p.id}`,
    coverCode: p.id.slice(0, 4).toUpperCase(),
    coverAngle: 90,
  }));

  // Section 3: User playlists
  const userPlaylists = getUserPlaylists();
  const userEntries: CardEntry[] = userPlaylists.map((p) => ({
    id: p.id,
    name: p.name,
    lessonCount: p.lessonIds.length,
    durationMin: p.lessonIds.length * 20,
    href: `/playlist/user/${p.id}`,
    coverCode: p.name.slice(0, 3).toUpperCase(),
    coverAngle: 180,
  }));

  // Section 4: Smart playlists (static entries)
  const smartEntries: CardEntry[] = [
    {
      id: 'smart-weakest',
      name: 'Weakest Topics',
      tagline: 'Lessons where your quiz scores need the most work',
      badge: 'ADAPTIVE',
      lessonCount: null,
      durationMin: 0,
      href: '/playlist/smart/weakest',
      coverCode: 'WEAK',
      coverAngle: 225,
    },
    {
      id: 'smart-due',
      name: 'Due for Review',
      tagline: 'Spaced repetition — lessons due today',
      badge: 'SCHEDULED',
      lessonCount: null,
      durationMin: 0,
      href: '/playlist/smart/due',
      coverCode: 'DUE',
      coverAngle: 45,
    },
  ];

  return (
    <Container maxWidth="lg" id="main-content" tabIndex={-1} sx={{ py: 4, px: { xs: 2, sm: 3 } }}>
      {/* Page title */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 0.5,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
          letterSpacing: '-0.015em',
        }}
      >
        Playlist Library
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
        Study by topic, follow a curated path, or build your own.
      </Typography>

      {/* §1 — Topic playlists */}
      <SectionHeader
        title="Topic Playlists"
        meta={`${topicEntries.length} PLAYLISTS`}
      />
      <CardGrid>
        {topicEntries.map((entry) => (
          <PlaylistCard key={entry.id} entry={entry} />
        ))}
      </CardGrid>

      {/* §2 — Curated playlists */}
      <SectionHeader
        title="Curated"
        meta={curatedEntries.length > 0 ? `${curatedEntries.length} PLAYLISTS` : undefined}
      />
      {curatedEntries.length === 0 ? (
        <EmptyState message="No curated playlists available yet" />
      ) : (
        <CardGrid>
          {curatedEntries.map((entry) => (
            <PlaylistCard key={entry.id} entry={entry} />
          ))}
        </CardGrid>
      )}

      {/* §3 — Your playlists */}
      <SectionHeader
        title="Your Playlists"
        meta={userEntries.length > 0 ? `${userEntries.length} PLAYLISTS` : undefined}
      />
      {userEntries.length === 0 ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            '@media (min-width: 760px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          <NewPlaylistCard />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            '@media (min-width: 760px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {userEntries.map((entry) => (
            <PlaylistCard key={entry.id} entry={entry} />
          ))}
          <NewPlaylistCard />
        </Box>
      )}

      {/* §4 — Smart playlists */}
      <SectionHeader
        title="Smart"
        meta={`${smartEntries.length} PLAYLISTS`}
      />
      <CardGrid>
        {smartEntries.map((entry) => (
          <PlaylistCard key={entry.id} entry={entry} />
        ))}
      </CardGrid>

      {/* Bottom padding for mobile nav */}
      <Box sx={{ pb: 4 }} />
    </Container>
  );
}

// ── Topic playlist view ────────────────────────────────────────────────────

interface TopicPlaylistProps {
  topic: string;
  lessons: ReturnType<typeof getLessonsByTopic>;
  setLessons: (lessons: ReturnType<typeof getLessonsByTopic>) => void;
}

function TopicPlaylist({ topic, lessons, setLessons }: TopicPlaylistProps) {
  useEffect(() => {
    setLessons(lessons);
    // No cleanup: lessons persist in context so StickyPlayerBar stays visible
    // when the user navigates away. A subsequent TopicPlaylist mount will replace
    // them via setLessons; explicit clear only happens on app unmount.
  }, [topic]); // eslint-disable-line react-hooks/exhaustive-deps

  if (lessons.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          {TOPIC_LABELS[topic] ?? topic} — Playlist
        </Typography>
        <Typography color="text.secondary">
          No audio lessons are available for this topic yet.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {TOPIC_LABELS[topic] ?? topic} — Playlist
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        {lessons.length} lesson{lessons.length !== 1 ? 's' : ''} queued — use the player bar at the bottom to play, skip, and control speed.
      </Typography>
    </Container>
  );
}

// ── Route entry point ──────────────────────────────────────────────────────

export default function Playlist() {
  const { topic, id } = useParams<{ topic?: string; id?: string }>();
  const { setLessons } = useStickyPlayer();
  const navigate = useNavigate();

  if (id !== undefined) {
    const playlist = CURATED_PLAYLISTS.find((p) => p.id === id);

    if (!playlist) {
      return (
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h4" gutterBottom>
            Playlist Not Found
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            No curated playlist with id "{id}" exists.
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/playlist')}>
            Back to Playlists
          </Button>
        </Container>
      );
    }

    const allLessons = getAllLessons();
    const lessons: Lesson[] = playlist.lessonIds
      .map((lid) => allLessons.find((l) => l.id === lid))
      .filter((l): l is Lesson => l !== undefined);

    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          {playlist.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {playlist.tagline}
        </Typography>
        {lessons.length === 0 ? (
          <Typography color="text.secondary">
            No audio lessons are available for this playlist yet.
          </Typography>
        ) : (
          <PlaylistPlayer lessons={lessons} />
        )}
      </Container>
    );
  }

  if (topic) {
    const lessons = getLessonsByTopic(topic).filter(
      (l) => l.status !== 'planning' && l.audio !== null,
    );

    return <TopicPlaylist topic={topic} lessons={lessons} setLessons={setLessons} />;
  }

  return <PlaylistLibrary />;
}
