import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import InquiryCTA from "../components/InquiryCTA";
import { getServiceBySlug, services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];

  return (
    <div>
      <section className="relative overflow-hidden bg-cream pb-16 pt-36 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-oxblood"
            >
              <ArrowLeft size={14} /> All Services
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <Reveal>
                <span className="font-display text-5xl text-oxblood/40">{service.letter}</span>
                <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
                  {service.name}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/65">{service.tagline}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/70">{service.description}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-10">
                  <InquiryCTA service={service.name} label={`Start a ${service.shortName} Project`} />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-black/10 bg-white p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oxblood">Capabilities</p>
                <ul className="mt-5 space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-black/75">
                      <Check size={15} className="mt-0.5 flex-shrink-0 text-oxblood" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Business Benefits</p>
            <ul className="space-y-6">
              {service.benefits.map((b) => (
                <li key={b} className="border-t border-black/10 pt-5 text-base leading-relaxed text-black/75">
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Deliverables</p>
            <ul className="space-y-6">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 border-t border-black/10 pt-5 text-base leading-relaxed text-black/75">
                  <Check size={16} className="mt-1 flex-shrink-0 text-oxblood" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-oxblood py-16 text-cream sm:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/60">Up Next</p>
            <Link
              to={`/services/${next.slug}`}
              className="group mt-3 inline-flex items-center gap-3 font-display text-3xl font-medium tracking-tight transition-colors hover:text-cream/80 sm:text-4xl"
            >
              {next.name}
              <span className="btn-icon"><ArrowUpRight size={26} /></span>
            </Link>
          </div>
          <InquiryCTA service={service.name} label="Discuss Your Project" variant="light" />
        </div>
      </section>
    </div>
  );
}
