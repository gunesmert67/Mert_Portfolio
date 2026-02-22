'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import AnimatedNav from '../ui/AnimatedNav';

const navLinkKeys = [
  { href: '/about', key: 'nav.aboutme' },
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
            href="/about"
            className="font-black text-xl tracking-tighter text-foreground hover:text-primary transition-colors duration-300 cursor-pointer select-none"
            onClick={closeMenu}
          >
            Mert Güneş
          </Link>
        </div>

        {/* Desktop Navigation (AnimatedNav) */}
        <div className="hidden md:flex items-center mx-auto">
          <AnimatedNav
            items={navLinkKeys.map(link => ({
              label: t(link.key),
              href: link.href
            }))}
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
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-background h-screen flex flex-col items-center justify-center gap-8 transition-all duration-300">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-foreground hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="flex flex-col gap-8 items-center w-full">
            {navLinkKeys.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname === '/' && link.href === '/about');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-2xl font-bold transition-all duration-300 ${isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-2xl border border-border">
              <ThemeToggle />
              <div className="h-8 w-[1px] bg-border mx-2"></div>
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
