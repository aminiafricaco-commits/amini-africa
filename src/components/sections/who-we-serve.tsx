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
      "Organizations requiring supply chain verification, due diligence, market research, compliance support, and operational assistance.",
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
    <section className="py-28 md:py-36 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-1.5 mb-4">
            <Heart className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Who We Serve</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Trusted Partner
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-4 rounded-full" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
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
              className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 shrink-0">
                  <seg.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {seg.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {seg.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span className="text-primary text-xs font-medium">{seg.stats}</span>
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
          <p className="text-foreground/80 text-sm">
            Not sure which category fits?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact us
            </Link>{" "}
            and we will find the right solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
