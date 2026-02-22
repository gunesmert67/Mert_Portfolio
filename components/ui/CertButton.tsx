'use client';

import React from 'react';
import styles from './CertButton.module.css';

interface CertButtonProps {
    onClick?: () => void;
    label: string;
}

const CertButton: React.FC<CertButtonProps> = ({ onClick, label }) => {
    return (
        <button className={styles.animatedButton} onClick={onClick}>
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arr2}
            >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.7781L10.8076 18.3639L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className={styles.text}>{label}</span>
            <span className={styles.circle}></span>
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arr1}
            >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.7781L10.8076 18.3639L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
        </button>
    );
};

export default CertButton;
