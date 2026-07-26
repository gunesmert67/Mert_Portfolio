import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const CareerTimeline = dynamic(
  () => import('@/components/main/CareerTimeline'),
);

export const metadata: Metadata = {
  title: 'Kariyer',
  description:
    "Mert G\u00fcne\u015f'in profesyonel \u00f6zge\u00e7mi\u015fi, i\u015f deneyimleri ve akademik ge\u00e7mi\u015fi. Mekatronik m\u00fchendisli\u011fi ve AI alan\u0131ndaki kariyer yolculu\u011fu.",
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
