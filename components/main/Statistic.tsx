'use client';

import React from 'react';
import StatisticCard from '../ui/StatisticCard';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedLottieIcon from '../ui/AnimatedLottieIcon';
import projectsIcon from '@/assets/lordicons/projects.json';
import techIcon from '@/assets/lordicons/tech.json';
import experienceIcon from '@/assets/lordicons/experience.json';
import certificationsIcon from '@/assets/lordicons/certifications.json';
import SectionHeader from '../ui/SectionHeader';

/**
 * Statistic component displaying metrics in a responsive Bento Grid pattern.
 */
const Statistic = () => {
  const { t, language } = useLanguage();

  const statisticsData = [
    {
      id: 1,
      Icon: (
        <AnimatedLottieIcon
          animationData={projectsIcon}
          size={32}
          speed={0.5}
          className="text-primary drop-shadow-sm lottie-icon"
        />
      ),
      number: 9,
      description: t('statistics.projectsCompleted'),
      suffix: '+',
    },
    {
      id: 2,
      Icon: (
        <AnimatedLottieIcon
          animationData={techIcon}
          size={32}
          speed={0.5}
          className="text-primary drop-shadow-sm lottie-icon"
        />
      ),
      number: 15,
      description: t('statistics.languagesTech'),
      suffix: '+',
    },
    {
      id: 3,
      Icon: (
        <AnimatedLottieIcon
          animationData={experienceIcon}
          size={32}
          speed={0.5}
          className="text-primary drop-shadow-sm lottie-icon"
        />
      ),
      number: 3,
      description: t('statistics.experience'),
      suffix: `+ ${t('statistics.years')}`,
    },
    {
      id: 4,
      Icon: (
        <AnimatedLottieIcon
          animationData={certificationsIcon}
          size={32}
          speed={0.5}
          className="text-primary drop-shadow-sm lottie-icon"
        />
      ),
      number: 5,
      description: t('statistics.certifications'),
    },
  ];

  return (
    <section className="flex flex-col items-center pb-12 md:pb-20 pt-10 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full relative z-10 overflow-hidden gap-12">
      <SectionHeader title={language === 'tr' ? 'Genel Bakış' : 'Overview'} />
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statisticsData.map(({ id, Icon, number, suffix, description }) => {
          let linkHref = '/';
          if (id === 1) linkHref = '/projects';
          if (id === 2) linkHref = '/skills';
          if (id === 3) linkHref = '/career';
          if (id === 4) linkHref = '/certifications';

          return (
            <StatisticCard
              key={id}
              id={id}
              Icon={Icon}
              number={number}
              suffix={suffix}
              description={description}
              href={linkHref}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Statistic;
