import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

const Services = dynamic(() => import('@/components/main/Services'));

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Yapay zeka otomasyonları, mekatronik çözüm tasarımı ve teknik danışmanlık. Mert Güneş tarafından sunulan profesyonel hizmetler.',
  alternates: {
    canonical: '/services',
    languages: {
      'tr-TR': '/services',
      'en-US': '/services',
    },
  },
};

export default function ServicesPage() {
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
        name: 'Hizmetler',
        item: `${ContactData.website}/services`,
      },
    ],
  };

  const servicesLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Yapay Zeka & Otomasyon Sistemleri',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Kurumsal süreçler için yerel RAG mimarileri, n8n iş akışları, LLM entegrasyonu ve otonom sesli asistan çözümleri.',
      areaServed: 'Global',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mekatronik & Otonom Sistem Tasarımı',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Endüstriyel otomasyon, PLC programlama, robotik tasarım ve IoT donanım-yazılım entegrasyonları.',
      areaServed: 'Global',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Tam Yığın Web & Yazılım Geliştirme',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Next.js, TypeScript, Python ve Docker tabanlı yüksek performanslı web uygulamaları ve API geliştirmeleri.',
      areaServed: 'Global',
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, ...servicesLd]} />
      <Services />
    </div>
  );
}

