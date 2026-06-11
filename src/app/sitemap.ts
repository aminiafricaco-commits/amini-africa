import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aminiafrica.co";

  const staticPages = [
    "",
    "/about",
    "/founder",
    "/mission",
    "/why-choose-us",
    "/services",
    "/services/concierge",
    "/services/property-verification",
    "/services/procurement",
    "/services/relocation",
    "/services/business-support",
    "/industries",
    "/blog",
    "/case-studies",
    "/faqs",
    "/book-consultation",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
