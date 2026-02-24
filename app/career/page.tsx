import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const CareerTimeline = dynamic(() => import('@/components/main/CareerTimeline'));

export const metadata: Metadata = {
  title: 'Kariyer',
  description: 'Mert Güneş\'in profesyonel deneyimleri, eğitim geçmişi ve iş dünyasındaki yolculuğu. Mekatronik ve AI dünyasındaki kariyer özeti.',
  alternates: {
    canonical: '/career',
    languages: {
      'tr-TR': '/career',
      'en-US': '/career',
    },
  },
};

export default function CareerPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <CareerTimeline />
    </div>
  );
}
