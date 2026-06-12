"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Building2, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/sections/animated-counter";

const metrics = [
  { icon: Users, value: 500, suffix: "+", label: "Clients Served" },
  { icon: Building2, value: 15, suffix: "+", label: "African Countries" },
  { icon: Shield, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')", y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-secondary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,147,42,0.25),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,147,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,147,42,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-brand-gold/10 animate-float" />
      <div className="absolute bottom-40 right-1/3 w-48 h-48 rounded-full border border-brand-gold/10 animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-brand-gold/5 blur-2xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">
              Trusted Across Sub-Saharan Africa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-white leading-[1.05] mb-6"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
              Your Trusted
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-gold font-medium mt-2">
              Sub-Saharan Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Trusted local representation, property verification, procurement, and
            business support for diaspora Africans, investors, and organizations
            across <span className="text-white font-medium">Sub-Saharan Africa</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button asChild size="xl" variant="gold" className="group">
              <Link href="/book-consultation">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="gold-outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/40">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/[0.06] hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 shrink-0 group-hover:bg-brand-gold/20 transition-all duration-500">
                    <m.icon className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl leading-none mb-0.5 font-heading">
                      <AnimatedCounter value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="text-white/40 text-xs leading-tight font-medium tracking-wide uppercase">{m.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
