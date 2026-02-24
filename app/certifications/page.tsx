import React from 'react';
import { Certification } from '@/components/main/Certification';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sertifikalar',
    description: 'IBM, McKinsey, Udemy ve diğer global kurumlardan alınan profesyonel sertifikalar. Mert Güneş\'in eğitim ve uzmanlık belgeleri.',
    alternates: {
        canonical: '/certifications',
        languages: {
            'tr-TR': '/certifications',
            'en-US': '/certifications',
        },
    },
};

export default function CertificationsPage() {
    return (
        <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
            <Certification />
        </div>
    );
}
