import type { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Reveal from "./Reveal";

interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalLayout({ title, lastUpdated, intro, sections }: LegalLayoutProps) {
  return (
    <div>
      <PageHeader eyebrow="Legal" title={title} />
      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-xl border border-oxblood/25 bg-oxblood/5 p-5 text-sm leading-relaxed text-oxblood">
              This page is a working draft provided for transparency and should be reviewed by qualified legal
              counsel before being relied upon as a final, binding policy. Last updated: {lastUpdated}.
            </div>
            <p className="mt-8 text-base leading-relaxed text-black/70">{intro}</p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-display text-2xl font-medium tracking-tight">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-black/70">{section.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
