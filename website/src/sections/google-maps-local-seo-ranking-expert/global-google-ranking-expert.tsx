'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Send } from 'lucide-react';
import { expertProfileData } from '@/data/google-maps-local-seo';

export default function GlobalGoogleRankingExpert() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = expertProfileData;

  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* IMAGE SIDE */}
          <div className="group relative lg:col-span-5">
            <div className="absolute inset-0 rounded-3xl bg-black blur-xl transition group-hover:opacity-100"></div>
            <img
              src={data.image}
              alt={data.title}
              className="relative z-10 w-full rounded-3xl border border-green-100 shadow-2xl"
            />
          </div>

          {/* CONTENT SIDE */}
          <div className="lg:col-span-7">
            <span className="p font-medium uppercase text-emerald-400">
              {data.name}
            </span>
            <h3 className="h3 max-w-6xl leading-tight text-white">
              {data.title}
            </h3>

            <div className="mb-6 mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>

            <p className="p leading-relaxed text-white">{data.description}</p>

            {/* CTA */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                GET QUOTE
                <span className="inline-block transform transition group-hover:translate-x-1">
                  →
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
                          {data.modal.accentTitle}
                        </h3>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        {data.modal.accentTagline}
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
                        <p className="p mt-1 text-sm text-slate-700">
                          {data.modal.formSubtitle}
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
                          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:bg-slate-900"
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
                width: 100%;
                border-radius: 1rem;
                border: 1px solid #f1f5f9;
                background-color: #f8fafc;
                padding: 1rem 1.25rem;
                font-size: 0.875rem;
                font-weight: 500;
                outline: none;
                transition: all 0.2s;
              }
              .form-input-premium:focus {
                background-color: white;
                border-color: #3cb878;
                box-shadow: 0 0 0 2px rgba(60, 184, 120, 0.2);
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
