"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, ClipboardList, ClipboardCheck, Layers } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book a Consultation",
    description:
      "Schedule a consultation call to discuss your needs. We will learn about your situation and explain how we can help.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Discuss Requirements",
    description:
      "We will work with you to define scope, timelines, and deliverables. Get a clear plan and transparent pricing.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "We Execute on the Ground",
    description:
      "Our local team gets to work. You receive regular updates, photos, and reports throughout the process.",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Receive Updates & Results",
    description:
      "Get comprehensive reports, verified findings, and completed deliverables. We remain available for follow-up support.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,114,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-1.5 mb-4">
            <Layers className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Process</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Here is how we deliver results for our
            clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-gold/30 to-transparent" />
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-cream to-brand-cream/60 border border-brand-gold/20 mb-6 relative">
                <step.icon className="h-7 w-7 text-brand-gold" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-gold text-secondary text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
