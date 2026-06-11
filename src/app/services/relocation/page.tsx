import type { Metadata } from "next";
import Link from "next/link";
import { Plane, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel & Relocation Support",
  description:
    "Relocation planning, airport transfers, accommodation research, settling-in services, and travel coordination across Sub-Saharan Africa.",
};

const services = [
  "Relocation Planning & Project Management",
  "Airport Transfers & Meet-and-Greet",
  "Accommodation Research & Viewings",
  "Area Orientation & City Tours",
  "School Research & Enrollment Support",
  "Utility Setup (Electricity, Water, Internet)",
  "Vehicle Purchase & Registration Assistance",
  "Settling-In Services & Ongoing Support",
  "Travel Coordination & Itinerary Planning",
  "Family Support During Transition",
];

const benefits = [
  "Move with complete confidence",
  "Avoid relocation headaches",
  "Settle in faster with local support",
  "Find the right home and school",
  "Get set up before you arrive",
  "Have a local guide every step of the way",
];

export default function RelocationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Plane className="h-14 w-14 text-brand-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Travel & Relocation Support
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Moving to Africa? Let us handle the logistics. From airport pickup
            to finding your new home, we provide comprehensive relocation
            support to make your transition smooth and stress-free.
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
            Planning a Move to Africa?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let us help you relocate smoothly. We handle the details so you can
            focus on starting your new chapter.
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
