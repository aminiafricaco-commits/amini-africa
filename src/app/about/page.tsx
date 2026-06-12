import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Users, Globe, ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Amini Africa's mission to provide trusted representation and support services across Sub-Saharan Africa.",
};

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    body: "We build relationships on honesty, transparency, and reliable execution. Our word is our bond.",
  },
  {
    icon: Target,
    title: "Excellence",
    body: "We hold ourselves to the highest standards of professionalism and delivery in everything we do.",
  },
  {
    icon: Users,
    title: "Client-First",
    body: "Every engagement is personalized. We put our clients interests first, always.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    body: "Deep knowledge of local markets, culture, regulations, and business practices across Sub-Saharan Africa.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <Heart className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">About Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Amini Africa
            </h1>
            <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We exist to solve a critical problem: diaspora Africans, international
              investors, and global professionals need trusted, accountable people
              on the ground in Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Too many people have been burned by unverified contacts, fraudulent
              schemes, and unreliable partners. Too many opportunities have been
              lost because there was no one trustworthy to represent your interests.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We exist to change that. We are your eyes, ears, and hands on the
              ground. We verify, we inspect, we represent, we execute, and we
              report back with complete transparency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement is built on a foundation of trust, professionalism,
              and an unwavering commitment to our clients interests.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl border border-border p-8 text-center hover:border-brand-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-cream to-brand-cream/80 border border-brand-gold/20 mx-auto mb-5">
                    <v.icon className="h-7 w-7 text-brand-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary text-lg mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Every client relationship starts with a conversation. Let us discuss
            how we can support your needs in Africa.
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
