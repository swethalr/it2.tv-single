/**
 * src/data/local-seo-services-hialeah/index.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for ALL static content on the
 * Local SEO Services Hialeah page. Every string, heading, paragraph,
 * array, and config value lives here. Zero inline strings in section files.
 */

import type { LucideIcon } from 'lucide-react';
import { Phone, Target, TrendingUp, Activity } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}
export interface CaseStudyImage {
  src: string;
  alt: string;
}
export interface FeatureCard {
  icon: LucideIcon;
  label: string;
}
export interface SocialLink {
  name: string;
  count: string;
  colorClass: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO BANNER
// ─────────────────────────────────────────────────────────────────────────────

export const heroBanner = {
  heading: 'Local SEO Service in Hialeah',
  breadHome: 'Home',
  breadCurrent: 'Local SEO Service in Hialeah',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: GROW YOUR BUSINESS LOCALLY
// ─────────────────────────────────────────────────────────────────────────────

export const growLocallySection = {
  heading: 'Grow Your Business',
  headingAccent: '  Locally',
  image: {
    src: '/assets/images/hialeah/local-seo-service.jpg',
    alt: 'Google Search Performance',
  },
  body: "Customers are always looking for the service who have more expertise in their own field You might have done everything, built a website, set up your Google Business Profile and stayed consistent on social media yet customers aren't reaching you because your profile hasn't been optimized with the right local SEO service. Whatever your service or product may be, when customers in Hialeah search for it, you should appear first in their search list. To make this happen, you need to build your profile by following the correct local SEO strategy, after that you can see the growth in your conversion ratio.",
  ctaLabel: 'Book a SEO Consultation',
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
// SECTION 2: OUR LOCAL SEO STRATEGY
// ─────────────────────────────────────────────────────────────────────────────

export const localSeoStrategySection = {
  eyebrow: 'Rank Local, Grow Loyal',
  heading: 'Our Local',
  headingAccent: ' SEO Strategy',
  body: "Sometimes, the customers who are looking for your service end up reaching your competitors instead of you. That's why we provide local SEO service in Hialeah to break your business free from the competitors' trap and help you achieve the #1 rank in 45 days. Every step is built on transparency, precision and commitment to your success. We focus on enhancing your Google Business Profile, refining keywords and building customer trust through authentic reviews. Our approach is not about quick fixes, but sustainable visibility that strengthens your brand each day. When your business begins to appear at the top of local searches, it's not just a ranking, it is proof of real progress, earned with strategy and care.",
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
// SECTION 3: CASE STUDIES / AI SEO RESULTS
// ─────────────────────────────────────────────────────────────────────────────

export const caseStudiesSection = {
  eyebrow: 'Smart Growth, Real Results',
  heading: 'Ai Seo Result - ',
  headingAccent: ' Our Customer from Hialeah',
  resultText:
    'What you see above is the result of the magic created by Zammy Zaif and our Versa Forge team through a powerful local SEO service for Quality Repairs, a trusted appliance repair company in Hialeah in most answer engine results.',
  ctaLabel: 'Contact us',
};

export const caseStudyImages: CaseStudyImage[] = [
  {
    src: '/assets/images/hialeah/local-seo-service-near-you.webp',
    alt: 'HVAC Business Growth Case Study',
  },
  {
    src: '/assets/images/hialeah/ai-seo-result.webp',
    alt: 'Google Ranking Success',
  },
  {
    src: '/assets/images/hialeah/local-seo-service-quality-repairs.webp',
    alt: 'Local Seo Servcies Quality Repairs',
  },
];

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
// SECTION 4: CONTENT STRATEGY FOR LOCAL REACH
// ─────────────────────────────────────────────────────────────────────────────

export const contentStrategySection = {
  eyebrow: 'Speak Local, Rank Global',
  heading: 'Content Strategy for',
  headingAccent: ' Local Reach',
  body: "Local stories matter and we make sure your business speaks them right. Our team creates content that reflects your city's pulse and instantly connects with people. Through our local SEO service, after receiving your profile we write location based blogs, optimise your website service pages and headlines that capture Hialeah's true spirit. By matching your audience's language and lifestyle, we strengthen your local bond and Google rewards by continuously activating your social media and profiles with authenticity with higher rankings and lasting visibility.",
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
// SECTION 5: OPTIMIZING GOOGLE BUSINESS PROFILE
// ─────────────────────────────────────────────────────────────────────────────

export const optimizeGBPSection = {
  eyebrow: 'Boost Visibility, Build Trust',
  heading: 'Optimizing Google Business Profile',
  body: 'Your Google Business Profile isn\'t just a listing it is your first impression. We transform customers like a magnet to you using effective local seo service by adding authentic images, consistent updates and detailed service descriptions, your business starts appearing in Google\'s "Top 3 Pack." More visibility means more calls, more visits and more trust from your local audience.',
};

export const gbpFeatureCards: FeatureCard[] = [
  { icon: Phone, label: 'Increased Calls' },
  { icon: Target, label: 'More Walk-ins' },
  { icon: TrendingUp, label: 'Boost Revenue Growth' },
  { icon: Activity, label: 'Higher Leads' },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6: CREATING SEAMLESS LOCAL SEARCH EXPERIENCE
// ─────────────────────────────────────────────────────────────────────────────

export const localSearchExperienceSection = {
  eyebrow: 'Mobile-Focused Local Experience',
  heading: 'Creating Seamless',
  headingAccent: ' Local Search Experience',
  body: "Most people search for nearby services using their mobile phones. A mobile optimized SEO strategy ensures that your business is visible and easy to reach and our local SEO service focuses on creating a fast loading, user friendly website that works perfectly on every device. When customers open your site, they can find directions, make quick calls or explore services without delay. That's how we change your website. From SEO-friendly website designing to graphic designing, we create complete digital solutions that strengthen your brand presence, attract the right audience and drive measurable business growth. This mobile experience connects your business directly with customers in real time. Every smooth click builds trust and turns local searches into genuine actions that help your brand grow stronger every day.",
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7: CREATING LASTING ONLINE TRUST
// ─────────────────────────────────────────────────────────────────────────────

export const onlineTrustSection = {
  heading: 'Creating Lasting',
  headingAccent: ' Online Trust',
  body: 'Trust is the cornerstone of every successful business. We build that trust through consistency, accuracy and credibility by keeping your Google Business Profile updated with correct details, authentic reviews and engaging photos, customers instantly feel confident choosing your services. Positive feedback and genuine interactions strengthen your online reputation over time. Every optimized listing, review and update adds another layer of trust, ensuring long-term growth for your Hialeah business.',
  image: {
    src: '/assets/images/hialeah/online-trust.webp',
    alt: 'Expertise in Google SEO - Zammy Zaif',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 8: BOOSTING AUTHORITY WITH QUALITY LINKS
// ─────────────────────────────────────────────────────────────────────────────

export const qualityLinksSection = {
  heading: 'Boosting Authority',
  headingAccent: ' With Quality Links',
  body: "Building genuine online authority starts with authentic backlinks. Every backlink we created by following the right strategy, result-driven process that enhances your site's trust and ranking power. Instead of random or spam links, only relevant and high authority websites are chosen to ensure long term impact. Each connection is built naturally, reflecting the credibility of your business in local searches, with precise link placement and niche relevance, Hialeah based businesses can see consistent growth and visibility.",
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 9: GOOGLE SEO CONSULTANT – ZAMMY ZAIF
// ─────────────────────────────────────────────────────────────────────────────

export const zammyBioSection = {
  heading: 'Google SEO Consultant -',
  headingAccent: '  Zammy Zaif',
  body: "Even if your website is stuck on Google's third page or not ranking at all, this is the right time to increase your business growth. As the CEO of Versa Forge and Google Ranking Expert, I have over 20 years of hands on experience in Local and organic SEO, helping businesses achieve real, consistent growth. My approach is completely manual, ethical and organic. I never rely on shortcuts or third party tools. I work only with trusted Google tools and proven SEO strategies that deliver lasting results. So far, I've helped 2,300+ companies secure Google's #1 ranking, both locally and globally. If you want your website and Google Business Profile to appear on the first page and first rank, reach out today. I will help you rise from the bottom to the top organically.",
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 10: NOW IT'S YOUR TURN
// ─────────────────────────────────────────────────────────────────────────────

export const yourTurnSection = {
  eyebrow: 'Be Seen, Get Chosen',
  heading: "Now It's",
  headingAccent: ' Your Turn',
  body: "This isn't just one company's story, it's a reflection of what's possible for your business too. Many service business owners struggle not because of bad service, but because no one can find them. Visibility is everything. Our proven local SEO service is designed to fix that. We will help your business appear at the top of Google Maps, attract more calls and build real local trust that drives growth. Your competitors are already attracting your customers. Now it is your turn to rise above and become the next success story in Hialeah.",
  ctaLabel: 'Claim #1 Spot on Maps',
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
// SECTION 11: FAQ
// ─────────────────────────────────────────────────────────────────────────────

export const faqSection = {
  badgeLabel: 'FAQ',
  heading: 'Frequently Asked Questions',
};

export const faqData: FaqItem[] = [
  {
    question: "Why doesn't my Hialeah business appear in 'near me' results?",
    answer:
      "Your Hialeah business may not appear in 'near me' searches because your profile isn't optimized. We fix it with the right local SEO strategy.",
  },
  {
    question: 'How long does Local SEO take to get my profile to #1?',
    answer:
      'We help your Hialeah business reach #1 within 45 days through continuous optimization, review management and location-based content.',
  },
  {
    question: 'Why does my Google Business Profile get less leads?',
    answer:
      'Low leads happen when your profile is incomplete or lacks keywords and reviews. We optimize it to get more calls and visits.',
  },
  {
    question: 'How to get customers and leads without running paid ads?',
    answer:
      'We help businesses get leads without paid ads by optimizing profiles, creating local content, building citations and generating reviews.',
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
  serviceOptions: [
    { value: '', label: 'Website SEO Services' },
    { value: 'google-ranking', label: 'Google Ranking' },
    { value: 'local-seo', label: 'Local SEO' },
  ] as { value: string; label: string }[],
  submitLabel: 'Submit Seo Estimate Request',
  recaptchaSiteKey: 'YOUR_RECAPTCHA_SITE_KEY',
};
