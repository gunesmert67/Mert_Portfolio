'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import AnimatedNav from '../ui/AnimatedNav';

const navLinkKeys = [
  { href: '/', key: 'nav.aboutme' },
  { href: '/services', key: 'nav.services' },
  { href: '/career', key: 'nav.career' },
  { href: '/skills', key: 'nav.skills' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/certifications', key: 'nav.certifications' },
  { href: '/contact', key: 'nav.contact' },
];

/**
 * Navbar component for site navigation with smooth state-based active link tracking.
 */
const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageSwitch = (lang: Language) => {
    setLanguage(lang);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 py-4 px-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto bg-background/80 backdrop-blur-md border border-border rounded-xl px-6 py-2 shadow-sm shadow-black/5 overflow-visible">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-black text-xl tracking-tighter text-foreground hover:text-primary transition-colors duration-300 cursor-pointer select-none"
            onClick={closeMenu}
          >
            Mert Güneş
          </Link>
        </div>

        {/* Desktop Navigation (AnimatedNav) */}
        <div className="hidden md:flex items-center mx-auto">
          <AnimatedNav
            items={React.useMemo(() => navLinkKeys.map(link => ({
              label: t(link.key),
              href: link.href
            })), [t])}
          />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-transparent gap-5">
            <ThemeToggle />
            <LanguageSwitch />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl h-screen flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            <motion.button
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-foreground/80 hover:text-primary transition-colors p-2"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.div
              className="flex flex-col gap-6 items-center w-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                }
              }}
            >
              {navLinkKeys.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`text-3xl font-black tracking-tight transition-all duration-300 ${isActive
                        ? 'text-primary scale-110'
                        : 'text-foreground/70 hover:text-primary'
                        }`}
                    >
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-6 mt-12 w-full max-w-[280px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-full h-px bg-border/40 mb-2"></div>
              <div className="flex items-center justify-center gap-8 w-full">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Görünüm</span>
                  <ThemeToggle />
                </div>
                <div className="w-px h-10 bg-border/40 h-full"></div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Dil</span>
                  <LanguageSwitch />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
