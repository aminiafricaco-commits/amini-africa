type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const ratio = 1.4;

const sizes = {
  sm: { h: Math.round(40 * ratio), fs: Math.round(22 * ratio), gap: 6, dot: 8 },
  md: { h: Math.round(60 * ratio), fs: Math.round(34 * ratio), gap: 8, dot: 12 },
  lg: { h: Math.round(76 * ratio), fs: Math.round(44 * ratio), gap: 10, dot: 16 },
};

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const s = sizes[size];
  const primary = variant === "dark" ? "#0A1628" : "#FFFFFF";
  const gold = "#C5A572";
  const baseline = s.h / 2 + s.fs * 0.36;
  const ch = Math.round(s.fs * 0.62);
  const aminiChars = 5;
  const africaChars = 6;
  const aminiW = Math.round(ch * aminiChars);
  const africaW = Math.round(ch * africaChars);
  const dotX = aminiW + s.gap;
  const africaX = dotX + s.dot + s.gap;
  const totalW = africaX + africaW;

  return (
    <svg
      width={totalW}
      height={s.h}
      viewBox={`0 0 ${totalW} ${s.h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ minWidth: totalW }}
    >
      <text
        x="0"
        y={baseline}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={s.fs}
        fontWeight="700"
        fill={primary}
        style={{ letterSpacing: "-0.03em" }}
      >
        Amini
      </text>
      <rect
        x={dotX}
        y={s.h / 2 - s.dot / 2}
        width={s.dot}
        height={s.dot}
        rx={s.dot * 0.22}
        fill={gold}
        transform={`rotate(45, ${dotX + s.dot / 2}, ${s.h / 2})`}
      />
      <text
        x={africaX}
        y={baseline}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={s.fs}
        fontWeight="400"
        fill={gold}
        style={{ letterSpacing: "-0.01em" }}
      >
        Africa
      </text>
    </svg>
  );
}
