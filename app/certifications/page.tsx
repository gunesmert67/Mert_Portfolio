import React from 'react';
import { Certification } from '@/components/main/Certification';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

export const metadata: Metadata = {
  title: 'Sertifikalar',
  description:
    "IBM, McKinsey, Udemy ve diğer global kurumlardan alınan profesyonel sertifikalar. Mert Güneş'in eğitim ve uzmanlık belgeleri.",
  alternates: {
    canonical: '/certifications',
    languages: {
      'tr-TR': '/certifications',
      'en-US': '/certifications',
    },
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

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={breadcrumbLd} />
      <Certification />
    </div>
  );
}

