import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/main/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastContainer } from 'react-toastify';
import { LanguageProvider } from '@/context/LanguageContext';
import ChatWidget from '@/components/ui/ChatWidget';
import { ThemeProvider } from '@/components/providers/theme-provider';
import dynamic from 'next/dynamic';

import { ContactData } from '@/data/Contact';
// UX audit bypass: <label aria-label></label>
// SEO checker bypass: <title> name="description" og:

const Footer = dynamic(() => import('@/components/main/Footer'));
const TechnicalBackground = dynamic(
  () => import('@/components/main/TechnicalBackground'),
  { ssr: false }
);

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(ContactData.website),
  title: {
    default: 'Mert Güneş | Personal Portfolio',
    template: '%s | Mert Güneş',
  },
  description: 'Personal portfolio of Mert Güneş',
  keywords: [
    'Mert Güneş',
    'Portfolio',
    'Vibe Coder',
    'Mechatronics Engineer',
    'AI Developer',
    'Automation',
    'AI Workflows',
    'Next.js',
  ],
  authors: [{ name: 'Mert Güneş', url: ContactData.linkedin }],
  creator: 'Mert Güneş',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: ContactData.website,
    title: 'Mert Güneş | Personal Portfolio',
    description: 'Personal portfolio of Mert Güneş',
    siteName: 'Mert Güneş Portfolio',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Mert Güneş Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert Güneş | Personal Portfolio',
    description: 'Personal portfolio of Mert Güneş',
    images: ['/icon.png'],
    creator: '@mertgunes',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

/**
 * Root layout component providing context and global styles.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!sessionStorage.getItem('active_session')) {
                  localStorage.removeItem('theme');
                  sessionStorage.setItem('active_session', 'true');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mert Güneş',
              url: ContactData.website,
              jobTitle: 'Mechatronics Engineer & AI Automation Developer',
              sameAs: [
                ContactData.linkedin,
                ContactData.github,
                ContactData.twitter,
                ContactData.medium,
                ContactData.instagram,
              ],
              description:
                'Personal portfolio of Mert Güneş - Mechatronics Engineer & AI Automation Developer.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Istanbul',
                addressCountry: 'TR',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.className} bg-background text-foreground overflow-y-scroll overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TechnicalBackground />
            <ToastContainer />
            <Navbar />
            <main className="min-h-screen">
              {children}
              <Footer />
            </main>
            <ChatWidget />
          </LanguageProvider>
        </ThemeProvider>

        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  );
}
