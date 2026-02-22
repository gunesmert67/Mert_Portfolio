'use client';

import { cn } from '@/lib/utils';
import React, { useLayoutEffect, useRef } from 'react';

interface TechnologyChipProps {
  tech: string;
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
  textColor?: string;
  ariaLabel?: string;
  className?: string;
}

/**
 * TechnologyChip component displays a stylized badge for a technology or skill.
 */
export const TechnologyChip: React.FC<TechnologyChipProps> = ({
  tech,
  size = 'medium',
  bgColor,
  textColor = 'text-muted-foreground',
  ariaLabel,
  className,
}) => {
  const sizeClasses = {
    small: 'px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
    medium: 'px-3 py-1 text-xs font-bold uppercase tracking-wider',
    large: 'px-4 py-2 text-sm font-bold uppercase tracking-wider',
  };

  return (
    <div
      className={cn(
        `inline-flex items-center justify-center rounded border border-border ${sizeClasses[size]} ${textColor}`,
        bgColor ? `bg-[var(--chip-bg)]` : `bg-muted`,
        className,
      )}
      {...(bgColor
        ? { style: { '--chip-bg': bgColor } as React.CSSProperties }
        : {})}
      aria-label={ariaLabel || tech}
    >
      {tech}
    </div>
  );
};
