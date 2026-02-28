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
  Download,
  ArrowRight,
  ShieldCheck,
  Quote,
  UserCheck,
  PenTool,
  Send,
  CheckCircle2,
  X,
  ChevronRight,
  MapPin,
  Globe,
  Settings,
  Link,
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
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

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
    question: 'Why doesn’t my Hialeah business appear in ‘near me’ results?',
    answer:
      'Your Hialeah business may not appear in ‘near me’ searches because your profile isn’t optimized. We fix it with the right local SEO strategy.',
  },
  {
    question: 'How long does Local SEO take to get my profile to #1?',
    answer:
      ' We help your Hialeah business reach #1 within 45 days through continuous optimization, review management and location-based content.',
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

export default function Hialeah() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<TabKey>('AI Models');
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#3cb878]">
      {/* 1. PREMIUM BRAND BANNER (Full Width) */}
      <section className="relative mt-28 overflow-hidden bg-[#3cb878] pb-24 pt-32 text-center">
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="h1 mb-6 font-black  tracking-tighter text-white drop-shadow-md">
            Local SEO Service in Hialeah
          </h1>
          <p className="p font-bold uppercase tracking-[0.1em] text-white/90">
            Home <span className="mx-2">/</span> Local SEO Service in Hialeah
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
          <section
            id="expert-detail"
            className=" relative space-x-20 space-y-6 overflow-hidden py-6 md:space-y-14"
          >
            {/* 1. Sophisticated Header */}
            <div className="mx-auto max-w-4xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="h2  leading-[0.9] tracking-tighter text-slate-900"
              >
                Grow Your Business
                <span className="text-[#3cb878]"> Locally</span>
              </motion.h2>
            </div>

            {/* 2. Content Body: Premium Readability */}
            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="my-8 w-full overflow-hidden rounded-xl md:my-10">
                  <img
                    src="/assets/images/hialeah/local-seo-service.jpg"
                    alt="Google Search Performance"
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Local SEO Secondary Paragraph */}
                <p className="p leading-[2em]">
                  Customers are always looking for the service who have more
                  expertise in their own field You might have done everything,
                  built a website, set up your Google Business Profile and
                  stayed consistent on social media yet customers aren’t
                  reaching you because your profile hasn’t been optimized with
                  the right local SEO service. Whatever your service or product
                  may be, when customers in Hialeah search for it, you should
                  appear first in their search list. To make this happen, you
                  need to build your profile by following the correct local SEO
                  strategy, after that you can see the growth in your conversion
                  ratio.
                </p>
              </motion.div>
            </div>
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
                  Book a SEO Consultation
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
                      Rank Local, Grow Loyal
                    </h5>
                    <h2 className="h2  leading-[0.9] tracking-tighter text-slate-900">
                      Our Local
                      <span className="text-[#3cb878]"> SEO Strategy</span>
                    </h2>
                    <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
                  </div>

                  {/* Content Body */}
                  <div className="space-y-8">
                    <p className="p leading-[2em] text-black ">
                      Sometimes, the customers who are looking for your service
                      end up reaching your competitors instead of you. That’s
                      why we provide local SEO service in Hialeah to break your
                      business free from the competitors’ trap and help you
                      achieve the #1 rank in 45 days. Every step is built on
                      transparency, precision and commitment to your success. We
                      focus on enhancing your Google Business Profile, refining
                      keywords and building customer trust through authentic
                      reviews. Our approach is not about quick fixes, but
                      sustainable visibility that strengthens your brand each
                      day. When your business begins to appear at the top of
                      local searches, it’s not just a ranking, it is proof of
                      real progress, earned with strategy and care.
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
                  Smart Growth, Real Results
                </h5>
                <h3 className="h3  leading-[0.9] tracking-tighter text-slate-900">
                  Ai Seo Result -
                  <span className="text-[#3cb878]">
                    {' '}
                    Our Customer from Hialeah
                  </span>
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
                className="relative pb-10 pt-24" // Increased to 24 for the shadow clearance
              >
                {/* Optional: Subtle top border to define the section */}
                <div className="absolute left-1/2 top-12 h-[1px] w-24 -translate-x-1/2 bg-slate-100" />

                <p className="p  mx-auto max-w-4xl leading-[1.8em] text-slate-900">
                  What you see above is the result of the magic created by Zammy
                  Zaif and our Versa Forge team through a powerful local SEO
                  service for Quality Repairs, a trusted appliance repair
                  company in Hialeah in most answer engine results.
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
                    <h3 className="h3  leading-[0.9] tracking-tighter text-slate-900">
                      Content Strategy for
                      <span className="text-[#3cb878]"> Local Reach</span>
                    </h3>
                    <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
                  </div>

                  {/* Content Body */}
                  <div className="space-y-8">
                    <p className="p leading-[2em] text-black ">
                      Local stories matter and we make sure your business speaks
                      them right. Our team creates content that reflects your
                      city’s pulse and instantly connects with people. Through
                      our local SEO service, after receiving your profile we
                      write location based blogs, optimise your website service
                      pages and headlines that capture Hialeah’s true spirit. By
                      matching your audience’s language and lifestyle, we
                      strengthen your local bond and Google rewards by
                      continuously activating your social media and profiles
                      with authenticity with higher rankings and lasting
                      visibility.
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

          {/* --- SECTION: FIRST RANK SEO SERVICES --- */}
          <section id="seo-services" className="overflow-hidden bg-white py-5">
            <div className="mx-auto max-w-4xl space-y-16 px-6">
              {/* 1. Premium Header */}
              <div className="space-y-4 text-left">
                <h5 className="h5 text-center tracking-[0.1em]  text-[#3cb878]">
                  Boost Visibility, Build Trust
                </h5>
                <h3 className="h3  text-center leading-[1.1] tracking-tighter text-slate-900">
                  Optimizing Google Business Profile
                </h3>
              </div>

              {/* 2. Content Description */}
              <div className="space-y-6">
                <p className="p leading-[2em] text-black">
                  Your Google Business Profile isn’t just a listing it is your
                  first impression. We transform customers like a magnet to you
                  using effective local seo service by adding authentic images,
                  consistent updates and detailed service descriptions, your
                  business starts appearing in Google’s “Top 3 Pack.” More
                  visibility means more calls, more visits and more trust from
                  your local audience.
                </p>
              </div>

              {/* 3. Feature Cards: 4-Grid Premium UI */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-4">
                {[
                  {
                    icon: (
                      <Phone
                        className="p text-[#3cb878] group-hover:text-white"
                        size={28}
                      />
                    ),
                    label: 'Increased Calls',
                  },

                  {
                    icon: (
                      <Target
                        className="text-[#3cb878] group-hover:text-white"
                        size={28}
                      />
                    ),
                    label: 'More Walk-ins',
                  },

                  {
                    icon: (
                      <TrendingUp
                        className="text-[#3cb878] group-hover:text-white"
                        size={28}
                      />
                    ),
                    label: 'Boost Revenue Growth',
                  },
                  {
                    icon: (
                      <Activity
                        className="text-[#3cb878] group-hover:text-white"
                        size={28}
                      />
                    ),
                    label: 'Higher Leads',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      y: -8,
                      backgroundColor: '#3cb878',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    }}
                    className="flex flex-col items-center space-y-4 rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm transition-all"
                  >
                    <div className="group-hover:text-white] flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                      {item.icon}
                    </div>
                    <h5 className="h5  uppercase tracking-tight text-slate-800">
                      {item.label}
                    </h5>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION: FIRST RANK SEO SERVICES --- */}
          <section id="seo-services" className="overflow-hidden bg-white py-5">
            <div className="mx-auto max-w-4xl space-y-16 px-6">
              {/* 1. Premium Header */}
              <div className="space-y-4 text-left">
                <h5 className="h5 text-center tracking-[0.2em] text-[#3bc878]">
                  Mobile-Focused Local Experience
                </h5>
                <h3 className="h3  text-center leading-[1.1] tracking-tighter text-slate-900">
                  Creating Seamless
                  <span className="text-[#3cb878]  ">
                    {' '}
                    Local Search Experience
                  </span>
                </h3>
              </div>

              {/* 2. Content Description */}
              <div className="space-y-6">
                <p className="p leading-[2em] text-black">
                  Most people search for nearby services using their mobile
                  phones. A mobile optimized SEO strategy ensures that your
                  business is visible and easy to reach and our local SEO
                  service focuses on creating a fast loading, user friendly
                  website that works perfectly on every device. When customers
                  open your site, they can find directions, make quick calls or
                  explore services without delay. That's how we change your
                  website. From SEO-friendly website designing to graphic
                  designing, we create complete digital solutions that
                  strengthen your brand presence, attract the right audience and
                  drive measurable business growth. This mobile experience
                  connects your business directly with customers in real time.
                  Every smooth click builds trust and turns local searches into
                  genuine actions that help your brand grow stronger every day.
                </p>
              </div>
            </div>
          </section>

          {/* --- SECTION: EXPERTISE IN GOOGLE SEO --- */}
          <section
            id="google-seo-expertise"
            className="overflow-hidden bg-white py-14"
          >
            <div className="mx-auto max-w-4xl space-y-12  px-6">
              {/* 1. Premium Header Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="h3  text-center leading-[0.9] tracking-tighter text-slate-900">
                  Creating Lasting
                  <span className="text-[#3cb878]"> Online Trust</span>
                </h3>
                <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#3cb878]" />
              </motion.div>

              {/* 2. Detailed Bio Paragraph */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="p leading-[2em] text-black">
                  Trust is the cornerstone of every successful business. We
                  build that trust through consistency, accuracy and credibility
                  by keeping your Google Business Profile updated with correct
                  details, authentic reviews and engaging photos, customers
                  instantly feel confident choosing your services. Positive
                  feedback and genuine interactions strengthen your online
                  reputation over time. Every optimized listing, review and
                  update adds another layer of trust, ensuring long-term growth
                  for your Hialeah business.
                </p>
              </motion.div>

              {/* 3. Responsive Premium Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-slate-50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]"
              >
                <img
                  src="/assets/images/hialeah/online-trust.webp"
                  alt="Expertise in Google SEO - Zammy Zaif"
                  className="block h-auto w-full object-cover"
                />

                {/* Decorative Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </motion.div>
            </div>
          </section>

          <section
            id="google-seo-expertise"
            className="overflow-hidden bg-white py-14"
          >
            <div className="mx-auto max-w-4xl space-y-12  px-6">
              {/* 1. Premium Header Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="h3  text-center leading-[0.9] tracking-tighter text-slate-900">
                  Boosting Authority
                  <span className="text-[#3cb878]"> With Quality Links</span>
                </h3>
                <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#3cb878]" />
              </motion.div>

              {/* 2. Detailed Bio Paragraph */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="p leading-[2em] text-black">
                  Building genuine online authority starts with authentic
                  backlinks. Every backlink we created by following the right
                  strategy, result-driven process that enhances your site’s
                  trust and ranking power. Instead of random or spam links, only
                  relevant and high authority websites are chosen to ensure long
                  term impact. Each connection is built naturally, reflecting
                  the credibility of your business in local searches, with
                  precise link placement and niche relevance, Hialeah based
                  businesses can see consistent growth and visibility.
                </p>
              </motion.div>
            </div>
          </section>

          <section
            id="google-seo-expertise"
            className="overflow-hidden bg-white py-14"
          >
            <div className="mx-auto max-w-4xl space-y-12  px-6">
              {/* 1. Premium Header Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="h2  text-center leading-[0.9] tracking-tighter text-slate-900">
                  Google SEO Consultant -
                  <span className="text-[#3cb878]"> Zammy Zaif</span>
                </h2>
                <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#3cb878]" />
              </motion.div>

              {/* 2. Detailed Bio Paragraph */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="p leading-[2em] text-black">
                  Even if your website is stuck on Google’s third page or not
                  ranking at all, this is the right time to increase your
                  business growth. As the CEO of Versa Forge and Google Ranking
                  Expert, I have over 20 years of hands on experience in Local
                  and organic SEO, helping businesses achieve real, consistent
                  growth. My approach is completely manual, ethical and organic.
                  I never rely on shortcuts or third party tools. I work only
                  with trusted Google tools and proven SEO strategies that
                  deliver lasting results. So far, I’ve helped 2,300+ companies
                  secure Google’s #1 ranking, both locally and globally. If you
                  want your website and Google Business Profile to appear on the
                  first page and first rank, reach out today. I will help you
                  rise from the bottom to the top organically.
                </p>
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
                      Now It’s
                      <span className="text-[#3cb878]"> Your Turn</span>
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
                      <Download
                        size={20}
                        className="transition-transform group-hover:translate-y-1"
                      />
                      <span className="h6 font-bold uppercase tracking-[0.2em]">
                        Claim #1 Spot on Maps
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
