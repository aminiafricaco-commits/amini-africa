import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted relative overflow-hidden">
      <div className="relative text-center px-4">
        <span className="font-heading text-[10rem] md:text-[14rem] font-bold text-foreground/[0.04] leading-none select-none block mb-[-2rem]">
          404
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 relative">
          Page Not Found
        </h1>
        <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-6 rounded-full" />
        <p className="text-foreground/90 max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-white active:scale-[0.97] transition-all duration-200"
          >
            <Search className="h-5 w-5" />
            Contact Us
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-foreground/90">
          <Link href="/about" className="hover:text-foreground/90 transition-colors">About</Link>
          <Link href="/blog" className="hover:text-foreground/90 transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-foreground/90 transition-colors">Contact</Link>
          <Link href="/book-consultation" className="hover:text-foreground/90 transition-colors">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
