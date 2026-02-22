import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const Services = dynamic(() => import('@/components/main/Services'));

export const metadata: Metadata = {
    title: 'Hizmetler',
    description: 'Yapay zeka otomasyonu, veri analitiği ve teknik mühendislik çözümleri. İş süreçlerinizi dijitalleştiren profesyonel hizmetlerimi keşfedin.',
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-8 md:gap-16 pt-24 pb-16">
            <Services />
        </div>
    );
}
