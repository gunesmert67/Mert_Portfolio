import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  Icon?: ReactElement;
  tagline?: string;
  alignLeft?: boolean;
  className?: string;
  useH1?: boolean;
}

/**
 * SectionHeader component used across the application for consistent section titling.
 */
const SectionHeader = ({
  title,
  subtitle,
  Icon,
  tagline,
  alignLeft = false,
  className = '',
  useH1 = false,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`w-full flex flex-col items-center text-center space-y-4 ${className}`}
    >
      {tagline && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-1 px-4 border border-border/40 bg-background/40 backdrop-blur-md rounded-full shadow-sm w-fit"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {tagline}
          </span>
        </motion.div>
      )}

      <div className="space-y-2">
        {useH1 ? (
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase leading-[1.1]">
            {title}
          </h1>
        ) : (
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase leading-[1.1]">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-base md:text-lg text-muted-foreground font-medium max-w-[600px] mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;
