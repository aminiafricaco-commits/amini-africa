"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amini Africa handled the verification of a property I was investing in back home. Their detailed report and photos gave me complete confidence in my purchase. I could not have done this without them.",
    author: "Michael O.",
    role: "Diaspora Investor, United Kingdom",
    rating: 5,
    initials: "MO",
  },
  {
    quote:
      "The relocation support was exceptional. From finding our apartment to setting up utilities and school research for the kids, Amini Africa made our move seamless.",
    author: "Sarah & David K.",
    role: "Returning Diaspora, Canada",
    rating: 5,
    initials: "SK",
  },
  {
    quote:
      "As an NGO, we needed reliable partners on the ground for our supply chain. Amini Africa vendor verification and monitoring services have been invaluable.",
    author: "Dr. James M.",
    role: "NGO Director, United States",
    rating: 5,
    initials: "JM",
  },
  {
    quote:
      "Their concierge services are world-class. From handling personal errands to coordinating family events, Amini Africa has become our trusted family representative.",
    author: "Chioma A.",
    role: "Business Executive, UAE",
    rating: 5,
    initials: "CA",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,165,114,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-48 h-48 rounded-full border border-white/5 animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border border-white/5 animate-float" style={{ animationDelay: "-3s" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Testimonials</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4 rounded-full" />
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Trusted by diaspora Africans, investors, and organizations worldwide.
          </p>
        </motion.div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div className="relative mb-6">
                <span className="absolute -top-3 -left-1 text-5xl text-brand-gold/20 font-serif leading-none">&ldquo;</span>
                <p className="text-white/80 leading-relaxed text-lg italic pl-6">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-brand-gold w-6" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
