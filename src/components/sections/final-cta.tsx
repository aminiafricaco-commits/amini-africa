"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/business-meeting.jpg')" }}
      />
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/90 via-brand-gold/85 to-yellow-600/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="absolute top-10 left-10 w-48 h-48 rounded-full border border-white/10 animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/10 animate-float" style={{ animationDelay: "-4s" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a consultation today and discover how Amini Africa can be
            your trusted partner on the ground in Sub-Saharan Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="xl"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold shadow-xl shadow-secondary/30"
            >
              <Link href="/book-consultation">
                Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-secondary/40 text-secondary hover:bg-secondary hover:text-white hover:shadow-xl hover:shadow-secondary/30"
            >
              <Link
                href="https://wa.me/254743634581?text=Hello! I would like to learn more about Amini Africa services."
                target="_blank"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
