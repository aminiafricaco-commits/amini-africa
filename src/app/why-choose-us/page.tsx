import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Shield,
  SearchX,
  DollarSign,
  Heart,
  MapPin,
  UserCheck,
  Star,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why diaspora Africans, investors, and organizations trust Amini Africa for representation, verification, and support services across Sub-Saharan Africa.",
};

const reasons = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "We handle everything on the ground so you can focus on what matters most.",
  },
  {
    icon: Shield,
    title: "Protect Investments",
    description:
      "Thorough verification and due diligence to safeguard your interests.",
  },
  {
    icon: SearchX,
    title: "Avoid Fraud",
    description:
      "Rigorous checks and local knowledge help you avoid scams and bad deals.",
  },
  {
    icon: DollarSign,
    title: "Reduce Travel Costs",
    description:
      "Eliminate unnecessary travel. We are your eyes and ears on the ground.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Sleep well knowing a trusted professional is managing your affairs.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of local markets, regulations, and business practices.",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    description:
      "Every client gets a dedicated representative who understands their needs.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <Star className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Why Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose Amini Africa?
            </h1>
            <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We provide the trust, transparency, and local expertise you need
              to operate confidently across Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-cream/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold/15 to-brand-cream border border-brand-gold/20 mb-4 group-hover:from-brand-gold/25 group-hover:scale-105 transition-all duration-300">
                  <reason.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg text-secondary mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Experience the Amini Africa Difference
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            See how trusted local representation can transform your engagement
            in Africa.
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
