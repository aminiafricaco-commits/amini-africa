"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  SearchX,
  DollarSign,
  Heart,
  MapPin,
  UserCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "We handle everything on the ground so you can focus on what matters most.",
  },
  {
    icon: Shield,
    title: "Protect Investments",
    description:
      "Thorough verification and due diligence to safeguard your interests.",
  },
  {
    icon: SearchX,
    title: "Avoid Fraud",
    description:
      "Rigorous checks and local knowledge help you avoid scams and bad deals.",
  },
  {
    icon: DollarSign,
    title: "Reduce Travel Costs",
    description:
      "Eliminate unnecessary travel. We are your eyes and ears on the ground.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Sleep well knowing a trusted professional is managing your affairs.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of local markets, regulations, and business practices.",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    description:
      "Every client gets a dedicated representative who understands their needs.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Why Choose Amini Africa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the trust, transparency, and local expertise you need to
            operate confidently across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-4"
            >
              <reason.icon className="h-6 w-6 text-brand-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
