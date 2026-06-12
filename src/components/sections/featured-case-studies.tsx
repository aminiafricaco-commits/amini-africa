"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Building2, Truck } from "lucide-react";

const studies = [
  {
    icon: Building2,
    title: "Property Due Diligence for Diaspora Investor",
    description:
      "Complete title verification, site inspection, and due diligence report for a UK-based diaspora investor purchasing commercial property in Nairobi.",
    result: "Fraud prevented. Client saved $120,000.",
    href: "/case-studies/property-due-diligence-nairobi",
    service: "Property Verification",
  },
  {
    icon: Truck,
    title: "Supply Chain Verification for International NGO",
    description:
      "End-to-end vendor verification and supply chain monitoring for an NGO sourcing medical supplies across three East African countries.",
    result: "100% delivery compliance. 30% cost reduction.",
    href: "/case-studies/supply-chain-ngo-east-africa",
    service: "Procurement Support",
  },
  {
    icon: BarChart3,
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
    <section className="py-20 md:py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(10,22,40,0.04),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <BarChart3 className="h-3.5 w-3.5 text-primary" />
            <span className="text-primary font-medium text-xs tracking-widest uppercase">
              Results
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Proven Results
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from real engagements. See how we deliver measurable value
            for our clients across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={study.href}
                className="group block h-full bg-white rounded-xl border border-border p-8 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary text-xs font-medium">{study.service}</span>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white to-white/80 border border-primary/20 mb-5 group-hover:from-primary/20 group-hover:scale-110 transition-all duration-500">
                    <study.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-500">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="bg-primary/5 border border-primary/10 rounded-lg px-4 py-2.5 mb-4">
                    <p className="text-sm font-semibold text-primary">{study.result}</p>
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                    Read Full Case Study <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
