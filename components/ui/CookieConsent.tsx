'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './CookieConsent.module.css';

/**
 * CookieConsent component informs users about the use of cookies/analytics.
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted or if it's the first visit
    const consent = localStorage.getItem('cookie-consent-accepted');
    if (!consent) {
      // Delay showing the banner for a smoother experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-accepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.container}
          initial={{ y: 100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          exit={{ y: 100, x: '-50%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className={styles.content}>
            <p className={styles.message}>{t('cookie.message')}</p>
            <div className={styles.links}>
              <button
                onClick={() => {
                  // If there's a specific privacy link or modal, we could trigger it
                  // For now, we'll follow standard practice of informing they can check the policy
                  const footerPrivacy = document.querySelector(
                    'button[class*="footer_privacy"]',
                  );
                  if (footerPrivacy instanceof HTMLButtonElement) {
                    footerPrivacy.click();
                  }
                }}
                className={styles.link}
              >
                {t('cookie.privacy')}
              </button>
            </div>
          </div>
          <div className={styles.actions}>
            <button onClick={handleAccept} className={styles.button}>
              {t('cookie.accept')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
