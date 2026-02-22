import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const ContactMe = dynamic(() => import('@/components/ui/ContactMe'));

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Mert Güneş ile iletişime geçin. Proje talepleri, iş birliği veya teknik sorularınız için mesajınızı iletebilirsiniz.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
      <ContactMe />
    </div>
  );
}
