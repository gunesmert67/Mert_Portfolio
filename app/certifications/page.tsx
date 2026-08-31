import React from 'react';
import { Certification } from '@/components/main/Certification';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';
import { CertificationData } from '@/data/Certification';

export const metadata: Metadata = {
  title: 'Sertifikalar | Doğrulanmış Yetkinlik Belgeleri',
  description:
    "IBM (Generative AI), McKinsey & Company (Digital Leadership), Berlitz (B2 English) ve Udemy sertifikaları. Mert Güneş'in uluslararası doğrulanmış belgeleri ve akreditasyonları.",
  keywords: [
    'Mert Güneş Sertifikalar',
    'IBM Generative AI Essentials',
    'McKinsey Forward Program',
    'Berlitz English Certificate',
    'Credly Mert Güneş',
    'Yapay Zeka Sertifikası',
    'Python Sertifikası',
    'Verified Credentials',
  ],
  alternates: {
    canonical: '/certifications',
    languages: {
      'tr-TR': '/certifications',
      'en-US': '/certifications',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: `${ContactData.website}/certifications`,
    title: 'Sertifikalar | Mert Güneş - Doğrulanmış Belgeler',
    description:
      'IBM, McKinsey & Company, Berlitz ve Udemy tarafından verilen profesyonel sertifikalar ve yetkinlikler.',
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - Doğrulanmış Sertifikalar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sertifikalar | Mert Güneş',
    description:
      'IBM, McKinsey ve global kurumlardan alınan doğrulanmış yetkinlik belgeleri.',
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

export default function CertificationsPage() {
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
        name: 'Sertifikalar',
        item: `${ContactData.website}/certifications`,
      },
    ],
  };

  const certificationsListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mert Güneş - Profesyonel Sertifikalar ve Belgeler',
    numberOfItems: CertificationData.length,
    itemListElement: CertificationData.map((cert, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: cert.name,
        description: cert.description.tr,
        credentialCategory: 'Professional Certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: cert.issuer,
        },
        url: cert.CertificationLink || `${ContactData.website}/certifications`,
        dateCreated: cert.date,
        validIn: {
          '@type': 'AdministrativeArea',
          name: 'Global',
        },
      },
    })),
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, certificationsListLd]} />
      <Certification />
    </div>
  );
}


