import { MetadataRoute } from 'next';
import { ContactData } from '@/data/Contact';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ContactData.website;
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never';
    priority: number;
  }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/career', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/skills', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/certifications', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.75 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    languages: {
      'tr-TR': `${baseUrl}${route.path}`,
      'en-US': `${baseUrl}${route.path}`,
    },
  }));
}
