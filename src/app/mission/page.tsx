import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Amini Africa's mission to help diaspora Africans and global professionals confidently manage their interests in Africa through trusted local representation.",
};

export default function MissionPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Purpose</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Mission & Vision
            </h1>
            <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-brand-cream/80 to-brand-cream/30 rounded-2xl p-10 border border-brand-gold/10">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-brand-gold/20 mb-6">
                <Target className="h-7 w-7 text-brand-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To help diaspora Africans, international investors, businesses,
                and global professionals confidently manage opportunities,
                investments, operations, and personal matters across Africa
                through trusted local representation and execution.
              </p>
            </div>
            <div className="bg-secondary text-white rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,114,0.1),transparent_50%)]" />
              <div className="relative">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-gold/10 border border-brand-gold/20 mb-6">
                  <Eye className="h-7 w-7 text-brand-gold" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Our Vision
                </h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  To become Africa&apos;s most trusted representation and support
                  partner for global clients, known for integrity, reliability, and
                  exceptional service delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-cream to-brand-cream/80 border border-brand-gold/20 mx-auto mb-4">
                <Heart className="h-7 w-7 text-brand-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-4">
                Our Core Promise
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-4 rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-center">
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
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Share Your Vision with Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Let us help you turn your African aspirations into reality.
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
