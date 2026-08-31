import React from 'react';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';
import { ExperienceData } from '@/data/Experience';
import { MilestoneTypes } from '@/types';
import CareerTimeline from '@/components/main/CareerTimeline';

export const metadata: Metadata = {
  title: 'Kariyer & Deneyim | Profesyonel Özgeçmiş',
  description:
    "Mert Güneş'in kariyer yolculuğu, iş deneyimleri (Alkom Technology, DHE Industrial, Tepe Analitik) ve akademik geçmişi (Marmara YBS Yüksek Lisans, Ticaret Mekatronik Lisans).",
  keywords: [
    'Mert Güneş Kariyer',
    'Mert Güneş CV',
    'Alkom Technology',
    'DHE Industrial',
    'Product & Technology Manager',
    'Technical Support Engineer',
    'Mekatronik Mühendisi Özgeçmiş',
    'Marmara Üniversitesi YBS',
    'Ticaret Üniversitesi Mekatronik',
    'AI Engineer Resume',
  ],
  alternates: {
    canonical: '/career',
    languages: {
      'tr-TR': '/career',
      'en-US': '/career',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'tr_TR',
    url: `${ContactData.website}/career`,
    title: 'Kariyer & Deneyim | Mert Güneş - Profesyonel Özgeçmiş',
    description:
      "Mert Güneş'in iş deneyimleri, liderlik rolleri ve akademik kariyer yolculuğu.",
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - Kariyer ve Deneyim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kariyer & Deneyim | Mert Güneş',
    description:
      'Mekatronik, Yapay Zeka ve Ürün Yönetimi alanındaki profesyonel iş deneyimleri.',
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

export default function CareerPage() {
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
        name: 'Kariyer',
        item: `${ContactData.website}/career`,
      },
    ],
  };

  const careerLd = {
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    name: 'Product & Technology Manager / Mechatronics Engineer & AI Specialist',
    occupationLocation: {
      '@type': 'City',
      name: 'Istanbul',
    },
    skills: [
      'Product Management',
      'Technical Sourcing',
      'AI Workflows & RAG',
      'Mechatronics Engineering',
      'Enterprise Resource Planning (ERP)',
      'Process Improvement',
      'Next.js',
      'Python',
      'Control Systems',
    ],
    responsibilities: [
      'China-based supplier research, technical sourcing, and product evaluation at Alkom Technology',
      'Developing AI workflows, dashboards, and automated operational pipelines',
      'Designing mechatronic, robotic, and IoT architecture solutions',
      'Building full-stack cloud and web applications',
    ],
  };

  const experienceListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mert Güneş - Kariyer & Deneyim Listesi',
    itemListElement: ExperienceData.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type':
          item.type === MilestoneTypes.Education
            ? 'EducationalOccupationalCredential'
            : 'Role',
        roleName: typeof item.title === 'object' ? item.title.tr : item.title,
        startDate: typeof item.date === 'object' ? item.date.tr : item.date,
        organization: {
          '@type': 'Organization',
          name: typeof item.organization === 'object' ? item.organization.tr : item.organization,
        },
        description: Array.isArray(item.description?.tr)
          ? item.description.tr.join(' ')
          : item.description?.tr || '',
      },
    })),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Mert Güneş'in iş deneyimleri ve mevcut pozisyonu nedir?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş, Alkom Technology bünyesinde Ürün ve Teknoloji Yöneticisi (Product & Technology Manager) olarak görev yapmaktadır. Daha önce DHE Endüstriyel bünyesinde Teknik Destek Mühendisi ve Tepe Analitik bünyesinde Operasyon & Servis Mühendisi olarak çalışmıştır.',
        },
      },
      {
        '@type': 'Question',
        name: "Mert Güneş'in akademik geçmişi ve eğitim dereceleri nelerdir?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş, Marmara Üniversitesi Yönetim Bilişim Sistemleri (YBS) Yüksek Lisans programında (GPA: 3.95) yapay zeka odaklı eğitimine devam etmekte, lisans derecesini ise İstanbul Ticaret Üniversitesi Mekatronik Mühendisliği bölümünden %100 Başarı Bursu ile tamamlamıştır.',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, careerLd, experienceListLd, faqLd]} />
      <CareerTimeline />
    </div>
  );
}


