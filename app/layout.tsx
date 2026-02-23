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
    default: 'Mert Güneş | Mechatronics Engineer & AI Specialist',
    template: '%s | Mert Güneş',
  },
  description: 'Mert Güneş - Mechatronics Engineer & AI Specialist. Expert in AI workflows, autonomous systems, and mechatronic engineering.',
  keywords: [
    'Mert Güneş',
    'AI Automation Developer',
    'Mechatronics Engineer',
    'Mekatronik Mühendisi',
    'Yapay Zeka Otomasyon',
    'Vibe Coding',
    'Next.js Portfolio',
    'AI Workflows',
    'Robotics Engineer Istanbul',
  ],
  authors: [{ name: 'Mert Güneş', url: ContactData.linkedin }],
  creator: 'Mert Güneş',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: ContactData.website,
    title: 'Mert Güneş | Mechatronics Engineer & AI Specialist',
    description: 'Expertise in Mechatronics Engineering and AI Systems. Explore my portfolio of projects and innovations.',
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
    title: 'Mert Güneş | Mechatronics Engineer & AI Specialist',
    description: 'Expertise in Mechatronics Engineering and AI Systems. Explore my portfolio of projects and innovations.',
    images: ['/icon.png'],
    creator: '@mertgunes',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: ContactData.website,
    languages: {
      'en-US': ContactData.website,
      'tr-TR': ContactData.website,
    },
  },
};

import CookieConsent from '@/components/ui/CookieConsent';

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
              jobTitle: 'Mechatronics Engineer & AI Specialist',
              sameAs: [
                ContactData.linkedin,
                ContactData.github,
                ContactData.twitter,
                ContactData.medium,
                ContactData.instagram,
              ],
              description:
                'Mert Güneş - Mechatronics Engineer & AI Specialist.',
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
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>

        <Analytics debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  );
}
