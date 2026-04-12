import { getAllBlogPosts, getBlogPost } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const postImages: { [key: string]: string } = {
    "information-overload":
      "/images/information-overload-and-the%20future-of-learning.png",
    "future-study-materials":
      "/images/the-state-of-study-materials-in-nigerian-universities.png",
    "designing-for-constraints": "/images/designing-for-real-constraints.png",
  };

  const allPosts = await getAllBlogPosts();
  const postIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  const prevPost =
    postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-3xl px-6">
        <section className="pb-12 pt-16 md:pt-24">
          <Link
            href="/blog"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            ← Back to writing
          </Link>

          <article className="mt-8">
            <div
              className="mb-8 h-64 overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${postImages[slug] || "/images/placeholder.png"})`,
              }}
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
                {post.title}
              </h1>
            </div>

            <div className="prose prose-sm mt-12 max-w-none text-[var(--muted)]">
              {post.content.content}
            </div>
          </article>
        </section>

        <section className="border-t border-[var(--line)] py-16">
          <div className="space-y-8">
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col gap-3 transition hover:opacity-70"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Next post
                </p>
                <h3 className="font-display text-xl text-[var(--ink)] group-hover:underline">
                  {nextPost.title}
                </h3>
              </Link>
            )}

            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col gap-3 transition hover:opacity-70"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Previous post
                </p>
                <h3 className="font-display text-xl text-[var(--ink)] group-hover:underline">
                  {prevPost.title}
                </h3>
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-10 text-center text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
        © {new Date().getFullYear()} Emmanuel Akpan
      </footer>
    </div>
  );
}
