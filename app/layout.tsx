import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/main/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/components/providers/theme-provider';
import dynamic from 'next/dynamic';

import { ContactData } from '@/data/Contact';

const Footer = dynamic(() => import('@/components/main/Footer'));
const ChatWidget = dynamic(() => import('@/components/ui/ChatWidget'), { ssr: false });
const CookieConsent = dynamic(() => import('@/components/ui/CookieConsent'), { ssr: false });
const ToastProvider = dynamic(() => import('@/components/providers/ToastProvider'), { ssr: false });
const TechnicalBackground = dynamic(
  () => import('@/components/main/TechnicalBackground'),
  { ssr: false },
);

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(ContactData.website),
  title: {
    default:
      'Mert G\u00fcne\u015f | Mekatronik M\u00fchendisi & Yapay Zeka Uzman\u0131',
    template: '%s | Mert G\u00fcne\u015f',
  },
  description:
    'Mert G\u00fcne\u015f - Mekatronik M\u00fchendisi ve Yapay Zeka Uzman\u0131 (AI Specialist). Yapay zeka i\u015f ak\u0131\u015flar\u0131, otonom sistemler ve mekatronik m\u00fchendisli\u011fi konular\u0131nda uzman.',
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
    title: 'Mert Güneş | Mekatronik Mühendisi & Yapay Zeka Uzmanı',
    description:
      'Mekatronik Mühendisliği ve Yapay Zeka Sistemlerinde Uzmanlık. Projelerimi ve inovasyonlarımı keşfedin.',
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        secureUrl: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş Portfolio Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert Güneş | Mekatronik Mühendisi & Yapay Zeka Uzmanı',
    description:
      'Mekatronik Mühendisliği ve Yapay Zeka Sistemlerinde Uzmanlık. Projelerimi ve inovasyonlarımı keşfedin.',
    images: [`${ContactData.website}/icon.png`],
    creator: '@mertgunes_6767',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/icon.png'],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'Mert Güneş',
    statusBarStyle: 'default',
  },
  category: 'Technology & Engineering',
  classification: 'Mechatronics & AI Engineering Portfolio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  other: {
    'geo.region': 'TR-34',
    'geo.placename': 'Istanbul',
    'geo.position': '41.0082;28.9784',
    ICBM: '41.0082, 28.9784',
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

/**
 * Root layout component providing context and global styles.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Y6G6EMTEQ1';

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} bg-background text-foreground overflow-y-scroll overflow-x-hidden`}
      >
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': `${ContactData.website}/#person`,
                name: 'Mert Güneş',
                url: ContactData.website,
                image: `${ContactData.website}/mert_optimized.webp`,
                jobTitle: 'Mechatronics Engineer & AI Specialist',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Freelance / Autonomous Systems Developer',
                },
                knowsAbout: [
                  'Mechatronics Engineering',
                  'Artificial Intelligence',
                  'AI Workflows & Automation',
                  'Robotics',
                  'Next.js',
                  'Python',
                  'PLC Programming',
                  'Full-Stack Software Development',
                ],
                sameAs: [
                  ContactData.linkedin,
                  ContactData.github,
                  ContactData.twitter,
                  ContactData.medium,
                  ContactData.instagram,
                ],
                description:
                  'Mert Güneş - Mekatronik Mühendisi ve Yapay Zeka Uzmanı (AI Specialist). İstanbul merkezli olarak yapay zeka iş akışları, otonom sistemler, veri analitiği ve mekatronik mühendisliği projeleri geliştiren teknoloji profesyoneli.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Istanbul',
                  addressCountry: 'TR',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${ContactData.website}/#website`,
                url: ContactData.website,
                name: 'Mert Güneş Portfolio',
                description:
                  'Mekatronik Mühendisliği ve Yapay Zeka Sistemlerinde Uzmanlık Portfolyosu.',
                inLanguage: ['tr-TR', 'en-US'],
                publisher: {
                  '@id': `${ContactData.website}/#person`,
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfilePage',
                '@id': `${ContactData.website}/#profilepage`,
                url: ContactData.website,
                name: 'Mert Güneş | Personal Portfolio & Profile',
                mainEntity: {
                  '@id': `${ContactData.website}/#person`,
                },
              },
            ]),
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
            <ToastProvider />
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
