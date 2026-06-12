"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-secondary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.2),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Decorative gold circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-brand-gold/10 animate-float" />
      <div className="absolute bottom-40 right-1/3 w-40 h-40 rounded-full border border-brand-gold/10 animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/3 left-10 w-20 h-20 rounded-full bg-brand-gold/5 blur-xl" />

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
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Eyes & Ears
            <br />
            <span className="text-brand-gold">On the Ground</span> in Africa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            We provide trusted local representation, property verification,
            procurement, and business support for diaspora Africans, investors,
            and organizations across Sub-Saharan Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button asChild size="xl" variant="gold">
              <Link href="/book-consultation">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3.5 border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <m.icon className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none mb-0.5">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </p>
                  <p className="text-white/50 text-xs leading-tight">{m.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
