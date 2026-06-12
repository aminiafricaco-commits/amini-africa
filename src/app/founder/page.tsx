import type { Metadata } from "next";
import Link from "next/link";
import { Quote, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet the founder of Amini Africa. Learn about the personal story, mission, and commitment behind our trusted representation services.",
};

export default function FounderPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(107,114,128,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Founder</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the Founder
            </h1>
            <div className="w-16 h-0.5 bg-primary mb-6 rounded-full" />
            <p className="text-lg text-foreground/85 leading-relaxed max-w-2xl">
              Amini Africa was born from a deeply personal understanding of the
              challenges diaspora Africans face when managing affairs from abroad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Having witnessed firsthand the frustration, risk, and uncertainty
                that comes with managing affairs from abroad, our founder set out
                to build a company that provides the trust, accountability, and
                professional execution that the diaspora community deserves.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Amini Africa is the result of that vision: a company built on
                integrity, local expertise, and an unwavering commitment to our
                clients&apos; interests.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every service we offer, every partnership we build, and every
                report we deliver reflects our founding belief that trust is the
                most valuable currency in African business.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/80 to-white/30 rounded-2xl p-8 lg:p-10 border border-primary/10">
                <Quote className="h-10 w-10 text-primary/50 mb-6" />
                <blockquote className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                  &ldquo;We created Amini Africa because we believe no one should
                  have to choose between pursuing opportunities in Africa and
                  having peace of mind. Our clients deserve trusted representation
                  they can count on.&rdquo;
                </blockquote>
                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-foreground">Founder</p>
                  <p className="text-sm text-muted-foreground">Amini Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(107,114,128,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Let&apos;s Talk About Your Needs
          </h2>
          <p className="text-foreground/90 max-w-2xl mx-auto mb-8">
            Every client relationship starts with a personal conversation. Book
            a consultation to discuss how we can support you.
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
