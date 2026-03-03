import AboutTimeline from '@/src/about-page/about-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import Newsletter from '@/src/components/NewsLetter';

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

export default function AboutPage() {
  return (
    <main>
      {/* You can add your Navbar here if it's not in your layout.tsx */}
      <MainHeader />

      <AboutTimeline />

      <Newsletter />
      <Footer />
      {/* You can add your Footer here */}
    </main>
  );
}
