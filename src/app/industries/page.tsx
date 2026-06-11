import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Heart,
  Briefcase,
  Globe,
  Users,
  Landmark,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Amini Africa serves diaspora Africans, investors, businesses, NGOs, expatriates, and global professionals across Sub-Saharan Africa.",
};

const industries = [
  {
    icon: Users,
    title: "Diaspora Community",
    description:
      "Africans living abroad who need trusted representation for property, family matters, investments, and business interests back home.",
    clients: [
      "Property buyers and investors",
      "Family representatives",
      "Business owners",
      "Professionals managing affairs from abroad",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate & Property",
    description:
      "International property investors, real estate developers, and individuals needing verification, due diligence, and on-site support.",
    clients: [
      "Property developers",
      "Real estate investment firms",
      "Individual property buyers",
      "Property managers",
    ],
  },
  {
    icon: Briefcase,
    title: "Business & Enterprise",
    description:
      "Companies expanding into African markets who need reliable local support for operations, compliance, and partner verification.",
    clients: [
      "International businesses",
      "Startups entering African markets",
      "Supply chain managers",
      "Corporate executives",
    ],
  },
  {
    icon: Heart,
    title: "NGOs & Development",
    description:
      "Non-governmental organizations and development agencies needing field support, vendor verification, and program monitoring.",
    clients: [
      "International NGOs",
      "Development agencies",
      "Social enterprises",
      "Humanitarian organizations",
    ],
  },
  {
    icon: Globe,
    title: "Expatriates & Professionals",
    description:
      "Global professionals relocating to Africa who need support with housing, schools, utilities, and settling in.",
    clients: [
      "Expats moving to Africa",
      "Contract workers",
      "Diplomats and embassy staff",
      "Remote workers relocating",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Diplomatic",
    description:
      "Government agencies, diplomatic missions, and international organizations needing trusted local representation and support services.",
    clients: [
      "Diplomatic missions",
      "Government agencies",
      "International organizations",
      "Trade delegations",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We support a diverse range of clients across multiple sectors, all
            united by one common need: trusted representation on the ground in
            Sub-Saharan Africa.
          </p>
        </div>

        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <industry.icon className="h-12 w-12 text-brand-gold mb-4" />
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  {industry.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <h3 className="font-semibold text-secondary mb-3">
                  Who We Support
                </h3>
                <ul className="space-y-2">
                  {industry.clients.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                      <span className="text-secondary/80">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`bg-brand-cream rounded-xl p-10 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  How We Help
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-secondary/80">
                    <ArrowRight className="h-4 w-4 text-brand-gold mt-1 shrink-0" />
                    Trusted local representation
                  </li>
                  <li className="flex items-start gap-3 text-secondary/80">
                    <ArrowRight className="h-4 w-4 text-brand-gold mt-1 shrink-0" />
                    Professional verification & reporting
                  </li>
                  <li className="flex items-start gap-3 text-secondary/80">
                    <ArrowRight className="h-4 w-4 text-brand-gold mt-1 shrink-0" />
                    Regular updates & communication
                  </li>
                  <li className="flex items-start gap-3 text-secondary/80">
                    <ArrowRight className="h-4 w-4 text-brand-gold mt-1 shrink-0" />
                    Transparent pricing & accountability
                  </li>
                  <li className="flex items-start gap-3 text-secondary/80">
                    <ArrowRight className="h-4 w-4 text-brand-gold mt-1 shrink-0" />
                    Dedicated client relationship manager
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
