import { MetadataRoute } from 'next';
import { ContactData } from '@/data/Contact';

/**
 * Dynamic robots.txt configuration for search engines and AI crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = ContactData.website;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'cohere-ai',
          'Diffbot',
          'Bytespider',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
