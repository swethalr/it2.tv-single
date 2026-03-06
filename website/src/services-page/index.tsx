'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map to ensure it only renders on the client
const NetworkMap = dynamic(() => import('@/src/components/Networkmap'), { 
  ssr: false 
});
const services = [
  { 
    id: '01', 
    title: 'Google Ranking SEO', 
    image: '/assets/images/service/google-ranking-seo.jpg', // Replace with high-end 3D render
    desc: 'Drive consistent traffic with expert SEO strategies.', 
    size: 'md:col-span-3' 
  },
  { 
    id: '02', 
    title: 'GMB or GBP Ranking', 
    image: '/assets/images/service/gmb-gbp-ranking.jpg', 
    desc: 'Rank your business higher in local Google map results.', 
    size: 'md:col-span-2' 
  },
  { 
    id: '03', 
    title: 'Website Ranking', 
    image: '/assets/images/service/website-ranking.jpg', 
    desc: 'Improve visibility and boost your website’s position fast.', 
    size: 'md:col-span-2' 
  },
  { 
    id: '04', 
    title: 'Web Designing', 
    image: '/assets/images/service/web-design.jpg', 
    desc: 'Create responsive websites that convert visitors into customers', 
    size: 'md:col-span-3' 
  },
  { 
    id: '05', 
    title: 'Performance Marketing', 
    image: '/assets/images/service/performance-marketing.jpg', 
    desc: 'Increase leads and sales through smart, data-driven ad campaigns.', 
    size: 'md:col-span-3' 
  },
  { 
    id: '06', 
    title: 'Google-SEO Training', 
    image: '/assets/images/service/seo-training.jpg', 
    desc: 'Learn practical SEO skills and achieve real results.', 
    size: 'md:col-span-2' 
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#004d40] selection:text-white">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[80px] md:blur-[100px]" />
      
      
      {/* HEADER: Massive Static Typography */}
      <section className="px-6 lg:pt-32 pt-10 pb-10 max-w-[1440px] mx-auto">
        {/*<div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">*/}
            
            <h1 className="h1 font-bold text-center mb-8 tracking-tighter uppercase leading-[1.2]">
              Our Services
            </h1>
          <h2 className ="font-semibold h2 text-emerald-700 text-center mb-8 tracking-tighter mx-auto">Global Visibility Infrastructure for Market-Dominant Entities.</h2>
          <div className=" t-4 border-l text-center mx-auto border-gray-100 lg:pl-8">
            <p className="p text-gray-900 leading-relaxed mb-8">
              we provide a complete range of digital growth solutions designed to boost your online presence. From SEO and ranking optimization to marketing, branding and expert mentoring, our services cover every aspect of digital success. Explore each category to discover how we help businesses reach the first rank on Google.
            </p>
          </div>
        
      </section>
 <NetworkMap />
      {/* SERVICES GRID: Asymmetric Bento Architecture */}
      <section className="max-w-[1440px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-5 bg-gray-900 gap-px border-b border-gray-100">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial="initial"
              whileHover="hover"
              className={`group relative bg-white p-8 md:p-16 flex flex-col justify-between min-h-[600px] overflow-hidden ${service.size}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-12">
                 
                  <motion.div 
                    variants={{ hover: { rotate: 45, backgroundColor: '#3cb878', color: '#fff' } }}
                    className="text-[#004d40] border border-[#004d40]/20 p-4 rounded-full transition-colors"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>

                {/* IMAGE MODULE: Static with Hover-Zoom */}
                <div className="relative w-full h-64 mb-12 bg-gray-50 overflow-hidden rounded-sm   transition-all duration-700">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* High-tech scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none opacity-20" />
                </div>

                {/* CONTENT SECTION */}
                <div className="mt-auto">
                  <motion.h2 
                    variants={{ hover: { x: 10 } }}
                    className="h2 font-bold tracking-tighter uppercase mb-6 text-[#1a1a1a]"
                  >
                    {service.title}
                  </motion.h2>
                  <p className="p text-gray-700 max-w-sm leading-snug">
                    {service.desc}
                  </p>
                  
                  <motion.div 
                    variants={{ hover: { opacity: 1, x: 0 } }}
                    initial={{ opacity: 0, x: -10 }}
                    className="mt-8 flex items-center gap-3 text-[#004d40] font-bold uppercase  p"
                  >
                    Explore<MoveRight size={24} />
                  </motion.div>
                </div>
              </div>

              {/* TACTILE BOTTOM ACCENT */}
              <motion.div 
                variants={{ hover: { height: '8px' } }}
                initial={{ height: '0px' }}
                className="absolute bottom-0 left-0 w-full bg-[#004d40] transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

     
    </main>
  );
}