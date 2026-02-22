'use client';

import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * TextGenerateEffect component animates words appearing one by one.
 */
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    // Reset opacity to 0 before starting new animation
    animate('span', { opacity: 0 }, { duration: 0 });

    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: (i) => i * 0.05,
      },
    );
  }, [animate, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('', className)}>
      <div className="mt-2">
        <div className="sm:text-lg text-muted-foreground dark:text-gray-400 italic sm:my-4 my-2 max-w-[600px] text-center md:text-left text-sm">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
