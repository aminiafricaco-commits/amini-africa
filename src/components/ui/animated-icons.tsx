"use client";

import { motion } from "framer-motion";

const iconWrap = "w-full h-full";

export function AnimatedAgent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }} />
      <motion.path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} />
      <motion.path d="M30 14l-5 5-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }} />
      <motion.circle cx="38" cy="8" r="6" fill="currentColor" opacity="0.15"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.08, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M24 6L8 12v8c0 10.5 6.5 20.3 16 22 9.5-1.7 16-11.5 16-22v-8l-16-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }} />
      <motion.path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} />
      <motion.circle cx="24" cy="24" r="16" fill="currentColor" opacity="0.06"
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.03, 0.06] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedCompass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }} />
      <motion.circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <motion.g
        animate={{ rotate: [0, 15, 0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "24px", originY: "24px" }}
      >
        <path d="M24 8l3 10-3 2-3-2 3-10z" fill="currentColor" opacity="0.4" />
        <path d="M24 40l-3-10 3-2 3 2-3 10z" fill="currentColor" opacity="0.2" />
      </motion.g>
    </svg>
  );
}

export function AnimatedClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }} />
      <motion.line x1="24" y1="24" x2="24" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "24px" }} />
      <motion.line x1="24" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ originX: "24px", originY: "24px" }} />
      <motion.circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function AnimatedSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }} />
      <motion.path d="M29 29l9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }} />
      <motion.rect x="14" y="16" width="12" height="2" rx="1" fill="currentColor" opacity="0.3"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
        style={{ originX: "14px" }} />
      <motion.rect x="14" y="20" width="8" height="2" rx="1" fill="currentColor" opacity="0.2"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
        style={{ originX: "14px" }} />
    </svg>
  );
}

export function AnimatedHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M24 40s-14-8.5-14-18c0-5 4-9 9-9 3 0 5.5 1.5 7 3.5 1.5-2 4-3.5 7-3.5 5 0 9 4 9 9 0 9.5-14 18-14 18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }} />
      <motion.circle cx="24" cy="30" r="12" fill="currentColor" opacity="0.06"
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.03, 0.06] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }} />
      <motion.ellipse cx="24" cy="24" rx="10" ry="18" stroke="currentColor" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} />
      <motion.path d="M6 24h36M14 12c0 0 4 6 10 6s10-6 10-6M14 36c0 0 4-6 10-6s10 6 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} />
      <motion.circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.15"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.08, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  );
}

export function AnimatedLock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.rect x="14" y="22" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }} />
      <motion.path d="M16 22v-4c0-4.4 3.6-8 8-8s8 3.6 8 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} />
      <motion.circle cx="24" cy="30" r="3" stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} />
      <motion.line x1="24" y1="30" x2="24" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }} />
    </svg>
  );
}

export function AnimatedStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={`${iconWrap} ${className || ""}`} xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M24 4l5.5 11.2L42 17.3l-9 8.8 2.1 12.4L24 33.1 12.9 38.5 15 26.1l-9-8.8 12.5-2.1L24 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }} />
      <motion.circle cx="24" cy="20" r="10" fill="currentColor" opacity="0.06"
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.02, 0.06] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
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
