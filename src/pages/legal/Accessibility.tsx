import LegalLayout from "../../components/LegalLayout";

export default function Accessibility() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      lastUpdated="Draft — pending legal review"
      intro="A Branding Point is committed to making our website usable by the widest possible audience, including people with disabilities. This is an ongoing effort."
      sections={[
        {
          heading: "Our Commitment",
          body: (
            <p>
              We aim to design this website with semantic HTML, sufficient color contrast, keyboard navigability,
              and support for assistive technologies, and to align with widely recognized accessibility guidelines
              where practical.
            </p>
          ),
        },
        {
          heading: "Ongoing Improvements",
          body: (
            <p>
              Accessibility is an ongoing process. We periodically review our site for usability issues and welcome
              feedback to help us improve.
            </p>
          ),
        },
        {
          heading: "Feedback",
          body: (
            <p>
              If you experience any difficulty accessing content on this website, please contact us at{" "}
              <a href="mailto:hello@abrandingpoint.com" className="text-oxblood underline">
                hello@abrandingpoint.com
              </a>{" "}
              and we will work to address the issue.
            </p>
          ),
        },
      ]}
    />
  );
}
