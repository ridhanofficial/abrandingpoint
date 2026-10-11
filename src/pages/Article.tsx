import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import InquiryCTA from "../components/InquiryCTA";
import { getInsightBySlug, insights } from "../data/insights";

export default function Article() {
  const { slug } = useParams();
  const article = getInsightBySlug(slug || "");

  useEffect(() => {
    if (article) document.title = `${article.title} — A Branding Point Insights`;
    return () => {
      document.title = "A Branding Point — Branding, Marketing & Technology Agency";
    };
  }, [article]);

  if (!article) return <Navigate to="/insights" replace />;

  const related = insights.filter((i) => i.slug !== article.slug && i.category === article.category).slice(0, 2);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="bg-cream pt-24">
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8">
        <Reveal>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-oxblood"
          >
            <ArrowLeft size={14} /> All Insights
          </Link>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-oxblood">{article.category}</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black/55">
            <span>By {article.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <nav aria-label="Table of contents" className="mt-10 rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">In This Article</p>
            <ul className="mt-3 space-y-2">
              {article.content.map((section, idx) => (
                <li key={section.heading}>
                  <a
                    href={`#section-${idx}`}
                    className="text-sm text-black/70 transition-colors hover:text-oxblood"
                  >
                    {idx + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <div className="mt-12 space-y-10">
          {article.content.map((section, idx) => (
            <Reveal key={section.heading} delay={0.04 * idx}>
              <h2 id={`section-${idx}`} className="scroll-mt-28 font-display text-2xl font-medium tracking-tight">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-black/75">{section.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-black/10 pt-8">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-black/40">Share</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-black/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-black/70 transition-colors hover:border-oxblood hover:text-oxblood"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-black/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-black/70 transition-colors hover:border-oxblood hover:text-oxblood"
            >
              X / Twitter
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}
              className="rounded-full border border-black/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-black/70 transition-colors hover:border-oxblood hover:text-oxblood"
            >
              Email
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 rounded-2xl bg-oxblood p-8 text-center text-cream sm:p-10">
            <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/80">
              Let's talk about how strategy, creativity, and technology can move your business forward.
            </p>
            <div className="mt-6 flex justify-center">
              <InquiryCTA label="Start Your Project" variant="light" />
            </div>
          </div>
        </Reveal>
      </article>

      {related.length > 0 && (
        <section className="border-t border-black/10 bg-white py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Related Articles</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} to={`/insights/${r.slug}`} className="group border-t border-black/15 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oxblood">{r.category}</p>
                  <h3 className="mt-2 font-display text-xl font-medium transition-colors group-hover:text-oxblood">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
