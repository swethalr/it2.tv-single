
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import AboutSection from '@/src/sections/about/v2';
import CtaBanner from '@/src/sections/cta/v2';
import { HeroSection } from '@/src/sections/hero/v2';
import WorkSection from '@/src/sections/worksection/WorkSection';
import OnicxServiceSlider from '@/src/sections/service/v2';
import { StatisticsSection } from '@/src/sections/statistics/v2';
import PortfolioSection from '@/src/sections/portfolio/Portfolio';
import { TestimonialSection } from '@/src/sections/testimonial/v2';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import ContactSection from '@/src/sections/ContactSection';
import GrowthSection from '@/src/sections/growth/GrowthSection';
import ServicesSection from '@/src/sections/service/ServicesSection';
import Technologies from '@/src/sections/technologies/Technologies';
import { heroSectionData } from '@/data/hero/v2';
import { workprocessSectionData } from '@/data/work-process/v1';
import { ctaBannerData } from '@/data/cta';
import { growthSectionData } from '@/data/growth';
import { technologiesData } from '@/data/technologies';
import { servicesSectionData } from '@/data/services';
import { aboutSectionData } from '@/data/about';

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <main>
      <HeroSection data={heroSectionData} />
      <WorkprocessSection data={workprocessSectionData} />
      <CtaBanner data={ctaBannerData} />
      <GrowthSection data={growthSectionData} />
      <Technologies data={technologiesData} />
      <ServicesSection data={servicesSectionData} />
      <AboutSection data={aboutSectionData} />
      <StatisticsSection />
      <OnicxServiceSlider />
      <WorkSection />
      <PortfolioSection />
      <TestimonialSection />
        <ContactSection />
        </main>
      <Footer  />
    </>
  );
}
