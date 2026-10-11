import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import InquiryCTA from "../components/InquiryCTA";
import { getPortfolioBySlug, portfolio } from "../data/portfolio";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getPortfolioBySlug(slug || "");

  if (!project) return <Navigate to="/work" replace />;

  const idx = portfolio.findIndex((p) => p.slug === project.slug);
  const next = portfolio[(idx + 1) % portfolio.length];

  return (
    <div className="bg-cream pt-24">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 lg:px-12">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-oxblood"
          >
            <ArrowLeft size={14} /> All Work
          </Link>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-oxblood/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-oxblood">
            {project.category}
          </span>
          <span className="rounded-full border border-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/60">
            Demo / Concept Project
          </span>
        </div>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            {project.name}
          </h1>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mx-auto mt-12 max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
          </div>
        </div>
      </Reveal>

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_320px] lg:px-12">
        <Reveal>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Project Overview</p>
          <p className="max-w-2xl text-lg leading-relaxed text-black/75">{project.overview}</p>

          <p className="mb-4 mt-12 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Results</p>
          <p className="max-w-2xl text-base leading-relaxed text-black/60">
            {project.results ??
              "Results will be published here once this becomes a verified client engagement with measurable outcomes."}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8 rounded-2xl border border-black/10 bg-white p-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">Client</p>
              <p className="mt-1.5 text-base text-black">{project.client}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">Industry</p>
              <p className="mt-1.5 text-base text-black">{project.industry}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">Services Delivered</p>
              <ul className="mt-2 space-y-1.5">
                {project.servicesDelivered.map((s) => (
                  <li key={s} className="text-sm text-black/70">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <InquiryCTA service={project.category} label="Start a Similar Project" className="w-full justify-center" />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-black/10 bg-white py-16">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Next Project</p>
            <Link
              to={`/work/${next.slug}`}
              className="group mt-3 inline-flex items-center gap-3 font-display text-2xl font-medium tracking-tight transition-colors hover:text-oxblood sm:text-4xl"
            >
              {next.name}
              <ArrowUpRight size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
