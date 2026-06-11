import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MessageCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free consultation with Amini Africa. Discuss your needs for representation, verification, procurement, relocation, or business support across Sub-Saharan Africa.",
};

export default function BookConsultationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Book a Free Consultation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ready to get started? Book a free consultation to discuss your
              needs. We will learn about your situation, explain how we can
              help, and provide transparent pricing.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <Calendar className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    Schedule Online
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Use the calendar tool to pick a time that works for you.
                    We offer flexible scheduling across different time zones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer instant messaging? Reach us on WhatsApp for a quick
                    conversation.
                  </p>
                  <Link
                    href="https://wa.me/254743634581"
                    target="_blank"
                    className="text-sm text-brand-gold font-medium hover:underline"
                  >
                    Chat Now &rarr;
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    Email Us
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Prefer email? Send us a message and we will respond within
                    24 hours.
                  </p>
                  <Link
                    href="mailto:aminiafrica.co@gmail.com"
                    className="text-sm text-brand-gold font-medium hover:underline"
                  >
                    aminiafrica.co@gmail.com &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream rounded-xl p-6">
              <h3 className="font-semibold text-secondary mb-2">
                What to Expect
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  &bull; A 30-minute free consultation call
                </li>
                <li className="flex items-start gap-2">
                  &bull; Discuss your specific needs and requirements
                </li>
                <li className="flex items-start gap-2">
                  &bull; Learn how our services work
                </li>
                <li className="flex items-start gap-2">
                  &bull; Get transparent pricing and timelines
                </li>
                <li className="flex items-start gap-2">
                  &bull; No obligation, no pressure
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-muted-foreground mb-6">
              Select a date and time that works for you. We will send a
              confirmation email with call details.
            </p>

            <div className="text-center p-10 bg-brand-cream rounded-lg">
              <Calendar className="h-16 w-16 text-brand-gold mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">
                Calendly Integration
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Click below to launch the scheduling tool and pick your
                preferred time.
              </p>
              <Link
                href="https://calendly.com/aminiafrica-co"
                target="_blank"
                className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
              >
                <Calendar className="h-5 w-5" />
                Open Scheduling Page
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                By scheduling, you agree to our{" "}
                <Link href="/privacy" className="underline hover:text-secondary">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
