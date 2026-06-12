import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, CheckCircle, ArrowRight, Sparkles, Building2, TrendingUp, FileText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Support Services",
  description:
    "Company registration, market research, compliance assistance, and operational support for businesses operating in African markets.",
};

const services = [
  "Company Registration Assistance",
  "Market Research & Competitive Analysis",
  "Vendor Sourcing & Partner Identification",
  "Regulatory Compliance Assistance",
  "Permit & License Application Support",
  "Operational Support & Local Representation",
  "Business Verification & Due Diligence",
  "Ongoing Business Advisory Support",
];

const benefits = [
  { icon: Building2, text: "Hassle-free company registration" },
  { icon: TrendingUp, text: "Data-driven market insights" },
  { icon: FileText, text: "Regulatory compliance guidance" },
  { icon: Users, text: "Dedicated business support representative" },
  { icon: CheckCircle, text: "Peace of mind with professional execution" },
];

const process = [
  "Tell us about your business goals and needs",
  "We research, plan, and prepare your options",
  "We execute on your behalf with regular updates",
  "You receive completed deliverables and ongoing support",
];

export default function BusinessSupportPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(107,114,128,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary font-medium text-xs tracking-widest uppercase">Business</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Business Support Services
            </h1>
            <div className="w-16 h-0.5 bg-primary mb-6 rounded-full" />
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mb-8">
              Expanding into Africa? We provide the local intelligence, compliance
              support, and operational assistance you need to succeed.
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
              From business idea to operational reality
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

      <section className="py-20 md:py-28 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(107,114,128,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Expanding Your Business to Africa?
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
            Let us be your local partner for market entry, compliance, and
            ongoing operational support.
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
