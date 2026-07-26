'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSwitch.module.css';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <label className={styles.switch}>
      <input
        className={styles.cb}
        type="checkbox"
        checked={language === 'en'}
        onChange={handleToggle}
      />
      <span className={styles.toggle}>
        <span className={styles.left}>TR</span>
        <span className={styles.right}>EN</span>
      </span>
    </label>
  );
};
