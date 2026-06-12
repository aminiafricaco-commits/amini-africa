"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ConciergeBell,
  Building2,
  Truck,
  Plane,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ConciergeBell,
    title: "Concierge & Lifestyle Management",
    description:
      "Personal errands, executive assistance, family support, and lifestyle management services across Africa.",
    href: "/services/concierge",
  },
  {
    icon: Building2,
    title: "Property Verification & Real Estate Support",
    description:
      "Title verification, site inspections, due diligence reports, and construction progress monitoring.",
    href: "/services/property-verification",
  },
  {
    icon: Truck,
    title: "Procurement & Supply Chain Support",
    description:
      "Product sourcing, vendor verification, quality assurance, and supplier negotiations with local partners.",
    href: "/services/procurement",
  },
  {
    icon: Plane,
    title: "Travel & Relocation Support",
    description:
      "Relocation planning, airport transfers, accommodation research, and settling-in services.",
    href: "/services/relocation",
  },
  {
    icon: Briefcase,
    title: "Business Support Services",
    description:
      "Company registration, market research, compliance assistance, and operational support for African markets.",
    href: "/services/business-support",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support services across Sub-Saharan Africa, delivered
            with professionalism, transparency, and accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block p-8 rounded-xl border border-border bg-white hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-cream to-brand-cream/80 border border-brand-gold/20 mb-5 group-hover:from-brand-gold/20 group-hover:to-brand-cream transition-all duration-300">
                    <service.icon className="h-7 w-7 text-brand-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-brand-gold group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
