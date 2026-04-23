import { useTheme } from '@mui/material/styles';

interface Props {
  width?: number;
  height?: number;
}

/** Compass-rose aviation motif — decorative, aria-hidden */
export default function HeroMotif({ width = 340, height = 340 }: Props) {
  const theme = useTheme();
  const amber = theme.palette.primary.main;

  const cx = 100;
  const cy = 100;
  const outerR = 95;

  const ticks = Array.from({ length: 36 }, (_, i) => {
    const angle = i * 10;
    const rad = ((angle - 90) * Math.PI) / 180;
    const isCardinal = i % 9 === 0;
    const isMajor = i % 3 === 0;
    const innerR = isCardinal ? 74 : isMajor ? 82.5 : 89;
    return {
      x1: cx + outerR * Math.cos(rad),
      y1: cy + outerR * Math.sin(rad),
      x2: cx + innerR * Math.cos(rad),
      y2: cy + innerR * Math.sin(rad),
      isCardinal,
      isMajor,
    };
  });

  const cardinals = [
    { angle: 0, label: 'N' },
    { angle: 90, label: 'E' },
    { angle: 180, label: 'S' },
    { angle: 270, label: 'W' },
  ];

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={width}
      height={height}
      opacity={0.2}
    >
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke={amber} strokeWidth="0.75" />
      <circle cx={cx} cy={cy} r={65} fill="none" stroke={amber} strokeWidth="0.4" />
      <circle cx={cx} cy={cy} r={34} fill="none" stroke={amber} strokeWidth="0.25" />
      {ticks.map(({ x1, y1, x2, y2, isCardinal, isMajor }, i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={amber}
          strokeWidth={isCardinal ? 1 : isMajor ? 0.6 : 0.3}
        />
      ))}
      {cardinals.map(({ angle, label }) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const r = 56.5;
        return (
          <text
            key={label}
            x={cx + r * Math.cos(rad)}
            y={cy + r * Math.sin(rad)}
            textAnchor="middle"
            dominantBaseline="central"
            fill={amber}
            fontSize="10"
            fontWeight="700"
            fontFamily="monospace"
          >
            {label}
          </text>
        );
      })}
      <line x1={cx} y1={cy - 29} x2={cx} y2={cy + 29} stroke={amber} strokeWidth="0.25" />
      <line x1={cx - 29} y1={cy} x2={cx + 29} y2={cy} stroke={amber} strokeWidth="0.25" />
      <circle cx={cx} cy={cy} r={2} fill={amber} />
      {/* Horizon-line accent at 55 % / 58 % of viewBox height */}
      <line x1={0} y1={110} x2={200} y2={110} stroke={amber} strokeWidth="0.75" strokeOpacity={0.3} />
      <line x1={0} y1={116} x2={200} y2={116} stroke={amber} strokeWidth="0.75" strokeOpacity={0.3} />
    </svg>
  );
}
