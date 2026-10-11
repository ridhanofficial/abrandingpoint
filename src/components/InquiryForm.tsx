import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Loader2, Mail, RotateCcw } from "lucide-react";
import { useInquiry } from "../context/InquiryContext";

const serviceOptions = [
  "Branding",
  "Social Media Marketing",
  "Advertising",
  "Website Development",
  "Mobile App",
  "Custom SaaS",
  "SEO",
  "Local SEO",
  "GEO",
  "AI Chatbot",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

const timelines = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];

const hearAboutOptions = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Event / Conference",
  "Other",
];

interface FormData {
  fullName: string;
  email: string;
  company: string;
  website: string;
  country: string;
  timezone: string;
  servicesNeeded: string[];
  businessDescription: string;
  goals: string;
  audience: string;
  timeline: string;
  budget: string;
  hearAbout: string;
  honeypot: string;
}

const initialData: FormData = {
  fullName: "",
  email: "",
  company: "",
  website: "",
  country: "",
  timezone: "",
  servicesNeeded: [],
  businessDescription: "",
  goals: "",
  audience: "",
  timeline: "",
  budget: "",
  hearAbout: "",
  honeypot: "",
};

const FORM_ENDPOINT = "https://formspree.io/f/mabrandingpoint";

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const { prefillService, setPrefillService } = useInquiry();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef(Date.now());

  useEffect(() => {
    if (prefillService) {
      const match = serviceOptions.find((s) => prefillService.toLowerCase().includes(s.toLowerCase().split(" ")[0]));
      setData((d) => ({
        ...d,
        servicesNeeded: match && !d.servicesNeeded.includes(match) ? [...d.servicesNeeded, match] : d.servicesNeeded,
      }));
    }
  }, [prefillService]);

  const steps = ["About You", "Your Needs", "Project Details", "Review & Submit"];

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const toggleService = (service: string) => {
    setData((d) => ({
      ...d,
      servicesNeeded: d.servicesNeeded.includes(service)
        ? d.servicesNeeded.filter((s) => s !== service)
        : [...d.servicesNeeded, service],
    }));
    setErrors((e) => ({ ...e, servicesNeeded: "" }));
  };

  const validateStep = (s: number) => {
    const newErrors: Record<string, string> = {};
    if (s === 0) {
      if (!data.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!data.email.trim()) newErrors.email = "Business email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Enter a valid email address.";
      if (!data.company.trim()) newErrors.company = "Company or brand name is required.";
    }
    if (s === 1) {
      if (data.servicesNeeded.length === 0) newErrors.servicesNeeded = "Select at least one service.";
    }
    if (s === 2) {
      if (!data.businessDescription.trim()) newErrors.businessDescription = "Please tell us about your business.";
      if (!data.goals.trim()) newErrors.goals = "Please share what you're trying to achieve.";
      if (!data.timeline) newErrors.timeline = "Select a preferred timeline.";
      if (!data.budget) newErrors.budget = "Select an approximate budget.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (!validateStep(0) || !validateStep(1) || !validateStep(2)) {
      setStep(0);
      return;
    }
    // Basic spam protections: honeypot field + minimum time-on-form.
    if (data.honeypot.trim() !== "") {
      setStatus("error");
      return;
    }
    if (Date.now() - startedAt.current < 1500) {
      setErrors((e) => ({ ...e, form: "Please take a moment to review your inquiry before submitting." }));
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          company: data.company,
          website: data.website,
          country: data.country,
          timezone: data.timezone,
          servicesNeeded: data.servicesNeeded.join(", "),
          businessDescription: data.businessDescription,
          goals: data.goals,
          audience: data.audience,
          timeline: data.timeline,
          budget: data.budget,
          hearAbout: data.hearAbout,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setData(initialData);
    setPrefillService(null);
    setStatus("idle");
    setStep(0);
    startedAt.current = Date.now();
  };

  const mailtoFallback = `mailto:hello@abrandingpoint.com?subject=${encodeURIComponent(
    `Project Inquiry — ${data.company || "New Project"}`
  )}&body=${encodeURIComponent(
    `Name: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.company}\nWebsite: ${data.website}\nCountry: ${data.country}\n\nServices needed: ${data.servicesNeeded.join(
      ", "
    )}\n\nBusiness: ${data.businessDescription}\n\nGoals: ${data.goals}\n\nAudience: ${data.audience}\n\nTimeline: ${data.timeline}\nBudget: ${data.budget}\nHeard about us via: ${data.hearAbout}`
  )}`;

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-black/10 bg-white p-10 text-center sm:p-14"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-oxblood text-cream">
          <Check size={28} />
        </div>
        <h3 className="mt-6 font-display text-3xl font-medium tracking-tight">Thank you, {data.fullName.split(" ")[0]}.</h3>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-black/65">
          Your project inquiry has been submitted successfully. Our team will review your details and follow up at{" "}
          <span className="font-medium text-black">{data.email}</span> within 1–2 business days.
        </p>
        <button
          onClick={reset}
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-black/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-black transition-colors hover:border-oxblood hover:text-oxblood"
        >
          <RotateCcw size={14} /> Submit Another Inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-10">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {steps.map((label, idx) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                    idx < step
                      ? "bg-oxblood text-cream"
                      : idx === step
                      ? "border-2 border-oxblood text-oxblood"
                      : "border border-black/20 text-black/30"
                  }`}
                >
                  {idx < step ? <Check size={14} /> : idx + 1}
                </div>
                <span
                  className={`hidden text-center text-[10px] font-medium uppercase tracking-[0.08em] sm:block ${
                    idx <= step ? "text-black" : "text-black/35"
                  }`}
                >
                  {label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`mx-2 h-[1.5px] flex-1 ${idx < step ? "bg-oxblood" : "bg-black/15"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
        >
          {step === 0 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl font-medium tracking-tight">About You</h3>
              <Field label="Full Name" error={errors.fullName}>
                <input
                  value={data.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className={inputClass(!!errors.fullName)}
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
              </Field>
              <Field label="Business Email" error={errors.email}>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass(!!errors.email)}
                  placeholder="jane@company.com"
                  autoComplete="email"
                />
              </Field>
              <Field label="Company / Brand Name" error={errors.company}>
                <input
                  value={data.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClass(!!errors.company)}
                  placeholder="Company, Inc."
                  autoComplete="organization"
                />
              </Field>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Website URL (optional)">
                  <input
                    value={data.website}
                    onChange={(e) => update("website", e.target.value)}
                    className={inputClass(false)}
                    placeholder="https://yourcompany.com"
                  />
                </Field>
                <Field label="Country">
                  <input
                    value={data.country}
                    onChange={(e) => update("country", e.target.value)}
                    className={inputClass(false)}
                    placeholder="United States"
                  />
                </Field>
              </div>
              <Field label="Time Zone (optional)">
                <input
                  value={data.timezone}
                  onChange={(e) => update("timezone", e.target.value)}
                  className={inputClass(false)}
                  placeholder="e.g. Eastern Time (ET)"
                />
              </Field>
              {/* honeypot */}
              <input
                type="text"
                value={data.honeypot}
                onChange={(e) => update("honeypot", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight">What Do You Need?</h3>
              <p className="mt-2 text-sm text-black/55">Select all that apply.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {serviceOptions.map((service) => {
                  const selected = data.servicesNeeded.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      data-cursor="pointer"
                      className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                        selected
                          ? "border-oxblood bg-oxblood text-cream"
                          : "border-black/15 text-black/70 hover:border-oxblood/50 hover:text-oxblood"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
              {errors.servicesNeeded && <p className="mt-3 text-xs text-oxblood">{errors.servicesNeeded}</p>}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl font-medium tracking-tight">Project Details</h3>
              <Field label="Tell us about your business" error={errors.businessDescription}>
                <textarea
                  value={data.businessDescription}
                  onChange={(e) => update("businessDescription", e.target.value)}
                  className={inputClass(!!errors.businessDescription) + " min-h-[100px]"}
                  placeholder="What do you do, and who do you serve?"
                />
              </Field>
              <Field label="What are you trying to achieve?" error={errors.goals}>
                <textarea
                  value={data.goals}
                  onChange={(e) => update("goals", e.target.value)}
                  className={inputClass(!!errors.goals) + " min-h-[90px]"}
                  placeholder="e.g. launch a new brand, increase qualified leads, rebuild our website"
                />
              </Field>
              <Field label="Target Audience (optional)">
                <input
                  value={data.audience}
                  onChange={(e) => update("audience", e.target.value)}
                  className={inputClass(false)}
                  placeholder="Who are your ideal customers?"
                />
              </Field>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Preferred Launch Timeline" error={errors.timeline}>
                  <select
                    value={data.timeline}
                    onChange={(e) => update("timeline", e.target.value)}
                    className={inputClass(!!errors.timeline)}
                  >
                    <option value="">Select a timeline</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Approximate Budget (USD)" error={errors.budget}>
                  <select
                    value={data.budget}
                    onChange={(e) => update("budget", e.target.value)}
                    className={inputClass(!!errors.budget)}
                  >
                    <option value="">Select a range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="How did you hear about us? (optional)">
                <select value={data.hearAbout} onChange={(e) => update("hearAbout", e.target.value)} className={inputClass(false)}>
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight">Review Your Inquiry</h3>
              <div className="mt-6 space-y-6 rounded-xl border border-black/10 bg-cream/60 p-6">
                <SummaryRow label="Name" value={data.fullName} />
                <SummaryRow label="Email" value={data.email} />
                <SummaryRow label="Company" value={data.company} />
                {data.website && <SummaryRow label="Website" value={data.website} />}
                {data.country && <SummaryRow label="Country" value={data.country} />}
                <SummaryRow label="Services Needed" value={data.servicesNeeded.join(", ")} />
                <SummaryRow label="Business" value={data.businessDescription} />
                <SummaryRow label="Goals" value={data.goals} />
                {data.audience && <SummaryRow label="Audience" value={data.audience} />}
                <SummaryRow label="Timeline" value={data.timeline} />
                <SummaryRow label="Budget" value={data.budget} />
                {data.hearAbout && <SummaryRow label="Heard About Us Via" value={data.hearAbout} />}
              </div>

              {errors.form && <p className="mt-4 text-sm text-oxblood">{errors.form}</p>}

              {status === "error" && (
                <div className="mt-6 rounded-xl border border-oxblood/30 bg-oxblood/5 p-5">
                  <p className="text-sm font-medium text-oxblood">
                    We couldn't submit your inquiry automatically. This usually means our form service isn't fully
                    connected yet.
                  </p>
                  <p className="mt-2 text-sm text-black/60">
                    Please email us directly and we'll get back to you right away.
                  </p>
                  <a
                    href={mailtoFallback}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-oxblood px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-cream"
                  >
                    <Mail size={14} /> Email Your Inquiry
                  </a>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
        <button
          onClick={goBack}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-black/60 transition-colors hover:text-oxblood disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} /> Back
        </button>

        {step < steps.length - 1 ? (
          <button
            onClick={goNext}
            data-cursor="pointer"
            className="inline-flex items-center gap-2 rounded-full bg-oxblood px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:bg-black"
          >
            Continue <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={status === "submitting"}
            data-cursor="pointer"
            className="inline-flex items-center gap-2 rounded-full bg-oxblood px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors hover:bg-black disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Submitting...
              </>
            ) : (
              <>Submit Inquiry</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:ring-2 focus:ring-oxblood/40 ${
    hasError ? "border-oxblood" : "border-black/15"
  }`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-black/55">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-oxblood">{error}</span>}
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[180px_1fr] sm:gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-black/40">{label}</span>
      <span className="text-sm text-black/80">{value || "—"}</span>
    </div>
  );
}
