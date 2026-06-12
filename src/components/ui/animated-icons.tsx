"use client";

import { motion } from "framer-motion";

const iconWrap = "w-full h-full";

function PulseRing({ cx, cy, r, color = "currentColor" }: { cx: number; cy: number; r: number; color?: string }) {
  return (
    <motion.circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="1"
      animate={{ r: [r, r + 8, r], opacity: [0.4, 0, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} />
  );
}

export function AnimatedAgent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={24} cy={26} r={20} color="currentColor" />
      <motion.g
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <motion.path d="M30 14l-5 5-2-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      </motion.g>
    </svg>
  );
}

export function AnimatedShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={24} cy={24} r={18} color="currentColor" />
      <motion.path d="M24 6L8 12v8c0 10.5 6.5 20.3 16 22 9.5-1.7 16-11.5 16-22v-8l-16-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "24px", originY: "24px" }} />
      <motion.path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="24" cy="24" r="12" fill="currentColor" opacity="0.06"
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.02, 0.06] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedCompass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={24} cy={24} r={18} color="currentColor" />
      <motion.circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "24px" }} />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <motion.g
        animate={{ rotate: [0, 25, 0, -25, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "24px", originY: "24px" }}
      >
        <path d="M24 6l4 14-4 2-4-2 4-14z" fill="currentColor" opacity="0.5" />
        <path d="M24 42l-4-14 4-2 4 2-4 14z" fill="currentColor" opacity="0.2" />
      </motion.g>
    </svg>
  );
}

export function AnimatedClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={24} cy={24} r={18} color="currentColor" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((h) => {
        const angle = (h * 30 - 90) * (Math.PI / 180);
        const inner = h % 3 === 0 ? 14 : 16;
        return (
          <line key={h} x1={24 + inner * Math.cos(angle)} y1={24 + inner * Math.sin(angle)}
            x2={24 + 17 * Math.cos(angle)} y2={24 + 17 * Math.sin(angle)}
            stroke="currentColor" strokeWidth={h % 3 === 0 ? 2 : 1} strokeLinecap="round" />
        );
      })}
      <motion.line x1="24" y1="24" x2="24" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "24px" }} />
      <motion.line x1="24" y1="24" x2="33" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "24px" }} />
      <motion.circle cx="24" cy="24" r="2" fill="currentColor"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={22} cy={22} r={18} color="currentColor" />
      <motion.g
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "22px", originY: "22px" }}
      >
        <circle cx="22" cy="22" r="11" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9 9l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      </motion.g>
      <motion.path d="M30 30l9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      <motion.rect x="16" y="20" width="12" height="2" rx="1" fill="currentColor" opacity="0.25"
        animate={{ x: [16, 20, 16] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      {[20, 24, 28, 32].map((r, i) => (
        <motion.circle key={r} cx="24" cy="28" r={r} fill="none" stroke="currentColor" strokeWidth="0.75"
          animate={{ r: [r, r + 6, r], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }} />
      ))}
      <motion.path d="M24 38s-12-7.5-12-16c0-4.5 3.5-8 8-8 2.5 0 4.5 1.2 6 3 1.5-1.8 3.5-3 6-3 4.5 0 8 3.5 8 8 0 8.5-12 16-12 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "24px", originY: "30px" }} />
    </svg>
  );
}

export function AnimatedGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={24} cy={24} r={18} color="currentColor" />
      <motion.g
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "24px" }}
      >
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="24" cy="24" rx="7" ry="18" stroke="currentColor" strokeWidth="1" fill="none" />
        <ellipse cx="24" cy="24" rx="14" ry="18" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      </motion.g>
      <motion.circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.12"
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.05, 0.12] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedLock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <PulseRing cx={24} cy={30} r={18} color="currentColor" />
      <motion.g
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="14" y="22" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 22v-4c0-4.4 3.6-8 8-8s8 3.6 8 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="30" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      </motion.g>
      <motion.line x1="24" y1="30" x2="24" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      {[18, 22, 26, 30].map((r, i) => (
        <motion.circle key={r} cx="24" cy="22" r={r} fill="none" stroke="currentColor" strokeWidth="0.5"
          animate={{ r: [r, r + 5, r], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25, ease: "easeOut" }} />
      ))}
      <motion.g
        animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        style={{ originX: "24px", originY: "22px" }}
      >
        <path d="M24 4l4 9 10-1.5-7 7.5 1.5 10.5L24 26l-8.5 4.5L17 20l-7-7.5L20 13l4-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  agent: AnimatedAgent,
  shield: AnimatedShield,
  compass: AnimatedCompass,
  clock: AnimatedClock,
  search: AnimatedSearch,
  heart: AnimatedHeart,
  globe: AnimatedGlobe,
  lock: AnimatedLock,
  star: AnimatedStar,
};

export function getAnimatedIcon(name: string) {
  return iconMap[name] || AnimatedStar;
}
