'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface SkillItemProps {
  id: number;
  src: string;
  width: number;
  height: number;
  skillName: string;
  skillLevel: number;
  link?: string;
  invertInDark?: boolean;
}

/**
 * SkillItem Component
 * Updated for Bento Grid / Glassmorphism layout. Huge, clean logos with soft hover.
 */
const SkillItem = ({ id, src, skillName, invertInDark, link }: SkillItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: id * 0.05, // Faster stagger since there are many
      },
    },
  };

  const Content = (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-background/30 hover:bg-background/80 dark:bg-card/20 dark:hover:bg-card/40 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full w-full"
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-2 md:mb-3">
        <Image
          src={src}
          fill
          sizes="(max-width: 768px) 56px, (max-width: 1200px) 80px, 96px"
          alt={skillName}
          className={`object-contain transition-all duration-500 group-hover:drop-shadow-lg ${invertInDark ? ' dark:invert dark:brightness-200' : ''
            }`}
        />
      </div>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 group-hover:text-foreground transition-colors duration-300 text-center line-clamp-1">
        {skillName}
      </span>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        {Content}
      </a>
    );
  }

  return Content;
};

export default SkillItem;

