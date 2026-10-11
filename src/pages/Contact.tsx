import { Mail, Calendar } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import InquiryForm from "../components/InquiryForm";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Start Your Project"
        description="Tell us about your business and goals. This short consultation form helps us understand your needs before we talk."
      />

      <section className="bg-cream pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_380px] lg:px-12">
          <Reveal>
            <InquiryForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-black/10 bg-white p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oxblood">Other Ways to Reach Us</p>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href="mailto:hello@abrandingpoint.com"
                      className="group flex items-center gap-3 text-sm text-black/75 transition-colors hover:text-oxblood"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream text-oxblood">
                        <Mail size={15} />
                      </span>
                      hello@abrandingpoint.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-3 text-sm text-black/75 transition-colors hover:text-oxblood"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream text-oxblood">
                        <LinkedinIcon size={15} />
                      </span>
                      Connect on LinkedIn
                    </a>
                  </li>
                  <li>
                    <span className="group flex items-center gap-3 text-sm text-black/40">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cream text-black/40">
                        <Calendar size={15} />
                      </span>
                      Calendar booking — coming soon
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-black p-7 text-cream">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/50">What Happens Next</p>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-cream/75">
                  <li><span className="font-semibold text-cream">1.</span> We review your inquiry within 1–2 business days.</li>
                  <li><span className="font-semibold text-cream">2.</span> We schedule a short discovery call to understand your goals.</li>
                  <li><span className="font-semibold text-cream">3.</span> We follow up with a tailored recommendation and next steps.</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
