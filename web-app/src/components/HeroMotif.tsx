/** Heading-rose aviation motif — decorative, aria-hidden */
export default function HeroMotif() {
  const cx = 200;
  const cy = 200;
  const outerR = 190;

  const ticks = Array.from({ length: 36 }, (_, i) => {
    const angle = i * 10;
    const rad = ((angle - 90) * Math.PI) / 180;
    const isCardinal = i % 9 === 0;
    const isMajor = i % 3 === 0;
    const innerR = isCardinal ? 148 : isMajor ? 165 : 178;
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
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    >
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="#f5a623" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={130} fill="none" stroke="#f5a623" strokeWidth="0.75" />
      <circle cx={cx} cy={cy} r={68} fill="none" stroke="#f5a623" strokeWidth="0.5" />
      {ticks.map(({ x1, y1, x2, y2, isCardinal, isMajor }, i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#f5a623"
          strokeWidth={isCardinal ? 2 : isMajor ? 1.2 : 0.6}
        />
      ))}
      {cardinals.map(({ angle, label }) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const r = 113;
        return (
          <text
            key={label}
            x={cx + r * Math.cos(rad)}
            y={cy + r * Math.sin(rad)}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#f5a623"
            fontSize="20"
            fontWeight="700"
            fontFamily="monospace"
          >
            {label}
          </text>
        );
      })}
      <line x1={cx} y1={cy - 58} x2={cx} y2={cy + 58} stroke="#f5a623" strokeWidth="0.5" />
      <line x1={cx - 58} y1={cy} x2={cx + 58} y2={cy} stroke="#f5a623" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={4} fill="#f5a623" />
    </svg>
  );
}
