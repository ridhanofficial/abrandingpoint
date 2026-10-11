import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
}

export default function PageHeader({ eyebrow, title, description, dark = false }: PageHeaderProps) {
  return (
    <section
      className={`relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44 ${
        dark ? "bg-black text-cream" : "bg-cream text-black"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p
            className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] ${
              dark ? "text-oxblood-light" : "text-oxblood"
            }`}
          >
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-cream/70" : "text-black/65"}`}>
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
