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
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/business-meeting.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/95 via-brand-gold/85 to-amber-700/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/10 animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border border-white/10 animate-float" style={{ animationDelay: "-4s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full px-4 py-1.5 mb-5">
              <Shield className="h-3.5 w-3.5 text-secondary" />
              <span className="text-secondary font-medium text-xs tracking-widest uppercase">Start Today</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <div className="w-16 h-0.5 bg-secondary/30 mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-8 max-w-xl">
              Take the first step toward confident engagement in Africa. Book a
              consultation and discover how we can be your trusted partner.
            </p>

            <div className="space-y-3 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-secondary/80 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="xl"
                className="bg-secondary text-white hover:bg-secondary/90 font-semibold shadow-xl shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Link href="/book-consultation">
                  Book Your Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-secondary/40 text-secondary hover:bg-secondary hover:text-white hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
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

          {/* Right: visual decoration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-2 border-secondary/20 animate-float" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-2 border-secondary/15 animate-float" style={{ animationDelay: "-2s" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-secondary/10 backdrop-blur-sm flex items-center justify-center">
                <Shield className="h-12 w-12 text-secondary/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
