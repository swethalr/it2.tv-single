import Newsletter from '@/src/components/NewsLetter';
import CostofServices from '@/src/pricing/cost-seo-rank-services';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';

import { HeroSection } from '@/src/sections/hero/v3';

import { Metadata } from 'next';
import SEOEstimator from '@/src/components/SEOEstimator';

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
        title="Pricing Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Pricing',
          },
        ]}
      />
      <SEOEstimator/>
      <CostofServices />
      <Newsletter />

      <Footer />
    </>
  );
}
