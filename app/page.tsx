import React from 'react';
import Hero from '@/components/main/Hero';
import Statistic from '@/components/main/Statistic';
import type { Metadata } from 'next';

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

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <Hero />
      <Statistic />
    </div>
  );
}
