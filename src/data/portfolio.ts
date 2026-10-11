export interface PortfolioItem {
  slug: string;
  name: string;
  client: string;
  industry: string;
  category: string;
  image: string;
  overview: string;
  servicesDelivered: string[];
  results?: string;
  isDemo: boolean;
}

export const portfolioCategories = [
  "All",
  "Branding",
  "Marketing Campaigns",
  "Social Media",
  "Website Design",
  "Mobile Applications",
  "SaaS Products",
  "AI Solutions",
];

export const portfolio: PortfolioItem[] = [
  {
    slug: "meridian-brand-system",
    name: "Meridian Brand System",
    client: "Demo Project",
    industry: "Hospitality",
    category: "Branding",
    image: "/images/portfolio-branding.jpg",
    overview:
      "A concept identity system exploring how a boutique hospitality brand could position itself through typography, color, and a flexible mark system.",
    servicesDelivered: ["Brand positioning and strategy", "Brand identity systems", "Brand guidelines"],
    isDemo: true,
  },
  {
    slug: "northbound-launch-campaign",
    name: "Northbound Launch Campaign",
    client: "Demo Project",
    industry: "Consumer Goods",
    category: "Marketing Campaigns",
    image: "/images/portfolio-marketing.jpg",
    overview:
      "A concept multi-channel campaign framework designed to demonstrate how paid, organic, and creative assets could align around a single launch narrative.",
    servicesDelivered: ["Paid social campaigns", "Campaign creative development", "Landing page optimization"],
    isDemo: true,
  },
  {
    slug: "foundry-social-presence",
    name: "Foundry Social Presence",
    client: "Demo Project",
    industry: "Professional Services",
    category: "Social Media",
    image: "/images/portfolio-social.jpg",
    overview:
      "A concept editorial content system built to show how a professional services brand could build authority and consistency across social platforms.",
    servicesDelivered: ["Social media strategy", "Content planning and production", "Community management"],
    isDemo: true,
  },
  {
    slug: "harbor-commerce-site",
    name: "Harbor Commerce Experience",
    client: "Demo Project",
    industry: "Retail / E-commerce",
    category: "Website Design",
    image: "/images/portfolio-web.jpg",
    overview:
      "A concept e-commerce website exploring an editorial, conversion-focused layout with a flexible product storytelling framework.",
    servicesDelivered: ["Custom website design", "E-commerce websites", "Website optimization and maintenance"],
    isDemo: true,
  },
  {
    slug: "pathwise-mobile-app",
    name: "Pathwise Mobile App",
    client: "Demo Project",
    industry: "Health & Wellness",
    category: "Mobile Applications",
    image: "/images/portfolio-app.jpg",
    overview:
      "A concept cross-platform mobile app exploring onboarding, daily engagement, and a clean, accessible interface system.",
    servicesDelivered: ["Cross-platform app development", "UI/UX design", "API integrations"],
    isDemo: true,
  },
  {
    slug: "ledgerline-saas-platform",
    name: "Ledgerline SaaS Platform",
    client: "Demo Project",
    industry: "Financial Technology",
    category: "SaaS Products",
    image: "/images/portfolio-saas.jpg",
    overview:
      "A concept subscription SaaS dashboard exploring admin tooling, authentication flows, and a scalable component system.",
    servicesDelivered: ["MVP development", "Admin dashboards", "Authentication and user management"],
    isDemo: true,
  },
  {
    slug: "ember-ai-assistant",
    name: "Ember AI Assistant",
    client: "Demo Project",
    industry: "Technology",
    category: "AI Solutions",
    image: "/images/portfolio-ai.jpg",
    overview:
      "A concept AI chat assistant framework exploring lead qualification flows and a conversational interface aligned to brand voice.",
    servicesDelivered: ["Website conversational assistants", "Lead qualification", "Business workflow automation"],
    isDemo: true,
  },
];

export const getPortfolioBySlug = (slug: string) => portfolio.find((p) => p.slug === slug);
