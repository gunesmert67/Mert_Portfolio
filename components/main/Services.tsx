'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedLottieIcon from '../ui/AnimatedLottieIcon';
import aiIcon from '@/assets/lordicons/ai.json';
import automationIcon from '@/assets/lordicons/automation.json';
import visualIcon from '@/assets/lordicons/visual.json';
import iotIcon from '@/assets/lordicons/iot.json';
import webIcon from '@/assets/lordicons/web.json';
import dataIcon from '@/assets/lordicons/data.json';
import SectionHeader from '../ui/SectionHeader';
import ServiceIconItem from '../ui/ServiceIconItem';
import { useLanguage } from '@/context/LanguageContext';
import { ServicesApps } from '@/data/Services';

const iconMap: Record<number, React.ReactNode> = {
  1: (
    <AnimatedLottieIcon
      animationData={aiIcon}
      size={36}
      className="text-primary drop-shadow-sm lottie-icon"
      speed={0.5}
    />
  ),
  2: (
    <AnimatedLottieIcon
      animationData={automationIcon}
      size={36}
      className="text-primary drop-shadow-sm lottie-icon"
      speed={0.5}
    />
  ),
  3: (
    <AnimatedLottieIcon
      animationData={visualIcon}
      size={36}
      className="text-primary drop-shadow-sm lottie-icon"
      speed={0.5}
    />
  ),
  4: (
    <AnimatedLottieIcon
      animationData={iotIcon}
      size={36}
      className="text-primary drop-shadow-sm lottie-icon"
      speed={1}
    />
  ), // Home icons usually better faster
  5: (
    <AnimatedLottieIcon
      animationData={webIcon}
      size={36}
      className="text-primary drop-shadow-sm lottie-icon"
      speed={0.5}
    />
  ),
  6: (
    <AnimatedLottieIcon
      animationData={dataIcon}
      size={36}
      className="text-primary drop-shadow-sm lottie-icon"
      speed={0.5}
    />
  ),
};

const Services = () => {
  const totalCount = ServicesApps.length;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t } = useLanguage();

  const cards = [1, 2, 3, 4, 5, 6].map((i) => ({
    id: i,
    name: t(`services.service${i}Name`),
    description: t(`services.service${i}Desc`),
    icon: iconMap[i],
  }));

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      className="flex flex-col items-center pb-12 md:pb-20 pt-10 space-y-12 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full relative z-10 overflow-hidden"
      id="services"
    >
      <SectionHeader title={t('services.title')} useH1={true} />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        {/* Left: 6 Neon Glow Cards in 2x3 grid */}
        <div
          ref={ref}
          className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="neon-card-wrapper group"
            >
              <div className="neon-card relative flex flex-col gap-3 p-5 md:p-6 rounded-2xl bg-background/60 dark:bg-card/30 backdrop-blur-md border border-transparent overflow-hidden h-full">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-primary/5 text-primary w-fit group-hover:bg-primary/15 transition-colors duration-500">
                  {card.icon}
                </div>

                {/* Title */}
                <h2 className="text-lg font-black tracking-tight text-foreground">
                  {card.name}
                </h2>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Spinning Sphere */}
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-[18rem] md:max-w-[20rem] aspect-square flex items-center justify-center">
            {/* Outer ring - spins */}
            <div className="absolute inset-0 rounded-full border border-border animate-spin-slow" />

            {/* Middle ring */}
            <div className="flex w-[80%] aspect-square items-center justify-center rounded-full border border-border">
              {/* Inner core */}
              <div className="w-[40%] aspect-square p-2 rounded-full border border-border flex items-center justify-center bg-card shadow-sm">
                <Image
                  src="/logo/python.svg"
                  width={50}
                  height={50}
                  alt="Core tech"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Orbiting icons */}
            <ul className="absolute inset-0 w-full h-full animate-spin-reverse">
              {ServicesApps.map((app, index) => (
                <ServiceIconItem
                  key={index}
                  id={app.id}
                  title={app.title}
                  icon={app.icon}
                  width={app.width}
                  height={app.height}
                  totalCount={totalCount}
                  invertInDark={app.invertInDark}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
