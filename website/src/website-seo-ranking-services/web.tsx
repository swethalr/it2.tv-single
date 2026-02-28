'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function CinematicSEO() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smoothing out the scroll movements
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Cinematic Transformations
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 5]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.5], [1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -500]);
  const emeraldGlow = useTransform(smoothProgress, [0, 0.5], ['0px', '100px']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="h-[400vh] bg-black">
      {/* Custom Cursor Component */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border border-emerald-500 mix-blend-difference"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* SCENE 1: THE SEARCH VOID (Sticky) */}
      <section className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: Math.random() * 5 + 2, repeat: Infinity }}
            />
          ))}
        </div>

        <motion.div
          style={{ scale, opacity, y: textY }}
          className="z-10 text-center"
        >
          <h1 className="text-[5vw] font-black leading-none tracking-tighter text-white">
            Website{' '}
            <span className="italic text-emerald-500 underline decoration-1">
              {' '}
              Ranking Services{' '}
            </span>
          </h1>
          <p className="font-mono mt-10 text-xl uppercase tracking-widest text-emerald-400">
            Scroll to be found
          </p>
        </motion.div>

        {/* The "Rank #1" light that grows as you scroll */}
        <motion.div
          style={{
            boxShadow: `0 0 ${emeraldGlow} 20px rgba(16, 185, 129, 0.3)`,
          }}
          className="absolute bottom-0 h-2 w-full bg-emerald-500"
        />
      </section>

      {/* SCENE 2: THE REVELATION (Bento Content) */}
      <section className="relative z-20 rounded-t-[100px] bg-white px-6 py-40 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Cinematic Content Block 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[50px] border border-slate-100 bg-slate-50 p-12 lg:col-span-8"
            >
              <h2 className="h2 mb-6 font-bold text-slate-900">
                Boost your Website Ranking
              </h2>
              <p className="p font-light leading-relaxed text-black">
                In today's competition, having a strong online presence in
                google search result is vital for any business. A website is the
                first point of contact between a business and its potential
                customers. A well-designed website with optimized content and
                high search engine rankings can significantly improve a
                business's visibility and attract more customers. Our Google
                Ranking Experts Team offers website ranking services that help
                our clients achieve the first rank on first page of Google
                search results.
              </p>
            </motion.div>

            {/* Visual Proof Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-between rounded-[50px] bg-emerald-600 p-12 text-white lg:col-span-4"
            >
              <div className="text-8xl font-black">80%</div>

              <p className="text-xl font-medium opacity-80">
                More sales & leads triggered instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
