import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

import Skills from '@/components/main/Skills';

export const metadata: Metadata = {
  title: 'Yetenekler',
  description:
    "Python, Next.js, AI Workflow, PLC programlama ve daha fazlası. Mert Güneş'in teknik yetkinlikleri ve kullandığı araçlar.",
  alternates: {
    canonical: '/skills',
    languages: {
      'tr-TR': '/skills',
      'en-US': '/skills',
    },
  },
};

export default function SkillsPage() {
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
        name: 'Yetenekler',
        item: `${ContactData.website}/skills`,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={breadcrumbLd} />
      <Skills />
    </div>
  );
}

