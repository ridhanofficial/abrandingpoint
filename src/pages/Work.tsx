import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { portfolio, portfolioCategories } from "../data/portfolio";

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      <PageHeader
        eyebrow="Our Work"
        title="A portfolio built to show how we think and create."
        description="These are clearly marked demo and concept projects used to illustrate our process and craft until verified client work can be published here."
      />

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-2 border-b border-black/10 pb-8">
            {portfolioCategories.map((cat) => (
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

          <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={idx % 5 === 0 ? "sm:col-span-2" : ""}
                >
                  <Link to={`/work/${item.slug}`} data-cursor="pointer" className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-dark">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                      <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-black">
                        Demo Project
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/70">
                            {item.category} · {item.industry}
                          </p>
                          <p className="mt-2 font-display text-2xl text-cream">{item.name}</p>
                        </div>
                        <ArrowUpRight
                          size={22}
                          className="flex-shrink-0 text-cream/80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
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
