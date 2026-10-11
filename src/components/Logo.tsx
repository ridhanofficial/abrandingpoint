interface LogoProps {
  dark?: boolean;
  className?: string;
}

export default function Logo({ dark = false, className = "" }: LogoProps) {
  const textColor = dark ? "#F5EFE6" : "#000000";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo.svg"
        alt="A Branding Point logo"
        width="34"
        height="34"
        aria-hidden="true"
        style={{ display: "block", flexShrink: 0 }}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight" style={{ color: textColor }}>
          A Branding Point
        </span>
        <span
          className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em]"
          style={{ color: dark ? "rgba(245,239,230,0.6)" : "rgba(0,0,0,0.45)" }}
        >
          Branding & Technology
        </span>
      </span>
    </div>
  );
}
