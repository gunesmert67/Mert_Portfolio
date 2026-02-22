'use client';

import React from 'react';
import styles from './HeroButton.module.css';

interface HeroButtonProps {
    label: string;
    onClick?: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({ label, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <div className={styles.dots_border}></div>
            <svg
                className={styles.sparkle}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className={styles.path}
                    d="M10 2L12.5 7.5L18 10L12.5 12.5L10 18L7.5 12.5L2 10L7.5 7.5L10 2Z"
                ></path>
                <path
                    className={styles.path}
                    d="M17 14L18.125 16.75L21 18L18.125 19.25L17 22L15.875 19.25L13 18L15.875 16.75L17 14Z"
                ></path>
                <path
                    className={styles.path}
                    d="M7 14L8.125 16.75L11 18L8.125 19.25L7 22L5.875 19.25L3 18L5.875 16.75L7 14Z"
                ></path>
            </svg>
            <span className={styles.text_button}>{label}</span>
        </button>
    );
};

export default HeroButton;
