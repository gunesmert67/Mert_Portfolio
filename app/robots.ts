import { MetadataRoute } from 'next';
import { ContactData } from '@/data/Contact';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${ContactData.website}/sitemap.xml`,
    };
}
