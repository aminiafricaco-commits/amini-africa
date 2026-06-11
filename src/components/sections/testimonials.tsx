"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amini Africa handled the verification of a property I was investing in back home. Their detailed report and photos gave me complete confidence in my purchase. I couldn't have done this without them.",
    author: "Michael O.",
    role: "Diaspora Investor, United Kingdom",
    rating: 5,
  },
  {
    quote:
      "The relocation support was exceptional. From finding our apartment to setting up utilities and school research for the kids, Amini Africa made our move seamless.",
    author: "Sarah & David K.",
    role: "Returning Diaspora, Canada",
    rating: 5,
  },
  {
    quote:
      "As an NGO, we needed reliable partners on the ground for our supply chain. Amini Africa's vendor verification and monitoring services have been invaluable.",
    author: "Dr. James M.",
    role: "NGO Director, United States",
    rating: 5,
  },
  {
    quote:
      "Their concierge services are world-class. From handling personal errands to coordinating family events, Amini Africa has become our trusted family representative.",
    author: "Chioma A.",
    role: "Business Executive, UAE",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
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
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <Quote className="h-8 w-8 text-brand-gold/50 mb-4" />
              <p className="text-white/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-white">{t.author}</p>
                <p className="text-sm text-white/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
