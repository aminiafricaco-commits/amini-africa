import type { Metadata } from "next";
import Link from "next/link";
import {
  ConciergeBell,
  Building2,
  Truck,
  Plane,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive representation, verification, procurement, relocation, and business support services across Sub-Saharan Africa.",
};

const services = [
  {
    icon: ConciergeBell,
    title: "Concierge & Lifestyle Management",
    description:
      "Personal errands, executive assistance, family support, personal shopping, appointment scheduling, event coordination, reservations, VIP assistance, and lifestyle management across Africa.",
    features: [
      "Personal Errands & Executive Assistance",
      "Family Support Services",
      "Personal Shopping & Reservations",
      "Event Coordination",
      "VIP Assistance & Lifestyle Management",
    ],
    href: "/services/concierge",
  },
  {
    icon: Building2,
    title: "Property Verification & Real Estate Support",
    description:
      "Title verification, land verification, property ownership checks, site inspections, construction progress monitoring, due diligence reports, and investment verification.",
    features: [
      "Title & Land Verification",
      "Property Ownership Verification",
      "Site Inspections & Progress Monitoring",
      "Due Diligence Reports",
      "Investment Verification & Risk Assessments",
    ],
    href: "/services/property-verification",
  },
  {
    icon: Truck,
    title: "Procurement & Supply Chain Support",
    description:
      "Product sourcing, vendor verification, factory visits, quality assurance, procurement audits, supplier negotiations, delivery monitoring, and export support.",
    features: [
      "Product Sourcing & Vendor Verification",
      "Factory Visits & Quality Assurance",
      "Procurement Audits",
      "Supplier Negotiations",
      "Delivery Monitoring & Export Support",
    ],
    href: "/services/procurement",
  },
  {
    icon: Plane,
    title: "Travel & Relocation Support",
    description:
      "Relocation planning, airport transfers, accommodation research, area orientation, school research, utility setup, vehicle arrangements, and settling-in services.",
    features: [
      "Relocation Planning & Coordination",
      "Airport Transfers & Accommodation",
      "Area Orientation & School Research",
      "Utility Setup & Vehicle Arrangements",
      "Settling-In Services",
    ],
    href: "/services/relocation",
  },
  {
    icon: Briefcase,
    title: "Business Support Services",
    description:
      "Company registration assistance, market research, vendor sourcing, compliance assistance, permit assistance, operational support, and business verification.",
    features: [
      "Company Registration Assistance",
      "Market Research & Vendor Sourcing",
      "Compliance & Permit Assistance",
      "Operational Support",
      "Business Verification & Local Representation",
    ],
    href: "/services/business-support",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">What We Offer</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Our Services
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We provide comprehensive support services across Sub-Saharan Africa,
            helping diaspora Africans, investors, businesses, and families
            manage their interests confidently without needing to be physically
            present.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.href}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white rounded-2xl border border-border p-8 lg:p-10 hover:border-brand-gold/20 transition-colors duration-300"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cream to-brand-cream/80 border border-brand-gold/20 mb-5">
                  <service.icon className="h-8 w-8 text-brand-gold" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                      <span className="text-secondary/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-gradient-to-br from-brand-cream/80 to-brand-cream/30 rounded-xl p-8 border border-brand-gold/10 h-full">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-5">
                    Who Benefits
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Diaspora Africans",
                      "International Investors",
                      "Business Owners",
                      "NGOs & Organizations",
                      "Expatriates & Professionals",
                      "Returning Diaspora",
                    ].map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-secondary/80"
                      >
                        <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary text-white rounded-2xl p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.1),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Book a free consultation and we will help you identify the right
              solution for your specific needs.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
            >
              Book a Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
