'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Trophy,
  Users,
  Globe,
  ArrowRight,
  X,
  TrendingUp,
  Send,
} from 'lucide-react';
import { premiumSeoExpertData } from '@/data/google-maps-local-seo';

const PremiumSEOExpert = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = premiumSeoExpertData;

  // Icon mapper to keep data file clean of JSX
  const getIcon = (id: string) => {
    switch (id) {
      case 'exp':
        return <Trophy className="h-5 w-5" />;
      case 'cli':
        return <Users className="h-5 w-5" />;
      case 'pro':
        return <Globe className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white py-20">
      {/* Animated Background Elements */}
      <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] animate-pulse rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] bg-green-500/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* LEFT: Premium Card */}
          <div className="group relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/90 via-transparent to-emerald-700/30 p-1.5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="relative overflow-hidden rounded-[1.8rem] bg-zinc-900">
                <img
                  src={data.image.src}
                  alt={data.image.alt}
                  className="group-hover:scale-98 h-auto w-full scale-100 object-contain  transition-all duration-1000 group-hover:grayscale-0"
                />
              </div>

              {/* High-End Stats Overlay */}
              <div className="grid grid-cols-3 gap-0 rounded-b-[1.8rem] border-t border-white/10 bg-white/[0.03] backdrop-blur-md">
                {data.stats.map((stat, i) => (
                  <div
                    key={stat.id}
                    className={`p-6 text-center ${i !== 2 ? 'border-r border-white/5' : ''}`}
                  >
                    <div className="mb-2 flex justify-center text-emerald-900">
                      {getIcon(stat.id)}
                    </div>
                    <div className="text-xl font-bold tracking-tighter text-black">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[16px] font-bold uppercase tracking-[0.2em] text-emerald-900/90">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-10 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-800 shadow-lg">
                <MapPin className="h-4 w-4 animate-bounce" /> {data.badge}
              </div>

              <h2 className="h2 mb-8 leading-[0.85] tracking-tighter text-black">
                {data.heading.text}
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-700 to-green-500 bg-clip-text text-transparent">
                  {' '}
                  {data.heading.highlight}
                </span>
              </h2>

              <div className="p max-w-2xl space-y-8 border-l-2 border-emerald-700/70 pl-8 leading-[2em] text-black">
                <p>{data.description}</p>

                <div className="grid gap-8 pt-4 md:grid-cols-2">
                  {data.counterStats.map((cStat, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-emerald-500/30"
                    >
                      <div className="mb-1 font-secondary text-xl font-bold text-emerald-800">
                        {cStat.value}
                      </div>
                      <p className="text-sm font-bold uppercase tracking-widest text-gray-900">
                        {cStat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-8 pt-10 md:flex-row">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-full overflow-hidden rounded-2xl bg-emerald-500 px-6 py-4 font-bold uppercase tracking-tighter text-black transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] md:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-sm">
                    {data.ctaText}{' '}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 translate-x-[-100%] bg-white transition-transform duration-500 group-hover:translate-x-0" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- PREMIUM MODAL OVERLAY --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row"
            >
              {/* Reuse the Modal styling and form from the Hero section here */}
              {/* For brevity, ensure the form/left-accent logic matches your Hero modal exactly */}
              <div className="relative flex-1 p-8 md:p-12">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-6 top-6 p-2 text-slate-400 hover:text-[#3cb878]"
                >
                  <X size={24} />
                </button>
                <h4 className="text-xl font-black uppercase text-slate-900">
                  Contact us Now
                </h4>
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input-premium w-full"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#3cb878] py-5 font-black uppercase text-white"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .form-input-premium {
          @apply w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#3cb878];
        }
      `}</style>
    </section>
  );
};

export default PremiumSEOExpert;
