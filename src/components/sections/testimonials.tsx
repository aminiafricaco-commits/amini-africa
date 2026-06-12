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
    <section className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,22,40,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(10,22,40,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-48 h-48 rounded-full border border-white/5 animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border border-white/5 animate-float" style={{ animationDelay: "-3s" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="h-3.5 w-3.5 text-white/80" />
            <span className="text-white/80 font-medium text-xs tracking-widest uppercase">Testimonials</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-white/80 mx-auto mb-4 rounded-full" />
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
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-white/80 text-white/80" />
                ))}
              </div>
              <div className="relative">
                <span className="absolute -top-1 -left-1 text-4xl text-white/80/20 font-serif leading-none">&ldquo;</span>
                <p className="text-white/80 leading-relaxed mb-6 italic pl-5">
                  {t.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white/80 text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
