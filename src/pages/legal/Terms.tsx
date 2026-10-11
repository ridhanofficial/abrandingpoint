import LegalLayout from "../../components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="Draft — pending legal review"
      intro="These draft Terms & Conditions govern your use of the A Branding Point website. By using this site, you agree to these terms. This is placeholder content pending legal review and should not be considered final."
      sections={[
        {
          heading: "Use of This Website",
          body: (
            <p>
              This website is provided for informational purposes about our services. You agree to use it only for
              lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use
              and enjoyment of this site by, any third party.
            </p>
          ),
        },
        {
          heading: "Intellectual Property",
          body: (
            <p>
              Unless otherwise noted, the content on this website — including text, graphics, logos, and the "A
              Branding Point" name and mark — is the property of A Branding Point and may not be reproduced without
              permission.
            </p>
          ),
        },
        {
          heading: "No Guaranteed Results",
          body: (
            <p>
              Any case studies, demo projects, or service descriptions on this site are illustrative. We do not
              guarantee specific search rankings, mentions in AI-generated answers, advertising outcomes, or any
              other business result.
            </p>
          ),
        },
        {
          heading: "Service Engagements",
          body: (
            <p>
              Any actual project engagement will be governed by a separate, signed agreement between A Branding
              Point and the client, which will take precedence over this website's general terms.
            </p>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <p>
              This website and its content are provided "as is" without warranties of any kind, to the extent
              permitted by applicable law.
            </p>
          ),
        },
        {
          heading: "Changes to These Terms",
          body: <p>We may update these terms from time to time. Continued use of the site constitutes acceptance of changes.</p>,
        },
      ]}
    />
  );
}
