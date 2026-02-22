'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechnologyChip } from './TechnologyChip';
import { useLanguage } from '@/context/LanguageContext';

interface Milestone {
  id: number;
  date: { en: string; tr: string } | string;
  title: { en: string; tr: string } | string;
  img: string;
  organization: { en: string; tr: string } | string;
  location: { en: string; tr: string } | string;
  description?: { en: string[]; tr: string[] } | string[];
  technologies?: string[];
  gpa?: number;
}

interface MilestoneProps {
  milestones: Milestone[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * MilestoneItem Component
 * Updated for Stage 4: "Layered Bento Timeline".
 * Displays experiences in large, glassmorphic bento panels without a vertical line.
 */
const MilestoneItem: React.FC<MilestoneProps> = ({ milestones }) => {
  const { language } = useLanguage();

  const getLocalizedContent = (
    content: | { en: string | string[]; tr: string | string[] } | string | string[] | undefined,
  ) => {
    if (typeof content === 'object' && content !== null && 'en' in content && 'tr' in content) {
      return (content as any)[language] || (content as any)['en'];
    }
    return content;
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-10 px-4 max-w-4xl mx-auto">
      {milestones.map(({ id, date, title, img, organization, location, description, technologies, gpa }, index) => {
        const displayTitle = getLocalizedContent(title);
        const displayOrg = getLocalizedContent(organization);
        const displayLoc = getLocalizedContent(location);
        const displayDesc = getLocalizedContent(description);
        const displayDate = getLocalizedContent(date);

        // Optional badge text for Education or Work based on some logic (e.g., if GPA exists, it's education)
        const typeBadge = gpa ? (language === 'tr' ? 'Eğitim' : 'Education') : (language === 'tr' ? 'İş' : 'Work');

        return (
          <motion.article
            key={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-8 rounded-[2rem] bg-background/30 hover:bg-background/80 dark:bg-card/20 dark:hover:bg-card/40 backdrop-blur-md border border-primary/10 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          >
            {/* Left Side: Huge Logo Frame */}
            <div className="shrink-0 flex items-start justify-center">
              <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-2xl md:rounded-3xl bg-card border border-border/50 shadow-sm group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 p-2 md:p-4">
                <Image
                  className="object-contain"
                  src={img}
                  alt={`${displayTitle} Logo`}
                  fill
                  sizes="(max-width: 768px) 80px, 128px"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full mb-4 gap-2">
                <div className="flex flex-col">
                  <span className="w-fit text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 border border-primary/20">
                    {typeBadge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-500">
                    {displayTitle}
                  </h3>
                </div>
                <div className="flex flex-col md:items-end mt-1 md:mt-0 opacity-80">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                    {displayDate}
                  </span>
                </div>
              </div>

              <p className="text-base md:text-lg font-medium text-muted-foreground/90 mb-4">
                {displayOrg} <span className="text-primary/50 mx-2">&bull;</span> {displayLoc}
              </p>

              {gpa && (
                <div className="inline-flex items-center gap-2 mb-6 bg-secondary/30 px-4 py-2 rounded-xl w-fit">
                  <span className="text-sm font-bold text-foreground">GPA:</span>
                  <span className="text-sm font-black text-primary">{gpa.toFixed(2)} / 4</span>
                </div>
              )}

              <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                {Array.isArray(displayDesc) && displayDesc.map((point: string, idx: number) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-primary/60 mt-1 shrink-0">&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {technologies?.map((tech, idx) => (
                  <TechnologyChip key={idx} tech={tech} size="small" />
                ))}
              </div>
            </div>

            {/* Subtle Glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.article>
        );
      })}
    </div>
  );
};

export default MilestoneItem;
