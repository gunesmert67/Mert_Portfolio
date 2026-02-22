import React from 'react';
import Image from 'next/image';
import { slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceData {
  id: number;
  name: string;
  description: string;
  icon: string;
  invertInDark?: boolean;
}

/**
 * ServiceItem component displays an individual service with an icon and description.
 */
const ServiceItem = ({ name, description, icon, invertInDark }: ServiceData) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      className="flex flex-col mb-8 md:mb-10 bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInFromTop(0.2)}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-muted border border-border group-hover:border-primary/30 transition-colors">
          <Image
            src={icon}
            width={32}
            height={32}
            alt={`Icon representing ${name}`}
            className={`w-8 h-8 object-contain transition-all duration-300${invertInDark ? ' dark:invert dark:brightness-200' : ''}`}
          />
        </div>
        <h6 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h6>
      </div>

      <p className="text-muted-foreground text-sm md:text-base font-medium mt-4 leading-relaxed line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceItem;
