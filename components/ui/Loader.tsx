'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loader component displaying multiple overlapping rotating circles and an icon as a loading state.
 */
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="relative w-24 h-24">
          <motion.div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
          <motion.div
            className="absolute inset-0 border-t-2 border-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary animate-pulse">
            Precision & Clarity
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
            Initialising System
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
