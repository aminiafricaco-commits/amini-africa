import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert insights, guides, and resources on property verification, procurement, relocation, business support, and concierge services across Africa.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Insights & Resources
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert guides, tips, and resources to help you navigate property
            investment, procurement, relocation, and business in Sub-Saharan
            Africa.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We are building our library of resources. Check back soon for
              expert guides and insights about operating in Africa.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-border rounded-xl p-6 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="text-brand-gold font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-secondary mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-brand-gold">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
