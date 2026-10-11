import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" aria-label="A Branding Point — Home" data-cursor="pointer">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-cursor="pointer"
              className={({ isActive }) =>
                `relative py-1 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
                  isActive ? "text-oxblood" : "text-black/70 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-oxblood transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            onClick={() => navigate("/contact")}
            className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-oxblood px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:bg-black"
          >
            Start a Project
            <span className="btn-icon"><ArrowUpRight size={15} /></span>
          </MagneticButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-black lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/10 bg-cream lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block border-b border-black/10 py-4 font-display text-2xl ${
                        isActive ? "text-oxblood" : "text-black"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="btn-sweep mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-oxblood px-5 py-3.5 text-sm font-medium uppercase tracking-[0.1em] text-cream"
                >
                  Start a Project
                  <span className="btn-icon"><ArrowUpRight size={16} /></span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
