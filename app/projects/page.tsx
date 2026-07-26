import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/ui/Loader';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { ContactData } from '@/data/Contact';
import { projectsData } from '@/data/Projects';

import Projects from '@/components/main/Projects';

export const metadata: Metadata = {
  title: 'Projeler',
  description:
    "Yapay zeka, robotik ve yazılım geliştirme alanındaki projelerim. Mert Güneş'in inovatif çözümlerini ve teknik portfolyosunu inceleyin.",
  alternates: {
    canonical: '/projects',
    languages: {
      'tr-TR': '/projects',
      'en-US': '/projects',
    },
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
    name: 'Mert Güneş - Projeler',
    numberOfItems: projectsData.length,
    itemListElement: projectsData.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.title.tr,
        description: project.description.tr,
        programmingLanguage: project.technologyStack,
        codeRepository: project.githubUrl || undefined,
        author: {
          '@type': 'Person',
          name: 'Mert Güneş',
        },
      },
    })),
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <JsonLd data={[breadcrumbLd, projectsLd]} />
      <Projects />
    </div>
  );
}

