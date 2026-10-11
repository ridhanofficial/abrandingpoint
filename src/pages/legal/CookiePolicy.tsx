import LegalLayout from "../../components/LegalLayout";

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="Draft — pending legal review"
      intro="This draft Cookie Policy explains how A Branding Point may use cookies and similar technologies on this website. Specific tools and vendors will be listed here once finalized."
      sections={[
        {
          heading: "What Are Cookies",
          body: (
            <p>
              Cookies are small text files stored on your device that help websites function and, where applicable,
              understand how visitors use a site.
            </p>
          ),
        },
        {
          heading: "How We May Use Cookies",
          body: (
            <p>
              We may use essential cookies required for basic site functionality, and, where enabled, analytics
              cookies to understand aggregate site usage. We do not currently use advertising cookies; this will be
              updated if that changes.
            </p>
          ),
        },
        {
          heading: "Managing Your Preferences",
          body: (
            <p>
              Most browsers allow you to control cookies through their settings. A dedicated cookie preference
              center will be added here as analytics or marketing tools are implemented.
            </p>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <p>
              Questions about our use of cookies can be sent to{" "}
              <a href="mailto:hello@abrandingpoint.com" className="text-oxblood underline">
                hello@abrandingpoint.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
