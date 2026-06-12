type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { h: 28, fs: 15, gap: 4, dot: 3 },
  md: { h: 36, fs: 20, gap: 6, dot: 4 },
  lg: { h: 44, fs: 26, gap: 8, dot: 5 },
};

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const s = sizes[size];
  const navy = variant === "dark" ? "#0A1628" : "#FFFFFF";
  const gold = "#C5A572";

  return (
    <svg
      width={s.fs * 8 + s.gap * 3}
      height={s.h}
      viewBox={`0 0 ${s.fs * 8 + s.gap * 3} ${s.h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ minWidth: s.fs * 8 + s.gap * 3 }}
    >
      <rect
        x={s.gap}
        y={s.h / 2 - s.dot / 2}
        width={s.dot}
        height={s.dot}
        rx={s.dot * 0.2}
        fill={gold}
        transform={`rotate(45, ${s.gap + s.dot / 2}, ${s.h / 2})`}
      />
      <text
        x={s.gap * 2 + s.dot * 2}
        y={s.h / 2 + s.fs * 0.36}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={s.fs}
        fontWeight="700"
        fill={navy}
      >
        AMINI
      </text>
      <text
        x={s.gap * 2 + s.dot * 2 + s.fs * 4.5}
        y={s.h / 2 + s.fs * 0.36}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={s.fs}
        fontWeight="300"
        fill={gold}
      >
        AFRICA
      </text>
    </svg>
  );
}
