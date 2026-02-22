'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Background base */}
            <div className="absolute inset-0 bg-background" />

            {/* Grid Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Giant blurred moving orbs (Aurora effect) */}
            {/* Primary color orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: ['-20%', '10%', '-20%'],
                    y: ['-10%', '20%', '-10%'],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-0 -left-1/4 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-primary/20 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Secondary color orb */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: ['20%', '-10%', '20%'],
                    y: ['10%', '-20%', '10%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 -right-1/4 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-secondary/30 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Muted color orb */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                    x: ['0%', '30%', '0%'],
                    y: ['30%', '0%', '30%'],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -bottom-1/4 left-1/4 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-muted-foreground/20 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen"
            />
        </div>
    );
};
