'use client';

import Image from 'next/image';
import React, { useState, useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import Modal from './Modal';
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
 * Updated for "Monolithic Scrolling" (Concept 2).
 * Each project takes up full screen height (or very large space) with parallax effects.
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

  // Scroll animations for smooth parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax the image slower than the container
  const yImage = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  // Fade and slide the text container
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

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
      <div
        ref={ref}
        className="w-full min-h-[60vh] md:min-h-[70vh] py-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 max-w-[1100px] mx-auto border-b border-border/20 last:border-0 relative"
      >
        {/* Visual / Image Side */}
        <div className="w-full md:w-1/2 h-[35vh] md:h-[50vh] relative overflow-hidden rounded-3xl group cursor-pointer border border-border/30 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-card"
          onClick={() => setModalOpen(true)}
        >
          <motion.div style={{ y: yImage }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
            <Image
              src={src}
              alt={`Project visual for ${displayTitle}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
          </motion.div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

          {/* View Details Hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="px-6 py-3 bg-background/80 backdrop-blur-md rounded-full font-bold uppercase tracking-widest text-sm text-foreground shadow-xl border border-border/50">
              {t('projects.details')}
            </span>
          </div>

          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60 opacity-60 backdrop-blur-sm shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-amber-500/60 opacity-60 backdrop-blur-sm shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/60 opacity-60 backdrop-blur-sm shadow-sm" />
          </div>
        </div>

        {/* Content Side */}
        <motion.div
          style={{ opacity: opacityText, y: yText }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            {endDate === null ? (
              <span className="bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] uppercase font-bold py-1.5 px-3 rounded-md border border-amber-500/20">
                {t('projects.inProgress')}
              </span>
            ) : (
              <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold py-1.5 px-3 rounded-md border border-primary/20">
                {startDate.split('-')[0]}
              </span>
            )}
            <div className="h-px bg-border flex-grow" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1]">
            {displayTitle}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {displayDesc}
          </p>

          <div className="flex flex-wrap gap-2 my-2">
            {technologyStack.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground border border-border/50 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4">
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-foreground text-background hover:bg-primary hover:text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md group border border-transparent hover:border-primary/50 flex items-center gap-2"
              >
                {t('projects.liveDemo')} <FaExternalLinkAlt size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-secondary rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}
            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-3 bg-secondary rounded-full text-foreground hover:text-red-500 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

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
