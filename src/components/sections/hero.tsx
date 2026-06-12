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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-muted to-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
            <span className="text-primary font-medium text-xs tracking-widest uppercase">
              Trusted Across Sub-Saharan Africa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-foreground leading-[1.05] mb-6"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
              Your Trusted
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground/70 font-medium mt-2">
              Sub-Saharan Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed"
          >
            Trusted local representation, property verification, procurement, and
            business support for diaspora Africans, investors, and organizations
            across <span className="text-foreground font-medium">Sub-Saharan Africa</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button asChild size="xl">
              <Link href="/book-consultation">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
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
                className="group relative bg-white rounded-2xl px-5 py-4 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-500"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
                    <m.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-2xl leading-none mb-0.5 font-heading">
                      <AnimatedCounter value={m.value} suffix={m.suffix} />
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-medium tracking-wide uppercase">{m.label}</p>
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
