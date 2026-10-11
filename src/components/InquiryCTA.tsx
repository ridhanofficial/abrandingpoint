import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useInquiry } from "../context/InquiryContext";

interface InquiryCTAProps {
  service?: string;
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "light";
}

export default function InquiryCTA({
  service,
  label = "Start a Project Inquiry",
  className = "",
  variant = "solid",
}: InquiryCTAProps) {
  const navigate = useNavigate();
  const { setPrefillService } = useInquiry();

  const baseStyles: Record<string, string> = {
    solid: "bg-oxblood text-cream hover:bg-black",
    outline: "border border-black/20 text-black hover:border-oxblood hover:text-oxblood",
    light: "bg-cream text-black hover:bg-oxblood hover:text-cream",
  };

  return (
    <MagneticButton
      onClick={() => {
        if (service) setPrefillService(service);
        navigate("/contact");
      }}
      className={`btn-sweep group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${baseStyles[variant]} ${className}`}
    >
      {label}
      <span className="btn-icon">
        <ArrowUpRight size={16} />
      </span>
    </MagneticButton>
  );
}
