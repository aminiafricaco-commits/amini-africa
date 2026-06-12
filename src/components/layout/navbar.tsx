"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-secondary">
              AMINI
            </span>
            <span className="text-2xl font-light text-primary">
              AFRICA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-secondary/80 hover:text-secondary transition-colors">
                Services <ChevronDown className="h-3 w-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-secondary/80 hover:text-secondary hover:bg-accent/20 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-secondary/80 hover:text-secondary transition-colors">
                Company <ChevronDown className="h-3 w-3" />
              </button>
              {companyOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  {company.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm text-secondary/80 hover:text-secondary hover:bg-accent/20 transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium text-secondary/80 hover:text-secondary transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/faqs"
              className="text-sm font-medium text-secondary/80 hover:text-secondary transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-secondary/80 hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Button asChild size="lg" className="ml-2">
              <Link href="/book-consultation">Book a Consultation</Link>
            </Button>
          </nav>

          <button
            className="lg:hidden text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t max-h-screen overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-secondary"
              >
                Services <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-secondary/70"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-secondary"
              >
                Company <ChevronDown className={cn("h-4 w-4 transition-transform", companyOpen && "rotate-180")} />
              </button>
              {companyOpen && (
                <div className="pl-4 space-y-1">
                  {company.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block py-2 text-sm text-secondary/70"
                      onClick={() => setMobileOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block py-2 text-sm font-medium text-secondary"
              onClick={() => setMobileOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/faqs"
              className="block py-2 text-sm font-medium text-secondary"
              onClick={() => setMobileOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium text-secondary"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-4" size="lg">
              <Link href="/book-consultation" onClick={() => setMobileOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
