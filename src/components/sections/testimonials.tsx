"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

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

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="h-3.5 w-3.5 text-primary" />
            <span className="text-primary font-medium text-xs tracking-widest uppercase">Testimonials</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-4 rounded-full" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Trusted by diaspora Africans, investors, and organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary/40 text-primary/40" />
                ))}
              </div>
              <div className="relative">
                <span className="absolute -top-1 -left-1 text-4xl text-foreground/10 font-serif leading-none">&ldquo;</span>
                <p className="text-foreground/80 leading-relaxed mb-6 italic pl-5">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
