import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Clock, ArrowRight, Sparkles, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Amini Africa. Reach us via email, WhatsApp, or book a consultation for representation and support services across Sub-Saharan Africa.",
};

const channels = [
  {
    icon: Mail,
    title: "Email",
    value: "aminiafrica.co@gmail.com",
    href: "mailto:aminiafrica.co@gmail.com",
    note: "We respond within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+254 743 634 581",
    href: "https://wa.me/254743634581",
    note: "Quick responses during business hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Serving clients across Sub-Saharan Africa",
    href: null,
    note: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    href: null,
    note: "Mon-Fri, 8 AM - 6 PM EAT",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="relative pt-36 pb-20 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,147,42,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,147,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(200,147,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-brand-gold/20 rounded-full px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Contact</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <div className="w-16 h-0.5 bg-brand-gold mb-6 rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We would love to hear from you. Whether you have a question about
              our services, need a quote, or want to discuss a specific project,
              we are here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-8">
                        Reach Us
              </h2>
              <div className="space-y-5">
                {channels.map((ch) => (
                  <div key={ch.title} className="flex items-start gap-4 bg-brand-cream/40 rounded-xl p-5 border border-brand-gold/5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-brand-gold/20 shrink-0">
                      <ch.icon className="h-6 w-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-0.5">{ch.title}</h3>
                      {ch.href ? (
                        <Link href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} className="text-brand-gold font-medium hover:underline text-sm">
                          {ch.value} {ch.href.startsWith("http") && <ExternalLink className="h-3 w-3 inline" />}
                        </Link>
                      ) : (
                        <p className="text-sm text-muted-foreground">{ch.value}</p>
                      )}
                      {ch.note && <p className="text-xs text-muted-foreground mt-0.5">{ch.note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
                >
                  Book a Consultation <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-cream/60 to-brand-cream/20 rounded-2xl p-8 lg:p-10 border border-brand-gold/10">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Send Us a Message
              </h2>
              <div className="bg-white rounded-xl p-8 border border-border text-center">
                <Mail className="h-16 w-16 text-brand-gold mx-auto mb-4" />
                <h3 className="font-heading font-bold text-secondary text-lg mb-2">
                  Contact Form
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Use our questionnaire form to send a detailed message. We will
                  respond within 24 hours.
                </p>
                <Link
                  href="https://tally.so/r/Gx7eZp"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
                >
                  Open Contact Form <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Prefer to email directly? Write to{" "}
                <Link href="mailto:aminiafrica.co@gmail.com" className="text-brand-gold hover:underline">
                  aminiafrica.co@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,147,42,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Book a consultation today and discover how Amini Africa can be your
            trusted partner on the ground in Sub-Saharan Africa.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
          >
            Book Your Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
