'use client';

import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from 'react-intersection-observer';
import SkillsGallery from '../ui/SkillsGallery';
import { SkillsData } from '@/data/Skills';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Skills component displays an interactive gallery of technical proficiencies.
 */
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col items-center pb-12 md:pb-20 pt-10 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full relative z-10 overflow-hidden"
    >
      <SectionHeader
        title={t('skills.title')}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10 md:gap-12 mt-4">
        {SkillsData.map((category, index) => (
          <div key={index} className="flex flex-col gap-8 md:gap-10 relative w-full">
            <h3 className="text-xl md:text-2xl font-bold text-center text-foreground uppercase tracking-[0.2em] opacity-80 decoration-primary/30 underline decoration-2 underline-offset-8">
              {t(category.titleKey)}
            </h3>
            <SkillsGallery skillsData={category.skills} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
