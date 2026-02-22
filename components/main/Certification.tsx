'use client';

import React, { useState } from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { SiIbm, SiUdemy } from 'react-icons/si';
import { FiStar, FiGlobe, FiBookOpen } from 'react-icons/fi';
import { CertificationData } from '@/data/Certification';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import { handleMissingLink } from '@/utils/Toaster';
import { MagneticButton } from '../ui/MagneticButton';
import { ArrowRightIcon } from 'lucide-react';

import Image from 'next/image';

// Map specific brand data to certification IDs
const brandDetails: Record<number, { logoPath: string, colorClass: string, bgGlow: string, invertDark?: boolean }> = {
  1: { logoPath: '/company-logo/IBM.svg', colorClass: 'text-blue-500', bgGlow: 'from-blue-500/20 to-cyan-500/10' }, // IBM
  2: { logoPath: '/company-logo/McKinsey.svg', colorClass: 'text-indigo-400', bgGlow: 'from-indigo-500/20 to-slate-500/10', invertDark: true }, // McKinsey
  3: { logoPath: '/company-logo/Berlitz.svg', colorClass: 'text-orange-500', bgGlow: 'from-orange-500/20 to-amber-500/10' }, // Berlitz
  4: { logoPath: '/company-logo/Udemy.svg', colorClass: 'text-purple-500', bgGlow: 'from-purple-500/20 to-fuchsia-500/10' }, // Udemy
  5: { logoPath: '/company-logo/Pearson.svg', colorClass: 'text-emerald-500', bgGlow: 'from-emerald-500/20 to-teal-500/10', invertDark: true }, // Pearson
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

export const Certification = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { language, t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="certifications"
      className="flex flex-col items-center pb-12 md:pb-20 pt-10 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full relative z-10 overflow-hidden gap-12"
    >
      <SectionHeader
        title={t('certifications.title')}
      />

      <div
        ref={ref}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {CertificationData.map((cert, index) => {
          const displayDesc = typeof cert.description === 'object' && cert.description !== null && 'en' in cert.description
            ? (cert.description as { en: string; tr: string })[language]
            : cert.description;

          const brand = brandDetails[cert.id] || { logoPath: '', colorClass: 'text-primary', bgGlow: 'from-primary/20 to-primary/5' };

          // Make first two cards span 3 columns (50%) and others span 2 columns (33%) on large screens
          const isTopRow = index < 2;
          const colSpanClass = isTopRow ? 'lg:col-span-3' : 'lg:col-span-2';

          return (
            <motion.div
              key={cert.id}
              custom={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-[2rem] bg-background/40 dark:bg-card/30 backdrop-blur-xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${colSpanClass}`}
            >
              {/* Color Bloom Effect: Expands on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${brand.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Top part: Logo & Header */}
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card dark:bg-white border border-border/50 shadow-sm flex items-center justify-center ${brand.colorClass} group-hover:scale-110 transition-transform duration-500 overflow-hidden relative`}>
                    {brand.logoPath ? (
                      <Image
                        src={brand.logoPath}
                        alt="Brand Logo"
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    ) : (
                      <FiBookOpen className="w-10 h-10" />
                    )}
                  </div>

                  {/* Magnetic Link Button */}
                  {cert.CertificationLink ? (
                    <MagneticButton
                      onClick={() => window.open(cert.CertificationLink as string, '_blank')}
                      className={`w-12 h-12 rounded-full border border-border/50 flex items-center justify-center bg-card/50 text-foreground group-hover:bg-background transition-colors shadow-sm`}
                    >
                      <ArrowRightIcon className={`w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-500 ${brand.colorClass}`} />
                    </MagneticButton>
                  ) : (
                    <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center bg-muted/20 text-muted-foreground/30 cursor-not-allowed">
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${brand.colorClass} bg-background/50 px-3 py-1 rounded-full border border-border/50`}>
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-black text-foreground group-hover:${brand.colorClass} transition-colors duration-500 line-clamp-2 leading-tight`}>
                    {cert.name}
                  </h3>
                </div>
              </div>

              {/* Bottom part: Description */}
              <div className="relative z-10 mt-6 pt-6 border-t border-border/30">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-500">
                  {displayDesc}
                </p>
              </div>

              {/* Edge Spotlight Effect (Vercel style) - Visible only on hover for this specific card */}
              <AnimatePresence>
                {hoveredCard === cert.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-0 pointer-events-none border-2 border-transparent rounded-[2rem]"
                    style={{
                      background: `linear-gradient(to right, transparent, currentColor, transparent) border-box`,
                      WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
