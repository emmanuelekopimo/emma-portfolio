"use server";

import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: any;
}

const BLOG_DIRECTORY = path.join(process.cwd(), "src/content/blog");

export async function getAllBlogPosts(): Promise<Omit<BlogPost, 'content'>[]> {
  const files = fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(BLOG_DIRECTORY, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || "",
      date: data.date || new Date().toISOString(),
      summary: data.summary || "",
    };
  });

  // Sort by date, newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const compiled = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
      },
    });

    return {
      slug,
      title: data.title || "",
      date: data.date || new Date().toISOString(),
      summary: data.summary || "",
      content: compiled,
    };
  } catch (error) {
    console.error(`Error compiling MDX for ${slug}:`, error);
    return null;
  }
}
