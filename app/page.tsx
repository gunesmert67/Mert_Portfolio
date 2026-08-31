import React from 'react';
import Hero from '@/components/main/Hero';
import Statistic from '@/components/main/Statistic';
import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

export const metadata: Metadata = {
  title: 'Mert Güneş | Mekatronik Mühendisi & Yapay Zeka Uzmanı',
  description:
    'Mert Güneş — Mekatronik Mühendisi, Yapay Zeka Uzmanı ve Ürün & Teknoloji Yöneticisi. Yapay zeka iş akışları, yerel RAG mimarileri, robotik sistemler ve modern web teknolojilerinde uzman.',
  keywords: [
    'Mert Güneş',
    'Mekatronik Mühendisi',
    'Yapay Zeka Uzmanı',
    'AI Specialist',
    'Mechatronics Engineer Istanbul',
    'Product & Technology Manager',
    'AI Automation Developer',
    'RAG Architecture',
    'Next.js Portfolio',
    'Vibe Coding',
    'Robotics Engineer Turkey',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'tr_TR',
    url: ContactData.website,
    title: 'Mert Güneş | Mekatronik Mühendisi & Yapay Zeka Uzmanı',
    description:
      'Mekatronik, Yapay Zeka ve Ürün Yönetimi alanında inovatif çözümler. Mert Güneş’in projelerini, yeteneklerini ve vizyonunu keşfedin.',
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - Mekatronik Mühendisi & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert Güneş | Mekatronik Mühendisi & Yapay Zeka Uzmanı',
    description:
      'Mekatronik, Yapay Zeka ve Ürün Yönetimi alanında inovatif mühendislik çözümleri.',
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

export default function Home() {
  const profilePageLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${ContactData.website}/#profilepage`,
    url: ContactData.website,
    name: 'Mert Güneş | Profil & Portfolyo',
    description:
      'Mert Güneş - Mekatronik Mühendisi, Yapay Zeka Uzmanı ve Ürün & Teknoloji Yöneticisi resmi portfolyo sayfası.',
    mainEntity: {
      '@type': 'Person',
      '@id': `${ContactData.website}/#person`,
      name: 'Mert Güneş',
      url: ContactData.website,
      image: `${ContactData.website}/mert_optimized.webp`,
      jobTitle: 'Product & Technology Manager / Mechatronics Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Alkom Technology',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Marmara University',
          sameAs: 'https://www.marmara.edu.tr',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Istanbul Ticaret University',
          sameAs: 'https://www.ticaret.edu.tr',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Istanbul',
        addressRegion: 'Marmara',
        addressCountry: 'TR',
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

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mert Güneş kimdir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş, İstanbul merkezli bir Mekatronik Mühendisi, Yapay Zeka Uzmanı ve Ürün & Teknoloji Yöneticisidir. Mekatronik donanım disiplini ile modern üretken yapay zeka (LLM, RAG), veri analitiği ve tam yığın yazılım teknolojilerini birleştiren sistemler inşa eder.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mert Güneş hangi alanlarda ve teknolojilerde uzmanlaşmıştır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş; yerel RAG (Retrieval-Augmented Generation) mimarileri, yapay zeka iş akışları, kurumsal kaynak planlama (ERP), süreç iyileştirme, Next.js, React, TypeScript, Python, PLC ve gömülü robotik sistemler alanlarında uzmanlaşmıştır.',
        },
      },
      {
        '@type': 'Question',
        name: 'Mert Güneş şu anda hangi pozisyonda çalışmaktadır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş, Alkom Technology bünyesinde Ürün ve Teknoloji Yöneticisi (Product & Technology Manager) olarak görev yapmaktadır.',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[profilePageLd, faqLd]} />
      <Hero />
      <Statistic />
    </div>
  );
}

