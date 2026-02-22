'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceIconItemProps {
  id: number;
  title: string;
  icon: string;
  width: number;
  height: number;
  totalCount: number;
  invertInDark?: boolean;
}

/**
 * ServiceIconItem component represents a rotating skill icon in the services section.
 */
const ServiceIconItem = ({
  id,
  title,
  icon,
  width,
  height,
  totalCount,
  invertInDark,
}: ServiceIconItemProps) => {
  const liRef = useRef<HTMLLIElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const rotationDeg = 360 / totalCount;

  useLayoutEffect(() => {
    if (liRef.current) {
      liRef.current.style.setProperty('--rotation', `${id * rotationDeg}deg`);
    }
    if (divRef.current) {
      divRef.current.style.setProperty('--rotation', `${id * rotationDeg}deg`);
    }
  }, [id, rotationDeg]);

  return (
    <li
      key={id}
      ref={liRef}
      className="absolute top-0 left-1/2 h-1/2 -ml-[2rem] origin-bottom rotate-[var(--rotation)]"
    >
      <motion.div
        ref={divRef}
        whileHover={{ scale: 1.2, zIndex: 50 }}
        className="relative -top-[2rem] flex w-[4rem] h-[4rem] bg-card/80 backdrop-blur-md border border-border rounded-2xl -rotate-[var(--rotation)] shadow-sm cursor-pointer group transition-all duration-300 hover:border-primary/50 animate-spin-slow"
      >
        <Image
          className={`m-auto w-[65%] h-[65%] object-contain transition-transform duration-300 group-hover:scale-110${invertInDark ? ' dark:invert dark:brightness-200' : ''}`}
          width={width}
          height={height}
          alt={title}
          src={icon}
        />
      </motion.div>
    </li>
  );
};

export default ServiceIconItem;
