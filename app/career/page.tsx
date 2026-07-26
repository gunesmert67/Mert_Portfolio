import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';

import CareerTimeline from '@/components/main/CareerTimeline';

export const metadata: Metadata = {
  title: 'Kariyer',
  description:
    "Mert Güneş'in profesyonel özgeçmişi, iş deneyimleri ve akademik geçmişi. Mekatronik mühendisliği ve AI alanındaki kariyer yolculuğu.",
  alternates: {
    canonical: '/career',
    languages: {
      'tr-TR': '/career',
      'en-US': '/career',
    },
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
    name: 'Mechatronics Engineer & AI Specialist',
    occupationLocation: {
      '@type': 'City',
      name: 'Istanbul',
    },
    skills: [
      'Mechatronics',
      'AI Automation',
      'Python',
      'Next.js',
      'Robotics',
      'RAG',
    ],
    responsibilities: [
      'Developing AI workflows and automation systems',
      'Designing mechatronic components and robotics solutions',
      'Building full-stack web and cloud applications',
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, careerLd]} />
      <CareerTimeline />
    </div>
  );
}

