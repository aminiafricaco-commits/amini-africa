import type { Metadata } from "next";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet the founder of Amini Africa. Learn about the personal story, mission, and commitment behind our trusted representation services.",
};

export default function FounderPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Meet the Founder
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Amini Africa was born from a deeply personal understanding of the
              challenges diaspora Africans and international partners face when
              trying to get things done in Africa.
            </p>
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
          </div>
          <div className="bg-brand-cream rounded-xl p-10">
            <Quote className="h-10 w-10 text-brand-gold/50 mb-6" />
            <blockquote className="text-xl text-secondary/90 leading-relaxed mb-6 italic">
              &ldquo;We created Amini Africa because we believe no one should
              have to choose between pursuing opportunities in Africa and
              having peace of mind. Our clients deserve trusted representation
              they can count on.&rdquo;
            </blockquote>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-secondary">Founder</p>
              <p className="text-sm text-muted-foreground">Amini Africa</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Let&apos;s Talk About Your Needs
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Every client relationship starts with a personal conversation. Book
            a consultation to discuss how we can support you.
          </p>
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
