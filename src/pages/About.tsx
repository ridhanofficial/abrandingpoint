import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import InquiryCTA from "../components/InquiryCTA";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const storyBlocks = [
  {
    title: "Our Story",
    body: "A Branding Point was founded to close the gap between creative strategy and modern technology — helping businesses build brands that are both meaningful and measurable.",
  },
  {
    title: "Our Mission",
    body: "To give growing businesses access to the same caliber of strategic branding, marketing, and technology expertise typically reserved for larger organizations.",
  },
  {
    title: "Our Vision",
    body: "A future where every ambitious business has a brand and digital presence that genuinely reflects the quality of what they do.",
  },
  {
    title: "Our Approach",
    body: "We start with strategy, not templates. Every engagement begins with understanding your business, your audience, and what success actually looks like for you.",
  },
];

const differentiators = [
  "One accountable team across branding, marketing, and technology — no hand-offs between disconnected vendors.",
  "Strategy-first engagements grounded in your real business goals, not generic playbooks.",
  "Transparent reporting and honest timelines, with no invented results or guaranteed rankings.",
  "A technology foundation that supports your brand today and scales with you tomorrow.",
];

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About A Branding Point"
        title="Built on Ideas. Driven by Possibility."
        description="A Branding Point brings creative strategy and modern technology together to help businesses build stronger brands, create meaningful digital experiences, and unlock new opportunities for growth."
      />

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
            {storyBlocks.map((block, idx) => (
              <Reveal key={block.title} delay={(idx % 2) * 0.08}>
                <div className="h-full bg-white p-9 sm:p-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-oxblood">{block.title}</p>
                  <p className="mt-4 text-lg leading-relaxed text-black/75">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-black py-24 text-cream sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood-light">
              What Makes Us Different
            </p>
            <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              A single, accountable partner for your brand.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {differentiators.map((d, idx) => (
              <Reveal key={d} delay={idx * 0.08}>
                <div className="flex gap-5 border-t border-cream/15 pt-6">
                  <span className="font-display text-2xl text-oxblood-light/70">0{idx + 1}</span>
                  <p className="text-base leading-relaxed text-cream/80">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Meet the Founder</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[360px_1fr]">
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-oxblood via-oxblood-dark to-black">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cream/30 font-display text-4xl text-cream">
                    SV
                  </div>
                  <p className="px-8 text-xs uppercase tracking-[0.2em] text-cream/60">
                    Founder portrait reserved for Sivabalan Vadivel
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <h3 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Sivabalan Vadivel</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-oxblood">Founder, A Branding Point</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/75">
                Meet Sivabalan Vadivel, the founder of A Branding Point. With a vision to connect bold creative thinking
                with practical digital solutions, he is building an agency focused on helping businesses strengthen
                their brands and move forward with confidence.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/50">
                This is draft introductory copy. It will be refined with Sivabalan's full professional background,
                achievements, and biography as that information is provided.
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                data-cursor="pointer"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-black/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-black transition-colors hover:border-oxblood hover:text-oxblood"
              >
                <LinkedinIcon size={15} />
                Connect on LinkedIn
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-oxblood py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-medium tracking-tight sm:text-5xl">
              Let's build your next chapter together.
            </h2>
            <div className="mt-9 flex justify-center">
              <InquiryCTA label="Start a Conversation" variant="light" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
