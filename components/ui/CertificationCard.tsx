'use client';

import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { handleMissingLink } from '@/utils/Toaster';
import { useLanguage } from '@/context/LanguageContext';

interface CertificationCardProps {
  id: number;
  name: string;
  issuer?: string;
  date: string;
  description: { en: string; tr: string } | string;
  CertificationLink: string | null;
}

/**
 * CertificationCard Component
 * Updated for Stage 3 - Clean, wide glassmorphism panels.
 */
export const CertificationCard = ({
  name,
  issuer,
  date,
  description,
  CertificationLink,
}: CertificationCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { language, t } = useLanguage();

  const displayDesc =
    typeof description === 'object' &&
      description !== null &&
      'en' in description
      ? (description as { en: string; tr: string })[language]
      : description;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full group"
    >
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8 rounded-3xl bg-background/30 hover:bg-background/80 dark:bg-card/20 dark:hover:bg-card/40 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

        {/* Left Side: Info */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            {issuer && (
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                {issuer}
              </span>
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
              {date}
            </span>
          </div>

          <h5 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
            {name}
          </h5>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mt-1">
            {displayDesc}
          </p>
        </div>

        {/* Right Side: Action Button */}
        <div className="shrink-0">
          {CertificationLink ? (
            <a
              href={CertificationLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-4 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
              aria-label={t('certifications.see')}
            >
              <ArrowRightCircleIcon className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </a>
          ) : (
            <button
              onClick={() => handleMissingLink('')}
              className="flex items-center justify-center p-4 rounded-full bg-muted text-muted-foreground/30 cursor-not-allowed"
              aria-label={t('certifications.missing')}
              disabled
            >
              <ArrowRightCircleIcon className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
