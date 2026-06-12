import Link from "next/link";
import { Logo } from "@/components/brand/logo";

const services = [
  { label: "Concierge Services", href: "/services/concierge" },
  { label: "Property Verification", href: "/services/property-verification" },
  { label: "Procurement Support", href: "/services/procurement" },
  { label: "Travel & Relocation", href: "/services/relocation" },
  { label: "Business Support", href: "/services/business-support" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Founder", href: "/founder" },
  { label: "Mission & Vision", href: "/mission" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Industries We Serve", href: "/industries" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <Logo size="md" variant="light" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Your Trusted Sub-Saharan Partner for representation, verification,
              procurement, relocation, and business support services.
            </p>
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Amini Africa. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-gold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-gold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/book-consultation"
                className="inline-block bg-brand-gold text-secondary px-6 py-3 rounded-md text-sm font-semibold hover:bg-brand-gold/90 active:scale-[0.97] transition-all duration-150 hover:shadow-lg hover:shadow-brand-gold/30"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
