"use client";

import { motion } from "framer-motion";
import { Calendar, MessageSquare, ClipboardList, ClipboardCheck, Layers } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book a Consultation",
    body: "Schedule a 30-minute call. We learn about your needs, explain how we work, and outline next steps.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Define the Scope",
    body: "We work with you to define deliverables, timelines, and pricing. You get a clear plan with no surprises.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "We Execute on the Ground",
    body: "Our local team gets to work. You receive regular updates, photos, and progress reports throughout.",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Deliver Results",
    body: "You receive comprehensive reports and completed deliverables. We remain available for follow-up support.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,22,40,0.03),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <span className="text-primary font-medium text-xs tracking-widest uppercase">Process</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Here is how we deliver results for our clients.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative text-center lg:text-left"
              >
                {/* Desktop connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white to-white/60 border-2 border-primary/20 mb-6 relative mx-auto lg:mx-0 group-hover:border-primary/40 transition-colors">
                  <step.icon className="h-8 w-8 text-primary" />
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md ring-2 ring-white">
                    {step.number}
                  </span>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-8 bg-gradient-to-b from-primary/30 to-transparent mx-auto my-2" />
                )}

                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
