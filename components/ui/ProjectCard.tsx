'use client';

import Image from 'next/image';
import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import Modal from './Modal';
import LiveDemoButton from './LiveDemoButton';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  id: number;
  src: string;
  title: { en: string; tr: string } | string;
  description: { en: string; tr: string } | string;
  githubUrl: string | null;
  sourceUrl: string | null;
  startDate: string;
  endDate: string | null;
  technologyStack: string[];
  features?: { en: string[]; tr: string[] } | string[];
  challenges?: { en: string[]; tr: string[] } | string[];
  accomplishments?: { en: string[]; tr: string[] } | string[];
}

/**
 * ProjectCard Component
 * minimalist 2-column grid layout with glassmorphism interactions.
 */
const ProjectCard = ({
  id,
  src,
  title,
  description,
  githubUrl,
  sourceUrl,
  startDate,
  endDate,
  technologyStack,
  features,
  challenges,
  accomplishments,
}: ProjectCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const formatMonthYear = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const getLocalizedContent = (
    content:
      | { en: string | string[]; tr: string | string[] }
      | string
      | string[]
      | undefined,
  ) => {
    if (
      typeof content === 'object' &&
      content !== null &&
      'en' in content &&
      'tr' in content
    ) {
      return (content as any)[language] || (content as any)['en'];
    }
    return content;
  };

  const displayTitle = (getLocalizedContent(title) ?? '') as string;
  const displayDesc = (getLocalizedContent(description) ?? '') as string;
  const displayFeatures = (getLocalizedContent(features) ?? []) as string[];
  const displayChallenges = (getLocalizedContent(challenges) ?? []) as string[];
  const displayAccomplishments = (getLocalizedContent(accomplishments) ??
    []) as string[];

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full flex flex-col gap-5 group cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Visual / Image */}
        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-2xl border border-border/20 shadow-sm bg-card group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
          <Image
            src={src}
            alt={`${displayTitle} - ${technologyStack.slice(0, 3).join(', ')} Project by Mert Güneş`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Date Badge - Bottom Left */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
            <div className="px-3 py-1.5 bg-background/60 backdrop-blur-md rounded-lg border border-border/40 shadow-sm flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[10px] font-bold tracking-wider text-foreground uppercase opacity-90">
                {formatMonthYear(startDate)}
                {startDate !== endDate && endDate !== null
                  ? ` - ${formatMonthYear(endDate)}`
                  : ''}
              </span>
              {endDate === null && (
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                </span>
              )}
            </div>
            {endDate === null && (
              <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[8px] uppercase font-bold py-1 px-2 rounded-lg border border-amber-500/20 backdrop-blur-md">
                {t('projects.inProgress')}
              </span>
            )}
          </div>

          {/* Action Button - Bottom Right */}
          <div className="absolute bottom-4 right-4 z-20">
            {sourceUrl ? (
              <LiveDemoButton
                text="  DEMO      "
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  window.open(
                    sourceUrl as string,
                    '_blank',
                    'noopener noreferrer',
                  );
                }}
              />
            ) : githubUrl ? (
              <LiveDemoButton
                text="  GITHUB      "
                icon={<FaGithub size={20} />}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  window.open(githubUrl, '_blank', 'noopener noreferrer');
                }}
              />
            ) : null}
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col gap-2 px-1">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                {displayTitle}
              </h2>
            </div>
          </div>

          <p className="text-sm md:text-base text-muted-foreground line-clamp-2 font-medium leading-relaxed">
            {displayDesc}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {technologyStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/30"
              >
                {tech}
              </span>
            ))}
            {technologyStack.length > 4 && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-muted-foreground border border-transparent">
                +{technologyStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        id={id}
        startDate={startDate}
        endDate={endDate}
        technologyStack={technologyStack}
        description={displayDesc}
        title={displayTitle}
        imageSrc={src}
        features={displayFeatures}
        challenges={displayChallenges}
        accomplishments={displayAccomplishments}
      />
    </>
  );
};

export default memo(ProjectCard);
