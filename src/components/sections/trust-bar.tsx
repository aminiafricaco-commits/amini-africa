"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Diaspora Alliance", init: "DA" },
  { name: "Africa Trade Group", init: "ATG" },
  { name: "Global Investors Network", init: "GIN" },
  { name: "Sub-Saharan Business Council", init: "SBC" },
  { name: "Pan-African Chamber", init: "PAC" },
  { name: "International Development Partners", init: "IDP" },
];

export function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium text-muted-foreground/60 uppercase tracking-[0.2em] mb-8"
        >
          Trusted by diaspora professionals, investors, and organizations
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg border border-current flex items-center justify-center">
                <span className="text-xs font-bold tracking-wider">{logo.init}</span>
              </div>
              <span className="text-sm font-medium hidden sm:inline">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
