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
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: ConciergeBell,
    title: "Concierge & Lifestyle Management",
    description:
      "Personal errands, executive assistance, family support, and lifestyle management services across Africa.",
    href: "/services/concierge",
    image: "/images/service-concierge.jpg",
    location: "Nairobi, Kenya",
  },
  {
    icon: Building2,
    title: "Property Verification & Real Estate Support",
    description:
      "Title verification, site inspections, due diligence reports, and construction progress monitoring.",
    href: "/services/property-verification",
    image: "/images/service-property.jpg",
    location: "Nairobi, Kenya",
  },
  {
    icon: Truck,
    title: "Procurement & Supply Chain Support",
    description:
      "Product sourcing, vendor verification, quality assurance, and supplier negotiations with local partners.",
    href: "/services/procurement",
    image: "/images/service-procurement.jpg",
    location: "Kenya",
  },
  {
    icon: Plane,
    title: "Travel & Relocation Support",
    description:
      "Relocation planning, airport transfers, accommodation research, and settling-in services.",
    href: "/services/relocation",
    image: "/images/service-travel.jpg",
    location: "Nairobi, Kenya",
  },
  {
    icon: Briefcase,
    title: "Business Support Services",
    description:
      "Company registration, market research, compliance assistance, and operational support for African markets.",
    href: "/services/business-support",
    image: "/images/business-handshake.jpg",
    location: "Nairobi, Kenya",
  },
];

export function ServicesOverview() {
  const featured = services[1];
  const rest = services.filter((s) => s.href !== featured.href);

  return (
    <section className="py-28 md:py-36 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">What We Offer</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support services across Sub-Saharan Africa, delivered
            with professionalism, transparency, and accountability.
          </p>
        </motion.div>

        {/* Featured service — larger, hero-style card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            <Link
              href={featured.href}
              className="group block relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-white via-white to-white/50 p-8 md:p-12 lg:col-span-3 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-primary/20 shadow-sm shrink-0 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500">
                  <featured.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-0.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary text-xs font-medium tracking-wide uppercase">Most Requested</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-full">
              <div className="absolute inset-0 bg-[url('/images/service-property.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white/90 text-sm font-medium">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary services — compact 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group block rounded-xl border border-border bg-white hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400 h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${service.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white/80 text-xs font-medium">{service.location}</span>
                  </div>
                </div>
                <div className="relative p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-white to-white/80 border border-primary/20 shrink-0 group-hover:from-primary/20 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
