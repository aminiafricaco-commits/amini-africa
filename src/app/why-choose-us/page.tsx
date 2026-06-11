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
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why clients trust Amini Africa for representation, verification, and support services across Sub-Saharan Africa.",
};

const reasons = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Stop spending hours trying to coordinate things from abroad. We handle everything on the ground, giving you back your most valuable resource: time.",
  },
  {
    icon: Shield,
    title: "Protect Investments",
    description:
      "Every transaction, verification, and inspection is handled with due diligence. We protect your financial interests through thorough checks and professional oversight.",
  },
  {
    icon: SearchX,
    title: "Avoid Fraud",
    description:
      "Real estate fraud, supplier scams, and fake investment opportunities are rampant. Our local knowledge and verification processes help you avoid costly mistakes.",
  },
  {
    icon: DollarSign,
    title: "Reduce Travel Costs",
    description:
      "Why spend thousands on flights and accommodation when we can be your eyes and ears on the ground? We provide detailed reports so you only travel when necessary.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Sleep well knowing a trusted professional is managing your affairs in Africa. We provide regular updates, photos, and complete transparency.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of local markets, customs, regulations, and business practices. We know the terrain, the players, and the potential pitfalls.",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    description:
      "You are not a ticket number. Every client gets a dedicated representative who understands their specific needs, preferences, and expectations.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Choose Amini Africa?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you need someone you can trust on the ground in Africa, we are
            the clear choice. Here is why clients around the world choose to
            work with us.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {reasons.map((r, index) => (
            <div
              key={r.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <r.icon className="h-10 w-10 text-brand-gold mb-4" />
                <h2 className="text-2xl font-bold text-secondary mb-3">
                  {r.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
              </div>
              <div className="flex-1 bg-brand-cream rounded-xl p-8 h-48 flex items-center justify-center">
                <r.icon className="h-24 w-24 text-brand-gold/20" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-brand-cream rounded-xl p-10">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Experience the Amini Africa Difference
          </h2>
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
