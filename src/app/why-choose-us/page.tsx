import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Star,
} from "lucide-react";
import { AnimatedIconsGrid } from "./animated-icons-grid";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why diaspora Africans, investors, and organizations trust Amini Africa for representation, verification, and support services across Sub-Saharan Africa.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/why-choose-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <Star className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Why Us</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose Amini Africa?
            </h1>
            <div className="w-16 h-0.5 bg-white/30 mb-6 rounded-full" />
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl">
              We provide the trust, transparency, and local expertise you need
              to operate confidently across Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedIconsGrid />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Experience the Amini Africa Difference
          </h2>
          <p className="text-foreground/90 max-w-2xl mx-auto mb-8">
            See how trusted local representation can transform your engagement
            in Africa.
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
