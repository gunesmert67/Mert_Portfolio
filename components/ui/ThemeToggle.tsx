'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import styles from './ThemeSwitch.module.css';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.themeSwitchPlaceholder}></div>;
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className={styles.theme}>
      <input
        className={styles.themeToggle}
        type="checkbox"
        checked={isDark}
        onChange={handleToggle}
        aria-label="Toggle dark mode"
      />
      <div className={styles.themeIcon}>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
        <span className={styles.themeIconPart}></span>
      </div>
    </div>
  );
}
