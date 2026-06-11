import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Verification & Real Estate Support",
  description:
    "Title verification, land verification, site inspections, due diligence reports, and construction monitoring for property investments across Africa.",
};

const services = [
  "Title Verification & Document Review",
  "Land & Property Ownership Verification",
  "Site Inspections & Photography",
  "Construction Progress Monitoring",
  "Comprehensive Due Diligence Reports",
  "Property Documentation Reviews",
  "Property Risk Assessments",
  "Investment Verification & Validation",
  "Real Estate Market Research",
  "Vendor & Developer Verification",
];

const benefits = [
  "Protect your property investments",
  "Avoid real estate fraud and scams",
  "Get professional, detailed reports",
  "Verify ownership before you pay",
  "Monitor construction remotely",
  "Make informed investment decisions",
];

export default function PropertyVerificationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Building2 className="h-14 w-14 text-brand-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Property Verification & Real Estate Support
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Protect your real estate investments with thorough on-the-ground
            verification. Our team conducts comprehensive checks, inspections,
            and due diligence to ensure your property transactions are safe
            and legitimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Services We Offer
            </h2>
            <div className="space-y-4">
              {services.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                  <span className="text-secondary/80">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-cream rounded-xl p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Client Benefits
            </h2>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                  <span className="text-secondary/80">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-secondary text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Protecting Your Property Investments
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Dont risk your hard-earned money on unverified property deals. Let
            us verify everything before you commit.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
          >
            Book a Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
