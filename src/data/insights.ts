export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  content: { heading: string; body: string }[];
}

export const insightCategories = [
  "All",
  "Branding",
  "Digital Marketing",
  "SEO & GEO",
  "Conversion",
  "AI & Automation",
  "SaaS",
];

export const insights: InsightArticle[] = [
  {
    slug: "what-makes-a-brand-impossible-to-ignore",
    title: "What Makes a Brand Impossible to Ignore",
    category: "Branding",
    excerpt:
      "Strong brands are not louder — they are clearer. Here is how positioning, consistency, and craft work together to build memorability.",
    author: "A Branding Point Team",
    date: "2025-11-04",
    readTime: "6 min read",
    content: [
      {
        heading: "Clarity beats volume",
        body: "The brands that break through are rarely the loudest. They are the ones with the clearest point of view — a specific audience, a specific promise, and the discipline to say no to everything else.",
      },
      {
        heading: "Consistency compounds",
        body: "Every touchpoint — your website, your social presence, your sales conversations — is a chance to reinforce or dilute your brand. Systems, not one-off decisions, are what make a brand recognizable over time.",
      },
      {
        heading: "Craft signals trust",
        body: "The quality of your execution is itself a message. Thoughtful typography, considered color, and precise language tell your audience that the same care goes into your product or service.",
      },
    ],
  },
  {
    slug: "seo-vs-geo-whats-the-difference",
    title: "SEO vs. GEO: What's the Difference, and Why Both Matter",
    category: "SEO & GEO",
    excerpt:
      "Search engines and AI answer engines read your content differently. Here's how traditional SEO and Generative Engine Optimization work together.",
    author: "A Branding Point Team",
    date: "2025-10-18",
    readTime: "7 min read",
    content: [
      {
        heading: "Traditional SEO is still foundational",
        body: "Technical health, keyword relevance, and authority remain the backbone of organic visibility. A fast, well-structured, well-linked site is still the baseline.",
      },
      {
        heading: "GEO is about structured clarity",
        body: "AI-powered answer engines tend to favor content that is clearly structured, directly answers questions, and comes from credible, well-established sources. We cannot guarantee placement in AI-generated answers, but we can structure content to be easier for these systems to understand.",
      },
      {
        heading: "Treat them as complementary",
        body: "A strong technical and content foundation supports both classic search rankings and visibility in newer AI-driven discovery channels.",
      },
    ],
  },
  {
    slug: "signs-your-website-is-costing-you-customers",
    title: "5 Signs Your Website Is Costing You Customers",
    category: "Conversion",
    excerpt:
      "A slow, unclear, or outdated website doesn't just look bad — it actively turns prospective customers away. Here's what to look for.",
    author: "A Branding Point Team",
    date: "2025-09-22",
    readTime: "5 min read",
    content: [
      {
        heading: "Unclear value proposition",
        body: "If a new visitor can't understand what you do and who it's for within seconds, you're losing them before they ever scroll.",
      },
      {
        heading: "Slow load times",
        body: "Every additional second of load time increases the chance a visitor leaves before the page even finishes rendering.",
      },
      {
        heading: "No clear next step",
        body: "Every page should have an obvious, singular action you want the visitor to take next.",
      },
    ],
  },
  {
    slug: "when-does-your-business-need-a-chatbot",
    title: "When Does Your Business Actually Need an AI Chatbot?",
    category: "AI & Automation",
    excerpt:
      "AI chatbots aren't right for every business. Here's a practical framework for deciding if — and how — automation fits your customer journey.",
    author: "A Branding Point Team",
    date: "2025-08-30",
    readTime: "5 min read",
    content: [
      {
        heading: "Start with repetitive questions",
        body: "If your team answers the same handful of questions repeatedly, that's a strong signal automation could help.",
      },
      {
        heading: "Think about response time",
        body: "If speed-to-response affects whether you win a customer, a conversational assistant can qualify and respond instantly, any time of day.",
      },
      {
        heading: "Keep a human path available",
        body: "The best implementations make it easy to reach a real person when the conversation calls for it.",
      },
    ],
  },
  {
    slug: "mvp-to-scale-saas-roadmap",
    title: "From MVP to Scale: A Practical SaaS Product Roadmap",
    category: "SaaS",
    excerpt:
      "Building a SaaS product is a series of deliberate decisions. Here's how we think about sequencing features, infrastructure, and growth.",
    author: "A Branding Point Team",
    date: "2025-07-14",
    readTime: "8 min read",
    content: [
      {
        heading: "Validate before you scale",
        body: "An MVP should answer one question: will people use and pay for this? Resist the urge to build every feature before you know.",
      },
      {
        heading: "Architect for the next stage, not the final stage",
        body: "Build a foundation that can support your next 10x of users, not every hypothetical future scenario.",
      },
      {
        heading: "Instrument everything",
        body: "Early analytics and feedback loops are what let you make confident product decisions as you grow.",
      },
    ],
  },
  {
    slug: "building-a-paid-social-funnel-that-converts",
    title: "Building a Paid Social Funnel That Actually Converts",
    category: "Digital Marketing",
    excerpt:
      "Ad spend without a clear funnel is just a donation to the platform. Here's how we structure campaigns around measurable outcomes.",
    author: "A Branding Point Team",
    date: "2025-06-02",
    readTime: "6 min read",
    content: [
      {
        heading: "Match the message to the moment",
        body: "Cold audiences need a different message than warm, returning visitors. Funnel structure should reflect that.",
      },
      {
        heading: "Track what actually matters",
        body: "Clicks and impressions are vanity metrics unless they're tied to a tracked conversion event your business cares about.",
      },
      {
        heading: "Test deliberately",
        body: "Change one variable at a time so you actually learn what is driving performance improvements.",
      },
    ],
  },
];

export const getInsightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
