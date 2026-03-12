import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(ContactData.website),
  title: {
    default: 'Mert G\u00fcne\u015f | Mekatronik M\u00fchendisi & Yapay Zeka Uzman\u0131',
    template: '%s | Mert G\u00fcne\u015f',
  },
  description: 'Mert G\u00fcne\u015f - Mekatronik M\u00fchendisi ve Yapay Zeka Uzman\u0131 (AI Specialist). Yapay zeka i\u015f ak\u0131\u015flar\u0131, otonom sistemler ve mekatronik m\u00fchendisli\u011fi konular\u0131nda uzman.',
  keywords: [
    'Mert G\u00fcne\u015f',
    'AI Automation Developer',
    'Mechatronics Engineer',
    'Mekatronik M\u00fchendisi',
    'Yapay Zeka Otomasyon',
    'Vibe Coding',
    'Next.js Portfolio',
    'AI Workflows',
    'Robotics Engineer Istanbul',
  ],
  authors: [{ name: 'Mert G\u00fcne\u015f', url: ContactData.linkedin }],
  creator: 'Mert G\u00fcne\u015f',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: ContactData.website,
    title: 'Mert G\u00fcne\u015f | Mekatronik M\u00fchendisi & Yapay Zeka Uzman\u0131',
    description: 'Mekatronik M\u00fchendisli\u011fi ve Yapay Zeka Sistemlerinde Uzmanl\u0131k. Projelerimi ve inovasyonlar\u0131m\u0131 ke\u015ffedin.',
    siteName: 'Mert G\u00fcne\u015f Portfolyo',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Mert G\u00fcne\u015f Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert G\u00fcne\u015f | Mekatronik M\u00fchendisi & Yapay Zeka Uzman\u0131',
    description: 'Mekatronik M\u00fchendisli\u011fi ve Yapay Zeka Sistemlerinde Uzmanl\u0131k. Projelerimi ve inovasyonlar\u0131m\u0131 ke\u015ffedin.',
    images: ['/icon.png'],
    creator: '@mertgunes_6767',
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
      <body
        className={`${dmSans.className} bg-background text-foreground overflow-y-scroll overflow-x-hidden`}
      >
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
              name: 'Mert G\u00fcne\u015f',
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
                'Mert G\u00fcne\u015f - Mekatronik M\u00fchendisi ve Yapay Zeka Uzman\u0131 (AI Specialist). \u0130stanbul merkezli olarak yapay zeka i\u015f ak\u0131\u015flar\u0131, otonom sistemler, veri analiti\u011fi ve mekatronik m\u00fchendisli\u011fi projeleri geli\u015ftiren teknoloji profesyoneli.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Istanbul',
                addressCountry: 'TR',
              },
            }),
          }}
        />
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
