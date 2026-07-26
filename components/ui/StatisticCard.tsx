'use client';

import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from 'next/link';

interface StatisticCardProps {
  id: number;
  Icon: ReactElement;
  number: number;
  suffix?: string;
  description: string;
  href: string;
}

/**
 * Statistic Card with 3D tilt hover effect and staggered scroll reveal.
 */
const StatisticCard = ({
  id,
  Icon,
  number,
  suffix,
  description,
  href,
}: StatisticCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Staggered reveal variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: id * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="neon-card-wrapper group h-full"
    >
      <Link href={href} className="block h-full">
        <div className="neon-card relative flex flex-col justify-between h-full p-5 md:p-6 rounded-2xl bg-background/60 dark:bg-card/30 backdrop-blur-md border border-transparent overflow-hidden transition-all duration-500 shadow-sm transition-transform hover:scale-[1.02]">
          {/* Top part: Icon */}
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary/15 transition-colors duration-500">
              {React.cloneElement(Icon, {
                size: 36,
                className: 'text-primary drop-shadow-sm lottie-icon',
              })}
            </div>

            {/* Small arrow like in services cards but subtle */}
            <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary text-lg transform -rotate-45">
                →
              </span>
            </div>
          </div>

          {/* Number + Description */}
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 block">
              {inView ? (
                <span className="flex items-baseline gap-1">
                  <CountUp
                    end={number}
                    duration={3}
                    useEasing={true}
                    separator=","
                  />
                  <span className="text-2xl md:text-3xl text-primary/80">
                    {suffix}
                  </span>
                </span>
              ) : (
                '0'
              )}
            </span>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </p>
          </div>

          {/* Shimmer line on hover (Neon Effect) */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default StatisticCard;
