import React from 'react';
import Hero from '@/components/main/Hero';
import Statistic from '@/components/main/Statistic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description: 'Mert Güneş hakkında daha fazla bilgi edinin. Mekatronik mühendisi ve yapay zeka otomasyon geliştiricisi olarak hikayem ve vizyonum.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <Hero />
      <Statistic />
    </div>
  );
}
