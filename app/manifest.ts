import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mert Güneş | Mechatronics Engineer & AI Specialist',
    short_name: 'Mert AI',
    description:
      'Personal portfolio of Mert Güneş - Mechatronics Engineer & AI Specialist.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
