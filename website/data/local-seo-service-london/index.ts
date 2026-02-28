/**
 * src/data/local-seo-service-london/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for ALL static content on the
 * Local SEO Service London page. Every string, heading, paragraph,
 * array, and config value lives here. Zero inline strings in section components.
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
export interface OptimizeStep {
  step: string;
  title: string;
  desc: string;
  alignment: 'left' | 'right';
}
export interface CaseStudyImage {
  src: string;
  alt: string;
}
export interface SocialLink {
  name: string;
  count: string;
  colorClass: string;
}

export type TabKey =
  | 'AI Models'
  | 'Core Signals'
  | 'Technical'
  | 'User Experience';

// ─────────────────────────────────────────────────────────────────────────────
// HERO BANNER
// ─────────────────────────────────────────────────────────────────────────────

export const heroBanner = {
  heading: 'Local SEO Service in London',
  breadHome: 'Home',
  breadCurrent: 'Local SEO Service in London',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: RANK HIGHER IN GOOGLE PACK-3
// ─────────────────────────────────────────────────────────────────────────────

export const rankHigherSection = {
  heading: 'Rank Higher in',
  headingAccent: ' Google Pack-3',
  image: {
    src: '/assets/images/london/get-1-rank-on-google-business-listing-in-london.webp',
    alt: 'Get 1 Rank on Google Business Listing in London',
  },
  body: "Achieving the 1st Rank in Google Map Search Results is like a direct handshake between you and your customers. By being found on Google Maps, you can increase your daily calls up to 10 times and quickly gain high quality leads through local SEO service. If your business profile isn't showing up on Google Maps, you could be missing out on significant visibility and valuable leads. Even with an existing profile, without the right local SEO strategy, you risk generating fewer inquiries, low-quality leads and missed opportunities. However, by refining your local SEO and ensuring your Google Business Profile is fully optimized, you will unlock immediate results, increased lead flow, enhanced online presence and a substantial boost in conversion rates, ultimately driving more business in your way.",
  ctaLabel: 'Get More Leads',
  modal: {
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
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2: LOCAL SEO SERVICE IN LONDON
// ─────────────────────────────────────────────────────────────────────────────

export const localSeoServiceSection = {
  eyebrow: 'Local Growth Starts Here',
  heading: 'Local SEO Service',
  headingAccent: ' in London',
  body: 'If you are running a small or large business in Toronto, Vancouver or any other location in London, our expert local SEO service will help you achieve the #1 rank in both Google business listing and the Search Engine Results Page (SERP) within just 45 days. Without optimizing your Google Business Profile with a targeted SEO strategy, your customers will find your competitors instead. To avoid this, you must implement the right strategy. Our approach increases your calls, leads and generates consistent revenue. We offer services designed with Google tools, ensuring your digital visibility is optimized without relying on any third party tools. Our team also helps you build attractive, responsive websites that improve your local search ranking and connect you with customers in your city.',
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
// SECTION 3: REAL RESULTS / CASE STUDIES
// ─────────────────────────────────────────────────────────────────────────────

export const caseStudiesSection = {
  eyebrow: '#1 Rankings, Guaranteed Results',
  heading: 'Real Results From',
  headingAccent: ' Our Client ',
  resultText:
    'Led by Zammy Zaif, our Versa Forge team secured the #1 spot on Google Pack-3, SERPs and AI search results for our London client delivering high-quality leads and connecting them with clients ready to buy.',
  ctaLabel: 'Contact us',
};

export const caseStudyImages: CaseStudyImage[] = [
  {
    src: '/assets/images/london/property-buyers.webp',
    alt: 'Property Buyers in London',
  },
  { src: '/assets/images/london/best-salon.webp', alt: 'Best Salon' },
  {
    src: '/assets/images/london/boiler-repair.webp',
    alt: 'Local Seo Servcies Quality Repairs',
  },
];

// Shared contact modal reused across CaseStudies and other sections
export const contactModal = {
  accentHeading: "Let's Build Your Success",
  accentFooter: 'Manual SEO Strategy \u2022 100% ROI Focused',
  formHeading: 'Contact us Now',
  formSubtextAlt: 'Fill in the details to start your journey to #1.',
  namePh: 'Full Name',
  emailPh: 'Email Address',
  urlPh: 'Website URL',
  phonePh: 'Phone Number',
  messagePh: 'Briefly describe your growth goals...',
  submitLabel: 'SUBMIT',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4: MEET OUR SEO EXPERT
// ─────────────────────────────────────────────────────────────────────────────

export const meetExpertSection = {
  eyebrow: 'Speak Local, Rank Global',
  heading: 'Meet Our',
  headingAccent: ' SEO Expert',
  body: "Now is the time to elevate your business to first rank. I'm Zammy Zaif, CEO of Versa Forge, transforming your business growth locally, city based and globally with over 20 years of experience in organic SEO service and local SEO service. As a Google Ranking Expert I specialise in helping businesses to achieve #1 rank sustainable growth through proven strategies that prioritize long-term success. I don't use shortcuts or third party tools, everything I do is organic and rooted in Google's guidelines and EAAT principles. I have helped 2,300+ businesses secure top spots on Google, whether locally or globally. If you want your business to break through the ranks and appear on Google's first page, reach out today.",
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
// SECTION 5: HOW WE OPTIMIZE YOUR BUSINESS
// ─────────────────────────────────────────────────────────────────────────────

export const optimizeSection = {
  eyebrow: 'Google-Approved Local SEO',
  heading: 'How We Optimize',
  headingAccent: ' Your Business',
  ctaHeading: 'ready to grow your business',
  ctaSubtext: 'Make the right choice for your business growth today.',
  ctaButton: 'Book Your Free Audit',
};

export const optimizeSteps: OptimizeStep[] = [
  {
    step: 'Step 1',
    title: 'Website Designing for Better User Experience',
    desc: 'A well-designed website engages customers, builds trust and supports higher Google rankings. We analyze navigation, speed and service presentation, fixing layout issues to make webpages user-friendly, attractive and effective.',
    alignment: 'left',
  },
  {
    step: 'Step 2',
    title: 'Google My Business Optimization for Local Visibility',
    desc: 'We thoroughly check your Google My Business Profile, ensuring NAP consistency across platforms then optimize business hours, service details and customer reviews to build trust with Google and potential customers.',
    alignment: 'right',
  },
  {
    step: 'Step 3',
    title: 'On-Page Optimization to Rank Higher',
    desc: 'Check their SEO experience. Ensure they follow Google guidelines and avoid risky grey or black-hat SEO methods.',
    alignment: 'left',
  },
  {
    step: 'Step 4',
    title: 'Creating Quality Backlinks for Enhanced Authority',
    desc: 'Our strategy creates high quality, relevant backlinks. By linking through trusted industry and local websites, we improve your site authority, enhance Google trust and attract more potential customers organically.',
    alignment: 'right',
  },
  {
    step: 'Step 5',
    title: 'Promote Business Through Social Media Without Paid Ads',
    desc: 'We promote your services and products through social media with strong visuals. From graphic design to full content creation, every poster attracts customers organically, building engagement, brand awareness and wider reach.',
    alignment: 'left',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6: GET FOUND ON GOOGLE BUSINESS LISTING TODAY
// ─────────────────────────────────────────────────────────────────────────────

export const getFoundSection = {
  eyebrow: 'Be Seen, Get Chosen',
  heading: 'Get Found on',
  headingAccent: ' Google Business Listing Today',
  body: "This isn't just one company's story, it's a reflection of what's possible for your business too. Many service business owners struggle not because of bad service, but because no one can find them. Visibility is everything. Our proven local SEO service is designed to fix that. We will help your business appear at the top of Google Maps, attract more calls and build real local trust that drives growth. Your competitors are already attracting your customers. Now it is your turn to rise above and become the next success story in Hialeah.",
  ctaLabel: 'Achieve Top Local Rank',
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
// SECTION 7: FAQ
// ─────────────────────────────────────────────────────────────────────────────

export const faqSection = {
  badgeLabel: 'FAQ',
  heading: 'Frequently Asked Questions',
};

export const faqData: FaqItem[] = [
  {
    question: 'Can Local SEO improve my Google Business listing ranking?',
    answer:
      'Local SEO optimizes Google Business listings with accurate details, keywords and local citations. We help businesses rank higher in local search results and Google Maps by using the correct SEO strategy.',
  },
  {
    question: 'Is Local SEO better than paid ads for small London businesses?',
    answer:
      'We focus on long term visibility and organic traffic without continuous ad spend and make sure your business reaches customers actively searching for local services, making it cost effective.',
  },
  {
    question: 'Can Local SEO work for new businesses with no reviews yet?',
    answer:
      'Yes, we can improve visibility even for new businesses. By optimizing your Google Business profile and website and encouraging initial reviews, we help boost your rankings over time.',
  },
  {
    question: 'What are the most common Local SEO mistakes businesses make?',
    answer:
      'Businesses often neglect updating their Google Business profile, using inconsistent NAP or ignoring local keywords. Such mistakes reduce visibility and prevent higher local rankings.',
  },
  {
    question:
      'How do Local SEO services help businesses rank higher in AI-powered search results?',
    answer:
      'We optimize your business info, content and reviews for AI-driven algorithms. This ensures your business appears relevant, trustworthy and ranks higher in local searches.',
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
    ] as SocialLink[],
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
// BOTTOM CONTACT FORM
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
