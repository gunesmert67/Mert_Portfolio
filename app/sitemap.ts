import { MetadataRoute } from 'next';
import { ContactData } from '@/data/Contact';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = ContactData.website;
    const lastModified = new Date();

    const routes = [
        '',
        '/services',
        '/career',
        '/projects',
        '/skills',
        '/certifications',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
        languages: {
            'tr-TR': `${baseUrl}${route}`,
            'en-US': `${baseUrl}${route}`,
        }
    }));

    return routes;
}
