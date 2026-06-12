"use client";

import { motion } from "framer-motion";
import { getAnimatedIcon } from "@/components/ui/animated-icons";

const reasons = [
  {
    icon: "clock",
    title: "Save Time",
    description:
      "We handle everything on the ground so you can focus on what matters most.",
  },
  {
    icon: "lock",
    title: "Protect Investments",
    description:
      "Thorough verification and due diligence to safeguard your interests.",
  },
  {
    icon: "search",
    title: "Avoid Fraud",
    description:
      "Rigorous checks and local knowledge help you avoid scams and bad deals.",
  },
  {
    icon: "globe",
    title: "Reduce Travel Costs",
    description:
      "Eliminate unnecessary travel. We are your eyes and ears on the ground.",
  },
  {
    icon: "heart",
    title: "Peace of Mind",
    description:
      "Sleep well knowing a trusted professional is managing your affairs.",
  },
  {
    icon: "compass",
    title: "Local Expertise",
    description:
      "Deep knowledge of local markets, regulations, and business practices.",
  },
  {
    icon: "agent",
    title: "Personalized Support",
    description:
      "Every client gets a dedicated representative who understands their needs.",
  },
];

export function AnimatedIconsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reasons.map((reason, index) => {
        const IconComponent = getAnimatedIcon(reason.icon);
        return (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-white rounded-2xl p-6 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-white border border-primary/20 mb-4 group-hover:from-primary/25 group-hover:scale-105 transition-all duration-300">
              <IconComponent className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
