import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/content";
import { Calendar, ArrowLeft, User } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Insights
        </Link>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" /> {post.author}
          </span>
          <span className="text-brand-gold font-medium">{post.category}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg text-muted-foreground mb-10">
            {post.description}
          </p>
        )}

        <div className="prose prose-stone max-w-none">
          {post.content.split("\n").map((line, i) => {
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
            className="inline-flex items-center gap-2 bg-brand-gold text-secondary px-6 py-3 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
