'use client';

import Image from 'next/image';
import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
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
  youtubeUrl: string | null;
  startDate: string;
  endDate: string | null;
  technologyStack: string[];
  features?: { en: string[]; tr: string[] } | string[];
  challenges?: { en: string[]; tr: string[] } | string[];
  accomplishments?: { en: string[]; tr: string[] } | string[];
}

/**
 * ProjectCard Component
 * Updated for minimal 2-column grid layout.
 * Each project takes up a grid cell with simple hover animations.
 */
const ProjectCard = ({
  id,
  src,
  title,
  description,
  githubUrl,
  sourceUrl,
  youtubeUrl,
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
    return date.toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', { month: 'short', year: 'numeric' });
  };

  const getLocalizedContent = (
    content: | { en: string | string[]; tr: string | string[] } | string | string[] | undefined,
  ) => {
    if (typeof content === 'object' && content !== null && 'en' in content && 'tr' in content) {
      return (content as any)[language] || (content as any)['en'];
    }
    return content;
  };

  const displayTitle = (getLocalizedContent(title) ?? '') as string;
  const displayDesc = (getLocalizedContent(description) ?? '') as string;
  const displayFeatures = (getLocalizedContent(features) ?? []) as string[];
  const displayChallenges = (getLocalizedContent(challenges) ?? []) as string[];
  const displayAccomplishments = (getLocalizedContent(accomplishments) ?? []) as string[];

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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

          {/* View Details Hint */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <span className="px-6 py-2.5 bg-background/90 backdrop-blur-md rounded-full font-bold uppercase tracking-widest text-[11px] text-foreground shadow-xl border border-border/50 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              {t('projects.details')}
            </span>
          </div>

          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60 opacity-60 backdrop-blur-sm shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60 opacity-60 backdrop-blur-sm shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 opacity-60 backdrop-blur-sm shadow-sm" />
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col gap-2 px-1">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase opacity-80">
                {formatMonthYear(startDate)}
                {startDate !== endDate && endDate !== null ? ` - ${formatMonthYear(endDate)}` : ''}
              </span>
              {endDate === null && (
                <span className="shrink-0 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[8px] uppercase font-bold py-0.5 px-1.5 rounded-md border border-amber-500/20">
                  {t('projects.inProgress')}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                {displayTitle}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {githubUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(githubUrl, '_blank', 'noopener noreferrer');
                    }}
                    aria-label="GitHub"
                    className="p-1.5 text-muted-foreground/60 hover:text-foreground transition-colors"
                  >
                    <FaGithub size={18} />
                  </button>
                )}
                {sourceUrl && (
                  <LiveDemoButton
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      window.open(sourceUrl as string, '_blank', 'noopener noreferrer');
                    }}
                  />
                )}
                {youtubeUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(youtubeUrl, '_blank', 'noopener noreferrer');
                    }}
                    aria-label="YouTube"
                    className="p-1.5 text-muted-foreground/60 hover:text-red-500 transition-colors"
                  >
                    <FaYoutube size={18} />
                  </button>
                )}
              </div>
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
