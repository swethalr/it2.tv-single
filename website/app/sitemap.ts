import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://it2.tv', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://it2.tv/google-ranking-expert', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://it2.tv/best-seo-professional', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://it2.tv/google-maps-local-seo-expert', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://it2.tv/local-seo-service-london', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://it2.tv/local-seo-services-hialeah', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://it2.tv/google-ranking-services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://it2.tv/website-seo-ranking-services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://it2.tv/internet-influencer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://it2.tv/aboutpage', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://it2.tv/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://it2.tv/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://it2.tv/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://it2.tv/faq', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://it2.tv/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
