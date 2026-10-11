export interface ServiceItem {
  slug: string;
  letter: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  capabilities: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "branding",
    letter: "A",
    name: "Branding & Brand Marketing",
    shortName: "Branding",
    tagline: "Build a brand people remember, trust, and choose.",
    description:
      "We craft the strategic and creative foundation of your brand — positioning, identity, voice, and story — so every touchpoint feels intentional and unmistakably you.",
    benefits: [
      "Stand out in a crowded market with a clear, differentiated position.",
      "Build internal and customer-facing consistency across every channel.",
      "Create a brand system that scales as your business grows.",
    ],
    deliverables: [
      "Brand positioning and strategy",
      "Brand identity systems",
      "Brand messaging and storytelling",
      "Creative direction",
      "Campaign strategy and brand development",
    ],
    capabilities: ["Positioning workshops", "Visual identity", "Messaging frameworks", "Naming support", "Brand guidelines"],
  },
  {
    slug: "social-media-marketing",
    letter: "B",
    name: "Social Media Marketing",
    shortName: "Social Media",
    tagline: "Content and community that build real momentum.",
    description:
      "From strategy to production, we help brands show up consistently on social with content that earns attention and builds a loyal audience over time.",
    benefits: [
      "Grow an engaged, relevant audience organically.",
      "Keep a consistent publishing rhythm without the internal lift.",
      "Turn social presence into measurable brand awareness.",
    ],
    deliverables: [
      "Social media strategy",
      "Content planning and production",
      "Short-form video and creative campaigns",
      "Community management",
      "Organic growth and performance reporting",
    ],
    capabilities: ["Content calendars", "Short-form video", "Copywriting", "Community management", "Analytics reporting"],
  },
  {
    slug: "advertising-performance-marketing",
    letter: "C",
    name: "Advertising & Performance Marketing",
    shortName: "Advertising",
    tagline: "Media spend that is accountable to real business results.",
    description:
      "We plan, build, and optimize paid campaigns across search and social, grounded in testing and tracking so every dollar is working toward a measurable goal.",
    benefits: [
      "Reach qualified audiences with precision targeting.",
      "Improve return on ad spend through continual testing.",
      "Make informed decisions with transparent reporting.",
    ],
    deliverables: [
      "Paid social campaigns",
      "Search advertising",
      "Campaign creative development",
      "Conversion tracking",
      "Landing page optimization",
      "Performance reporting and testing",
    ],
    capabilities: ["Paid social", "Paid search", "Creative testing", "Conversion tracking", "Landing pages"],
  },
  {
    slug: "website-design-development",
    letter: "D",
    name: "Website Design & Development",
    shortName: "Web Design",
    tagline: "Websites built to convert, not just look good.",
    description:
      "We design and build fast, accessible, beautifully crafted websites — from marketing sites to complex e-commerce and interactive 3D experiences.",
    benefits: [
      "Make a strong first impression that builds credibility instantly.",
      "Give visitors a clear path to becoming customers.",
      "Launch on a flexible platform your team can maintain.",
    ],
    deliverables: [
      "Custom website design",
      "Business and corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Interactive and 3D websites",
      "Website optimization and maintenance",
    ],
    capabilities: ["UX/UI design", "Front-end development", "CMS integration", "E-commerce", "3D & motion", "Ongoing maintenance"],
  },
  {
    slug: "mobile-app-development",
    letter: "E",
    name: "Mobile Application Development",
    shortName: "Mobile Apps",
    tagline: "Native-quality apps for iOS, Android, and beyond.",
    description:
      "We design and engineer mobile applications that feel fast, intuitive, and reliable — built on cross-platform foundations that keep development efficient.",
    benefits: [
      "Reach customers directly on the device they use most.",
      "Launch on iOS and Android from a single, efficient codebase.",
      "Scale confidently with a maintainable technical foundation.",
    ],
    deliverables: [
      "iOS and Android applications",
      "Cross-platform app development",
      "UI/UX design",
      "API integrations",
      "Application maintenance",
    ],
    capabilities: ["Product design", "Cross-platform engineering", "API integration", "QA & testing", "App store launch"],
  },
  {
    slug: "custom-saas-development",
    letter: "F",
    name: "Custom SaaS Product Development",
    shortName: "Custom SaaS",
    tagline: "From idea to a scalable subscription product.",
    description:
      "We partner with founders and teams to design, build, and ship SaaS products — from MVP to a fully featured, scalable platform.",
    benefits: [
      "Validate your idea faster with a focused MVP.",
      "Give customers a secure, reliable product experience.",
      "Scale infrastructure as your user base grows.",
    ],
    deliverables: [
      "SaaS product strategy",
      "MVP development",
      "Subscription-based platforms",
      "Admin dashboards",
      "Authentication and user management",
      "API and payment integrations",
      "Scalable cloud architecture",
    ],
    capabilities: ["Product strategy", "MVP builds", "Dashboards", "Billing integration", "Cloud architecture"],
  },
  {
    slug: "seo",
    letter: "G",
    name: "Search Engine Optimization (SEO)",
    shortName: "SEO",
    tagline: "Earn visibility that compounds over time.",
    description:
      "We improve the technical health, content, and authority of your website so it performs sustainably in organic search.",
    benefits: [
      "Build long-term organic visibility instead of relying solely on paid media.",
      "Fix technical issues holding your site back in search results.",
      "Create content that answers real customer questions.",
    ],
    deliverables: [
      "Technical SEO",
      "On-page and off-page SEO",
      "Keyword research",
      "Content optimization",
      "Organic search growth",
    ],
    capabilities: ["Technical audits", "On-page SEO", "Content strategy", "Link building", "Reporting"],
  },
  {
    slug: "local-seo",
    letter: "H",
    name: "Local SEO",
    shortName: "Local SEO",
    tagline: "Be found by the customers nearest to you.",
    description:
      "We help local and multi-location businesses strengthen their presence in local search results and on Google Business Profile.",
    benefits: [
      "Improve visibility in local map and search results.",
      "Build a stronger reputation through reviews.",
      "Create location pages that serve real customer intent.",
    ],
    deliverables: [
      "Google Business Profile optimization",
      "Local keyword strategy",
      "Location-based landing pages",
      "Local search visibility",
      "Review and reputation strategy",
    ],
    capabilities: ["GBP optimization", "Local keyword research", "Location pages", "Review strategy", "Citation management"],
  },
  {
    slug: "geo",
    letter: "I",
    name: "Generative Engine Optimization (GEO)",
    shortName: "GEO",
    tagline: "Prepare your brand for AI-powered search.",
    description:
      "We structure content and brand information for clarity and credibility as AI-powered answer engines become part of how people search. We do not promise guaranteed rankings or guaranteed mentions in AI-generated answers.",
    benefits: [
      "Present clear, well-structured information AI systems can parse.",
      "Strengthen entity and brand authority signals across the web.",
      "Monitor AI search visibility where it can be measured.",
    ],
    deliverables: [
      "Content structured for AI-powered search",
      "Entity and brand authority development",
      "Content clarity and source credibility",
      "Structured data implementation where appropriate",
      "AI search visibility monitoring where measurable",
    ],
    capabilities: ["Structured content", "Entity building", "Structured data", "Authority development", "Visibility monitoring"],
  },
  {
    slug: "ai-chatbots-automation",
    letter: "J",
    name: "AI Chatbots & Automation",
    shortName: "AI Automation",
    tagline: "Automate the busywork. Respond to customers instantly.",
    description:
      "We design and build AI-powered chat assistants and automated workflows that qualify leads, answer questions, and connect your tools together.",
    benefits: [
      "Respond to prospects and customers around the clock.",
      "Free up your team from repetitive manual tasks.",
      "Qualify leads automatically before they reach your sales team.",
    ],
    deliverables: [
      "AI-powered customer support chatbots",
      "Website conversational assistants",
      "Lead qualification",
      "Business workflow automation",
      "CRM and third-party integrations",
    ],
    capabilities: ["Conversational design", "Chatbot development", "Workflow automation", "CRM integration", "Lead routing"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
