import { Variants } from 'framer-motion';

/**
 * Animation variants for sliding in from the left
 */
export function slideInFromLeft(delay: number): Variants {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
        delay,
      },
    },
  };
}

/**
 * Animation variants for sliding in from the right
 */
export function slideInFromRight(delay: number): Variants {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
        delay,
      },
    },
  };
}

/**
 * Animation variants for sliding in from the top
 */
export function slideInFromTop(delay: number): Variants {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
        delay,
      },
    },
  };
}

/**
 * Versatile animation variant for sliding with custom direction
 */
export function slideInWithDelay(
  delay: number,
  direction: 'left' | 'right' = 'left',
): Variants {
  return {
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
        delay,
      },
    },
  };
}
