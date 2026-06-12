"use client";

import { motion } from "framer-motion";
import { Users, Building2, Heart, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const segments = [
  {
    icon: Users,
    title: "Diaspora Africans",
    description:
      "Kenyans and Africans living abroad who need trusted representation for property, family, and business matters back home.",
    stats: "5M+ diaspora Africans in the diaspora",
  },
  {
    icon: Globe,
    title: "International Investors",
    description:
      "Global investors seeking verified opportunities, due diligence, and reliable local partnerships across African markets.",
    stats: "$90B+ annual diaspora remittances to Africa",
  },
  {
    icon: Building2,
    title: "Businesses & NGOs",
    description:
      "Organizations requiring supply chain verification, market research, compliance support, and operational assistance.",
    stats: "54 countries, 1.4B people served",
  },
  {
    icon: Heart,
    title: "Families & Individuals",
    description:
      "Families needing concierge services — from elderly parent check-ins to event coordination and document processing.",
    stats: "Personalized care for every client",
  },
];

export function WhoWeServe() {
  return (
    <section className="py-28 md:py-36 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(200,147,42,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(200,147,42,0.05),transparent_40%)]" />
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5 animate-float" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-white/5 animate-float" style={{ animationDelay: "-4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
            <Heart className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Who We Serve</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Trusted Partner
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4 rounded-full" />
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Whether you are an individual, investor, or organization, we provide
            the local presence and expertise you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((seg, index) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-gold/30 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-gold/10 border border-brand-gold/20 shrink-0 group-hover:bg-brand-gold/20 group-hover:scale-105 transition-all duration-500">
                  <seg.icon className="h-7 w-7 text-brand-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {seg.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-brand-gold/10 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="text-brand-gold text-xs font-medium">{seg.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm">
            Not sure which category fits?{" "}
            <Link href="/contact" className="text-brand-gold hover:underline font-medium">
              Contact us
            </Link>{" "}
            and we will find the right solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
