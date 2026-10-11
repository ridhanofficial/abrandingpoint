import LegalLayout from "../../components/LegalLayout";

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      lastUpdated="Draft — pending legal review"
      intro="The content on this website, including service descriptions, portfolio items, and articles, is provided for general informational purposes."
      sections={[
        {
          heading: "Demo and Concept Projects",
          body: (
            <p>
              Portfolio items labeled as "Demo Project" or "Concept Project" are illustrative examples created to
              demonstrate our process and capabilities. They do not represent verified client work, results, or
              testimonials unless explicitly stated otherwise.
            </p>
          ),
        },
        {
          heading: "No Guaranteed Outcomes",
          body: (
            <p>
              We do not guarantee specific search engine rankings, visibility within AI-generated answers,
              advertising performance, or any other business outcome. Results vary based on many factors outside our
              control.
            </p>
          ),
        },
        {
          heading: "Not Professional Advice",
          body: (
            <p>
              Articles published in our Insights section reflect general perspectives on branding, marketing, and
              technology and should not be relied upon as legal, financial, or professional advice specific to your
              business.
            </p>
          ),
        },
      ]}
    />
  );
}
