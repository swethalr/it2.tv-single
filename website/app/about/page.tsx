import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';

import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zammy Zaif',
  description: 'Hire an Best Google SEO expert to optimize your search engine ranking, organic results, traffic and featured snippets. Book Your Appointment Now! 91-9344618144"',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      />
      <AboutSection />
      <CtaSection />
      <TestimonialSection />
      <StatisticsSection />

      <Footer />
    </>
  );
}
