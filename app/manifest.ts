import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mert Güneş | Mechatronics Engineer & AI Specialist',
    short_name: 'Mert Güneş',
    description:
      'Personal portfolio of Mert Güneş - Mechatronics Engineer & AI Specialist.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#000000',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
