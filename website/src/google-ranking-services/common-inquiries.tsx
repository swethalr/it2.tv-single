'use client';

import {
  motion,
  Variants,
  AnimatePresence,
  useTransform,
  useSpring,
} from 'framer-motion';
import { Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useState } from 'react';

export default function CommonInquiries() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqData = [
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

  return (
    <section
      id="faq-premium"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
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
            <h5 className="h5 font-bold uppercase ">Common Inquiries</h5>
          </motion.div>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h4 text-center lg:text-left text-slate-900"
          >
            Google's <span className="text-[#3cb878]"> Choice</span>
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
                        <p className="text-p leading-relaxed text-slate-900 ">
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
  );
}
