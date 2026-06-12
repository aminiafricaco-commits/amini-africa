import type { Metadata } from "next";
import Link from "next/link";
import { Plane, CheckCircle, ArrowRight, Sparkles, Home, School, Car, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel & Relocation Support",
  description:
    "Relocation planning, airport transfers, accommodation research, settling-in services, and travel coordination across Sub-Saharan Africa.",
};

const services = [
  "Relocation Planning & Coordination",
  "Airport Transfers & Meet-and-Greet",
  "Accommodation Research & Shortlisting",
  "Area Orientation & Neighborhood Tours",
  "International & Local School Research",
  "Utility Setup (Power, Water, Internet)",
  "Vehicle Purchase & Registration Support",
  "Settling-In Services & Ongoing Support",
];

const benefits = [
  { icon: Home, text: "Hassle-free accommodation setup" },
  { icon: School, text: "School research for your children" },
  { icon: Car, text: "Airport pickup and transport arranged" },
  { icon: Wifi, text: "Utilities connected before you arrive" },
  { icon: CheckCircle, text: "Dedicated settling-in coordinator" },
];

const process = [
  "Share your relocation timeline and requirements",
  "We research and prepare options before your move",
  "You arrive — we handle pickup, orientation, and setup",
  "We remain available for ongoing settling-in support",
];

export default function RelocationPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,22,40,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Plane className="h-8 w-8 text-primary" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary font-medium text-xs tracking-widest uppercase">Relocation</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Travel & Relocation Support
            </h1>
            <div className="w-16 h-0.5 bg-primary mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
              Moving to Africa should be exciting, not stressful. We handle the
              logistics so you can focus on your new chapter.
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
              From move planning to settling in
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
            Planning a Move to Africa?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Let us handle the logistics so you can focus on the excitement of
            your new chapter.
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
