"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getAnimatedIcon } from "@/components/ui/animated-icons";

const trustPoints = [
  { icon: "lock", text: "Pay only $50 for your initial consultation" },
  { icon: "shield", text: "No hidden fees — transparent pricing always" },
  { icon: "globe", text: "Dedicated local representative assigned to you" },
];

const featuredIcons = ["star", "shield", "globe", "heart"];

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/video-call-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 border border-white/20">
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Start Today</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <div className="w-16 h-0.5 bg-white/30 mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
              Take the first step toward confident engagement in Africa. Book a
              consultation and discover how we can be your trusted partner.
            </p>

            <div className="space-y-4 mb-10">
              {trustPoints.map((point) => {
                const IconComponent = getAnimatedIcon(point.icon);
                return (
                  <div key={point.text} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 shrink-0">
                      <IconComponent className="text-brand-gold w-4 h-4" />
                    </div>
                    <span className="text-white/85 text-sm font-medium">{point.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" className="bg-brand-gold text-white hover:bg-brand-gold/90 border-none">
                <Link href="/book-consultation">
                  Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
            className="hidden lg:flex flex-col items-center justify-center gap-4"
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-8 py-8 border border-white/20 w-72">
              <div className="grid grid-cols-2 gap-4">
                {featuredIcons.map((name) => {
                  const IconComponent = getAnimatedIcon(name);
                  return (
                    <div key={name} className="flex items-center justify-center w-full aspect-square rounded-xl bg-black/20 backdrop-blur-sm border border-white/20">
                      <IconComponent className="text-brand-gold w-10 h-10" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-wide">Available 24/7</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
