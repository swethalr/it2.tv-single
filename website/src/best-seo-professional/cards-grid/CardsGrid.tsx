'use client';

import React from 'react';
import Link from 'next/link';
import { cards } from '@/data/best-seo-professional/cards';

const CardsGrid: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl border-4 border-[#3cb878] bg-white
                p-8 transition-colors duration-500
                ${card.active ? 'text-white' : 'text-[#222]'}
              `}
            >
              {/* WATER FILL LAYER */}
              <span
                className={`
                  absolute inset-0 origin-left
                  scale-x-0 transform bg-[#39b36b]
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-x-100
                  ${card.active ? 'scale-x-100' : ''}
                `}
              />

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="mb-4 text-lg font-semibold tracking-tighter">
                  {card.title}
                </h3>

                <p
                  className={`
                    mb-8 text-[18px] leading-relaxed
                    ${
                      card.active
                        ? 'text-white'
                        : 'text-black group-hover:text-white'
                    }
                  `}
                >
                  {card.desc}
                </p>

                <Link
                  href="/contact"
                  className={`
                    mt-auto inline-flex items-center gap-2 font-medium
                    transition-colors duration-300
                    ${
                      card.active
                        ? 'text-white'
                        : 'text-[#222] group-hover:text-white'
                    }
                  `}
                >
                  Get In Touch
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsGrid;
