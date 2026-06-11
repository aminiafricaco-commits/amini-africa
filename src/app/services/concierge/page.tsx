import type { Metadata } from "next";
import Link from "next/link";
import { ConciergeBell, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Concierge & Lifestyle Management",
  description:
    "Personal errands, executive assistance, family support, and lifestyle management services across Sub-Saharan Africa. Save time and focus on what matters most.",
};

const services = [
  "Personal Errands & Task Management",
  "Executive Assistance",
  "Family Support Services",
  "Personal Shopping & Product Sourcing",
  "Appointment Scheduling & Coordination",
  "Event Planning & Coordination",
  "Restaurant & Travel Reservations",
  "VIP Assistance & Hospitality",
  "Lifestyle Management Programs",
  "Local Representation & Liaison",
];

const benefits = [
  "Save valuable time for what matters most",
  "Professional handling of personal affairs",
  "Reliable local presence you can trust",
  "Regular updates and transparent communication",
  "Flexible, personalized service packages",
  "Peace of mind knowing things are handled",
];

export default function ConciergePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ConciergeBell className="h-14 w-14 text-brand-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Concierge & Lifestyle Management
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Let us handle the details. Our concierge services provide
            professional, discreet, and reliable support for all your personal
            and lifestyle needs across Africa. From running errands to managing
            complex family matters, we are your trusted local representative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Services We Offer
            </h2>
            <div className="space-y-4">
              {services.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                  <span className="text-secondary/80">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-cream rounded-xl p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              Client Benefits
            </h2>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                  <span className="text-secondary/80">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-secondary text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need Personal Support in Africa?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Whether you need someone to handle errands, coordinate family
            matters, or manage your lifestyle needs, we are here to help.
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
