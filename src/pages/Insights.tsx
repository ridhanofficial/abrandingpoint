import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { insights, insightCategories } from "../data/insights";

export default function Insights() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <div>
      <PageHeader
        eyebrow="Insights"
        title="Ideas on branding, marketing, and technology."
        description="Practical, no-nonsense thinking on building brands and digital experiences that perform — without the hype."
      />

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 border-b border-black/10 pb-8">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="pointer"
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
                  active === cat ? "bg-oxblood text-cream" : "bg-white text-black/60 hover:text-oxblood"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((a, idx) => (
                <motion.div
                  key={a.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                >
                  <Link to={`/insights/${a.slug}`} data-cursor="pointer" className="group block h-full border-t border-black/15 pt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oxblood">{a.category}</p>
                    <h3 className="mt-3 font-display text-xl font-medium leading-snug transition-colors group-hover:text-oxblood">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/60">{a.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.1em] text-black/40">
                      <span>
                        {a.readTime} · {new Date(a.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="btn-icon text-black/40 group-hover:text-oxblood"><ArrowUpRight size={14} /></span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
