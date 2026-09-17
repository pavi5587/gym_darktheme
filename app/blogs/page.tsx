import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Training, nutrition, and mindset articles from Guru at Gurusthetics.",
};

export default function BlogsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Blogs</p>
          <h1 className="mt-3 max-w-2xl text-4xl text-bone sm:text-6xl">
            Training, nutrition & mindset notes.
          </h1>
          <p className="mt-4 max-w-xl font-body text-sm text-bone-dim sm:text-base">
            Real, practical writing from Guru — no fluff, no clickbait.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal
              key={post.slug}
              delay={(i % 3) * 80}
              className="flex flex-col justify-between bg-ink p-7 transition-colors hover:bg-ink-soft"
            >
              <article>
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ember">
                  {post.category}
                </p>
                <h2 className="mt-3 font-display text-xl leading-tight text-bone">
                  {post.title}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-bone-dim">
                  {post.excerpt}
                </p>
              </article>
              <p className="mt-6 font-body text-xs text-bone-dim">
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}{" "}
                · {post.readTime} read
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
