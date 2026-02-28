'use client';
import React, { useState, useRef } from 'react';

export default function Banner() {
  return (
    <main className=" bg-white selection:bg-[#3cb878] selection:text-white">
      {/* --- 1. YOUR BANNER CODE (AS PROVIDED) --- */}
      <section className="relative lg:mt-28 overflow-hidden bg-[#3cb878] pb-24 pt-32 text-center">
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="h1  mb-6 tracking-tighter text-white drop-shadow-md">
            Google Ranking Services
          </h1>
          <p className="p font-bold  text-white/90">
            Home <span className="mx-2">/</span> Google Ranking Services
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
    </main>
  );
}
