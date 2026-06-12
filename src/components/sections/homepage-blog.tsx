"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    title: "A Guide to Property Investment in Kenya for the Diaspora",
    description: "Everything you need to know about investing in Kenyan property from abroad, including legal requirements and due diligence.",
    date: "May 15, 2026",
    category: "Property Investment",
    slug: "property-investment-kenya",
  },
  {
    title: "Relocating to Nairobi: A Complete Guide for Returnees",
    description: "Practical advice for diaspora Kenyans and international professionals planning a move to Nairobi.",
    date: "Apr 20, 2026",
    category: "Relocation",
    slug: "relocation-tips-nairobi",
  },
  {
    title: "Building Resilient Supply Chains Across Sub-Saharan Africa",
    description: "How businesses can establish reliable supply chains across multiple African countries with proper vendor verification.",
    date: "Mar 10, 2026",
    category: "Business Support",
    slug: "diaspora-business-supply-chain",
  },
];

export function HomepageBlog() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(10,22,40,0.05),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 rounded-full px-4 py-1.5 mb-4">
            <BookOpen className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-brand-gold font-medium text-xs tracking-widest uppercase">Insights</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical advice and insights for diaspora Africans, investors, and
            professionals engaging with Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full"
              >
                <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-primary text-xs font-medium">{post.category}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="font-heading font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
