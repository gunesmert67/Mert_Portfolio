import React from 'react';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';
import { SkillsData } from '@/data/Skills';
import Skills from '@/components/main/Skills';

export const metadata: Metadata = {
  title: 'Yetenekler & Teknoloji Yığını | Uzmanlık Alanları',
  description:
    "Next.js, TypeScript, Python, Yerel RAG, AI Otomasyon, ERP, Three.js, PLC ve Gömülü Sistemler. Mert Güneş'in teknik yetkinlikleri ve kullandığı mühendislik araçları.",
  keywords: [
    'Mert Güneş Yetenekler',
    'AI Tech Stack',
    'Next.js Developer Istanbul',
    'Python AI Specialist',
    'RAG Architect',
    'Mekatronik Mühendisliği Becerileri',
    'Vibe Coding',
    'Three.js 3D Web',
    'ERP Systems',
    'Process Improvement',
  ],
  alternates: {
    canonical: '/skills',
    languages: {
      'tr-TR': '/skills',
      'en-US': '/skills',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: `${ContactData.website}/skills`,
    title: 'Yetenekler & Teknoloji Yığını | Mert Güneş',
    description:
      'Yapay zeka, modern web geliştirme ve mekatronik disiplinlerinde kullanılan ileri düzey araçlar ve yetkinlikler.',
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - Yetenekler ve Teknoloji Yığını',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yetenekler & Teknoloji Yığını | Mert Güneş',
    description:
      'Mekatronik, Yapay Zeka ve Yazılım alanındaki teknik yetkinlik matrisi.',
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

  const allSkills = SkillsData.flatMap((cat) => cat.skills);

  const skillsListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mert Güneş - Teknik Yetenekler ve Araçlar',
    numberOfItems: allSkills.length,
    itemListElement: allSkills.map((skill, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'DefinedTerm',
        name: skill.skillName,
        url: skill.link || undefined,
        termCode: `SKILL-${skill.id}`,
      },
    })),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mert Güneş hangi programlama dillerini ve framework’leri aktif olarak kullanıyor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş başta Python, TypeScript ve C++ olmak üzere; frontend tarafında Next.js 14, React 18, Tailwind CSS, Framer Motion ve Three.js, yapay zeka tarafında ise Whisper, Qwen, Ollama ve Qdrant teknolojilerini aktif olarak kullanmaktadır.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vibe Coding ve AI-Assisted geliştirme yaklaşımı nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş, modern yapay zeka ajanları (Antigravity, Cursor, Groq, Ollama) ile akışta kalarak hızlı prototipleme, sıfır hata mimarisi ve yüksek performanslı otonom yazılımlar inşa etme yöntemini benimsemektedir.',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, skillsListLd, faqLd]} />
      <Skills />
    </div>
  );
}


