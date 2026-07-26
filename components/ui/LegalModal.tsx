'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: { heading: string; text: string }[];
}

const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
  const { t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[10000] flex justify-center items-center px-4 md:px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-background p-0 rounded-2xl shadow-2xl border border-border max-w-2xl max-h-[80vh] w-full flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-border shrink-0 bg-card/50">
          <h2 className="text-xl font-black tracking-tighter text-foreground uppercase">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            aria-label={t('projects.close')}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-8 space-y-6">
          {content.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                {section.heading}
              </h3>
              <p className="text-muted-foreground text-md leading-relaxed font-medium">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-card/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-primary text-white font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg active:scale-95"
          >
            {t('projects.close')}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default LegalModal;
