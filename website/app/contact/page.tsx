import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { ContactSection } from '@/src/sections/contact/v2';
import { HeroSection } from '@/src/sections/hero/v3';
import { MapSection } from '@/src/sections/map-section';

import { Metadata } from 'next';
// This metadata is great for SEO - your CEO will love this
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
        title="Contact Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Contact Us',
          },
        ]}
      />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}
