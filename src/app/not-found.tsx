import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,114,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,165,114,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,165,114,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative text-center px-4">
        <span className="font-heading text-[10rem] md:text-[14rem] font-bold text-brand-gold/10 leading-none select-none block mb-[-2rem]">
          404
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 relative">
          Page Not Found
        </h1>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6 rounded-full" />
        <p className="text-white/60 max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-brand-gold/90 hover:shadow-lg hover:shadow-brand-gold/25 active:scale-[0.97] transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
          >
            <Search className="h-5 w-5" />
            Browse Services
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/30">
          <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
          <Link href="/blog" className="hover:text-white/60 transition-colors">Insights</Link>
          <Link href="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          <Link href="/book-consultation" className="hover:text-white/60 transition-colors">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
