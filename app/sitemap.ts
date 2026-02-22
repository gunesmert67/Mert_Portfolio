import { MetadataRoute } from 'next';
import { ContactData } from '@/data/Contact';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = ContactData.website;
    const lastModified = new Date();

    const routes = [
        '',
        '/about',
        '/services',
        '/career',
        '/projects',
        '/skills',
        '/certifications',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: route === '' || route === '/about' ? 1 : 0.8,
    }));

    return routes;
}
