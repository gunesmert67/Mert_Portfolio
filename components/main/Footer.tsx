'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import { ContactData } from '@/data/Contact';
import LegalModal from '@/components/ui/LegalModal';
import { legalContent } from '@/data/LegalContent';

const socialLinks = [
  { href: `mailto:${ContactData.email}`, label: 'Email', icon: <FaEnvelope size={20} /> },
  { href: ContactData.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn size={20} /> },
  { href: ContactData.github, label: 'GitHub', icon: <FaGithub size={20} /> },
  { href: ContactData.instagram, label: 'Instagram', icon: <FaInstagram size={20} /> },
];

/**
 * Footer component containing site credits and social links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | null>(null);

  const legalInfo = activeLegal ? legalContent[language][activeLegal] : null;

  return (
    <footer className="w-full py-10 px-4 mt-auto relative z-10 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-3 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-sm shadow-black/5 transition-all duration-300">

        {/* Left: Branding & Socials */}
        <div className="flex items-center gap-6">
          <h2 className="text-base font-black tracking-tighter text-foreground uppercase whitespace-nowrap">
            Mert <span className="text-primary">Güneş</span>
          </h2>
          <div className="hidden md:flex items-center gap-3 border-l border-border/20 pl-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="text-muted-foreground/50 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {React.cloneElement(link.icon as React.ReactElement, { size: 16 })}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Credits */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 whitespace-nowrap">
          <span>© {currentYear}</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="hidden sm:inline">{t('footer.builtWith')}</span>
        </div>

        {/* Right: Legal Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveLegal('privacy')}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-primary transition-colors duration-300 whitespace-nowrap"
          >
            {t('footer.privacy')}
          </button>
          <button
            onClick={() => setActiveLegal('terms')}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-primary transition-colors duration-300 whitespace-nowrap"
          >
            {t('footer.terms')}
          </button>
        </div>

      </div>

      {/* Legal Modal Integration */}
      {legalInfo && (
        <LegalModal
          isOpen={!!activeLegal}
          onClose={() => setActiveLegal(null)}
          title={legalInfo.title}
          content={legalInfo.content}
        />
      )}
    </footer>
  );
};

export default Footer;
