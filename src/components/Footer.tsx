import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const footerNav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const footerServices = [
  { label: "Branding", to: "/services/branding" },
  { label: "Marketing", to: "/services/advertising-performance-marketing" },
  { label: "Web & Apps", to: "/services/website-design-development" },
  { label: "SaaS", to: "/services/custom-saas-development" },
  { label: "SEO", to: "/services/seo" },
  { label: "GEO", to: "/services/geo" },
  { label: "AI Automation", to: "/services/ai-chatbots-automation" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/legal/privacy-policy" },
  { label: "Terms & Conditions", to: "/legal/terms" },
  { label: "Cookie Policy", to: "/legal/cookie-policy" },
  { label: "Accessibility", to: "/legal/accessibility" },
  { label: "Disclaimer", to: "/legal/disclaimer" },
];

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-cream">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-cream/15 pb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-oxblood-light/80">
              Your Next Big Move Starts Here
            </p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              YOUR NEXT BIG MOVE
              <br /> STARTS HERE.
            </h2>
          </div>
          <MagneticButton
            onClick={() => navigate("/contact")}
            className="btn-sweep group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-cream px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-black transition-colors hover:bg-oxblood hover:text-cream"
          >
            Let's Talk
            <span className="btn-icon"><ArrowUpRight size={16} /></span>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
          <div className="col-span-2">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Strategy, creativity, and technology for businesses ready to grow.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="A Branding Point on LinkedIn"
                data-cursor="pointer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-oxblood-light hover:text-oxblood-light"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="mailto:hello@abrandingpoint.com"
                aria-label="Email A Branding Point"
                data-cursor="pointer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-oxblood-light hover:text-oxblood-light"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/40">Navigate</p>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-cream/75 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/40">Services</p>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-cream/75 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/40">Contact</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>
                <a href="mailto:hello@abrandingpoint.com" className="transition-colors hover:text-cream">
                  hello@abrandingpoint.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-cream"
                >
                  LinkedIn
                </a>
              </li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} A Branding Point. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
