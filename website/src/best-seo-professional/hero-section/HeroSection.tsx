'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: 'Do you want to Hire a Best SEO Expert',
      subtitle:
        'Hire the best google seo expert to boost your google search engine rankings',
      img: '/assets/images/best-seo-expert/seo-analytics.webp',
    },
    {
      title: 'Google #1 Rank Specialist',
      subtitle:
        'Obtaining high-quality targeted organic traffic without paying paid ads.',
      img: '/assets/images/best-seo-expert/seo-strategy.webp',
    },
    {
      title: 'Best Google SEO Professional',
      subtitle: 'Grow Your Business with New Clients? Contact us immediately',
      img: '/assets/images/best-seo-expert/seo-plan.webp',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged more than 100px, change slide
    if (translateX > 100) {
      prevSlide();
    } else if (translateX < -100) {
      nextSlide();
    }

    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged more than 100px, change slide
    if (translateX > 100) {
      prevSlide();
    } else if (translateX < -100) {
      nextSlide();
    }

    setTranslateX(0);
  };

  return (
    <section
      ref={sliderRef}
      className="relative w-full select-none overflow-hidden"
      style={{
        height: 'calc(100vh - 120px)', // Adjust based on your header height
        minHeight: '600px',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[#4a4a4a]">
        <div className="absolute inset-0 bg-black/60"></div>
        {slides[currentSlide].img && (
          <Image
            src={slides[currentSlide].img}
            alt="Hero Background"
            fill
            className="object-cover transition-opacity duration-1000"
            style={{ opacity: 0.4 }} // Exact opacity from it2.tv
            priority
          />
        )}

        {/* You can add the laptop background image here if needed */}
      </div>

      {/* Content */}
      <div
        className="relative flex h-full items-center justify-center px-4 transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(${translateX}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <div className="z-10 mx-auto max-w-4xl text-center">
          {/* Zammy Zaif Label */}
          <div className="mb-8">
            <p className="text-lg font-normal tracking-wide text-white">
              Zammy Zaif
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="h1  mb-6 px-4 font-bold leading-tight text-white">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 px-4 text-lg font-normal leading-relaxed text-white md:text-xl lg:text-[1.3rem]">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Button */}
          <button
            className="rounded-full bg-[#ff6b35] px-10 py-4 text-lg font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#ff5722] hover:shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            Get Started
          </button>

          {/* Slide Indicators */}
          <div className="mt-16 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'h-3 w-10 bg-white'
                    : 'h-3 w-3 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Left Arrow Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-8 top-1/2 z-20 -translate-y-1/2 text-white transition-colors duration-300 hover:text-gray-300"
        aria-label="Previous slide"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <line
            x1="40"
            y1="30"
            x2="20"
            y2="30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <polyline
            points="28,22 20,30 28,38"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      {/* Right Arrow Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-8 top-1/2 z-20 -translate-y-1/2 text-white transition-colors duration-300 hover:text-gray-300"
        aria-label="Next slide"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <line
            x1="20"
            y1="30"
            x2="40"
            y2="30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <polyline
            points="32,22 40,30 32,38"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      {/* Right Side Fixed Buttons */}
      <div className="fixed right-0 top-1/2 z-30 flex -translate-y-1/2 flex-col">
        {/* Live Chat Button */}
        <a
          href="https://wa.me/919344618144"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-b border-white/20 bg-[#25d366] px-2 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#20c157]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rotate-90"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">Live Chat</span>
        </a>

        {/* Mail Us Button */}
        <button
          className="flex items-center justify-center gap-2 bg-[#1e88e5] px-2 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#1976d2]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rotate-90"
          >
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">Mail us</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
