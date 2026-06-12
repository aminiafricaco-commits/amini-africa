"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { getAnimatedIcon } from "@/components/ui/animated-icons";

const metrics = [
  { icon: "agent", value: 500, suffix: "+", label: "Clients" },
  { icon: "globe", value: 15, suffix: "+", label: "Countries" },
  { icon: "shield", value: 5, suffix: "+", label: "Years" },
  { icon: "star", value: 98, suffix: "%", label: "Satisfied" },
];

export function MobileHero() {
  return (
    <section className="relative min-h-[80svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-2.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      <div className="relative w-full px-4 py-16 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-pulse" />
          <span className="text-brand-gold font-medium text-[10px] tracking-[0.15em] uppercase">
            Trusted Across Africa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-white leading-tight mb-4"
        >
          <span className="text-2xl sm:text-3xl block">Your Trusted</span>
          <span className="text-xl sm:text-2xl text-brand-gold block mt-1">
            Sub-Saharan Partner
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-white/80 leading-relaxed mb-8"
        >
          Trusted local representation, property verification, procurement, and
          business support for diaspora Africans across Sub-Saharan Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 mb-10"
        >
          <Link
            href="/book-consultation"
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-base active:scale-[0.97] transition-all duration-150 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            Book a Consultation <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="https://wa.me/254743634581"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full border-2 border-white/30 text-white/90 py-4 rounded-xl font-medium text-base active:scale-[0.97] transition-all duration-150 hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-2.5"
        >
          {metrics.map((m) => {
            const IconComponent = getAnimatedIcon(m.icon);
            return (
              <div
                key={m.label}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-white/20"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 shrink-0">
                  <IconComponent className="text-brand-gold w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none mb-0.5 font-heading">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="text-white/70 text-[10px] leading-tight tracking-wide uppercase font-medium">{m.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
