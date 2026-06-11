import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real examples of how Amini Africa has helped clients with property verification, procurement, relocation, and business support across Africa.",
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real examples of how we have helped our clients achieve their goals
            across Sub-Saharan Africa.
          </p>
        </div>

        {studies.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Case Studies Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We are documenting our success stories. Check back soon to see
              how we have helped clients across Africa.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group border border-border rounded-xl p-8 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-brand-gold font-medium mb-3">
                  {study.service}
                </div>
                <h2 className="text-xl font-semibold text-secondary mb-3 group-hover:text-brand-gold transition-colors">
                  {study.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Client: {study.client}
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-brand-gold">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
