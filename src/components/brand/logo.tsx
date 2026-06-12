type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { h: 32, fs: 18, gap: 0 },
  md: { h: 42, fs: 24, gap: 0 },
  lg: { h: 52, fs: 30, gap: 0 },
};

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const s = sizes[size];
  const primary = variant === "dark" ? "#0A1628" : "#FFFFFF";
  const gold = "#C5A572";

  return (
    <svg
      width={s.fs * 7}
      height={s.h}
      viewBox={`0 0 ${s.fs * 7} ${s.h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ minWidth: s.fs * 7 }}
    >
      <text
        x="0"
        y={s.h / 2 + s.fs * 0.36}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={s.fs}
        fontWeight="700"
        fill={primary}
      >
        Amini
      </text>
      <text
        x={s.fs * 3.9}
        y={s.h / 2 + s.fs * 0.36}
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
        fontSize={s.fs}
        fontWeight="300"
        fill={gold}
      >
        Africa
      </text>
    </svg>
  );
}
