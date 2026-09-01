import React from 'react';
import { Metadata } from 'next';
import Services from '@/components/main/Services';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

export const metadata: Metadata = {
  title: 'Neler Üretiyorum | Hizmetler & Çözümler',
  description:
    'Yapay zeka iş akışları, yerel RAG mimarileri, mekatronik ve IoT sistemleri, veri panelleri ve Next.js web geliştirme. Mert Güneş tarafından sunulan profesyonel mühendislik çözümleri.',
  keywords: [
    'Mert Güneş Hizmetler',
    'Yapay Zeka Otomasyonu',
    'Yerel RAG Mimarisi',
    'LLM Entegrasyonu',
    'Mekatronik Çözüm Tasarımı',
    'IoT Akıllı Ev Sistemleri',
    'Next.js Web Geliştirme',
    'Veri Analitiği Dashboard',
    'AI Consulting Istanbul',
  ],
  alternates: {
    canonical: '/services',
    languages: {
      'tr-TR': '/services',
      'en-US': '/services',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: `${ContactData.website}/services`,
    title: 'Neler Üretiyorum | Hizmetler & Mühendislik Çözümleri - Mert Güneş',
    description:
      'Yapay zeka iş akışları, yerel RAG mimarileri, mekatronik sistemler ve modern web uygulamaları.',
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - Neler Üretiyorum / Hizmetler',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neler Üretiyorum | Hizmetler - Mert Güneş',
    description:
      'Yapay zeka, mekatronik ve modern web geliştirme alanındaki mühendislik çözümleri.',
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
        name: 'Neler Üretiyorum / Hizmetler',
        item: `${ContactData.website}/services`,
      },
    ],
  };

  const servicesLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Yapay Zeka & Yerel RAG Sistemleri',
      serviceType: 'AI Engineering & RAG Architecture',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Kurumsal veriler için internetten bağımsız, yerel (air-gapped) çalışan RAG mimarileri, Whisper v3 sesli asistanlar ve Qwen/Llama tabanlı LLM çözümleri.',
      areaServed: 'Global',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Yapay Zeka İş Akışı & Süreç Otomasyonu',
      serviceType: 'Workflow Automation & Process Optimization',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Yapay zeka ajanları, LLM iş akışları ve modern API entegrasyonları ile tekrarlayan iş süreçlerini ve operasyonel görevleri tam otonom hale getirme.',
      areaServed: 'Global',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mekatronik, IoT & Otonom Sistem Tasarımı',
      serviceType: 'Mechatronics & IoT Solutions',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Home Assistant ekosistemleri, IP segmentasyonu, PLC kontrolü, robotik kol kinematiği ve gömülü donanım-yazılım entegrasyonu.',
      areaServed: 'Global',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Modern Web, 3D Arayüzler & Tam Yığın Geliştirme',
      serviceType: 'Full-Stack Web & 3D Engineering',
      provider: {
        '@type': 'Person',
        name: 'Mert Güneş',
        url: ContactData.website,
      },
      description:
        'Next.js 14, React, Three.js / React Three Fiber ve Tailwind CSS ile yüksek performanslı, SEO ve GEO uyumlu mimari web uygulamaları.',
      areaServed: 'Global',
    },
  ];

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mert Güneş hangi yapay zeka ve mühendislik hizmetlerini sunuyor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş; yerel ve gizlilik odaklı RAG (Retrieval-Augmented Generation) sistemleri, n8n tabanlı yapay zeka iş akışı otomasyonu, IoT ve akıllı sistem mimarileri, modern Next.js/3D web uygulamaları ve kurumsal veri analitiği panelleri geliştirmektedir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Yerel RAG (Çevrimdışı Yapay Zeka) sistemi ne sağlar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yerel RAG mimarileri şirket içi verilerin buluta sızmasını engelleyerek %100 veri gizliliği (air-gapped), internet bağımsız çalışma ve saniyenin altında hızlı vektörel belge sorgulama imkanı sunar.',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, ...servicesLd, faqLd]} />
      <Services />
    </div>
  );
}

