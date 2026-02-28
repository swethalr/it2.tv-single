import { motion } from 'framer-motion';
import { Search, BarChart3, Globe, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We analyze your current Google footprint and identify technical gaps.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Strategy Mapping',
    desc: 'Custom blueprint targeting high-intent keywords for your specific niche.',
    icon: BarChart3,
  },
  {
    num: '03',
    title: 'On-Page Execution',
    desc: "Optimizing content and technical metadata for Google's latest algorithms.",
    icon: Globe,
  },
  {
    num: '04',
    title: 'Authority Scaling',
    desc: 'Building high-quality signals that solidify your #1 ranking position.',
    icon: Rocket,
  },
];

export const ExpertRoadmap = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="h2 tracking-tighter text-slate-900">
            The <span className="text-[#3cb878]">Ranking</span> Roadmap
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-100 md:block" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`flex flex-col items-center md:flex-row ${
                  idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex w-full justify-center md:w-1/2">
                  <div
                    className={`max-w-sm space-y-4 ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}
                  >
                    <span className="text-5xl font-black text-slate-100">
                      {step.num}
                    </span>
                    <h4 className="h4 font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="p text-slate-600">{step.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 my-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3cb878] text-white shadow-lg md:my-0">
                  <step.icon size={28} />
                </div>

                <div className="hidden w-full md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
