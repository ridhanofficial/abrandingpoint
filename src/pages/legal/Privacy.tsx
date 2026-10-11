import LegalLayout from "../../components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="Draft — pending legal review"
      intro="A Branding Point ('we', 'us', or 'our') respects your privacy. This draft policy describes, in plain language, the types of information we may collect through this website and how that information may be used. This is placeholder content and must be finalized based on our actual data practices before publication."
      sections={[
        {
          heading: "Information We May Collect",
          body: (
            <p>
              When you submit our project inquiry form or contact us directly, we may collect information such as
              your name, business email, company name, website URL, and details about your project. We do not
              knowingly collect information from children.
            </p>
          ),
        },
        {
          heading: "How We May Use Information",
          body: (
            <p>
              Information submitted through our forms may be used to respond to inquiries, evaluate potential
              projects, and, where you have consented, send relevant marketing communications. We do not sell
              personal information.
            </p>
          ),
        },
        {
          heading: "Cookies and Analytics",
          body: (
            <p>
              This website may use cookies or similar technologies to understand site usage. Details of any
              analytics or advertising tools in use will be disclosed here once finalized. See our Cookie Policy for
              more information.
            </p>
          ),
        },
        {
          heading: "Third-Party Services",
          body: (
            <p>
              We may use third-party service providers (such as form processing, email delivery, or analytics
              providers) to operate this website. Any such providers will be disclosed here along with their role in
              handling your information.
            </p>
          ),
        },
        {
          heading: "Data Retention",
          body: (
            <p>
              We intend to retain inquiry and contact information only as long as necessary to respond to your
              request or maintain a business relationship, consistent with applicable law.
            </p>
          ),
        },
        {
          heading: "Your Choices",
          body: (
            <p>
              You may request access to, correction of, or deletion of your personal information by contacting us at{" "}
              <a href="mailto:hello@abrandingpoint.com" className="text-oxblood underline">
                hello@abrandingpoint.com
              </a>
              . Depending on your state or country of residence, you may have additional rights under applicable
              privacy law.
            </p>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <p>
              Questions about this policy can be directed to{" "}
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
