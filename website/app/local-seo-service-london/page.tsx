
import React from 'react';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import { HeroBanner } from '@/src/local-seo-service-london/hero-banner';
import { RankHigher } from '@/src/local-seo-service-london/rank-higher';
import { LocalSeoService } from '@/src/local-seo-service-london/local-seo-service';
import { CaseStudies } from '@/src/local-seo-service-london/case-studies';
import { MeetExpert } from '@/src/local-seo-service-london/meet-expert';
import { OptimizeBusiness } from '@/src/local-seo-service-london/optimize-business';
import { GetFound } from '@/src/local-seo-service-london/get-found';
import { FaqSection } from '@/src/local-seo-service-london/faq-section';
import { Sidebar } from '@/src/local-seo-service-london/sidebar';
import { BottomContactForm } from '@/src/local-seo-service-london/bottom-contact-form';
import { SeoResults } from '@/src/local-seo-service-london/first-rank-seo-results'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function LocalSeoServiceLondonPage() {
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#3cb878]">
      <MainHeader version="2" />
      {/* ── Full-Width Hero Banner ─────────────────────────────────────── */}
      <HeroBanner />

      {/* ── Holy-Grail Layout: Main (72%) + Sidebar (20%) ─────────────── */}
      <div className="mx-auto flex max-w-[1536px] flex-col gap-16 px-6 py-20 lg:flex-row">
        {/* ── MAIN COLUMN ─────────────────────────────────────────────── */}
        <main className="order-2 w-full space-y-32 lg:order-1 lg:w-[72%]">
          {/* S1 – Rank Higher in Google Pack-3 */}
          <RankHigher />

          {/* S2 – Local SEO Service in London (body + download) */}
          <LocalSeoService />
           
           <SeoResults />

          {/* S3 – Real Results / Case Studies carousel */}
          <CaseStudies />

          {/* S4 – Meet Our SEO Expert (bio + download) */}
          <MeetExpert />

          {/* S5 – How We Optimize Your Business (5-step roadmap) */}
          <OptimizeBusiness />

          {/* S6 – Get Found on Google Business Listing Today */}
          <GetFound />

          {/* S7 – Frequently Asked Questions */}
          <FaqSection />
        </main>

        {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
        <Sidebar />
      </div>

      {/* ── Full-Width Bottom Contact Form ────────────────────────────── */}
      <BottomContactForm />

      <Footer />
    </div>
  );
}
