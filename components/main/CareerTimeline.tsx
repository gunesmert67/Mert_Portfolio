'use client';

import React from 'react';
import { ExperienceData } from '@/data/Experience';
import { ScaleIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { CompactMilestoneItem } from '../ui/CompactMilestoneItem';
import { useLanguage } from '@/context/LanguageContext';
import { MilestoneTypes } from '@/types';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * CareerTimeline component - "Split Dual Track" Version
 * Displays professional experience and education in two separate parallel columns.
 */
const CareerTimeline = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Split data
  const workExperience = ExperienceData.filter(m => m.type === MilestoneTypes.Work);
  // Optional: keep education chronological or reverse chronological depending on preference
  const educationExperience = ExperienceData.filter(m => m.type === MilestoneTypes.Education);

  return (
    <section id="career-timeline" className="flex flex-col items-center pb-12 md:pb-20 pt-10 space-y-12 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full relative z-10 overflow-hidden text-center">
      <SectionHeader
        title={t('career.title')}
      />

      <div ref={ref} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">

        {/* Left Column: Work Experience */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8 pl-4"
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-foreground">
              {t('nav.career')}
            </h2>
          </motion.div>

          {/* Timeline Track */}
          <div className="relative border-l-2 border-cyan-500/30 ml-[23px] md:ml-[27px]">
            {/* Glowing top point */}
            <div className="absolute -top-1 -left-[5px] w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]" />

            {workExperience.map((milestone, index) => (
              <CompactMilestoneItem
                key={milestone.id}
                milestone={milestone}
                index={index}
                type="work"
              />
            ))}
          </div>
        </div>


        {/* Desktop Divider - Optional visual separation */}
        <div className="hidden lg:flex w-px bg-border/40 my-16 mx-4" />


        {/* Right Column: Education */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8 pl-4"
          >
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-foreground">
              {t('statistics.education') || 'Akademik Geçmiş'}
              {/* Fallback to static if translation missing, though ideally add to translation.ts */}
            </h2>
          </motion.div>

          {/* Timeline Track */}
          <div className="relative border-l-2 border-purple-500/30 ml-[23px] md:ml-[27px]">
            {/* Glowing top point */}
            <div className="absolute -top-1 -left-[5px] w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_purple]" />

            {educationExperience.map((milestone, index) => (
              <CompactMilestoneItem
                key={milestone.id}
                milestone={milestone}
                index={index}
                type="education"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerTimeline;
