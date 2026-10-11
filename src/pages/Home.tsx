import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Hero3D from "../components/Hero3D";
import Reveal, { RevealStagger, staggerItem } from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import InquiryCTA from "../components/InquiryCTA";
import { services } from "../data/services";
import { portfolio } from "../data/portfolio";
import { insights } from "../data/insights";

const capabilities = [
  "Brand Strategy",
  "Digital Marketing",
  "Web & App Development",
  "AI Solutions",
  "Search Visibility",
  "Custom SaaS",
];

const industries = ["Hospitality", "Retail & E-commerce", "Professional Services", "Health & Wellness", "Financial Technology", "Technology"];

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-24">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:px-12"
        >
          <div className="relative z-10 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood"
            >
              Branding · Marketing · Technology
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-[4.4vw]"
            >
              MAKE YOUR BRAND
              <br />
              <span className="text-oxblood">IMPOSSIBLE TO IGNORE.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-7 max-w-md text-balance text-base leading-relaxed text-black/65 sm:text-lg"
            >
              From brand strategy and performance marketing to websites, AI, and custom software, we create digital
              experiences that turn ambitious ideas into measurable business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={() => navigate("/contact")}
                className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-oxblood px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:bg-black"
              >
                Let's Build Something Great
                <span className="btn-icon"><ArrowUpRight size={16} /></span>
              </MagneticButton>
              <MagneticButton
                onClick={() => navigate("/work")}
                className="btn-sweep group inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:border-oxblood hover:text-oxblood"
              >
                Explore Our Work
                <span className="btn-icon"><ArrowUpRight size={16} /></span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* 3D element: desktop only — hidden on mobile & tablet */}
          <div className="relative hidden lg:block lg:order-2 lg:h-[560px]">
            <Hero3D />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-black/50"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* POSITIONING STATEMENT */}
      <section className="border-y border-black/10 bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              CREATIVE THINKING. STRATEGIC EXECUTION. <span className="text-oxblood">REAL BUSINESS IMPACT.</span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {capabilities.map((cap, i) => (
              <motion.span
                key={cap}
                variants={staggerItem}
                className="flex items-center gap-3 rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-black/75"
              >
                {cap}
                {i < capabilities.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-oxblood sm:block" />}
              </motion.span>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* TRUST / INDUSTRIES */}
      <section className="bg-black py-16 text-cream">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/50">
              Industries We Partner With
            </p>
            <p className="max-w-md text-sm text-cream/50">
              Client logos, testimonials, and performance metrics will appear here once verified data is available.
            </p>
          </div>
          <div className="mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee gap-16">
              {[...industries, ...industries].map((ind, idx) => (
                <span key={idx} className="font-display text-2xl text-cream/30 sm:text-3xl">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">What We Do</p>
              <h2 className="max-w-xl text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                A full-stack creative & technology partner
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/services"
                data-cursor="pointer"
                className="group inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:border-oxblood hover:text-oxblood"
              >
                View All Services
                <span className="btn-icon"><ArrowUpRight size={15} /></span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service, idx) => (
              <Reveal key={service.slug} delay={(idx % 3) * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  data-cursor="pointer"
                  className="group relative flex h-full flex-col justify-between bg-cream p-8 transition-colors duration-300 hover:bg-oxblood"
                >
                  <div>
                    <span className="font-display text-sm text-oxblood/60 transition-colors group-hover:text-cream/60">
                      {service.letter}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-medium leading-snug text-black transition-colors group-hover:text-cream">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/60 transition-colors group-hover:text-cream/75">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-black/50 transition-colors group-hover:text-cream">
                    Learn More
                    <span className="btn-icon"><ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Selected Work</p>
              <h2 className="max-w-xl text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                Concepts that show how we think
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/work"
                data-cursor="pointer"
                className="group inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:border-oxblood hover:text-oxblood"
              >
                View Full Portfolio
                <span className="btn-icon"><ArrowUpRight size={15} /></span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 3).map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 0.08}>
                <Link to={`/work/${item.slug}`} data-cursor="pointer" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-dark">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-black">
                      {item.category}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-display text-xl text-cream">{item.name}</p>
                      <p className="text-xs uppercase tracking-[0.1em] text-cream/70">{item.industry}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-black py-24 text-cream sm:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood-light">
              Built on Ideas. Driven by Possibility.
            </p>
            <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              A Branding Point brings strategy and technology together.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70">
              Founded by Sivabalan Vadivel, A Branding Point helps businesses build stronger brands, create meaningful
              digital experiences, and unlock new opportunities for growth.
            </p>
            <Link
              to="/about"
              data-cursor="pointer"
              className="group mt-8 inline-flex items-center gap-2 border-b border-cream/30 pb-1 text-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:border-oxblood-light hover:text-oxblood-light"
            >
              Meet the Founder
              <span className="btn-icon"><ArrowUpRight size={15} /></span>
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="space-y-5 border-t border-cream/15 pt-8">
              {[
                "Strategy-first approach grounded in real business goals.",
                "A single accountable partner across brand, marketing, and technology.",
                "Transparent process, honest reporting, and no invented results.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-oxblood/20 text-oxblood-light">
                    <Check size={13} />
                  </span>
                  <span className="text-base leading-relaxed text-cream/80">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">Insights</p>
              <h2 className="max-w-xl text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                Ideas on branding, marketing & technology
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/insights"
                data-cursor="pointer"
                className="group inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-medium uppercase tracking-[0.1em] text-black transition-colors hover:border-oxblood hover:text-oxblood"
              >
                Browse All Articles
                <span className="btn-icon"><ArrowUpRight size={15} /></span>
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {insights.slice(0, 3).map((a, idx) => (
              <Reveal key={a.slug} delay={idx * 0.08}>
                <Link to={`/insights/${a.slug}`} data-cursor="pointer" className="group block border-t border-black/15 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oxblood">{a.category}</p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug transition-colors group-hover:text-oxblood">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{a.excerpt}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.1em] text-black/40">
                    {a.readTime} · {new Date(a.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-oxblood py-28 text-cream sm:py-36">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
              Tell us about your business and goals. We'll follow up with next steps for a strategy conversation.
            </p>
            <div className="mt-10 flex justify-center">
              <InquiryCTA label="Start Your Project" variant="light" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
