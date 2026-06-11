import type { Metadata } from "next";
import Link from "next/link";
import {
  ConciergeBell,
  Building2,
  Truck,
  Plane,
  Briefcase,
  ArrowRight,
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
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide comprehensive support services across Sub-Saharan Africa,
            helping diaspora Africans, investors, businesses, and families
            manage their interests confidently without needing to be physically
            present.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.href}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <service.icon className="h-12 w-12 text-brand-gold mb-4" />
                <h2 className="text-2xl font-bold text-secondary mb-4">
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
                  className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-6 py-3 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div
                className={`bg-brand-cream rounded-xl p-10 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Who Benefits
                </h3>
                <ul className="space-y-3">
                  {(
                    [
                      "Diaspora Africans",
                      "International Investors",
                      "Business Owners",
                      "NGOs & Organizations",
                      "Expatriates & Professionals",
                      "Returning Diaspora",
                    ] as const
                  ).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-secondary/80"
                    >
                      <ArrowRight className="h-4 w-4 text-brand-gold shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
