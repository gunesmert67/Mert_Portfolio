'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './LiveDemoButton.module.css';

interface LiveDemoButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    ariaLabel?: string;
    text?: string;
}

const LiveDemoButton: React.FC<LiveDemoButtonProps> = ({
    onClick,
    ariaLabel = "Live Demo",
    text = " DEMO DEMO "
}) => {
    // Yazının harflerini teker teker rotasyon için ayırıyoruz, çevreyi sarması için dinamik açı
    const characters = text.split('');
    const angle = 360 / characters.length;

    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <div className={styles.button__text}>
                {characters.map((char, index) => (
                    <span
                        key={`${index}-${char}`}
                        style={{ '--index': index, '--angle': `${angle}deg` } as React.CSSProperties}
                    >
                        {char}
                    </span>
                ))}
            </div>

            <div className={styles.button__circle}>
                <div className={styles.button__icon__copy}>
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
                <div className={styles.button__icon__base}>
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
            </div>
        </button>
    );
};

export default LiveDemoButton;
