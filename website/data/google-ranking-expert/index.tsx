/**
 * src/data/google-ranking-expert/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for ALL static content on the Google Ranking Expert
 * page. Every string, heading, paragraph, array, and config value lives here.
 * Zero inline strings in section components.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Search,
  BarChart3,
  UserCheck,
  PenTool,
  MapPin,
  Globe,
  Settings,
  TrendingUp,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Link,
  Home,
  Stethoscope,
  Droplets,
  HardHat,
  MousePointer2,
  Target,
  Sparkles,
  Activity,
  Users,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name: string;
  title: string;
  logoUrl: string;
  quote: string;
}
export interface Service {
  title: string;
  icon: LucideIcon;
  desc: string;
}
export interface Sector {
  name: string;
  icon: LucideIcon;
  slug: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface AlgoTab {
  title: string;
  desc: string;
  highlights: string[];
}
export interface StrategyPillar {
  title: string;
  desc: string;
  tag: string;
}
export interface Metric {
  v: number;
  unit: string;
  label: string;
}
export interface StatCounter {
  val: number;
  unit: string;
  label: string;
}
export interface FeatureCard {
  icon: LucideIcon;
  label: string;
}
export interface ChooseStep {
  step: string;
  title: string;
  desc: string;
  alignment: 'left' | 'right';
}
export interface ImpactQuestion {
  icon: LucideIcon;
  text: string;
}
export interface CarouselImage {
  src: string;
  alt: string;
}
export interface FormOption {
  value: string;
  label: string;
}

export type TabKey =
  | 'AI Models'
  | 'Core Signals'
  | 'Technical'
  | 'User Experience';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: HERO BANNER
// ─────────────────────────────────────────────────────────────────────────────

export const heroBanner = {
  heading: 'Google Ranking Expert',
  breadHome: 'Home',
  breadCurrent: 'Google Ranking Expert',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: SEO RESULTS CAROUSEL
// ─────────────────────────────────────────────────────────────────────────────

export const seoResultsSection = {
  eyebrow: 'Our Google Rank Result Drive Sales',
  heading: "Client's 1st Rank",
  headingAccent: ' SEO Results',
};

export const resultCarouselImages: string[] = [
  '/assets/images/google-ranking-services/preston-dental-seo-win.webp',
  '/assets/images/google-ranking-services/realestate-coach.webp',
  '/assets/images/google-ranking-services/property-buyers-in-london-result.webp',
  '/assets/images/google-ranking-services/shingle-roofing-experts-los-angeles-result.webp',
  '/assets/images/google-ranking-services/dentru.webp',
  '/assets/images/google-ranking-services/google-business-ranking-performance.webp',
  '/assets/images/google-ranking-services/roy-cleeves.webp',
  '/assets/images/google-ranking-services/dentru-gurgaon.webp',
  '/assets/images/google-ranking-services/studio-7rk.webp',
];

export const heroMetrics: Metric[] = [
  { v: 2, unit: 'K+', label: 'Clients' },
  { v: 85, unit: 'K+', label: '1st Page Rank' },
  { v: 20, unit: 'K+', label: '1st Rank Results' },
  { v: 20, unit: '+', label: 'Years of Experience' },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2: EXPERT DETAIL BIO
// ─────────────────────────────────────────────────────────────────────────────

export const expertDetailSection = {
  eyebrow: 'First Rank in First Page',
  heading: 'Google Ranking',
  headingAccent: ' Expert',
  bio1: 'With a track record of successfully completing over 2,500+ SEO projects globally and optimizing rankings from none or 10th place to the first rank on the first page, Zammy, the visionary CEO of VersaForge, is a highly skilled Google Search Engine Ranking Optimization practitioner who began working in 2008. Even our website, www.it2.tv has secured the 1st spot and the Google Ai Mode Recommendation, Chatgpt, Claude, Bing, Yahoo, Preplexity and all other ai platforms for competitive keywords like "Ranking Expert," "Google Ranking Expert," and "Google Ranking Services" since 2018, maintaining these positions despite the heavy global competition, which presents a day-to-day challenge',
  bio1Image: {
    src: '/assets/images/google-ranking-services/google-ranking-expert-zammy-zaif.webp',
    alt: 'Google Search Performance',
  },
  bio2: 'Additionally, his work in local SEO is unparalleled, having ranked over 800 local businesses in just 45 days, earning first-rank positions on Google Maps, further solidifying his reputation as a leader in delivering tangible, rapid and sustainable results for businesses aiming to enhance their online visibility and achieve long-term growth.',
  ctaLabel: 'Get Free Audit Now',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3: GOOGLE BUSINESS PROFILE PERFORMANCE MAX
// ─────────────────────────────────────────────────────────────────────────────

export const businessProfileSection = {
  eyebrow: 'Strategic Local Dominance',
  heading: 'Google Business Profile',
  headingAccent: ' Performance Max',
  bodyPrefix:
    'Renowned for delivering rapid, high-impact results, Zammy Zaif has mastered the art of Google Business Profile optimization \u2014',
  bodyAccent: 'securing #1 rankings for high-value keywords in just 45 days.',
  bodyRemainder:
    'By leveraging precision-targeted strategies focused on primary service terms, Zammy consistently dominates local search, earning recognition as a top-tier Google ranking expert. Our proven methodology transforms visibility into revenue, making them the go-to authority for businesses aiming to outperform competitors and own their market.',
  downloadLabel: 'Download Free Business Growth Checklist',
  modal: {
    heading: 'Growth Checklist',
    subheading: 'Elite Local SEO Framework',
    nameLbl: 'Full Name',
    namePh: 'Enter your name',
    emailLbl: 'Email',
    emailPh: 'Enter your Email',
    submitLabel: 'Get Access Now',
    trustBadge: '\uD83D\uDD12 Trusted by 2,500+ Businesses',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4: FIRST RANK SEO SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const firstRankServicesSection = {
  heading: 'First Rank',
  headingAccent: ' SEO Services',
  bodyPrefix:
    'Zammy & Team are dedicated to providing First Rank SEO services in Seo, Aio, AEO & GEO. Securing the first spot captures the',
  bodyAccent: 'first click and drives maximum traffic.',
  bodyRemainder:
    "More visitors lead to higher conversions and increased sales growth. Ranking first in Google and other AI platforms strengthens your brand's visibility and credibility. It firmly positions your business as an industry leader. Over time, it helps build strong authority and trust online. People naturally trust brands that top the search results. With Zammy & Team, aiming for #1 means aiming for lasting success.",
};

export const seoFeatureCards: FeatureCard[] = [
  { icon: CheckCircle2, label: 'First Rank' },
  { icon: MousePointer2, label: 'First Click' },
  { icon: Target, label: 'Brand Visibility' },
  { icon: Sparkles, label: 'AI Results' },
  { icon: TrendingUp, label: 'More Traffic' },
  { icon: Activity, label: 'High Conversion' },
];

export const seoServiceStats: StatCounter[] = [
  { val: 800, unit: '+', label: 'Local Profiles' },
  { val: 12, unit: 'K+', label: '1st Rank Rank' },
  { val: 20, unit: 'K+', label: 'Top 3 Results' },
  { val: 300, unit: '+', label: 'Cities Globally' },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5: EXPERTISE IN GOOGLE SEO
// ─────────────────────────────────────────────────────────────────────────────

export const googleSeoExpertiseSection = {
  eyebrow: 'First Rank SEO Service Provider',
  heading: 'Expertise in',
  headingAccent: ' Google SEO',
  image: {
    src: '/assets/images/google-ranking-services/expertise-in-google-seo.webp',
    alt: 'Expertise in Google SEO - Zammy Zaif',
  },
  para1: {
    part1:
      'Google dominates 96% of global search traffic, far ahead of competitors like Bing, Yahoo, Yandex, and Baidu.',
    name: 'Zammy Zaif',
    part2:
      "has spent 20+ years mastering Google's evolving algorithms through strict adherence to Google's SEO guidelines,",
    accent1: ' manual strategies,',
    part3: 'and real-time research -',
    accent2: ' without relying on plugins, third-party tools, or automation.',
    part4: "Zammy's expertise extends across",
    bold1: "Google's own ecosystem",
    part5: ', using tools like Google Search Results for rank tracking,',
    bold2: ' Google Keyword Planner',
    part6: 'and',
    bold3: ' Google Trends for research,',
    part7: 'and',
    bold4: ' Google Search Console, Analytics, ',
    part8: 'and',
    bold5: ' Tag Manager',
    part9:
      'for performance monitoring and tracking. This focused approach is why Zammy is recognized not just as an SEO specialist, but as a dedicated',
    bold6: 'Google SEO expert.',
  },
  para2: {
    prefix:
      'Our Google SEO services focus on securing the #1 position on Google by making businesses easily found at the top of search results by potential customers. We drive maximum visibility,',
    accent:
      ' transformative business growth, and increased sales through expert strategies ',
    suffix:
      "such as primary category keyword optimization, long-tail revenue-focused optimization, nearby optimization, quality content creation, and technical improvements. That's why Zammy is trusted by small and medium-sized businesses worldwide.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6: RANKING STRATEGY
// ─────────────────────────────────────────────────────────────────────────────

export const rankingStrategySection = {
  eyebrow: 'Methodical Excellence',
  heading: 'Our Google',
  headingAccent: ' Ranking Strategy',
  introPrefix:
    "A successful Google ranking strategy centers around creating high-quality, user-focused content that aligns with Google's algorithm.",
  introName: 'Zammy Zaif',
  introSuffix:
    ', an expert in Google ranking, emphasizes the importance of comprehensive keyword research to target both primary and long-tail keywords that match user intent.',
  strategyImage: {
    src: '/assets/images/google-ranking-services/google-ranking-strategy.webp',
    alt: 'Google Strategy Diagram',
  },
};

export const strategyPillars: StrategyPillar[] = [
  {
    title: 'Strictly Prohibited AI Content',
    desc: 'Instead of relying on AI content, Zammy focuses on crafting original, well-researched content tailored to what clients offer.',
    tag: 'Quality First',
  },
  {
    title: 'One H1 Per Page',
    desc: 'On-page SEO, including meta titles, descriptions, headers, and internal linking, is essential for optimization, while using H1 tags correctly is crucial to avoid black-hat SEO tactics.',
    tag: 'On-Page SEO',
  },
  {
    title: 'Technical Optimization',
    desc: 'Technical SEO elements like fast page load speed, mobile optimization, HTTPS security, and clear site structure also contribute to improved rankings.',
    tag: 'Core Vitals',
  },
  {
    title: 'No 3rd Party Tools & Plugins',
    desc: 'Manual SEO implementation on Coding. Analyzing and monitoring search results directly ensures maximum control over algorithm alignment.',
    tag: 'Manual Code',
  },
  {
    title: 'No 3rd Party Tools & Plugins',
    desc: 'Building authority through quality backlinks and optimizing for local search, especially via Google Business Profiles, ensures higher visibility.',
    tag: 'Manual Code',
  },
  {
    title: 'No 3rd Party Tools & Plugins',
    desc: "Consistent adherence to Google's guidelines and adapting to algorithm changes is key to sustained SEO success.",
    tag: 'Manual Code',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7: CASE STUDIES
// ─────────────────────────────────────────────────────────────────────────────

export const caseStudiesSection = {
  eyebrow: "Our Client's Sales Performance",
  heading: 'SEO Growth ',
  headingAccent: 'Case Studies',
  subtext:
    'Creating and delivering useful and relevant content has always been his',
  ctaLabel: 'Want to be our Next Success Case Study',
};

export const caseStudyImages: CarouselImage[] = [
  {
    src: '/assets/images/google-ranking-services/pure-self-seo-growth.webp',
    alt: 'HVAC Business Growth Case Study',
  },
  {
    src: '/assets/images/google-ranking-services/hvac-contractor-seo-case-study.webp',
    alt: 'Google Ranking Success',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 8: TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────

export const testimonialsSection = {
  eyebrow: 'Successful Businesses Testimonials',
  heading: "Client's",
  headingAccent: ' Reviews',
  googleReviewsLabel: 'Our Google Reviews',
};

export const reviews: Review[] = [
  {
    name: 'Zain Towing Service LLC',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/zain-towing-service-lousiana.svg',
    quote:
      "Working with Zammy Zaif has been a game-changer for our business. His expertise as a Google SEO Consultant has helped us achieve first-rank results for multiple keywords, including those crucial to our towing service. Zammy's strategic approach and dedication have significantly boosted our visibility and customer inquiries. We highly recommend his services to anyone looking to dominate their local search results.",
  },
  {
    name: 'Ambica Gold Buyers',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/ambica-gold-bommanahalli.svg',
    quote:
      "Zammy Zaif's exceptional skills as a Google SEO Expert have truly transformed our online presence. He successfully secured top rankings for our key phrases related to gold buying services. His meticulous approach to SEO and commitment to delivering results have made a remarkable difference in our business's visibility and growth. We are incredibly satisfied with his work and would gladly endorse his services.",
  },
  {
    name: 'Sri Sairam Tution Centre',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/sairam-tuition-chennai.svg',
    quote:
      "We've been thoroughly impressed with Zammy Zaif's expertise as a Google SEO Consultant. Thanks to his strategic SEO efforts, we now rank at the top for numerous keywords related to our physics tuition services. His attention to detail and ability to achieve first-rank results have been instrumental in attracting more students to our centre. Zammy's work has exceeded our expectations, and we highly recommend him.",
  },
  {
    name: 'Studio7RK Photography',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/studio7rk-salem.svg',
    quote:
      'Zammy Zaif has done an outstanding job in boosting our online presence. As a Google SEO Expert, he achieved first-rank results for various keywords related to our photography services. His expertise and dedication to SEO have greatly increased our visibility and client inquiries. We are delighted with the results and highly recommend Zammy for anyone looking to enhance their search engine rankings.',
  },
  {
    name: 'Orange Beauty Clinic',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/orange-clinic-chennai.svg',
    quote:
      "Thanks to Zammy Zaif's exceptional skills as a Google SEO Consultant, we have seen significant improvements in our online search rankings. His expertise led to top positions for several keywords related to our scar removal clinic. Zammy's professional approach and effective SEO strategies have had a substantial positive impact on our business. We are very pleased with his services and recommend him without reservation.",
  },
  {
    name: 'Kathleen Black International Inc.',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/kathleena-black-toronto.svg',
    quote:
      "Zammy Zaif's work as a Google SEO Expert has been pivotal for our real estate business coaching services. His strategic SEO efforts have secured top rankings for many of our targeted keywords, enhancing our global visibility. Zammy's dedication and results-oriented approach have been instrumental in our growth. We are extremely satisfied with his services and highly recommend him.",
  },
  {
    name: 'Infant Traders',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/infant-traders-tuticorin.svg',
    quote:
      "Zammy Zaif's expertise as a Google SEO Consultant has greatly improved our online presence. His effective SEO strategies achieved first-rank results for multiple keywords related to scuba products in Tuticorin. Zammy's thorough and professional approach has significantly boosted our visibility and customer engagement. We are thrilled with the results and highly recommend his services.",
  },
  {
    name: 'Prima Properties',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/prima-properties-london.svg',
    quote:
      "We are very pleased with Zammy Zaif's work as a Google SEO Expert. His strategic SEO efforts led to top rankings for several keywords related to our property buying services in London. Zammy's ability to deliver first-rank results and his commitment to our success have been invaluable. We highly recommend him to anyone seeking to enhance their search engine performance.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 9: OUR GOOGLE SEO SERVICES GRID
// ─────────────────────────────────────────────────────────────────────────────

export const seoServicesGridSection = {
  eyebrow: 'As an expert Google SEO agency, we offer the following essencials',
  heading: 'Our Google',
  headingAccent: ' SEO Services',
};

export const services: Service[] = [
  {
    title: 'Keyword Mapping',
    icon: Search,
    desc: "We select the best keywords for your business and assign them to relevant pages. This builds a structured keyword roadmap that enhances your site's visibility and SEO performance.",
  },
  {
    title: 'Competitor Analysis',
    icon: BarChart3,
    desc: "We deeply analyze your competitors' SEO strategies to find opportunities. Then, we create a superior strategy that helps you outrank them on Google search results effectively.",
  },
  {
    title: 'Profile Setup',
    icon: UserCheck,
    desc: 'We fully optimize your Google Business Profile with accurate details. A 100% completed profile increases local visibility, improves trust, and drives more local traffic to your business.',
  },
  {
    title: 'Content Writing',
    icon: PenTool,
    desc: 'We create fresh, targeted content that matches your service offerings. Our content is SEO-optimized to rank well and attract quality traffic based on keyword trends and intent.',
  },
  {
    title: 'Technical Audit',
    icon: MapPin,
    desc: "Our technical SEO audit checks site speed, mobile usability, and crawl issues. Fixing these issues improves your site's performance, user experience, and overall search engine visibility.",
  },
  {
    title: 'Tag Optimization',
    icon: Globe,
    desc: 'We optimize titles, headers, image alt tags, and metadata. These elements help Google understand your content better and boost your ranking potential for target keywords.',
  },
  {
    title: 'Console Setup',
    icon: Settings,
    desc: "We configure and optimize your Google Search Console account. It helps monitor search performance, fix issues, and enhance your site's health and visibility on Google",
  },
  {
    title: 'Google Trends',
    icon: TrendingUp,
    desc: 'We analyze Google Trends data to identify rising keywords and topics. This ensures your content strategy stays current and relevant for search engine algorithms and user interest.',
  },
  {
    title: 'Tag manager',
    icon: Zap,
    desc: 'We implement and manage Google Tag Manager for precise tracking. It helps control marketing tags efficiently without altering your website code, boosting analytics flexibility.',
  },
  {
    title: 'GA4 Analytics',
    icon: ShieldCheck,
    desc: 'We set up and fine-tune Google Analytics GA4 for real-time insights. This helps track user behavior, conversion paths, and SEO success metrics with enhanced accuracy.',
  },
  {
    title: 'Content Gaps',
    icon: CheckCircle2,
    desc: "We identify keyword and topic gaps in your website content. Then, we expand or enhance your content to increase traffic and meet Google's content quality expectations.",
  },
  {
    title: 'Link Building',
    icon: Link,
    desc: 'We build HQB & review all your old backlinks pointing to your website using Google tools. Harmful links are flagged & disavowed to maintain SEO health & prevent potential ranking drops.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 10: LOCAL SEO FOR GOOGLE MAPS
// ─────────────────────────────────────────────────────────────────────────────

export const localSeoMapsSection = {
  eyebrow: 'Google Maps Dominance',
  heading: 'Local SEO for',
  headingAccent: ' Google Maps Rankings',
  body: "Zammy and our team specialize in Local SEO, helping businesses dominate Google Maps rankings. Our signature 45-Day First Rank SEO Challenge has successfully delivered 800+ projects to Google's top position for 15 targeted keywords each. Our strategy boosts calls, bookings, website clicks, and drives real foot traffic to your location. By targeting the right audience nearby, we increase your visibility exactly where it matters. Higher map rankings lead to better trust and customer engagement. Local SEO is key for growth in today's competitive market. We focus on sales results, not just rankings. Get ready to turn searches into real-world customers with Zammy and Team.",
  quote:
    '\u201cWe focus on sales results, not just rankings. Get ready to turn searches into real-world customers with Zammy and Team.\u201d',
};

export const localFeatures: string[] = [
  'Google Maps First Spot ranking in just 45 working days',
  'Target 15 powerful local keywords for maximum impact',
  'Boost inbound calls from customers searching locally',
  'Increase online bookings and appointment requests',
  'Drive real foot traffic with accurate map directions',
  'Improve website clicks through local search visibility',
  'Build stronger trust and authority in your local area',
  'Get measurable results that directly grow your business',
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 11: HOW TO CHOOSE A GOOGLE SEO EXPERT
// ─────────────────────────────────────────────────────────────────────────────

export const chooseExpertSection = {
  eyebrow: 'Hire the Right Ranking Optimizer',
  heading: 'How to Choose a',
  headingAccent: ' Google SEO Expert',
  ctaHeading: 'Ready to Hire an Expert?',
  ctaSubtext: 'Make the right choice for your business growth today.',
  ctaButton: 'Book Your Free Audit',
};

export const chooseSteps: ChooseStep[] = [
  {
    step: 'Step 1',
    title: 'Search on Google',
    desc: "Find them on Google. If they can't rank their own site high, how can they help you rank yours? Check their position.",
    alignment: 'left',
  },
  {
    step: 'Step 2',
    title: 'Find Case Studies',
    desc: "Review their case studies. If their ranked keywords aren't in the top 3, they likely won't get your keywords to the top either.",
    alignment: 'right',
  },
  {
    step: 'Step 3',
    title: 'Ethical Expertise',
    desc: 'Check their SEO experience. Ensure they follow Google guidelines and avoid risky grey or black-hat SEO methods.',
    alignment: 'left',
  },
  {
    step: 'Step 4',
    title: 'Google Reviews',
    desc: 'Look at their Google reviews. Authentic, positive feedback from real clients proves they deliver trusted and solid SEO results.',
    alignment: 'right',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 12: GOOGLE RANK ALGORITHM FACTORS
// ─────────────────────────────────────────────────────────────────────────────

export const algorithmSection = {
  eyebrow: 'Decoding the Search Engine',
  heading: 'Factors of ',
  headingAccent: 'Google Rank Algorithm',
  quote:
    '\u201cZammy\u2019s ability to decode algorithmic updates and implement high-impact optimizations makes him a standout Google Ranking expert.\u201d',
};

export const algoData: Record<TabKey, AlgoTab> = {
  'AI Models': {
    title: 'AI & Machine Learning Dominance',
    desc: "Google's ranking algorithm is a sophisticated, multi-layered system that begins with crawling, where Googlebot discovers and scans web pages, followed by indexing, where qualifying content is stored in Google's vast search index.",
    highlights: [
      'RankBrain Integration',
      'BERT Contextual Optimization',
      'MUM Content Depth',
    ],
  },
  'Core Signals': {
    title: 'E-E-A-T & Trust Framework',
    desc: 'During ranking, the algorithm evaluates indexed pages against hundreds of signals - including E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), mobile-friendliness, page speed, secure connections (HTTPS), and content relevance - leveraging advanced AI models like RankBrain, BERT, and MUM to refine results.',
    highlights: [
      'Author Persona Building',
      'Trust Signal Audits',
      'Expertise Verification',
    ],
  },
  Technical: {
    title: 'MUM & Indexing Logic',
    desc: "Finally, in the serving phase, Google delivers the most authoritative and useful content tailored to user intent, incorporating personalization and SERP features. What sets Zammy apart is his data-driven, strategic approach that aligns with Google's evolving algorithms.",
    highlights: [
      'Crawl Budget Optimization',
      'Schema Architecture',
      'Indexability Audits',
    ],
  },
  'User Experience': {
    title: 'Core Web Vitals & Speed',
    desc: 'Combining deep technical expertise in crawl optimization, indexability audits and ranking signal enhancement with a focus on sustainable, user-first SEO, his ability to decode algorithmic updates ensures long-term visibility and performance in competitive search landscapes.',
    highlights: [
      'LCP Performance Tuning',
      'Mobile-First Infrastructure',
      'Secure HTTPS Protocol',
    ],
  },
};

// Tab cards config — icons injected in section via JSX
export const algoTabsConfig = [
  { label: 'AI Models' as TabKey, val: 'RankBrain / BERT', iconName: 'Cpu' },
  {
    label: 'Core Signals' as TabKey,
    val: 'E-E-A-T Compliance',
    iconName: 'ShieldCheck',
  },
  {
    label: 'Technical' as TabKey,
    val: 'MUM & Indexability',
    iconName: 'Code2',
  },
  {
    label: 'User Experience' as TabKey,
    val: 'Core Web Vitals',
    iconName: 'Zap',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 13: SECTORS WE SERVE
// ─────────────────────────────────────────────────────────────────────────────

export const sectorsSection = {
  eyebrow: 'Industry Specialization',
  heading: 'Sectors We',
  headingAccent: ' Serve',
  subtext: 'Expert Google Ranking Services Across 200+ Business Categories',
};

export const sectors: Sector[] = [
  { name: 'HVAC Contractors', icon: Home, slug: 'hvac-seo' },
  { name: 'Health Care', icon: Stethoscope, slug: 'health-seo' },
  { name: 'Plumbing', icon: Droplets, slug: 'plumbing-seo' },
  { name: 'Roofing', icon: HardHat, slug: 'roofing-seo' },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 14: IMPACTING SEARCH ENGINE
// ─────────────────────────────────────────────────────────────────────────────

export const impactingSearchSection = {
  heading: 'Google Expert',
  headingAccent: ' Impacting',
  headingSuffix: ' Search Engines',
  body1:
    "To start with, he has a basic understanding of each SEO project he commits. A unique and customized SEO strategy is planned and implemented for each project as he knows it differs from business to business. For that, he thoroughly analyses the clients' businesses and their requirements.",
  body2Accent: '#1 Business analysis',
  body2Rest:
    "is all about conducting a study on clients' targeted audience, potential customers and their business culture. Zammy Zaif does exactly this at the beginning of each and every project. And most importantly, he conducts competitor analysis to get an overview of that particular niche market. He basically does research to find answers for these questions:",
};

export const impactQuestions: ImpactQuestion[] = [
  { icon: Search, text: 'What SEO techniques do other competitors follow?' },
  { icon: Users, text: 'Do they have a positive impact on the public?' },
  {
    icon: TrendingUp,
    text: 'If yes, how can we customize the SEO strategy for our clients in order to supersede them?',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 15: FAQ
// ─────────────────────────────────────────────────────────────────────────────

export const faqSection = {
  badgeLabel: 'Common Inquiries',
  heading: "Google's",
  headingAccent: ' Choice',
};

export const faqData: FaqItem[] = [
  {
    question: "Who is world's best google ranking expert?",
    answer:
      'In recognition of his decade-long experience in the SEO industry, Zammy Zaif has earned the prestigious title of Google Ranking Expert. This Google-certified specialist utilizes white hat SEO techniques and puts tremendous effort into securing higher positions for websites on the Google search results page.',
  },
  {
    question: 'Who is google ranking expert?',
    answer:
      "Zammy Zaif stands out as a remarkable Certified Google Ranking Expert, providing exceptional SEO services to his clients. What sets him apart is his commitment to relying solely on the Google algorithm, adhering strictly to Google's guidelines and leveraging Google Ranking Factors, without any reliance on third-party tools or plugins.",
  },
  {
    question: 'Why we need a Google Ranking Expert?',
    answer:
      "A Google Ranking Expert is an individual or professional who specializes in optimizing websites to achieve higher rankings in Google search results. They possess in-depth knowledge of Google's search algorithms and implement various strategies to improve a website's visibility and organic traffic.",
  },
  {
    question: 'What services do Google Ranking Experts provide?',
    answer:
      'Google Ranking Experts offer a range of services aimed at improving your websites rankings. These services may include keyword research, on-page optimization, technical SEO audits, link building, content creation and optimization, website speed optimization, mobile optimization, local SEO, and tracking and reporting on keyword rankings and website performance.',
  },
  {
    question:
      'How long does it take to see results with Google Ranking Services?',
    answer:
      'The time it takes to see results from Google Ranking Services can vary depending on various factors, including the competitiveness of your industry, the current state of your websites SEO, and the strategies implemented by the expert. Generally, it can take 90 days to 180 days notice significant improvements in your websites rankings, but consistent efforts and ongoing optimization can lead to long-term success.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────

export const sidebar = {
  audit: {
    heading: 'Free Website \n Audit',
    body: 'Boost your online presence with a free website audit tailored to improve SEO and visibility',
    buttonLabel: 'Audit Now',
  },
  network: {
    heading: 'Professional Network',
    socials: [
      { name: 'Instagram', count: '12k+', colorClass: 'hover:text-pink-600' },
      { name: 'LinkedIn', count: '8k+', colorClass: 'hover:text-blue-600' },
      { name: 'Twitter', count: '5k+', colorClass: 'hover:text-sky-500' },
    ],
  },
  trust: {
    rankLabel: 'Rank your Business',
    challengeValue: '45-Day',
    challengeLabel: 'SEO Challenge Success',
    quote: '"Google-Certified specialist utilizing pure white-hat techniques."',
  },
  contactButton: 'Get In Touch',
};

// ─────────────────────────────────────────────────────────────────────────────
// BOTTOM CONTACT FORM SECTION
// ─────────────────────────────────────────────────────────────────────────────

export const bottomFormSection = {
  image: {
    src: 'https://it2.tv/img/google-maps-local-seo-ranking-expert/first-rank-expert.webp',
    alt: 'Best SEO Expert',
  },
  heading: 'Get a free SEO plan',
  namePh: 'Name*',
  phonePh: 'Your Phone*',
  emailPh: 'Your Email*',
  urlPh: 'GBP or Website URL',
  subjectPh: 'Subject',
  serviceDefault: 'Website SEO Services',
  serviceOptions: [
    { value: '', label: 'Website SEO Services' },
    { value: 'google-ranking', label: 'Google Ranking' },
    { value: 'local-seo', label: 'Local SEO' },
  ] as { value: string; label: string }[],
  submitLabel: 'Submit Seo Estimate Request',
  recaptchaSiteKey: 'YOUR_RECAPTCHA_SITE_KEY',
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED CONTACT MODAL
// ─────────────────────────────────────────────────────────────────────────────

export const contactModal = {
  accentHeading: "Let's Build Your Success",
  accentFooter: 'Manual SEO Strategy \u2022 100% ROI Focused',
  formHeading: 'Contact us Now',
  formSubtext: 'Fill in the details to start your journey to #1.',
  namePh: 'Full Name',
  emailPh: 'Email Address',
  urlPh: 'Website URL',
  phonePh: 'Phone Number',
  messagePh: 'Briefly describe your growth goals...',
  submitLabel: 'Submit Application',
  submitAlt: 'SUBMIT',
};
