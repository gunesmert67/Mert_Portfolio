'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './LiveDemoButton.module.css';

interface LiveDemoButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  text?: string;
  icon?: React.ReactNode;
}

const LiveDemoButton: React.FC<LiveDemoButtonProps> = ({
  onClick,
  ariaLabel = 'Action Button',
  text = ' DEMO DEMO ',
  icon,
}) => {
  // Yazının harflerini teker teker rotasyon için ayırıyoruz
  const characters = text.split('');
  const angle = 360 / characters.length;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div
        className={styles.button__text}
        style={{ '--angle': `${angle}deg` } as React.CSSProperties}
      >
        {characters.map((char, index) => (
          <span
            key={`${index}-${char}`}
            style={{ '--idx': index } as React.CSSProperties}
          >
            {char}
          </span>
        ))}
      </div>

      <div className={styles.button__circle}>
        <div className={styles.button__icon__copy}>
          {icon || <ArrowUpRight size={20} strokeWidth={2.5} />}
        </div>
        <div className={styles.button__icon__base}>
          {icon || <ArrowUpRight size={20} strokeWidth={2.5} />}
        </div>
      </div>
    </button>
  );
};

export default LiveDemoButton;
