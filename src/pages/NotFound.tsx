import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-cream px-5 pt-24 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-oxblood">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-6xl">Page Not Found</h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="btn-sweep group mt-8 inline-flex items-center gap-2 rounded-full bg-oxblood px-6 py-3.5 text-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:bg-black"
      >
        Back to Home
        <span className="btn-icon"><ArrowUpRight size={16} /></span>
      </Link>
    </div>
  );
}
