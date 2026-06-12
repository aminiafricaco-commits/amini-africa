import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Heart,
  Briefcase,
  Globe,
  Users,
  Landmark,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Amini Africa serves diaspora Africans, investors, businesses, NGOs, expatriates, and global professionals across Sub-Saharan Africa.",
};

const industries = [
  {
    icon: Users,
    title: "Diaspora Community",
    description:
      "Africans living abroad who need trusted representation for property, family matters, investments, and business interests back home.",
    href: "/services/concierge",
  },
  {
    icon: Building2,
    title: "Real Estate & Property",
    description:
      "International property investors, real estate developers, and individuals needing verification, due diligence, and on-site support.",
    href: "/services/property-verification",
  },
  {
    icon: Briefcase,
    title: "Business & Enterprise",
    description:
      "Companies expanding into African markets who need reliable local support for operations, compliance, and partner verification.",
    href: "/services/business-support",
  },
  {
    icon: Heart,
    title: "NGOs & Development",
    description:
      "Non-governmental organizations and development agencies needing field support, vendor verification, and program monitoring.",
    href: "/services/procurement",
  },
  {
    icon: Globe,
    title: "Expatriates & Professionals",
    description:
      "Global professionals relocating to Africa who need support with housing, schools, utilities, and settling in.",
    href: "/services/relocation",
  },
  {
    icon: Landmark,
    title: "Government & Diplomatic",
    description:
      "Government agencies, diplomatic missions, and international organizations needing trusted local representation and support.",
    href: "/services/concierge",
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Industries</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We support a diverse range of clients across multiple sectors, all
              united by one common need: trusted representation on the ground in
              Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, index) => (
              <Link
                key={ind.title}
                href={ind.href}
                className="group bg-white rounded-2xl border border-border p-8 hover:border-brand-gold/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-cream to-brand-cream/80 border border-brand-gold/20 mb-5 group-hover:from-brand-gold/20 group-hover:scale-105 transition-all duration-500">
                  <ind.icon className="h-7 w-7 text-brand-gold" />
                </div>
                <h2 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-brand-gold transition-colors duration-500">
                  {ind.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {ind.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-brand-gold group-hover:gap-2 transition-all duration-300">
                  View Services <ArrowRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Not Sure Where You Fit?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Contact us and we will help identify the right support for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
