import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Support Services",
  description:
    "Company registration, market research, compliance assistance, and operational support for businesses operating in African markets.",
};

const services = [
  "Company Registration & Incorporation Assistance",
  "Market Research & Entry Strategy",
  "Vendor & Partner Sourcing",
  "Regulatory Compliance Assistance",
  "Business Permits & License Support",
  "Operational Support & Management",
  "Local Representation & Liaison Services",
  "Administrative & Secretarial Support",
  "Business Verification & Due Diligence",
  "Ongoing Business Support Services",
];

const benefits = [
  "Enter African markets with confidence",
  "Navigate local regulations easily",
  "Find trusted partners and vendors",
  "Reduce operational risks",
  "Focus on growing your business",
  "Have a local team on your side",
];

export default function BusinessSupportPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Briefcase className="h-14 w-14 text-brand-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Business Support Services
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expand your business into African markets with reliable local
            support. From company registration to ongoing operational
            assistance, we help you establish and grow your presence
            confidently.
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
            Expanding Your Business to Africa?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let us handle the ground work while you focus on growing your
            business.
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
