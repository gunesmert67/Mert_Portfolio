import React from 'react';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';
import { projectsData } from '@/data/Projects';
import Projects from '@/components/main/Projects';

export const metadata: Metadata = {
  title: 'Projeler | Yapay Zeka, Robotik & Web Portfolyosu',
  description:
    "Çevrimdışı Sesli Asistan (RAG), 3D Seyahat Günlüğü, Endüstriyel Veri Paneli, Akıllı Ev IoT ve Robotik Kol projeleri. Mert Güneş'in teknik proje portfolyosu ve açık kaynak kodları.",
  keywords: [
    'Mert Güneş Projeler',
    'Offline Voice Assistant RAG',
    'Local RAG Whisper Qwen',
    '3D Travel Log Three.js',
    'Smart Home IoT Home Assistant',
    'FabArm Robotic Arm',
    'Pulsar Electromobile Teknofest',
    'AI Projects Turkey',
    'Next.js Portfolio Projects',
  ],
  alternates: {
    canonical: '/projects',
    languages: {
      'tr-TR': '/projects',
      'en-US': '/projects',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: `${ContactData.website}/projects`,
    title: 'Projeler | Mert Güneş - Yapay Zeka, Robotik ve Web Portfolyosu',
    description:
      "Yapay zeka, otonom robotik ve modern web geliştirme alanındaki uçtan uca mühendislik projeleri.",
    siteName: 'Mert Güneş Portfolyo',
    images: [
      {
        url: `${ContactData.website}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Mert Güneş - Projeler ve Açık Kaynak Çalışmalar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projeler | Mert Güneş',
    description:
      'Mekatronik, Yapay Zeka ve Yazılım projelerimin detayları ve kaynak kodları.',
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

export default function ProjectsPage() {
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
        name: 'Projeler',
        item: `${ContactData.website}/projects`,
      },
    ],
  };

  const projectsLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mert Güneş - Mühendislik ve Yazılım Projeleri',
    numberOfItems: projectsData.length,
    itemListElement: projectsData.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': project.githubUrl ? 'SoftwareSourceCode' : 'CreativeWork',
        name: project.title.tr,
        headline: project.title.en,
        description: project.description.tr,
        keywords: project.technologyStack.join(', '),
        programmingLanguage: project.technologyStack,
        codeRepository: project.githubUrl || undefined,
        url: project.sourceUrl || `${ContactData.website}/projects`,
        dateCreated: project.startDate,
        dateModified: project.endDate || undefined,
        author: {
          '@type': 'Person',
          name: 'Mert Güneş',
          url: ContactData.website,
        },
      },
    })),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Mert Güneş'in öne çıkan yapay zeka ve mühendislik projeleri nelerdir?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mert Güneş’in öne çıkan projeleri arasında: Çevrimdışı Sesli Asistan (Yerel RAG + Whisper v3 + Qwen), İnteraktif 3D Seyahat Günlüğü (Three.js), Endüstriyel Veri Paneli (Streamlit), Uçtan Uca Akıllı Ev Mimarisi (IoT), FabArm 5-DOF Robot Kol ve Teknofest Pulsar Elektromobil yer almaktadır.',
        },
      },
      {
        '@type': 'Question',
        name: 'Çevrimdışı Sesli Asistan (Local Voice RAG) projesinin temel amacı nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bu proje, kurumsal veya hassas belgelerle sesli etkileşim sağlarken hiçbir veriyi internete aktarmayan, tamamen yerel donanımda çalışan ve saniyenin altında yanıt üreten kapalı devre bir yapay zeka asistanıdır.',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, projectsLd, faqLd]} />
      <Projects />
    </div>
  );
}


