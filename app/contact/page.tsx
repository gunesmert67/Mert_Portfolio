import React from 'react';
import { Metadata } from 'next';
import ContactMe from '@/components/ui/ContactMe';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

export const metadata: Metadata = {
  title: 'İletişim | Proje & Teknik İş Birliği',
  description:
    "Mert Güneş ile iletişime geçin. Yapay zeka otomasyonları, mekatronik sistemler, kurumsal projeler ve teknik danışmanlık talepleri için doğrudan iletişim kanalları.",
  keywords: [
    'Mert Güneş İletişim',
    'AI Danışmanlık İletişim',
    'Mekatronik Mühendisi İletişim',
    'Contact Mert Güneş',
    'Hire AI Specialist Istanbul',
    'Next.js Geliştirici İletişim',
  ],
  alternates: {
    canonical: '/contact',
    languages: {
      'tr-TR': '/contact',
      'en-US': '/contact',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: `${ContactData.website}/contact`,
    title: 'İletişim | Mert Güneş - Proje & Teknik İş Birliği',
    description:
      'Yapay zeka, mekatronik ve yazılım geliştirme projeleri için Mert Güneş ile bağlantı kurun.',
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - İletişim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Mert Güneş',
    description:
      'Proje teklifleri, iş birlikleri ve teknik fikir alışverişi için iletişim sayfası.',
    images: [`${ContactData.website}/icon.png`],
    creator: '@mertgunes_6767',
  },
  other: {
    'geo.region': 'TR-34',
    'geo.placename': 'Istanbul, Turkey',
    'geo.position': '41.0082;28.9784',
    ICBM: '41.0082, 28.9784',
  },
};

export default function ContactPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: ContactData.website,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'İletişim',
        item: `${ContactData.website}/contact`,
      },
    ],
  };

  const contactPageLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Mert Güneş - İletişim',
    url: `${ContactData.website}/contact`,
    description:
      'Yapay zeka sistemleri, mekatronik çözümler ve yazılım projeleri için iletişim ve danışmanlık kanalı.',
    mainEntity: {
      '@type': 'Person',
      '@id': `${ContactData.website}/#person`,
      name: 'Mert Güneş',
      email: ContactData.email,
      url: ContactData.website,
      jobTitle: 'Product & Technology Manager / Mechatronics Engineer & AI Specialist',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Istanbul',
        addressRegion: 'Marmara',
        addressCountry: 'TR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Technical Inquiries & Engineering Consultation',
        email: ContactData.email,
        url: `${ContactData.website}/contact`,
        availableLanguage: ['Turkish', 'English'],
        areaServed: 'Global',
      },
      sameAs: [
        ContactData.linkedin,
        ContactData.github,
        ContactData.twitter,
        ContactData.medium,
        ContactData.instagram,
      ],
    },
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, contactPageLd]} />
      <ContactMe />
    </div>
  );
}


