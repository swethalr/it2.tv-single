'use client';

import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ContactModal } from '@/src/sections/shared';
export default function GrowthSection({ data }: { data: any }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { header, content, chartData, testimonial } = data;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Grid Background Overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

        {/* Header Text */}
        <div className="mb-16 text-center">
          <h2 className="h2 font-bold tracking-tight text-slate-900 ">
            {header.title}
            <span className="text-[#3cb878]"> {header.highlight}</span>
            {header.end}
          </h2>
          <p className="p mx-auto mt-6 max-w-4xl leading-relaxed text-slate-700">
            {header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <h4 className=" h4 font-extrabold text-center lg:text-left leading-[1.2]  text-slate-900">
              {content.heading}
              <span className="text-[#3cb878]">{content.percentage}</span>
              {content.subheading}
            </h4>
            <p className="p text-black  text-center lg:text-left text-slate-600">{content.description}</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="h6 group relative overflow-hidden rounded-md bg-[#3cb878] m-12 lg:px-8 px-2 leading-[1.2]  py-2 lg:py-4 uppercase  text-white transition-all hover:bg-[#2a8c5c] active:scale-95">
              {content.buttonLabel}
            </button>
          </div>

      {/* 5. Place the Modal component at the bottom of the section */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    
          {/* Right Side: Graph & Testimonial */}
          <div className="relative h-[400px] w-full rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                className="overflow-visible"
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#daf8d7" stopOpacity={0.3} />
                    <stop offset="90%" stopColor="#3cb878" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '10px',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3cb878"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  dot={{
                    r: 6,
                    fill: '#fff',
                    stroke: '#3cb878',
                    strokeWidth: 3,
                  }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Floating Testimonial Card */}
            <div className="absolute bottom-4 right-4 hidden max-w-[180px] rounded-xl border border-slate-50 bg-white p-4 shadow-2xl sm:block md:bottom-8 md:right-8">
              <div className=" mb-1 flex text-[#3cb878]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[1rem]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm italic leading-tight text-slate-600">
                "{testimonial.text}"
              </p>
              <p className="h6 mt-2 font-bold text-slate-900">
                — {testimonial.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
