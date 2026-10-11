import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import InquiryCTA from "../components/InquiryCTA";
import { services } from "../data/services";

export default function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Everything a growing brand needs, under one roof."
        description="Branding, marketing, websites, apps, SaaS, search visibility, and AI automation — built by one accountable, strategy-first team."
      />

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={(idx % 2) * 0.06}>
                <Link
                  to={`/services/${service.slug}`}
                  data-cursor="pointer"
                  className="group flex h-full flex-col justify-between bg-cream p-9 transition-colors duration-300 hover:bg-oxblood sm:p-10"
                >
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-display text-3xl text-oxblood/50 transition-colors group-hover:text-cream/50">
                        {service.letter}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-black/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cream"
                      />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-medium leading-snug text-black transition-colors group-hover:text-cream sm:text-[26px]">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-black/60 transition-colors group-hover:text-cream/80">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-black/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-black/60 transition-colors group-hover:border-cream/30 group-hover:text-cream/80"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-medium tracking-tight sm:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/70">
              Tell us about your business and we'll recommend the right combination of services for your goals and budget.
            </p>
            <div className="mt-9 flex justify-center">
              <InquiryCTA label="Talk to Our Team" variant="light" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
