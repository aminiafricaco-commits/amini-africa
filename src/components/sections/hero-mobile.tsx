"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Users, Building2, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/sections/animated-counter";

const metrics = [
  { icon: Users, value: 500, suffix: "+", label: "Clients" },
  { icon: Building2, value: 15, suffix: "+", label: "Countries" },
  { icon: Shield, value: 5, suffix: "+", label: "Years" },
  { icon: Award, value: 98, suffix: "%", label: "Satisfied" },
];

export function MobileHero() {
  return (
    <section className="relative min-h-[90svh] flex items-center overflow-hidden bg-gradient-to-b from-muted to-white">
      <div className="relative w-full px-4 py-16 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 bg-brand-gold/10 rounded-full px-3 py-1 mb-5"
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
          className="font-heading font-bold text-foreground leading-tight mb-4"
        >
          <span className="text-3xl sm:text-4xl block">Your Trusted</span>
          <span className="text-2xl sm:text-3xl text-brand-gold block mt-1">
            Sub-Saharan Partner
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-foreground/90 leading-relaxed mb-8"
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
            className="flex items-center justify-center gap-2 w-full border-2 border-border text-foreground py-4 rounded-xl font-medium text-base active:scale-[0.97] transition-all duration-150 hover:bg-muted"
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
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-border"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-gold/10 shrink-0">
                <m.icon className="h-4 w-4 text-brand-gold" />
              </div>
              <div>
                <p className="text-foreground font-bold text-sm leading-none mb-0.5 font-heading">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </p>
                <p className="text-muted-foreground text-[10px] leading-tight tracking-wide uppercase font-medium">{m.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
