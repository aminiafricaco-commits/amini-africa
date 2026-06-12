"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar with slides */}
      <div className="bg-secondary text-white/70 text-xs text-center py-1.5 hidden lg:block">
        <span className="inline-flex items-center gap-4">
          <span>WhatsApp: +254 743 634 581</span>
          <span className="w-px h-3 bg-white/20" />
          <span>Email: aminiafrica.co@gmail.com</span>
          <span className="w-px h-3 bg-white/20" />
          <Link href="/book-consultation" className="text-white/80 hover:text-white hover:underline font-medium">
            Book a Consultation &rarr;
          </Link>
        </span>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center shrink-0">
              <Logo size="md" variant="dark" />
            </Link>

            <nav className="flex items-center gap-8">
              {/* Services dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-secondary/70 hover:text-secondary transition-colors py-2">
                  Services <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-border py-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-2.5 text-sm text-secondary/70 hover:text-secondary hover:bg-accent/20 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Company dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-secondary/70 hover:text-secondary transition-colors py-2">
                  Company <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                  <div className="bg-white rounded-xl shadow-xl border border-border py-2">
                    {company.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-5 py-2.5 text-sm text-secondary/70 hover:text-secondary hover:bg-accent/20 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/blog" className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors">
                Insights
              </Link>
              <Link href="/faqs" className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors">
                FAQs
              </Link>
              <Link href="/contact" className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors">
                Contact
              </Link>

              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <Link
                  href="https://wa.me/254743634581"
                  target="_blank"
                  className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  WhatsApp
                </Link>
                <Button asChild size="lg" variant="gold">
                  <Link href="/book-consultation">Book a Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
