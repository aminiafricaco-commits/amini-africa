import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Amini Africa's mission to provide trusted representation and support services across Sub-Saharan Africa.",
};

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "We build relationships on honesty, transparency, and reliable execution. Our word is our bond.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of professionalism and delivery.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "Every engagement is personalized. We put our clients interests first.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description:
      "Deep knowledge of local markets, culture, and business practices across Africa.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            About Amini Africa
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Amini Africa was founded to solve a critical problem: diaspora
            Africans, international investors, and global professionals need
            trusted, accountable people on the ground in Africa they can rely on.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Too many people have been burned by unverified contacts, fraudulent
            schemes, and unreliable partners. Too many opportunities have been
            lost because there was no one trustworthy to represent your interests.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We exist to change that. We are your eyes, ears, and hands on the
            ground. We verify, we inspect, we represent, we execute, and we
            report back with complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6">
              <v.icon className="h-10 w-10 text-brand-gold mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-cream rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every client relationship starts with a conversation. Let us discuss
            how we can support your needs in Africa.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
