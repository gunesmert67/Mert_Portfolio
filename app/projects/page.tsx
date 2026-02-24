import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/ui/Loader';
import { Metadata } from 'next';

const Projects = dynamic(() => import('@/components/main/Projects'), {
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'AI RAG sistemleri, otomasyon araçları ve mühendislik projeleri. Mert Güneş tarafından geliştirilen teknik projelerin detaylı incelemesi.',
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
