import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Skills = dynamic(() => import('@/components/main/Skills'), {
  loading: () => (
    <div className="h-[60vh] w-full flex items-center justify-center">
      Loading Skills...
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Yetenekler',
  description:
    "Python, Next.js, AI Workflow, PLC programlama ve daha fazlas\u0131. Mert G\u00fcne\u015f'in teknik yetkinlikleri ve kulland\u0131\u011f\u0131 ara\u00e7lar.",
  alternates: {
    canonical: '/skills',
    languages: {
      'tr-TR': '/skills',
      'en-US': '/skills',
    },
  },
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <Skills />
    </div>
  );
}
