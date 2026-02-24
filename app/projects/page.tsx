import React from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/ui/Loader';
import { Metadata } from 'next';

const Projects = dynamic(() => import('@/components/main/Projects'), {
  loading: () => <Loader />,
});

export const metadata: Metadata = {
  description: 'Mert G\u00fcne\u015f - Mechatronics Engineer & AI Automation Developer. Explore my portfolio of projects, skills, and experience in AI workflows, automation, and robotics.',
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/',
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
