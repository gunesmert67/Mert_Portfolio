import React from 'react';
import Hero from '@/components/main/Hero';
import Statistic from '@/components/main/Statistic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Mert Güneş - Mechatronics Engineer & AI Automation Developer. Explore my portfolio of projects, skills, and experience in AI workflows, automation, and robotics.',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <Hero />
      <Statistic />
    </div>
  );
}
