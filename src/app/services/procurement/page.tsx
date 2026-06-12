import type { Metadata } from "next";
import Link from "next/link";
import { Truck, CheckCircle, ArrowRight, Sparkles, Search, Shield, TrendingDown, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Procurement & Supply Chain Support",
  description:
    "Product sourcing, vendor verification, quality assurance, and supply chain support services across Sub-Saharan Africa.",
};

const services = [
  "Product Sourcing & Vendor Identification",
  "Vendor Verification & Background Checks",
  "Factory Visits & Quality Assurance Inspections",
  "Procurement Audits & Compliance Reviews",
  "Supplier Negotiations & Contract Support",
  "Delivery Monitoring & Logistics Coordination",
  "Export Documentation Support",
  "Ongoing Vendor Performance Monitoring",
];

const benefits = [
  { icon: Search, text: "Thorough vendor verification before engagement" },
  { icon: Shield, text: "Fraud prevention through due diligence" },
  { icon: TrendingDown, text: "Cost savings through competitive sourcing" },
  { icon: Package, text: "Quality assurance at every step" },
  { icon: CheckCircle, text: "Reliable supply chain you can count on" },
];

const process = [
  "Tell us what you need to source or verify",
  "We identify and vet potential suppliers",
  "We conduct inspections and quality checks",
  "You receive verified vendors and ongoing monitoring",
];

export default function ProcurementPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,147,42,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,147,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,147,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 mb-6">
              <Truck className="h-8 w-8 text-brand-gold" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Procurement</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Procurement & Supply Chain Support
            </h1>
            <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
              Reliable supply chains start with trusted vendors. We source,
              verify, and monitor suppliers across Africa so you can operate
              with confidence.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
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
                  <div key={s} className="flex items-start gap-3 bg-brand-cream/50 rounded-xl px-5 py-3.5 border border-brand-gold/5">
                    <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                    <span className="text-secondary/80 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Client Benefits
              </h2>
              <div className="bg-gradient-to-br from-brand-cream/80 to-brand-cream/30 rounded-2xl p-8 border border-brand-gold/10">
                <div className="space-y-5">
                  {benefits.map((b) => (
                    <div key={b.text} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-brand-gold/20 shrink-0">
                        <b.icon className="h-5 w-5 text-brand-gold" />
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

      <section className="py-16 md:py-24 bg-brand-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-3">
              How It Works
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-3 rounded-full" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              From sourcing needs to verified suppliers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border text-center relative">
                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-gold text-secondary text-sm font-bold flex items-center justify-center shadow-md">{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,147,42,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Need Reliable Suppliers in Africa?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Let us verify your vendors and strengthen your supply chain with
            trusted local partners.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
          >
            Book a Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
