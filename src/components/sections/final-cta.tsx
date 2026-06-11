"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-gold via-brand-gold to-yellow-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a free consultation today and discover how Amini Africa can be
            your trusted partner on the ground in Sub-Saharan Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="xl"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold"
            >
              <Link href="/book-consultation">
                Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-secondary/40 text-secondary hover:bg-secondary hover:text-white"
            >
              <Link
                href="https://wa.me/254743634581?text=Hello! I'd like to learn more about Amini Africa's services."
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
