"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  SearchX,
  DollarSign,
  Heart,
  MapPin,
  UserCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: UserCheck,
    title: "Dedicated Local Representative",
    description:
      "Every client gets a personal representative who knows the local landscape and advocates for your interests.",
  },
  {
    icon: Shield,
    title: "Thorough Due Diligence",
    description:
      "Rigorous verification and fraud prevention to protect your investments and give you complete confidence.",
  },
  {
    icon: MapPin,
    title: "Deep Local Expertise",
    description:
      "Insider knowledge of markets, regulations, and business practices across Sub-Saharan Africa.",
  },
  {
    icon: Clock,
    title: "Save Time & Money",
    description:
      "Eliminate unnecessary travel. We handle everything on the ground so you don't have to.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,147,42,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,147,42,0.04),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: heading + intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 rounded-full px-4 py-1.5 mb-5">
              <Star className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Why Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-5 leading-tight">
              Why Choose
              <br />
              <span className="text-brand-gold">Amini Africa?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Operating across Africa from abroad comes with real risks — fraud,
              misinformation, logistical headaches. We eliminate those risks by
              being your trusted eyes and ears on the ground.
            </p>
            <Button asChild variant="gold" size="lg" className="group">
              <Link href="/book-consultation">
                Start Your Journey <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: benefit cards in 2x2 grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold/15 to-brand-cream border border-brand-gold/20 mb-4 group-hover:from-brand-gold/25 group-hover:scale-105 transition-all duration-300">
                  <reason.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg text-secondary mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
