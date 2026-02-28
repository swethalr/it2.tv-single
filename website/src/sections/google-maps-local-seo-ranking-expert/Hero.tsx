'use client';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, TrendingUp, Send } from 'lucide-react';
import { googleMapsHeroData } from '@/data/google-maps-local-seo';

export default function GoogleMapsHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = googleMapsHeroData;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white py-10 text-white lg:py-0">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[300px] w-[300px] bg-green-500/20 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] bg-emerald-400/10 blur-[80px] md:h-[400px] md:w-[400px] md:blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] opacity-20 [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
          {/* TEXT CONTENT */}
          <div className="order-1 text-center lg:order-1 lg:text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-[14px] font-medium text-black md:text-[16px]">
              {data.badge}
            </span>
            <h1 className="h1 font-bold text-black leading-tight">
              {data.title.main}{' '}
              <span className="text-[#3cb878]">{data.title.highlight}</span>
            </h1>

            <h4 className="h4 mt-4 text-gray-300">
              <span className="font-medium text-black">
                {data.typewriter.question}
              </span>
              <span className="font-semibold text-[#3cb878]">
                <Typewriter
                  words={data.typewriter.words}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1800}
                />
              </span>
            </h4>

            <p className="mt-6 p text-black">
              {data.description.line1}
              <br className="hidden md:block" />
              {data.description.line2}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-5 md:flex-row lg:justify-start">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-full bg-green-500 px-8 py-2 font-bold text-black transition-colors hover:bg-green-400 md:w-auto"
              >
                {data.buttonText}
              </motion.button>

              <span className="flex items-center gap-2 text-sm text-black">
                ⭐ {data.trustBadge}
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative order-2 flex justify-center lg:order-2">
            <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />
            <div className="relative w-full max-w-[320px] md:max-w-[480px]">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={480}
                height={640}
                className="rounded-3xl object-cover shadow-[0_0_50px_rgba(34,197,94,0.2)]"
                priority
              />
            </div>
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
              {/* Left Side: Brand Accent */}
              <div className="hidden w-1/3 flex-col justify-between bg-[#3cb878] p-10 text-white md:flex">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
                    {data.modal.title}
                  </h3>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                  {data.modal.subtitle}
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
                    {data.modal.formTitle}
                  </h4>
                  <p className="p mt-1 text-slate-700">{data.modal.formDesc}</p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsModalOpen(false);
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="form-input-premium"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="form-input-premium"
                    />
                  </div>
                  <input
                    type="url"
                    placeholder="Website URL"
                    required
                    className="form-input-premium"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="form-input-premium"
                  />
                  <textarea
                    placeholder="Briefly describe your growth goals..."
                    rows={3}
                    className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                  ></textarea>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-2 text-[11px] uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:bg-slate-900"
                  >
                    {data.modal.buttonLabel}{' '}
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
          @apply w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878];
        }
      `}</style>
    </section>
  );
}
