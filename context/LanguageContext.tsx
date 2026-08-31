'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { translations } from '@/data/translations';

export type Language = 'tr' | 'en';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Translation function to get strings by nested dot notation key
   */
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Provider component to wrap the application and provide language state.
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('tr');

  React.useEffect(() => {
    const saved = sessionStorage.getItem('appLang');
    if (saved === 'tr' || saved === 'en') {
      setLanguageState(saved as Language);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    sessionStorage.setItem('appLang', lang);
  }, []);
  /**
   * Core translation logic with support for nested keys (e.g., 'nav.home')
   */
  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: any = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key; // Fallback to key if not found
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook for accessing language context within components.
 * @throws Error if used outside of LanguageProvider
 */
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
