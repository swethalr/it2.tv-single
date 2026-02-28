import React from 'react';
import { MdMonitor, MdCampaign, MdSearch } from 'react-icons/md';

export interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    title: 'Website Ranking',
    desc: 'Improve visibility and boost your website’s position fast with data-driven optimization and expert ranking techniques.',
    icon: <MdMonitor />,
    img: '/assets/images/service/website-ranking.jpg',
    features: [
      'Technical SEO Mastery',
      'Semantic Content Strategy',
      'Premium Link Acquisition',
    ],
  },
  {
    title: 'Google Ranking SEO',
    desc: 'Drive consistent, high-quality organic traffic with expert SEO strategies designed for long-term growth.',
    icon: <MdSearch />,
    img: '/assets/images/service/google-ranking-seo.jpg',
    features: ['Algorithm-Safe Growth', 'Search Intent Analysis', 'KPI-Focused Reporting'],
  },
  {
    title: 'GMB or GBP Ranking',
    desc: 'Rank your business higher in local Google Map results to dominate your neighborhood and drive foot traffic.',
    icon: <MdCampaign />,
    img: '/assets/images/service/gmb-gbp-ranking.jpg',
    features: ['Proximity Optimization', 'Local Citation Cleanup', 'Map Pack Visibility'],
  },
 
  {
    title: 'Web Designing',
    desc: 'Create high-converting, responsive websites that turn your visitors into loyal customers through expert UX design.',
    icon: <MdCampaign />,
    img: '/assets/images/service/web-design.jpg',
    features: ['SEO-First Architecture', 'Core Web Vitals Optimization', 'Mobile-Responsive UI'],
  },
  {
    title: 'Performance Marketing',
    desc: 'Increase leads and sales through smart, data-driven ad campaigns that maximize your return on investment.',
    icon: <MdSearch />,
    img: '/assets/images/service/performance-marketing.jpg',
    features: ['High-ROI Ad Spend', 'Strategic A/B Testing', 'Multi-Channel Retargeting'],
  },
  {
    title: 'Google-SEO Training',
    desc: 'Learn practical, industry-standard SEO skills to achieve real results and manage your own digital presence.',
    icon: <MdSearch />,
    img: '/assets/images/service/seo-training.jpg',
    features: ['Doubt-Clearing Live Sessions', 'Industry Tool Mastery', 'Proven Ranking Blueprints'],
  },
];
