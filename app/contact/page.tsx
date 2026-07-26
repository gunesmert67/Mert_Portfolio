import React from 'react';
import { Metadata } from 'next';
import ContactMe from '@/components/ui/ContactMe';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'Mert Güneş ile iletişime geçin. Proje teklifleri, iş birlikleri veya teknik danışmanlık için iletişim kanallarımı keşfedin.',
  alternates: {
    canonical: '/contact',
    languages: {
      'tr-TR': '/contact',
      'en-US': '/contact',
    },
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
    mainEntity: {
      '@type': 'Person',
      name: 'Mert Güneş',
      email: ContactData.email,
      url: ContactData.website,
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

