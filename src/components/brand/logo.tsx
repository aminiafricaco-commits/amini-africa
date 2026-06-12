type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

type SizeConfig = { h: number; fs: number; dot: number };

const sizes: Record<string, SizeConfig> = {
  sm: { h: 36, fs: 20, dot: 7 },
  md: { h: 52, fs: 30, dot: 10 },
  lg: { h: 64, fs: 38, dot: 13 },
};

function LogoMark({ s, primary, gold, className }: { s: SizeConfig; primary: string; gold: string; className?: string }) {
  const baseline = s.h / 2 + s.fs * 0.35;
  const aminiW = s.fs * 3.4;
  const dotGap = s.fs * 0.4;
  const dotX = aminiW + dotGap;
  const africaX = dotX + s.dot + dotGap;
  const totalW = africaX + s.fs * 3.8;

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
        letterSpacing="-0.01em"
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
        letterSpacing="0.02em"
      >
        Africa
      </text>
    </svg>
  );
}

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const s = sizes[size];
  const primary = variant === "dark" ? "#0A1628" : "#FFFFFF";
  const gold = "#C5A572";

  return <LogoMark s={s} primary={primary} gold={gold} className={className} />;
}
