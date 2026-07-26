import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/ui/Loader';
import { Metadata } from 'next';

const Projects = dynamic(() => import('@/components/main/Projects'), {
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title: 'Projeler',
  description:
    "Yapay zeka, robotik ve yaz\u0131l\u0131m geli\u015ftirme alan\u0131ndaki projelerim. Mert G\u00fcne\u015f'in inovatif \u00e7\u00f6z\u00fcmlerini ve teknik portfolyosunu inceleyin.",
  alternates: {
    canonical: '/projects',
    languages: {
      'tr-TR': '/projects',
      'en-US': '/projects',
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <Projects />
    </div>
  );
}
