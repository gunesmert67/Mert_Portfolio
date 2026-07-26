import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Services = dynamic(() => import('@/components/main/Services'));

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'Yapay zeka otomasyonlar\u0131, mekatronik çöz\u00fcm tasarım\u0131 ve teknik dan\u0131\u015fmanl\u0131k. Mert G\u00fcne\u015f tarafından sunulan profesyonel hizmetler.',
  alternates: {
    canonical: '/services',
    languages: {
      'tr-TR': '/services',
      'en-US': '/services',
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <Services />
    </div>
  );
}
