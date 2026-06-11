import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Amini Africa's mission to help diaspora Africans and global professionals confidently manage their interests in Africa through trusted local representation.",
};

export default function MissionPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-brand-cream rounded-xl p-10">
            <Target className="h-12 w-12 text-brand-gold mb-6" />
            <h1 className="text-3xl font-bold text-secondary mb-4">
              Our Mission
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To help diaspora Africans, international investors, businesses,
              and global professionals confidently manage opportunities,
              investments, operations, and personal matters across Africa
              through trusted local representation and execution.
            </p>
          </div>
          <div className="bg-secondary text-white rounded-xl p-10">
            <Eye className="h-12 w-12 text-brand-gold mb-6" />
            <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              To become Africa&apos;s most trusted representation and support
              partner for global clients, known for integrity, reliability, and
              exceptional service delivery.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mb-16">
          <Heart className="h-10 w-10 text-brand-gold mb-4" />
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Our Core Promise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We become your trusted local representative.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you work with Amini Africa, you are not just hiring a service
            provider. You are gaining a dedicated partner who treats your
            interests with the same care and attention as their own.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We provide trust, transparency, accountability, local expertise,
            reliable execution, professional reporting, and peace of mind.
          </p>
        </div>

        <div className="text-center">
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
