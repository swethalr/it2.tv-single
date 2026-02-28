'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * CINEMATIC EXPERIENCE: THE SINGULARITY
 * Concept: 0% Static. 100% Motion.
 * Focus: High-velocity SEO results
 */
export default function CinematicExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // Camera Zoom Logic: Everything flies toward the screen
  const scale1 = useTransform(smoothScroll, [0, 0.2], [0.5, 2]);
  const opacity1 = useTransform(smoothScroll, [0, 0.1, 0.2], [0, 1, 0]);

  const scale2 = useTransform(smoothScroll, [0.2, 0.4], [0.5, 2]);
  const opacity2 = useTransform(smoothScroll, [0.2, 0.3, 0.4], [0, 1, 0]);

  const scale3 = useTransform(smoothScroll, [0.4, 0.6], [0.5, 3]);
  const opacity3 = useTransform(smoothScroll, [0.4, 0.5, 0.6], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* CINEMATIC BACKGROUND: VORTEX */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3cb8781a] via-transparent to-transparent opacity-50" />

        {/* SCENE 1: THE TRACK RECORD */}
        <motion.div
          style={{ scale: scale1, opacity: opacity1 }}
          className="absolute flex flex-col items-center text-center"
        >
          <h2 className="h2 font-black uppercase italic leading-none text-white md:text-[10vw]">
            2,500+ <br /> <span className="text-[#3cb878]">PROJECTS</span>
          </h2>
          <p className="font-mono mt-4 tracking-[1em] text-[#3cb878]">
            GLOBAL DOMINATION
          </p>
        </motion.div>

        {/* SCENE 2: THE SPEED */}
        <motion.div
          style={{ scale: scale2, opacity: opacity2 }}
          className="absolute flex flex-col items-center text-center"
        >
          <h2 className="text-6xl font-black uppercase leading-none text-white md:text-[8vw]">
            800 LOCAL <br /> <span className="text-[#3cb878]">BUSINESSES</span>
          </h2>
          <p className="font-mono mt-4 tracking-[0.5em] text-white/50">
            RANKED IN 45 DAYS
          </p>
        </motion.div>

        {/* SCENE 3: THE RESULT */}
        <motion.div
          style={{ scale: scale3, opacity: opacity3 }}
          className="absolute w-full max-w-4xl px-6"
        >
          <div className="relative overflow-hidden border-y border-white/10 py-20">
            <h2 className="md:text-7xl text-center text-5xl font-light leading-tight text-white">
              FROM <span className="italic">INVISIBILITY</span> <br />
              TO THE <span className="font-black text-[#3cb878]">#1 SPOT</span>
            </h2>
          </div>
        </motion.div>

        {/* PERSISTENT NAVIGATION OVERLAY */}
        <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            Zammy Zaif / VersaForge / 2026
          </div>
          <div className="mx-10 mb-1 h-[1px] flex-1 bg-white/10" />
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#3cb878]">
            Scroll to Accelerate
          </div>
        </div>
      </div>
    </div>
  );
}
