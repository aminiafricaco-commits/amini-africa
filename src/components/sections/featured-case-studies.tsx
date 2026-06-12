"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getAnimatedIcon } from "@/components/ui/animated-icons";

const studies = [
  {
    icon: "shield",
    title: "Property Due Diligence for Diaspora Investor",
    description:
      "Complete title verification, site inspection, and due diligence report for a UK-based diaspora investor purchasing commercial property in Nairobi.",
    result: "Fraud prevented. Client saved $120,000.",
    href: "/case-studies/property-due-diligence-nairobi",
    service: "Property Verification",
  },
  {
    icon: "search",
    title: "Supply Chain Verification for International NGO",
    description:
      "End-to-end vendor verification and supply chain monitoring for an NGO sourcing medical supplies across three East African countries.",
    result: "100% delivery compliance. 30% cost reduction.",
    href: "/case-studies/supply-chain-ngo-east-africa",
    service: "Procurement Support",
  },
  {
    icon: "compass",
    title: "Market Entry Strategy for European Tech Firm",
    description:
      "Comprehensive market research, regulatory analysis, and partner identification for a SaaS company expanding into the African market.",
    result: "Launched in 4 countries within 6 months.",
    href: "/case-studies/market-entry-saas-africa",
    service: "Business Support",
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/case-studies-bg.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 animate-pulse" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">
              Results
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-4 rounded-full" />
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real outcomes from real engagements. See how we deliver measurable value
            for our clients across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, index) => {
            const IconComponent = getAnimatedIcon(study.icon);
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={study.href}
                  className="group block h-full bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 p-8 hover:border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative">
                    <div className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                      <span className="text-brand-gold text-xs font-medium">{study.service}</span>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/20 backdrop-blur-sm border border-white/20 mb-5 group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="text-brand-gold w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2.5 mb-4">
                      <p className="text-sm font-semibold text-brand-gold">{study.result}</p>
                    </div>
                    <span className="inline-flex items-center text-sm font-medium text-white/80 group-hover:text-white group-hover:gap-3 transition-all duration-300">
                      Read Full Case Study <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
