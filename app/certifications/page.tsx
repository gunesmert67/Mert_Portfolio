import React from 'react';
import { Certification } from '@/components/main/Certification';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sertifikalar',
    description: 'IBM, McKinsey, Udemy ve di\u011fer global kurumlardan al\u0131nan profesyonel sertifikalar. Mert G\u00fcne\u015f\'in e\u011fitim ve uzmanl\u0131k belgeleri.',
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
