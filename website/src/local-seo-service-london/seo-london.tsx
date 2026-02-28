'use client';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  MousePointer2,
  Check,
  Zap,
  Phone,
  Search,
  Target,
  TrendingUp,
  BarChart3,
  MousePointerClick,
  Instagram,
  Linkedin,
  Plus,
  Star,
  Twitter,
  Award,
  Shield,
  Globe2,
  Cpu,
  Rocket,
  Activity,
  Users,
  Briefcase,
  FileText,
  Share2,
  Download,
  ArrowRight,
  ShieldCheck,
  Code2,
  UserCheck,
  PenTool,
  Send,
  Quote,
  CheckCircle2,
  X,
  ChevronRight,
  MapPin,
  Globe,
  Settings,
  Link,
  PieChart,
  MessageSquare,
  LucideIcon,
  Stethoscope,
  Home,
  Droplets,
  HardHat,
  Lightbulb,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// 1. Define interface outside the component
interface Service {
  title: string;
  icon: LucideIcon;
  desc: string;
}

const reviews = [
  {
    name: 'Zain Towing Service LLC',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/zain-towing-service-lousiana.svg',
    quote:
      'Working with Zammy Zaif has been a game-changer for our business. His expertise as a Google SEO Consultant has helped us achieve first-rank results for multiple keywords, including those crucial to our towing service. Zammy’s strategic approach and dedication have significantly boosted our visibility and customer inquiries. We highly recommend his services to anyone looking to dominate their local search results.',
  },
  {
    name: 'Ambica Gold Buyers',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/ambica-gold-bommanahalli.svg',
    quote:
      'Zammy Zaif’s exceptional skills as a Google SEO Expert have truly transformed our online presence. He successfully secured top rankings for our key phrases related to gold buying services. His meticulous approach to SEO and commitment to delivering results have made a remarkable difference in our business’s visibility and growth. We are incredibly satisfied with his work and would gladly endorse his services.',
  },
  {
    name: 'Sri Sairam Tution Centre',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/sairam-tuition-chennai.svg',
    quote:
      'We’ve been thoroughly impressed with Zammy Zaif’s expertise as a Google SEO Consultant. Thanks to his strategic SEO efforts, we now rank at the top for numerous keywords related to our physics tuition services. His attention to detail and ability to achieve first-rank results have been instrumental in attracting more students to our centre. Zammy’s work has exceeded our expectations, and we highly recommend him.',
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
      'Thanks to Zammy Zaif’s exceptional skills as a Google SEO Consultant, we have seen significant improvements in our online search rankings. His expertise led to top positions for several keywords related to our scar removal clinic. Zammy’s professional approach and effective SEO strategies have had a substantial positive impact on our business. We are very pleased with his services and recommend him without reservation.',
  },
  {
    name: 'Kathleen Black International Inc.',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/kathleena-black-toronto.svg',
    quote:
      'Zammy Zaif’s work as a Google SEO Expert has been pivotal for our real estate business coaching services. His strategic SEO efforts have secured top rankings for many of our targeted keywords, enhancing our global visibility. Zammy’s dedication and results-oriented approach have been instrumental in our growth. We are extremely satisfied with his services and highly recommend him.',
  },
  {
    name: 'Infant Traders',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/infant-traders-tuticorin.svg',
    quote:
      'Zammy Zaif’s expertise as a Google SEO Consultant has greatly improved our online presence. His effective SEO strategies achieved first-rank results for multiple keywords related to scuba products in Tuticorin. Zammy’s thorough and professional approach has significantly boosted our visibility and customer engagement. We are thrilled with the results and highly recommend his services.',
  },
  {
    name: 'Prima Properties',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/prima-properties-london.svg',
    quote:
      'We are very pleased with Zammy Zaif’s work as a Google SEO Expert. His strategic SEO efforts led to top rankings for several keywords related to our property buying services in London. Zammy’s ability to deliver first-rank results and his commitment to our success have been invaluable. We highly recommend him to anyone seeking to enhance their search engine performance.',
  },
];

const services = [
  {
    title: 'Keyword Mapping',
    icon: Search,
    desc: 'We select the best keywords for your business and assign them to relevant pages. This builds a structured keyword roadmap that enhances your site’s visibility and SEO performance.',
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
    desc: 'Our technical SEO audit checks site speed, mobile usability, and crawl issues. Fixing these issues improves your site’s performance, user experience, and overall search engine visibility.',
  },
  {
    title: 'Tag Optimization',
    icon: Globe,
    desc: 'We optimize titles, headers, image alt tags, and metadata. These elements help Google understand your content better and boost your ranking potential for target keywords.',
  },
  {
    title: 'Console Setup',
    icon: Settings,
    desc: 'We configure and optimize your Google Search Console account. It helps monitor search performance, fix issues, and enhance your site’s health and visibility on Google',
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
    desc: 'We identify keyword and topic gaps in your website content. Then, we expand or enhance your content to increase traffic and meet Google’s content quality expectations.',
  },
  {
    title: 'Link Building',
    icon: Link,
    desc: 'We build HQB & review all your old backlinks pointing to your website using Google tools. Harmful links are flagged & disavowed to maintain SEO health & prevent potential ranking drops.',
  },
];

const sectors = [
  { name: 'HVAC Contractors', icon: Home, slug: 'hvac-seo' },
  { name: 'Health Care', icon: Stethoscope, slug: 'health-seo' },
  { name: 'Plumbing', icon: Droplets, slug: 'plumbing-seo' },
  { name: 'Roofing', icon: HardHat, slug: 'roofing-seo' },
];

const faqData = [
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

// 1. Define the content for each tab
const algoData = {
  'AI Models': {
    title: 'AI & Machine Learning Dominance',
    desc: 'Google’s ranking algorithm is a sophisticated, multi-layered system that begins with crawling, where Googlebot discovers and scans web pages, followed by indexing, where qualifying content is stored in Google’s vast search index.',
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
    desc: 'Finally, in the serving phase, Google delivers the most authoritative and useful content tailored to user intent, incorporating personalization and SERP features. What sets Zammy apart is his data-driven, strategic approach that aligns with Google’s evolving algorithms.',
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

type TabKey = keyof typeof algoData;

export default function SeoLondon() {
  const onReCAPTCHAChange = (val: string | null) => {
    console.log('Captcha Value:', val);
  };
  const handleSidebarCaptcha = (token: string | null) => {
    if (token) {
      console.log('Sidebar ReCAPTCHA token:', token);
    }
  };
  const [expanded, setExpanded] = useState<number | null>(0);

  const Counter = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(
      count,
      (latest) => Math.round(latest * 10) / 10
    );
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        const controls = animate(count, value, {
          duration: 2,
          ease: 'easeOut',
        });
        return controls.stop;
      }
    }, [inView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
  };

  const caseStudies = [
    {
      src: '/assets/images/london/property-buyers.webp',
      alt: 'Property Buyers in London ',
    },
    {
      src: '/assets/images/london/best-salon.webp',
      alt: 'Best Salon',
    },

    {
      src: '/assets/images/london/boiler-repair.webp',
      alt: 'Local Seo Servcies Quality Repairs',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<TabKey>('AI Models');
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#3cb878]">
      {/* 1. PREMIUM BRAND BANNER (Full Width) */}
      <section className="relative mt-28 overflow-hidden bg-[#3cb878] pb-24 pt-32 text-center">
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="h1 mb-6 font-black  tracking-tighter text-white drop-shadow-md">
            Local SEO Service in London
          </h1>
          <p className="p font-bold uppercase tracking-[0.1em] text-white/90">
            Home <span className="mx-2">/</span> Local SEO Service in London
          </p>
        </div>
        {/* Abstract pattern for premium feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
      </section>

      {/* HOLY GRAIL LAYOUT WRAPPER */}
      <div className="mx-auto flex max-w-[1536px] flex-col gap-16 px-6 py-20 lg:flex-row">
        {/* MAIN COLUMN (Content Heavy) */}
        <main className="order-2 w-full space-y-32 lg:order-1 lg:w-[72%]">
          {/* --- SECTION 1: CLEAN PREMIUM SEO RESULTS --- */}
          {/* <section
            id="evidence-results"
            className="max-w-full space-y-12 overflow-hidden md:space-y-20"
          >
            {/* Header Area */}
          {/*  <div className="mx-auto max-w-3xl text-center">
              <h5 className="h5  mb-4 font-bold  tracking-[0.1em] text-[#3cb878]">
                Our Google Rank Result Drive Sales
              </h5>
              <h3 className="h3   leading-[0.9] tracking-tighter text-slate-900">
                Client's 1st Rank
                <span className="text-[#3cb878]"> SEO Results</span>
              </h3>
            </div>

            {/* Carousel Wrapper: This div prevents the spillover into the sidebar */}
          {/*  <div className="relative w-full overflow-hidden py-4">
              <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-premium',
                }}              */}

          {/*    className="!static w-full"
              >
                {[
                  '/assets/images/google-ranking-services/preston-dental-seo-win.webp',
                  '/assets/images/google-ranking-services/realestate-coach.webp',
                  '/assets/images/google-ranking-services/property-buyers-in-london-result.webp',
                  '/assets/images/google-ranking-services/shingle-roofing-experts-los-angeles-result.webp',
                  '/assets/images/google-ranking-services/dentru.webp',
                  '/assets/images/google-ranking-services/google-business-ranking-performance.webp',
                  '/assets/images/google-ranking-services/roy-cleeves.webp',
                  '/assets/images/google-ranking-services/dentru-gurgaon.webp',
                  '/assets/images/google-ranking-services/studio-7rk.webp',
                ].map((imgSrc, index) => (
                  <SwiperSlide
                    key={index}
                    className="max-w-[100%] px-10 md:max-w-[400px] lg:max-w-[450px]"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-xl md:rounded-[2.5rem]">
                      <img
                        src={imgSrc}
                        alt={`SEO Result ${index + 1}`}
                        className="block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

               Elegant Pagination (Inside Main Only) 
              <div className="swiper-pagination-premium mt-10 flex justify-center gap-2" />
            </div>

            {/* --- SLIM ADVANCED ORANGE METRICS ---
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3cb878] px-4 py-8 shadow-[0_30px_70px_-20px_rgba(249,115,22,0.35)]">
              {/* Premium Texture Overlay 
              <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.12]" />

               Metrics Grid: 1 Column on Mobile, 4 on Desktop */}
          {/*      <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
                {[
                  { v: 2, unit: 'K+', label: 'Clients' },
                  { v: 85, unit: 'K+', label: '1st Page Rank' },
                  { v: 20, unit: 'K+', label: '1st Rank Results' },
                  { v: 20, unit: '+', label: 'Years of Experience' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center first:border-none lg:items-center lg:border-l lg:border-white/20 lg:px-5"
                  >
                  <div className="flex items-baseline gap-1">
                      {/* Using your H2 class with responsive text size and white color */}
          {/*} <div className="text-xl font-bold  leading-none tracking-tighter text-white md:text-2xl">
                        <Counter value={stat.v} />
                      </div>
                      <span className=" text-xl font-bold text-[#E4FFF1] md:text-2xl">
                        {stat.unit}
                      </span>
                    </div>

                    {/* Using your P class for the label */}
          {/* <p className="p mt-2   font-bold text-white">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div> */}
          {/* Styles locked to this section */}
          {/*} <style jsx global>{`
              .swiper-pagination-premium .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: #cbd5e1;
                opacity: 1;
                transition: all 0.3s ease;
              }
              .swiper-pagination-premium .swiper-pagination-bullet-active {
                background: #3cb878 !important;
                width: 24px;
                border-radius: 4px;
              }
            `}</style>
          </section>*/}

          {/* --- SECTION 2: GOOGLE RANKING EXPERT (DETAILED BIO) --- */}
          <section
            id="expert-detail"
            className=" relative space-x-20 space-y-6 overflow-hidden py-6 md:space-y-14"
          >
            {/* 1. Sophisticated Header */}
            <div className="mx-auto max-w-4xl text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="h3  leading-[0.9] tracking-tighter text-slate-900"
              >
                Rank Higher in
                <span className="text-[#3cb878]"> Google Pack-3</span>
              </motion.h3>
            </div>

            {/* 2. Content Body: Premium Readability */}
            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* AI Recommendation Highlight Box */}
                {/* < div className="rounded-[2.5rem] border-l-8 border-[#3cb878] bg-[#3cb878]/10 p-8 shadow-sm md:p-10">
                  <p className="p italic leading-relaxed text-slate-700">
                    Even our website,{' '}
                    <span className="font-bold text-slate-900">www.it2.tv</span>{' '}
                    has secured the 1st spot and the{' '}
                    <span className="font-bold text-[#3cb878]">
                      Google Ai Mode Recommendation, Chatgpt, Claude, Bing,
                      Yahoo, Preplexity and all other ai platforms
                    </span>{' '}
                    for competitive keywords like "Ranking Expert," "Google
                    Ranking Expert," and "Google Ranking Services" since 2018.
                  </p>
                </div>*/}

                {/* ADDED IMAGE HERE (Location A) */}
                {/* --- UPDATED TWO-IMAGE ROW (REPLACING SINGLE IMAGE) --- */}
                {/* ADDED IMAGE HERE (Location A) */}
                <div className="my-8 w-full overflow-hidden rounded-xl md:my-10">
                  <img
                    src="/assets/images/london/get-1-rank-on-google-business-listing-in-london.webp"
                    alt="Get 1 rA"
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Local SEO Secondary Paragraph */}
                <p className="p leading-[2em]">
                  Achieving the 1st Rank in Google Map Search Results is like a
                  direct handshake between you and your customers. By being
                  found on Google Maps, you can increase your daily calls up to
                  10 times and quickly gain high quality leads through local SEO
                  service. If your business profile isn’t showing up on Google
                  Maps, you could be missing out on significant visibility and
                  valuable leads. Even with an existing profile, without the
                  right local SEO strategy, you risk generating fewer inquiries,
                  low-quality leads and missed opportunities. However, by
                  refining your local SEO and ensuring your Google Business
                  Profile is fully optimized, you will unlock immediate results,
                  increased lead flow, enhanced online presence and a
                  substantial boost in conversion rates, ultimately driving more
                  business in your way.
                </p>
              </motion.div>
            </div>

            {/* 3. Premium CTA Button: Advanced Animation */}
            {/* <div className="flex flex-col items-center lg:items-center ">
               <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(249,115,22,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex  items-center gap-4 overflow-hidden rounded-2xl bg-slate-900 px-5 py-4 text-[#3cb878] group-hover:text-[#3cb878] transition-all duration-300 md:rounded-3xl"
              >
              
                <div className="absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform   group-hover:animate-[shimmer_1.5s_infinite]" />

                <span className="h5 font-bold tracking-[0.1em]">
                  Get Free Audit Now
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3cb878] transition-transform group-hover:rotate-45">
                  <Zap size={16} fill="white" stroke="white" />
                </div>
              </motion.button>
            </div> */}

            <style jsx>{`
              @keyframes shimmer {
                100% {
                  transform: translateX(100%);
                }
              }
            `}</style>

            {/* --- UPDATED CALL TO ACTION BUTTON --- */}
            <div className="mb-20 mt-20 text-center">
              <motion.button
                onClick={() => setIsModalOpen(true)} // Opens the modal
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#3cb878] px-6 py-3 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
              >
                <span className=" h5 font-bold  tracking-[0.1em]">
                  Get More Leads
                </span>
              </motion.button>
            </div>

            {/* --- PREMIUM MODAL OVERLAY --- */}
            <AnimatePresence>
              {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
                  />

                  {/* Modal Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 40 }}
                    className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row"
                  >
                    {/* Left Side: Brand Accent */}
                    <div className="hidden w-1/3 flex-col justify-between bg-[#3cb878] p-10 text-white md:flex">
                      <div className="space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                          <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
                          Let's Build Your Success
                        </h3>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        Manual SEO Strategy • 100% ROI Focused
                      </p>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="relative flex-1 p-8 md:p-12">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute right-6 top-6 p-2 text-slate-400 transition-colors hover:text-[#3cb878]"
                      >
                        <X size={24} />
                      </button>

                      <div className="mb-8">
                        <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">
                          Contact us Now
                        </h4>
                        <p className="p mt-1 text-slate-700">
                          Fill in the details to start your journey to #1.
                        </p>
                      </div>

                      <form
                        className="space-y-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsModalOpen(false);
                        }}
                      >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Full Name"
                              required
                              className="form-input-premium"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              placeholder="Email Address"
                              required
                              className="form-input-premium"
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <input
                            type="url"
                            placeholder="Website URL"
                            required
                            className="form-input-premium"
                          />
                        </div>

                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="form-input-premium"
                          />
                        </div>

                        <textarea
                          placeholder="Briefly describe your growth goals..."
                          rows={3}
                          className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                        ></textarea>

                        <button
                          type="submit"
                          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-200 transition-all hover:bg-slate-900"
                        >
                          Submit Application{' '}
                          <Send
                            size={16}
                            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </button>
                      </form>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            <style jsx>{`
              .form-input-premium {
                @apply w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-12 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878];
              }
            `}</style>
          </section>

          {/* --- SECTION: GOOGLE BUSINESS PROFILE PERFORMANCE MAX (FIXED & CLEAN) --- */}
          <section className=" overflow-hidden bg-white py-20">
            {/* Local State for the Modal */}
            {(() => {
              const [isFormOpen, setIsFormOpen] = React.useState(false);

              return (
                <div className="mx-auto max-w-4xl space-y-12  px-6">
                  {/* Header Group */}
                  <div className="space-y-4 text-center">
                    <h5 className="h5  font-bold uppercase text-[#3cb878] ">
                      Local Growth Starts Here
                    </h5>
                    <h2 className="h2  leading-[0.9] tracking-tighter text-slate-900">
                      Local SEO Service
                      <span className="text-[#3cb878]"> in London</span>
                    </h2>
                    <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
                  </div>

                  {/* Content Body */}
                  <div className="space-y-8">
                    <p className="p leading-[2em] text-black ">
                      If you are running a small or large business in Toronto,
                      Vancouver or any other location in London, our expert
                      local SEO service will help you achieve the #1 rank in
                      both Google business listing and the Search Engine Results
                      Page (SERP) within just 45 days. Without optimizing your
                      Google Business Profile with a targeted SEO strategy, your
                      customers will find your competitors instead. To avoid
                      this, you must implement the right strategy. Our approach
                      increases your calls, leads and generates consistent
                      revenue. We offer services designed with Google tools,
                      ensuring your digital visibility is optimized without
                      relying on any third party tools. Our team also helps you
                      build attractive, responsive websites that improve your
                      local search ranking and connect you with customers in
                      your city.
                    </p>
                  </div>

                  {/* Premium Download Button */}
                  <div className="pt-4">
                    <motion.button
                      onClick={() => setIsFormOpen(true)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative  mx-auto flex items-center   gap-3 rounded-2xl bg-[#3cb878] px-4 py-4 text-white shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-500 hover:bg-white hover:text-[#3cb878] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] "
                    >
                      <Download
                        size={20}
                        className="transition-transform group-hover:translate-y-1"
                      />
                      <span className="h6 font-bold uppercase tracking-[0.2em]">
                        Download Free Business Growth Checklist
                      </span>
                    </motion.button>
                  </div>

                  {/* --- CUSTOM PREMIUM MODAL --- */}
                  <AnimatePresence>
                    {isFormOpen && (
                      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        {/* Overlay Backdrop */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsFormOpen(false)}
                          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        {/* Modal Box */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
                        >
                          {/* Form Header */}
                          <div className="bg-[#3cb878] p-10 text-center text-white">
                            <h3 className=" h3 leading-none tracking-tighter">
                              Growth Checklist
                            </h3>
                            <p className=" p mt-3 font-bold uppercase tracking-[0.2em] opacity-90">
                              Elite Local SEO Framework
                            </p>
                          </div>

                          {/* Clean Form */}
                          <form
                            className="space-y-5 p-10"
                            onSubmit={(e) => {
                              e.preventDefault();
                              setIsFormOpen(false);
                            }}
                          >
                            <div className="text-left">
                              <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                                Full Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                                required
                              />
                            </div>
                            <div className="text-left">
                              <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                                Email
                              </label>
                              <input
                                type="email"
                                placeholder="Enter your Email"
                                className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                                required
                              />
                            </div>

                            <button
                              type="submit"
                              className="group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 text-[14px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-[#3cb878]"
                            >
                              Get Access Now{' '}
                              <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </button>

                            <p className=" mt-4 text-center font-bold uppercase tracking-widest text-slate-400">
                              🔒 Trusted by 2,500+ Businesses
                            </p>
                          </form>

                          {/* Close Button */}
                          <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute right-6 top-4 text-2xl font-light text-white/50 transition-colors hover:text-white"
                          >
                            ×
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}
          </section>

          <section id="case-studies" className="overflow-hidden bg-white py-6">
            <div className="mx-auto max-w-5xl px-6">
              {/* --- 1. CENTERED HEADER --- */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 space-y-4 text-center"
              >
                <h5 className="h5 font-bold uppercase tracking-[0.2em] text-[#3cb878] ">
                  #1 Rankings, Guaranteed Results
                </h5>
                <h3 className="h3  leading-[0.9] tracking-tighter text-slate-900">
                  Real Results From
                  <span className="text-[#3cb878]"> Our Client </span>
                </h3>
              </motion.div>

              {/* --- 2. PREMIUM CAROUSEL --- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Swiper
                  modules={[Pagination, Autoplay, EffectFade]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)]"
                >
                  {caseStudies.map((study, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-[18/9] w-full overflow-hidden">
                        <img
                          src={study.src}
                          alt={study.alt}
                          className="h-full w-full select-none object-cover"
                        />
                        {/* Subtle Inner Glow */}
                        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Decorative Floating Element */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-24 w-24 rounded-full bg-[#3cb878]/10 blur-3xl" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative pb-10 pt-24"
              >
                {/* Optional: Subtle top border to define the section */}
                <div className="absolute left-1/2 top-12 h-[1px] w-24 -translate-x-1/2 bg-slate-100" />

                <p className="p  mx-auto max-w-4xl leading-[1.8em] text-slate-900">
                  Led by Zammy Zaif, our Versa Forge team secured the #1 spot on
                  Google Pack-3, SERPs and AI search results for our London
                  client delivering high-quality leads and connecting them with
                  clients ready to buy.
                </p>
              </motion.div>

              {/* --- UPDATED CALL TO ACTION BUTTON --- */}
              <div className="mt-5 text-center">
                <motion.button
                  onClick={() => setIsModalOpen(true)} // Opens the modal
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#3cb878] px-10 py-6 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
                >
                  <span className=" h6 font-bold uppercase tracking-[0.25em]">
                    Contact us
                  </span>
                </motion.button>
              </div>

              {/* --- PREMIUM MODAL OVERLAY --- */}
              <AnimatePresence>
                {isModalOpen && (
                  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsModalOpen(false)}
                      className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
                    />

                    {/* Modal Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 40 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 40 }}
                      className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row"
                    >
                      {/* Left Side: Brand Accent */}
                      <div className="hidden w-1/3 flex-col justify-between bg-[#3cb878] p-10 text-white md:flex">
                        <div className="space-y-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                            <TrendingUp size={24} />
                          </div>
                          <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
                            Let's Build Your Success
                          </h3>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                          Manual SEO Strategy • 100% ROI Focused
                        </p>
                      </div>

                      {/* Right Side: The Form */}
                      <div className="relative flex-1 p-8 md:p-12">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="absolute right-6 top-6 p-2 text-slate-400 transition-colors hover:text-[#3cb878]"
                        >
                          <X size={24} />
                        </button>

                        <div className="mb-8">
                          <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">
                            Contact us Now
                          </h4>
                          <p className="mt-1 text-sm text-slate-500">
                            Fill in the details to start your journey to #1.
                          </p>
                        </div>

                        <form
                          className="space-y-4"
                          onSubmit={(e) => {
                            e.preventDefault();
                            setIsModalOpen(false);
                          }}
                        >
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="form-input-premium"
                              />
                            </div>
                            <div className="relative">
                              <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="form-input-premium"
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <input
                              type="url"
                              placeholder="Website URL"
                              required
                              className="form-input-premium"
                            />
                          </div>

                          <div className="relative">
                            <input
                              type="tel"
                              placeholder="Phone Number"
                              required
                              className="form-input-premium"
                            />
                          </div>

                          <textarea
                            placeholder="Briefly describe your growth goals..."
                            rows={3}
                            className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                          ></textarea>

                          <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] text-sm font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-200 transition-all hover:bg-slate-900"
                          >
                            SUBMIT{' '}
                            <Send
                              size={16}
                              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                          </button>
                        </form>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <style jsx>{`
              .form-input-premium {
                @apply w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-12 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878];
              }
            `}</style>
          </section>

          <section className=" overflow-hidden bg-white py-20">
            {/* Local State for the Modal */}
            {(() => {
              const [isFormOpen, setIsFormOpen] = React.useState(false);

              return (
                <div className="mx-auto max-w-4xl space-y-12  px-6">
                  {/* Header Group */}
                  <div className="space-y-4 text-center">
                    <h5 className="h5  font-bold uppercase text-[#3cb878] ">
                      Speak Local, Rank Global
                    </h5>
                    <h2 className="h2  leading-[0.9] tracking-tighter text-slate-900">
                      Meet Our
                      <span className="text-[#3cb878]"> SEO Expert</span>
                    </h2>
                    <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
                  </div>

                  {/* Content Body */}
                  <div className="space-y-8">
                    <p className="p leading-[2em] text-black ">
                      Now is the time to elevate your business to first rank.
                      I’m Zammy Zaif, CEO of Versa Forge, transforming your
                      business growth locally, city based and globally with over
                      20 years of experience in organic SEO service and local
                      SEO service. As a Google Ranking Expert I specialise in
                      helping businesses to achieve #1 rank sustainable growth
                      through proven strategies that prioritize long-term
                      success. I don’t use shortcuts or third party tools,
                      everything I do is organic and rooted in Google’s
                      guidelines and EAAT principles. I have helped 2,300+
                      businesses secure top spots on Google, whether locally or
                      globally. If you want your business to break through the
                      ranks and appear on Google’s first page, reach out today.
                    </p>
                  </div>

                  {/* Premium Download Button */}
                  <div className="pt-4">
                    <motion.button
                      onClick={() => setIsFormOpen(true)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative  mx-auto flex items-center   gap-3 rounded-2xl bg-[#3cb878] px-4 py-4 text-white shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-500 hover:bg-white hover:text-[#3cb878] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] "
                    >
                      <Download
                        size={20}
                        className="transition-transform group-hover:translate-y-1"
                      />
                      <span className="h6 font-bold uppercase tracking-[0.2em]">
                        Download Free Business Growth Checklist
                      </span>
                    </motion.button>
                  </div>

                  {/* --- CUSTOM PREMIUM MODAL --- */}
                  <AnimatePresence>
                    {isFormOpen && (
                      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        {/* Overlay Backdrop */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsFormOpen(false)}
                          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        {/* Modal Box */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
                        >
                          {/* Form Header */}
                          <div className="bg-[#3cb878] p-10 text-center text-white">
                            <h3 className=" h3 leading-none tracking-tighter">
                              Growth Checklist
                            </h3>
                            <p className=" p mt-3 font-bold uppercase tracking-[0.2em] opacity-90">
                              Elite Local SEO Framework
                            </p>
                          </div>

                          {/* Clean Form */}
                          <form
                            className="space-y-5 p-10"
                            onSubmit={(e) => {
                              e.preventDefault();
                              setIsFormOpen(false);
                            }}
                          >
                            <div className="text-left">
                              <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                                Full Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                                required
                              />
                            </div>
                            <div className="text-left">
                              <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                                Email
                              </label>
                              <input
                                type="email"
                                placeholder="Enter your Email"
                                className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                                required
                              />
                            </div>

                            <button
                              type="submit"
                              className="group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 text-[14px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-[#3cb878]"
                            >
                              Get Access Now{' '}
                              <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </button>

                            <p className=" mt-4 text-center font-bold uppercase tracking-widest text-slate-400">
                              🔒 Trusted by 2,500+ Businesses
                            </p>
                          </form>

                          {/* Close Button */}
                          <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute right-6 top-4 text-2xl font-light text-white/50 transition-colors hover:text-white"
                          >
                            ×
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}
          </section>

          <section
            id="choose-expert-steps"
            className="overflow-hidden bg-white py-20"
          >
            <div className="mx-auto max-w-5xl px-6">
              {/* 1. Header Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20 space-y-4 text-center"
              >
                <h5 className="h5 font-bold uppercase  text-[#3cb878]">
                  Google-Approved Local SEO
                </h5>
                <h2 className="h2  leading-[0.9] tracking-tighter text-slate-900">
                  How We Optimize
                  <span className="text-[#3cb878]"> Your Business</span>
                </h2>
              </motion.div>

              {/* 2. Roadmap Steps Layout */}
              <div className="relative">
                {/* Central Animated Line (Visible on Desktop) */}
                <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-slate-900 lg:block" />

                <div className="space-y-12 lg:space-y-0">
                  {[
                    {
                      step: 'Step 1',
                      title: 'Website Designing for Better User Experience',
                      desc: 'A well-designed website engages customers, builds trust and supports higher Google rankings. We analyze navigation, speed and service presentation, fixing layout issues to make webpages user-friendly, attractive and effective.',
                      alignment: 'left',
                    },
                    {
                      step: 'Step 2',
                      title:
                        'Google My Business Optimization for Local Visibility',
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
                      title:
                        'Creating Quality Backlinks for Enhanced Authority',
                      desc: 'Our strategy creates high quality, relevant backlinks. By linking through trusted industry and local websites, we improve your site authority, enhance Google trust and attract more potential customers organically.',
                      alignment: 'right',
                    },
                    {
                      step: 'Step 5',
                      title:
                        'Promote Business Through Social Media Without Paid Ads',
                      desc: 'We promote your services and products through social media with strong visuals. From graphic design to full content creation, every poster attracts customers organically, building engagement, brand awareness and wider reach.',
                      alignment: 'left',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex w-full flex-col items-center justify-between lg:mb-20 lg:flex-row ${item.alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}
                    >
                      {/* Content Card */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: item.alignment === 'left' ? -50 : 50,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group w-full lg:w-[45%]"
                      >
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900 bg-white p-8 shadow-sm transition-all duration-500 group-hover:border-[#3cb878] group-hover:bg-[#DBFFEC] group-hover:shadow-2xl md:p-10">
                          {/* Decorative Step Number (Background) */}
                          <span className="text-8xl pointer-events-none absolute -bottom-4 -right-4 font-black text-slate-50 transition-colors group-hover:text-orange-50">
                            0{idx + 1}
                          </span>

                          <div className="relative z-10 space-y-4">
                            <div className="inline-block rounded-full bg-[#3cb878] px-5 py-1.5 text-[18px] font-bold uppercase tracking-widest text-white shadow-lg shadow-[#3cb878]">
                              {item.step}
                            </div>
                            <h4 className="h4 tracking-tighter text-slate-900 transition-colors group-hover:text-[#3cb878]">
                              {item.title}
                            </h4>
                            <p className="p font-medium text-slate-900 ">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Central Node Dot */}
                      <div className="absolute left-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-100 bg-white transition-all group-hover:border-[#3cb878] lg:flex">
                        <div className="h-3 w-3 animate-pulse rounded-full bg-[#3cb878]" />
                      </div>

                      {/* Spacer for Desktop */}
                      <div className="hidden lg:block lg:w-[45%]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Final Call to Action */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-20 rounded-[3rem] bg-[#3cb878]  p-1 shadow-2xl shadow-[#3cb878]"
              >
                <div className="flex flex-col items-center justify-between gap-8 rounded-[2.8rem] bg-white p-10 text-center md:flex-row">
                  <div className="text-left">
                    <h4 className="h4 font-bold text-slate-900 ">
                      ready to grow your business
                    </h4>
                    <p className="p  text-slate-900">
                      Make the right choice for your business growth today.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p rounded-2xl bg-[#3cb878] px-10 py-5 font-bold uppercase text-white shadow-xl transition-all hover:bg-white hover:text-[#3cb878]"
                  >
                    Book Your Free Audit
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className=" overflow-hidden bg-white py-20">
            {/* Local State for the Modal */}
            {(() => {
              const [isFormOpen, setIsFormOpen] = React.useState(false);

              return (
                <div className="mx-auto max-w-4xl space-y-12  px-6">
                  {/* Header Group */}
                  <div className="space-y-4 text-center">
                    <h5 className="h5  font-bold uppercase text-[#3cb878] ">
                      Be Seen, Get Chosen
                    </h5>
                    <h3 className="h3  leading-[0.9] tracking-tighter text-slate-900">
                      Get Found on
                      <span className="text-[#3cb878]">
                        {' '}
                        Google Business Listing Today
                      </span>
                    </h3>
                    <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
                  </div>

                  {/* Content Body */}
                  <div className="space-y-4">
                    <p className="p leading-[2em] text-black ">
                      This isn’t just one company’s story, it's a reflection of
                      what’s possible for your business too. Many service
                      business owners struggle not because of bad service, but
                      because no one can find them. Visibility is everything.
                      Our proven local SEO service is designed to fix that. We
                      will help your business appear at the top of Google Maps,
                      attract more calls and build real local trust that drives
                      growth. Your competitors are already attracting your
                      customers. Now it is your turn to rise above and become
                      the next success story in Hialeah.
                    </p>
                  </div>

                  {/* Premium Download Button */}
                  <div className="pt-4">
                    <motion.button
                      onClick={() => setIsFormOpen(true)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative  mx-auto flex items-center gap-3 rounded-2xl bg-[#3cb878] px-4 py-4 text-white shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-500 hover:bg-white hover:text-[#3cb878] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] "
                    >
                      <TrendingUp
                        size={20}
                        className="transition-transform group-hover:translate-y-1"
                      />
                      <span className="h6 font-bold uppercase tracking-[0.2em]">
                        Achieve Top Local Rank
                      </span>
                    </motion.button>
                  </div>

                  {/* --- CUSTOM PREMIUM MODAL --- */}
                  <AnimatePresence>
                    {isFormOpen && (
                      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        {/* Overlay Backdrop */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsFormOpen(false)}
                          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        {/* Modal Box */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
                        >
                          {/* Form Header */}
                          <div className="bg-[#3cb878] p-10 text-center text-white">
                            <h3 className=" h3 leading-none tracking-tighter">
                              Growth Checklist
                            </h3>
                            <p className=" p mt-3 font-bold uppercase tracking-[0.2em] opacity-90">
                              Elite Local SEO Framework
                            </p>
                          </div>

                          {/* Clean Form */}
                          <form
                            className="space-y-5 p-10"
                            onSubmit={(e) => {
                              e.preventDefault();
                              setIsFormOpen(false);
                            }}
                          >
                            <div className="text-left">
                              <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                                Full Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                                required
                              />
                            </div>
                            <div className="text-left">
                              <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                                Email
                              </label>
                              <input
                                type="email"
                                placeholder="Enter your Email"
                                className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                                required
                              />
                            </div>

                            <button
                              type="submit"
                              className="group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 text-[14px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-[#3cb878]"
                            >
                              Get Access Now{' '}
                              <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </button>

                            <p className=" mt-4 text-center font-bold uppercase tracking-widest text-slate-400">
                              🔒 Trusted by 2,500+ Businesses
                            </p>
                          </form>

                          {/* Close Button */}
                          <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute right-6 top-4 text-2xl font-light text-white/50 transition-colors hover:text-white"
                          >
                            ×
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}
          </section>

          <section
            id="faq-premium"
            className="relative overflow-hidden bg-white py-24"
          >
            {/* Background Creative Elements */}
            <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-orange-50/50 blur-[120px]" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-slate-50 blur-[100px]" />

            <div className="mx-auto max-w-3xl px-6">
              {/* Header with Animation */}
              <div className="mb-16 space-y-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-[#DBFFEC] px-4 py-2 text-[#3cb878]"
                >
                  <Sparkles size={16} className="animate-pulse" />
                  <h5 className="h5 font-bold uppercase ">FAQ</h5>
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="h4 tracking-tighter  text-slate-900"
                >
                  Frequently Asked Questions
                </motion.h4>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {faqData.map((item, index) => {
                  const isOpen = expanded === index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                        isOpen
                          ? 'border-[#3cb878] bg-white shadow-[0_20px_40px_rgba(249,115,22,0.08)]'
                          : 'border-slate-100 bg-slate-50/50 hover:border-[#3cb878]'
                      }`}
                    >
                      <button
                        onClick={() => setExpanded(isOpen ? null : index)}
                        className="group flex w-full items-center justify-between p-6 text-left transition-all md:p-8"
                      >
                        <div className="flex items-center gap-4 md:gap-6">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-500 md:h-12 md:w-12 ${
                              isOpen
                                ? 'rotate-12 bg-[#3cb878] text-white'
                                : 'bg-white text-slate-400 shadow-sm group-hover:text-[#3cb878]'
                            }`}
                          >
                            <HelpCircle size={24} strokeWidth={1.5} />
                          </div>
                          <span
                            className={`p font-bold transition-colors duration-300 ${
                              isOpen
                                ? 'text-slate-900'
                                : 'text-slate-600 group-hover:text-slate-900'
                            }`}
                          >
                            {item.question}
                          </span>
                        </div>

                        <div
                          className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#3cb878]' : 'text-slate-300'}`}
                        >
                          <ChevronDown size={24} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                          >
                            <div className="px-6 pb-8 md:px-24 md:pb-10">
                              <div className="mb-6 h-px w-full bg-slate-100" />
                              <p className="text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        {/* SIDEBAR (Sticky on Right) */}
        <aside className="order-1 hidden w-[20%] lg:order-2 lg:block">
          <div className="sticky top-24 space-y-8">
            {/* 1. THE AUDIT MAGNET (Premium Orange Gradient) */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative overflow-hidden  rounded-[3rem] bg-[#3cb878] p-8 text-white shadow-[0_30px_60px_-15px_rgba(60,184,120,0.7)]"
            >
              {/* Decorative Background Icon */}
              <Search className="absolute -right-4 -top-4 h-32 w-32 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3cb878]/10 backdrop-blur-md">
                  <Search className="h-5 w-5 text-white" />
                </div>

                <div className="space-y-2">
                  <h4 className="h4  tracking-relaxed leading-relaxed">
                    Free Website <br /> Audit
                  </h4>
                  <p className="p   tracking-[0.02em] text-white">
                    Boost your online presence with a free website audit
                    tailored to improve SEO and visibility
                  </p>
                </div>

                <button className="flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-[#3cb878] transition-all hover:bg-slate-900 hover:text-[#3cb878]">
                  Audit Now <ArrowRight size={16} />
                </button>
              </div>
            </motion.section>

            {/* 2. EXPERT STATUS WIDGET (Light Theme Premium) */}
            <section className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
              <h4 className="mb-6 font-bold uppercase tracking-[0.2em] text-slate-700">
                Professional Network
              </h4>

              <div className="space-y-3">
                {[
                  {
                    icon: <Instagram size={18} />,
                    name: 'Instagram',
                    color: 'hover:text-pink-600',
                    count: '12k+',
                  },
                  {
                    icon: <Linkedin size={18} />,
                    name: 'LinkedIn',
                    color: 'hover:text-blue-600',
                    count: '8k+',
                  },
                  {
                    icon: <Twitter size={18} />,
                    name: 'Twitter',
                    color: 'hover:text-sky-500',
                    count: '5k+',
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`group flex items-center justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[#3cb878] hover:bg-white ${social.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-slate-700 transition-colors group-hover:text-inherit">
                        {social.icon}
                      </div>
                      <span className="h6 font-bold text-slate-900">
                        {social.name}
                      </span>
                    </div>
                    <span className="text-[16px]  font-bold text-slate-700 group-hover:text-[#3cb878]">
                      {social.count}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* 3. QUICK STATS / TRUST BOX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative  overflow-hidden rounded-[3rem] p-8 text-slate-900"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#3cb878]/10" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-[#3cb878]">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>

                <div className="space-y-1">
                  <p className=" font-bold uppercase tracking-[0.1em] text-slate-700">
                    Rank your Business
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-xl font-black tracking-tighter text-[#3cb878]">
                    45-Day
                  </p>
                  <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-slate-700">
                    SEO Challenge Success
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-[16px] font-medium italic leading-relaxed text-slate-700">
                    "Google-Certified specialist utilizing pure white-hat
                    techniques."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4. FLOATING CONTACT BUTTON (Optional Mini-Form) */}
            <button className="group relative h-16 w-full overflow-hidden rounded-2xl border-2 border-slate-900 bg-white p-[2px]">
              <div className="absolute inset-0 w-0 bg-[#3cb878] transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 transition-colors duration-500 group-hover:text-white">
                Get In Touch <ArrowRight size={14} />
              </span>
            </button>
          </div>
          {/* SIDEBAR CONTACT FORM - PIXEL PERFECT START */}
          {/* 5. SIDEBAR CONTACT FORM - MOVE IT HERE (INSIDE THE DIV) */}
          {/*  <div className="w-full overflow-hidden rounded-[2.5rem] border-2 border-[#3cb878] bg-white shadow-2xl">
            {/* Brand Green Header */}
          {/* <div className="bg-[#3cb878] py-6 text-center">
              <h2 className="h2 uppercase tracking-tighter text-white">
                Get in touch
              </h2>
            </div>

            {/* Form Content */}
          {/*  <form className="space-y-4 p-5 lg:p-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Website URL"
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50/50 px-6 text-sm text-slate-700 outline-none transition-all focus:border-[#3cb878] focus:bg-white focus:ring-1 focus:ring-[#3cb878]/20"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50/50 px-6 text-sm text-slate-700 outline-none transition-all focus:border-[#3cb878] focus:bg-white focus:ring-1 focus:ring-[#3cb878]/20"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50/30 px-6 text-sm text-slate-700 outline-none transition-all focus:border-[#3cb878] focus:bg-white focus:ring-1 focus:ring-[#3cb878]/20"
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50/30 px-6 text-sm text-slate-700 outline-none transition-all focus:border-[#3cb878] focus:bg-white focus:ring-1 focus:ring-[#3cb878]/20"
                />
              </div>

              {/* reCAPTCHA - Properly scaled for Sidebar width */}
          {/* <div className="flex justify-center overflow-hidden py-2">
                <div className="origin-center scale-[0.75] xl:scale-[0.8]">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleSidebarCaptcha}
                  />
                </div>
              </div>

              {/* Brand Green Submit Button */}
          {/*   <button
                type="submit"
                className="h-14 w-full rounded-full bg-[#3cb878] text-sm font-black uppercase tracking-[0.15em] text-white shadow-lg transition-all hover:bg-slate-900 hover:shadow-green-500/20 active:scale-95"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
          {/* SIDEBAR CONTACT FORM - PIXEL PERFECT END */}
        </aside>
      </div>

      <section className="font-sans flex min-h-[650px] w-full flex-col bg-white lg:flex-row">
        {/* LEFT SIDE: ONLY IMAGE - CLEAN VERSION */}
        <div className="relative flex w-full items-end justify-center overflow-hidden bg-[#FFB400] pt-10 lg:w-1/2 lg:pt-20">
          <div className="relative z-10 w-full px-4 lg:px-10">
            <img
              src="https://it2.tv/img/google-maps-local-seo-ranking-expert/first-rank-expert.webp"
              alt="Best SEO Expert"
              className="mx-auto block h-auto max-h-[600px] w-full object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE: FORM COLUMN */}
        <div className="flex w-full items-center justify-center bg-[#3cb878] p-6 md:p-12 lg:w-1/2 lg:p-16">
          <div className="w-full max-w-2xl rounded-[2.5rem] border-[3px] border-white/30 p-8 md:p-12">
            {/* Form Heading: H2 inside H2 as requested */}
            <h4 className="h4 mb-10 text-center tracking-tight text-white">
              Get a free SEO plan
            </h4>

            <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name*"
                required
                className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Phone*"
                required
                className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email*"
                required
                className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />

              <div className="relative">
                <select className="h-14 w-full cursor-pointer appearance-none rounded-full bg-white px-6 text-slate-500 focus:outline-none">
                  <option value="">Website SEO Services</option>
                  <option value="google-ranking">Google Ranking</option>
                  <option value="local-seo">Local SEO</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
              </div>

              <input
                type="text"
                placeholder="GBP or Website URL"
                className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />

              {/* ReCAPTCHA Container */}
              <div className="flex justify-center py-2 md:col-span-2">
                <div className="scale-90 transform rounded-xl bg-white p-2 shadow-md md:scale-100">
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={(val: string | null) => console.log(val)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full bg-[#FF5A2C] py-5 font-black uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-slate-900 active:scale-95 md:col-span-2"
              >
                Submit Seo Estimate Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
