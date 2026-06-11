import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  service: string;
  date: string;
  content: string;
}

const blogDir = path.join(process.cwd(), "src", "content", "blog");
const caseStudyDir = path.join(
  process.cwd(),
  "src",
  "content",
  "case-studies"
);

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Amini Africa",
        category: data.category || "Uncategorized",
        image: data.image || "",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Amini Africa",
      category: data.category || "Uncategorized",
      image: data.image || "",
      content,
    };
  } catch {
    return null;
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(caseStudyDir)) return [];
  const files = fs.readdirSync(caseStudyDir);
  const studies = files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      const raw = fs.readFileSync(path.join(caseStudyDir, f), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        client: data.client || "",
        service: data.service || "",
        date: data.date || "",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return studies;
}

export function getCaseStudy(slug: string): CaseStudy | null {
  try {
    const filePath = path.join(caseStudyDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      client: data.client || "",
      service: data.service || "",
      date: data.date || "",
      content,
    };
  } catch {
    return null;
  }
}
