'use client';

import React, { memo } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '@/data/Projects';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Projects component (Concept 2: Monolithic Scrolling)
 * Displays projects sequentially in huge, screen-filling sections.
 */
const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      className="flex flex-col items-center pb-12 md:pb-20 pt-10 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full gap-12 relative z-10 overflow-hidden"
      id="projects"
      aria-labelledby="projects-section-header"
    >
      <SectionHeader
        title={t('projects.title')}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
