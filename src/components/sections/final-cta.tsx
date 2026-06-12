"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield, CheckCircle } from "lucide-react";

const trustPoints = [
  "Pay only $50 for your initial consultation",
  "No hidden fees — transparent pricing always",
  "Dedicated local representative assigned to you",
];

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-muted">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(107,114,128,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-1.5 mb-5">
              <Shield className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Start Today</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <div className="w-16 h-0.5 bg-primary/30 mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-8 max-w-xl">
              Take the first step toward confident engagement in Africa. Book a
              consultation and discover how we can be your trusted partner.
            </p>

            <div className="space-y-3 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/85 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl">
                <Link href="/book-consultation">
                  Book Your Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link
                  href="https://wa.me/254743634581?text=Hello! I would like to learn more about Amini Africa services."
                  target="_blank"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-2 border-border animate-float" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-2 border-border/60 animate-float" style={{ animationDelay: "-2s" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Shield className="h-12 w-12 text-foreground/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
