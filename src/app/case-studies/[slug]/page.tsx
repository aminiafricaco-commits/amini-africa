import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudies } from "@/lib/content";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Case Studies
        </Link>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="text-primary font-medium">{study.service}</span>
          <span>Client: {study.client}</span>
          <span>{study.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
          {study.title}
        </h1>

        <div className="prose prose-stone max-w-none">
          {study.content.split("\n").map((line, i) => {
            if (line.startsWith("# ")) {
              return (
                <h1 key={i} className="text-3xl font-bold text-secondary mt-8 mb-4">
                  {line.slice(2)}
                </h1>
              );
            }
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-secondary mt-8 mb-4">
                  {line.slice(3)}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-semibold text-secondary mt-6 mb-3">
                  {line.slice(4)}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-muted-foreground ml-4">
                  {line.slice(2)}
                </li>
              );
            }
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {line}
              </p>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
