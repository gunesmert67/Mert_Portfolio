'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaMedium,
  FaEnvelope,
} from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import { ContactData } from '@/data/Contact';
import HeroButton from '../ui/HeroButton';

const socialLinks = [
  { href: `mailto:${ContactData.email}`, label: 'Email', icon: <FaEnvelope /> },
  { href: ContactData.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn /> },
  { href: ContactData.github, label: 'GitHub', icon: <FaGithub /> },
  { href: ContactData.instagram, label: 'Instagram', icon: <FaInstagram /> },
];

/**
 * Typewriter component — types text character by character with a blinking cursor.
 */
const Typewriter = ({
  text,
  delay = 0,
  speed = 60,
  className = '',
  onComplete,
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setStarted(false);
    setDone(false);

    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayed, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      <AnimatePresence>
        {started && !done && (
          <motion.span
            className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle rounded-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          />
        )}
      </AnimatePresence>
    </span>
  );
};

/**
 * Hero component — Konsept 1: Typewriter Reveal
 */
const Hero = () => {
  const { t } = useLanguage();
  const [line1Done, setLine1Done] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="aboutme"
      className="relative flex flex-col h-full w-full justify-center min-h-[80vh] md:min-h-[85vh] px-4 md:px-10 overflow-hidden"
    >
      <motion.div
        className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 z-10"
        variants={containerVariants}
        initial={false}
        animate="visible"
      >
        {/* Left Side: Typography */}
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          {/* Tagline */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="py-1 px-4 border border-border/40 bg-background/40 backdrop-blur-md rounded-full shadow-sm">
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mix-blend-difference dark:mix-blend-normal">
                {t('hero.tagline')}
              </span>
            </div>
          </motion.div>

          {/* Typewriter Headings */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-1 relative"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-foreground">
              {/* Line 1: Sürekli öğrenen, */}
              <span className="block">
                <span>{t('hero.headingPart1')} </span>
                <Typewriter
                  text={`${t('hero.headingHighlight1')},`}
                  delay={600}
                  speed={80}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic pr-2"
                  onComplete={() => setLine1Done(true)}
                />
              </span>

              {/* Line 2: Sürekli üreten. */}
              <span className="block mt-1">
                {line1Done && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{t('hero.headingPart2')} </span>
                    <Typewriter
                      text={`${t('hero.headingHighlight2')}.`}
                      delay={200}
                      speed={80}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 italic pr-2"
                    />
                  </motion.span>
                )}
              </span>
            </h1>
          </motion.div>

          {/* Short Bio */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[500px] mt-4"
          >
            <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              {typeof t('hero.bio') === 'string'
                ? t('hero.bio')
                : 'Mechatronics engineer. I transform operational processes with data, AI, and automation.'}
            </p>
          </motion.div>

          {/* Actions & Socials */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-8 mt-6"
          >
            <HeroButton
              label={t('hero.cta')}
              onClick={() => window.dispatchEvent(new Event('open-chat'))}
            />

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground text-2xl hover:text-primary transition-all hover:scale-125 duration-300"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-2/5 flex justify-center items-center"
        >
          <div className="relative w-[220px] h-[300px] md:w-[280px] md:h-[360px] lg:w-[340px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 p-2 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 group">
            <div className="absolute inset-2 overflow-hidden rounded-[1.25rem]">
              <Image
                src="/mert_optimized.webp"
                alt="Mert Güneş"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                fill
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
