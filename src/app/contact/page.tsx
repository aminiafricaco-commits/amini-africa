import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Amini Africa. Reach us via email, WhatsApp, or book a consultation for representation and support services across Sub-Saharan Africa.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We would love to hear from you. Whether you have a question about
              our services, need a quote, or want to discuss a specific project,
              we are here to help.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Email</h3>
                  <Link
                    href="mailto:aminiafrica.co@gmail.com"
                    className="text-brand-gold hover:underline"
                  >
                    aminiafrica.co@gmail.com
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    WhatsApp
                  </h3>
                  <Link
                    href="https://wa.me/254743634581"
                    target="_blank"
                    className="text-brand-gold hover:underline"
                  >
                    Chat on WhatsApp
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Quick responses during business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Serving clients across Sub-Saharan Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">
                    Response Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We aim to respond to all inquiries within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              Book a Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="bg-white border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Send Us a Message
            </h2>

            <div className="text-center p-10 bg-brand-cream rounded-lg">
              <Mail className="h-16 w-16 text-brand-gold mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">
                Contact Form
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use the link below to access our contact form. Your message
                will be sent directly to our team.
              </p>
              <Link
                href="https://tally.so/r/Gx7eZp"
                target="_blank"
                className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
              >
                Open Contact Form
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-secondary">
                Prefer to use a form?
              </h3>
              <p className="text-sm text-muted-foreground">
                You can also use our Google Form to submit your inquiry:
              </p>
              <Link
                href="https://forms.google.com/your-form-id"
                target="_blank"
                className="text-sm text-brand-gold font-medium hover:underline"
              >
                Google Form Link &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
