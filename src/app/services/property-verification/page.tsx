import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle, ArrowRight, Sparkles, Search, Shield, FileText, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Verification & Real Estate Support",
  description:
    "Title verification, land verification, site inspections, due diligence reports, and construction monitoring for property investments across Africa.",
};

const services = [
  "Title & Land Verification at Ministry of Lands",
  "Property Ownership Verification",
  "Site Inspections with Photo Documentation",
  "Construction Progress Monitoring",
  "Due Diligence Reports",
  "Investment Verification & Risk Assessments",
  "Boundary Verification & Survey Coordination",
  "Property Valuation Coordination",
];

const benefits = [
  { icon: Shield, text: "Protect your investment from fraud" },
  { icon: Search, text: "Comprehensive due diligence you can trust" },
  { icon: Camera, text: "Photo evidence from every inspection" },
  { icon: FileText, text: "Detailed reports with full documentation" },
  { icon: CheckCircle, text: "Peace of mind before you commit funds" },
];

const process = [
  "Share property details and what you need verified",
  "Our team conducts on-site inspection and records search",
  "You receive a comprehensive due diligence report with photos",
  "Confidently proceed with your investment decision",
];

export default function PropertyVerificationPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,22,40,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary font-medium text-xs tracking-widest uppercase">Property</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Property Verification & Real Estate Support
            </h1>
            <div className="w-16 h-0.5 bg-primary mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
              Never invest in a property you haven&apos;t verified. Our team conducts
              thorough due diligence, site inspections, and title searches so you
              can invest with complete confidence.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] transition-all duration-200"
            >
              Book a Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Services We Offer
              </h2>
              <div className="space-y-3">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-3 bg-muted rounded-xl px-5 py-3.5 border border-border">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-secondary/80 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Client Benefits
              </h2>
              <div className="bg-gradient-to-br from-white/80 to-white/30 rounded-2xl p-8 border border-primary/10">
                <div className="space-y-5">
                  {benefits.map((b) => (
                    <div key={b.text} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-primary/20 shrink-0">
                        <b.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex items-center min-h-[40px]">
                        <span className="text-secondary/80">{b.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-3">
              How It Works
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-3 rounded-full" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              From inquiry to verified property report
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border text-center relative">
                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,22,40,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Verify Before You Invest
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Don&apos;t risk your investment on unverified information. Let our team
            conduct thorough due diligence before you commit.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] transition-all duration-200"
          >
            Book a Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
