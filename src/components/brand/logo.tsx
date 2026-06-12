type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const textSizes = {
  sm: { amini: "text-lg", africa: "text-base", bar: "w-5 h-px" },
  md: { amini: "text-2xl", africa: "text-xl", bar: "w-8 h-0.5" },
  lg: { amini: "text-3xl", africa: "text-2xl", bar: "w-10 h-0.5" },
};

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const s = textSizes[size];
  const aminiColor = variant === "dark" ? "text-[#0A1628]" : "text-white";
  const goldColor = "text-[#C5A572]";
  const barColor = variant === "dark" ? "bg-[#C5A572]" : "bg-[#C5A572]";

  return (
    <div className={`inline-flex flex-col items-start leading-none ${className}`}>
      <span className={`${s.amini} ${aminiColor} font-heading font-bold tracking-tight`}>
        AMINI
      </span>
      <div className={`${s.bar} ${barColor} rounded-full my-0.5`} />
      <span className={`${s.africa} ${goldColor} font-heading font-light tracking-wider`}>
        AFRICA
      </span>
    </div>
  );
}
