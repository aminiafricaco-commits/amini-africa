"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";

const trustItems = [
  "Verified Processes",
  "Professional Reporting",
  "Local Expertise",
  "Transparent Communication",
  "Reliable Execution",
  "Accountability",
];

export function MobileHero() {
  return (
    <section className="relative min-h-[90svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.12),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-gold/40 via-brand-gold to-brand-gold/40" />

      <div className="relative w-full px-4 py-20 mt-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-brand-gold font-semibold text-xs tracking-[0.2em] uppercase mb-4"
        >
          Your Trusted Sub-Saharan Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
        >
          Your Trusted
          <br />
          <span className="text-brand-gold">Sub-Saharan</span> Partner
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-white/70 leading-relaxed mb-8"
        >
          Supporting diaspora Africans, investors, businesses, and families
          through trusted local representation, verification, procurement,
          relocation, and business support services across Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 mb-10"
        >
          <Link
            href="/book-consultation"
            className="flex items-center justify-center gap-2 w-full bg-brand-gold text-secondary py-4 rounded-xl font-semibold text-base active:scale-[0.97] transition-all duration-150 hover:shadow-lg hover:shadow-brand-gold/30"
          >
            Book a Consultation <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="https://wa.me/254743634581"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full border-2 border-white/20 text-white py-4 rounded-xl font-medium text-base active:scale-[0.97] transition-all duration-150 hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-2"
        >
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white/50 text-xs bg-white/5 backdrop-blur-sm rounded-lg px-2.5 py-2 border border-white/5"
            >
              <CheckCircle className="h-3.5 w-3.5 text-brand-gold shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
