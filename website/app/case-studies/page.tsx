import { Metadata } from 'next';
import CaseStudiesTimeline from '@/src/CaseStudiesTimeline';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';


export const metadata: Metadata = {
  title: 'Elite Digital Services | IT2.TV',
  description: 'High-performance ranking, design, and SEO systems for market leaders.',
  // SEO Strategy: Block indexing for this page as per CEO instructions
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
<>
   <MainHeader version="2" />
  <CaseStudiesTimeline/>;
  <Footer />
  </>
  );
}