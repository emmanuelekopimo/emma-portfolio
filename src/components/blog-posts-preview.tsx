import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export async function BlogPostsPreview() {
  const posts = await getAllBlogPosts();
  const displayedPosts = posts.slice(0, 3);

  const postImages: { [key: string]: string } = {
    "information-overload":
      "/images/information-overload-and-the%20future-of-learning.png",
    "future-study-materials":
      "/images/the-state-of-study-materials-in-nigerian-universities.png",
    "designing-for-constraints": "/images/designing-for-real-constraints.png",
  };

  return (
    <section className="reveal border-t border-[var(--line)] py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
            Writing
          </p>
          <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
            Insights from experience and curiosity.
          </h2>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Essays on product design, engineering, learning, and building in
            constraint.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex whitespace-nowrap rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[var(--accent-strong)] hover:shadow-lg"
        >
          Read more
        </Link>
      </div>

      {displayedPosts.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {displayedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] transition hover:border-[var(--accent)]"
            >
              <div
                className="h-48 overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url(${postImages[post.slug] || "/images/placeholder.png"})`,
                }}
              />
              <div className="border-t border-[var(--line)] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </p>
                <h3 className="mt-3 font-display text-xl text-[var(--ink)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {post.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
