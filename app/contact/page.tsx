import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const ContactMe = dynamic(() => import('@/components/ui/ContactMe'));

export const metadata: Metadata = {
  title: '\u0130leti\u015fim',
  description: 'Mert G\u00fcne\u015f ile ileti\u015fime ge\u00e7in. Proje teklifleri, i\u015f birlikleri veya teknik dan\u0131\u015fmanl\u0131k i\u00e7in ileti\u015fim kanallar\u0131m\u0131 ke\u015ffedin.',
  alternates: {
    canonical: '/contact',
    languages: {
      'tr-TR': '/contact',
      'en-US': '/contact',
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <ContactMe />
    </div>
  );
}
