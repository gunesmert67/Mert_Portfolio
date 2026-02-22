'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TechnologyChip } from './TechnologyChip';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

interface ModalProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
  startDate: string;
  endDate: string | null;
  technologyStack: string[];
  description: string;
  title: string;
  imageSrc?: string;
  features?: string[];
  challenges?: string[];
  accomplishments?: string[];
}

/**
 * ListSection sub-component for rendering a titled list of items within the modal.
 */
const ListSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
      {title}
    </h3>
    <ul className="text-sm space-y-2 text-muted-foreground font-medium">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="text-primary">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Modal component for displaying detailed project or experience information in an overlay.
 */
const Modal = ({
  isOpen,
  onClose,
  startDate,
  endDate,
  technologyStack,
  description,
  title,
  imageSrc,
  features,
  challenges,
  accomplishments,
}: ModalProps) => {
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

  // Use createPortal to render modal at the end of document.body
  // This avoids z-index issues with parent stacking contexts (like ProjectCard)
  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4 md:px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-background p-0 rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-border max-w-4xl max-h-[90vh] w-full flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 md:px-8 md:py-6 border-b border-border shrink-0">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {startDate} {t('projects.to')}{' '}
              {endDate === null ? t('projects.inProgress') : endDate}
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-foreground uppercase">
              {title}
            </h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            aria-label={t('projects.close')}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-4 py-6 md:px-8 md:py-8 space-y-8">
          {imageSrc && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
              <Image
                src={imageSrc}
                alt={`Image of ${title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
              />
            </div>
          )}

          <div className="max-w-3xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              {t('projects.description')}
            </h3>
            <p className="text-muted-foreground text-md leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
            {features && features.length > 0 && (
              <ListSection title={t('projects.features')} items={features} />
            )}
            <div className="space-y-8">
              {challenges && challenges.length > 0 && (
                <ListSection
                  title={t('projects.challenges')}
                  items={challenges}
                />
              )}
              {accomplishments && accomplishments.length > 0 && (
                <ListSection
                  title={t('projects.accomplishments')}
                  items={accomplishments}
                />
              )}
            </div>
          </div>

          <div className="pt-8 border-t border-border pb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
              {t('projects.techStack')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologyStack.map((tech, index) => (
                <TechnologyChip key={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
};

export default Modal;
