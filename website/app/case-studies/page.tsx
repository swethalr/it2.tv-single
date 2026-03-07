import { Metadata } from 'next';
import CaseStudiesTimeline from '@/src/CaseStudiesTimeline';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';



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
  <CaseStudiesTimeline/>;
  <Footer />
  </>
  );
}