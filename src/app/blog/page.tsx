import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const postImages: { [key: string]: string } = {
    "information-overload":
      "/images/information-overload-and-the%20future-of-learning.png",
    "future-study-materials":
      "/images/the-state-of-study-materials-in-nigerian-universities.png",
    "designing-for-constraints": "/images/designing-for-real-constraints.png",
  };

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="pb-16 pt-16 md:pt-24">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
          >
            ← Back to home
          </Link>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              Writing & Thoughts
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              Insights from experience and curiosity.
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)]">
              Essays on product design, engineering, learning, and building in
              constraint.
            </p>
          </div>
        </section>

        <section className="reveal border-t border-[var(--line)] py-16">
          {posts.length === 0 ? (
            <p className="text-[var(--muted)]">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
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
      </main>

      <footer className="border-t border-[var(--line)] py-10 text-center text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
        © {new Date().getFullYear()} Emmanuel Akpan
      </footer>
    </div>
  );
}
