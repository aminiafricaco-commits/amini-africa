"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Phone, Calendar, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
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

export function MobileLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center">
            <Logo size="sm" variant="dark" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="https://wa.me/254743634581"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white shadow-xl"
            >
              <div className="flex items-center justify-between px-4 h-14 border-b border-border">
                <span className="font-semibold text-secondary">Menu</span>
                <button onClick={() => setDrawerOpen(false)} className="text-secondary/60">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="overflow-y-auto h-[calc(100%-3.5rem)] px-4 py-4 space-y-1">
                <Link
                  href="/"
                  className="block py-3 text-base font-medium text-secondary"
                  onClick={() => setDrawerOpen(false)}
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-base font-medium text-secondary"
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-1 border-l-2 border-brand-gold/30 ml-2">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="block py-2.5 text-sm text-secondary/70"
                              onClick={() => setDrawerOpen(false)}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="flex items-center justify-between w-full py-3 text-base font-medium text-secondary"
                  >
                    Company
                    <ChevronDown className={cn("h-4 w-4 transition-transform", companyOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {companyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-1 border-l-2 border-brand-gold/30 ml-2">
                          {company.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block py-2.5 text-sm text-secondary/70"
                              onClick={() => setDrawerOpen(false)}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/blog"
                  className="block py-3 text-base font-medium text-secondary"
                  onClick={() => setDrawerOpen(false)}
                >
                  Insights
                </Link>
                <Link
                  href="/faqs"
                  className="block py-3 text-base font-medium text-secondary"
                  onClick={() => setDrawerOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 text-base font-medium text-secondary"
                  onClick={() => setDrawerOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 space-y-3">
                  <Link
                    href="/book-consultation"
                    className="block w-full text-center bg-brand-gold text-secondary py-3.5 rounded-lg font-semibold text-base active:scale-[0.97] transition-all duration-150 hover:shadow-lg hover:shadow-brand-gold/30"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    href="https://wa.me/254743634581"
                    target="_blank"
                    className="block w-full text-center border-2 border-green-500 text-green-600 py-3.5 rounded-lg font-semibold text-base"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <MessageCircle className="inline h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Page content */}
      <main className="pt-14">{children}</main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          <Link href="/" className="flex flex-col items-center gap-0.5 text-secondary/60">
            <Home className="h-5 w-5" />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link href="/services" className="flex flex-col items-center gap-0.5 text-secondary/60">
            <Menu className="h-5 w-5" />
            <span className="text-[10px] font-medium">Services</span>
          </Link>
          <Link
            href="/book-consultation"
            className="relative -top-3 flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shadow-lg">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <span className="text-[10px] font-medium text-brand-gold mt-0.5">Book</span>
          </Link>
          <Link href="/contact" className="flex flex-col items-center gap-0.5 text-secondary/60">
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">Contact</span>
          </Link>
          <Link
            href="https://wa.me/254743634581"
            target="_blank"
            className="flex flex-col items-center gap-0.5 text-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-[10px] font-medium">WhatsApp</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
