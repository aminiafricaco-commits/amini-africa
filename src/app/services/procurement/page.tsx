import type { Metadata } from "next";
import Link from "next/link";
import { Truck, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Procurement & Supply Chain Support",
  description:
    "Product sourcing, vendor verification, quality assurance, and supply chain support services across Sub-Saharan Africa.",
};

const services = [
  "Product Sourcing & Identification",
  "Vendor Verification & Background Checks",
  "Factory Visits & Production Inspections",
  "Quality Assurance & Quality Control",
  "Procurement Audits & Reviews",
  "Supplier Negotiation Support",
  "Order & Delivery Monitoring",
  "Export Documentation Support",
  "Vendor Management & Relationship Building",
  "Supply Chain Risk Assessment",
];

const benefits = [
  "Source products with confidence",
  "Verify suppliers before engaging",
  "Ensure quality through local inspections",
  "Reduce supply chain risks",
  "Get professional procurement support",
  "Save time with local expertise",
];

export default function ProcurementPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Truck className="h-14 w-14 text-brand-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Procurement & Supply Chain Support
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Source products and manage suppliers across Africa with confidence.
            Our local team verifies vendors, inspects facilities, and monitors
            deliveries to ensure you get exactly what you pay for.
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
            Need Help Sourcing from Africa?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let us verify your suppliers, inspect your products, and ensure
            your supply chain runs smoothly.
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
