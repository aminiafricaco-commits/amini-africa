import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, CreditCard, Calendar, MessageCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a consultation with Amini Africa ($50). Discuss your needs for representation, verification, procurement, relocation, or business support across Sub-Saharan Africa.",
};

export default function BookConsultationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
            Book a Consultation
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Consultation fee: <strong className="text-secondary">$50</strong> (30 minutes).
            Complete the three steps below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-border rounded-xl p-8 text-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-gold text-secondary text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center mx-auto mb-5 mt-2">
              <ClipboardList className="h-7 w-7 text-brand-gold" />
            </div>
            <h3 className="font-heading font-bold text-secondary mb-2">
              Fill Questionnaire
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Tell us about your needs so we can prepare for our call.
            </p>
            <Link
              href="https://tally.so/r/Gx7eZp"
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-6 py-3 rounded-md font-semibold text-sm hover:bg-brand-gold/90 active:scale-[0.97] transition-all duration-150"
            >
              <ClipboardList className="h-4 w-4" />
              Open Form
            </Link>
          </div>

          <div className="bg-white border border-border rounded-xl p-8 text-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-gold text-secondary text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center mx-auto mb-5 mt-2">
              <CreditCard className="h-7 w-7 text-brand-gold" />
            </div>
            <h3 className="font-heading font-bold text-secondary mb-2">
              Pay $50 Fee
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Secure your 30-minute consultation. Payment confirms your booking.
            </p>
            <Link
              href="https://tally.so/r/Gx7eZp"
              target="_blank"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-secondary/90 active:scale-[0.97] transition-all duration-150"
            >
              <CreditCard className="h-4 w-4" />
              Pay $50 Now
            </Link>
          </div>

          <div className="bg-white border border-border rounded-xl p-8 text-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-gold text-secondary text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center mx-auto mb-5 mt-2">
              <Calendar className="h-7 w-7 text-brand-gold" />
            </div>
            <h3 className="font-heading font-bold text-secondary mb-2">
              Schedule Your Call
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Pick a time that works for you. We confirm via email.
            </p>
            <Link
              href="https://calendly.com/aminiafrica-co"
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-6 py-3 rounded-md font-semibold text-sm hover:bg-brand-gold/90 active:scale-[0.97] transition-all duration-150"
            >
              <Calendar className="h-4 w-4" />
              Choose Time
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-cream rounded-xl p-8 mb-10">
            <h3 className="font-heading font-bold text-secondary mb-4">
              What to Expect
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                A 30-minute consultation call ($50 fee)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                Discuss your specific needs and requirements
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                Learn how our services work
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                Get transparent pricing and timelines
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                No obligation to proceed further
              </li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Questions before booking? Reach us on{" "}
              <Link
                href="https://wa.me/254743634581"
                target="_blank"
                className="text-brand-gold font-medium hover:underline"
              >
                WhatsApp
              </Link>{" "}
              or email{" "}
              <Link
                href="mailto:aminiafrica.co@gmail.com"
                className="text-brand-gold font-medium hover:underline"
              >
                aminiafrica.co@gmail.com
              </Link>
              .
            </p>
            <p className="text-xs text-muted-foreground">
              By booking, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-secondary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
