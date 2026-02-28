import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 pb-20 pt-32 lg:pb-32 lg:pt-48">
      {/* Animated Background Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-[#FF5A2C]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#FF5A2C] text-[#FF5A2C]"
                  />
                ))}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Top Rated Google Expert 2026
              </span>
            </div>

            <h1 className="md:text-7xl mb-6 text-5xl font-black leading-[0.9] tracking-tighter text-white">
              Dominate <span className="text-[#3cb878]">Google</span> <br />
              With Precision <span className="font-light italic">SEO.</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
              Stop settling for page 2. We use advanced AI-driven algorithms and
              EEAT-focused strategies to put your business exactly where your
              customers are looking.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 rounded-full bg-[#3cb878] px-8 py-5 font-black uppercase tracking-widest text-white shadow-2xl shadow-[#3cb878]/20 transition-all hover:bg-[#2d8d5c]"
              >
                Claim Your Free Audit <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/10 bg-white/5 px-8 py-5 font-black uppercase tracking-widest text-white transition-all hover:bg-white/10"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-20 rounded-[3rem] border border-white/10 bg-slate-800/50 p-4 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-[2.5rem] bg-slate-900">
                <div className="flex items-center justify-between border-b border-white/5 p-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    analytics.google.com
                  </span>
                </div>
                <div className="p-8">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-t from-[#3cb878]/20 to-transparent">
                    {/* Simplified Chart Graphic */}
                    <svg
                      className="absolute bottom-0 h-full w-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 80 Q 25 70 40 40 T 80 20 L 100 0 L 100 100 L 0 100 Z"
                        fill="url(#grad)"
                      />
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: '#3cb878', stopOpacity: 0.4 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: '#3cb878', stopOpacity: 0 }}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Visibility
                      </p>
                      <p className="text-2xl font-black text-white">+245%</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Rankings
                      </p>
                      <p className="text-2xl font-black text-[#3cb878]">#1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -right-6 -top-6 z-30 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"
            >
              <div className="rounded-lg bg-[#3cb878] p-2 text-white">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">
                  Algorithm Safe
                </p>
                <p className="text-xs font-black text-slate-900">
                  100% White Hat
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-xl"
            >
              <div className="rounded-lg bg-[#FF5A2C] p-2 text-white">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400">
                  Real-Time Results
                </p>
                <p className="text-xs font-black text-white">
                  45-Day Ranking Goal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
