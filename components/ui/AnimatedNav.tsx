'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

interface NavItem {
    label: string;
    href: string;
}

interface AnimatedNavProps {
    items: NavItem[];
}

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    angle: number;
    distance: number;
    duration: number;
}

let sparkleIdCounter = 0;

const AnimatedNav: React.FC<AnimatedNavProps> = ({ items }) => {
    const pathname = usePathname();
    const router = useRouter();
    const navRef = useRef<HTMLDivElement>(null);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    const getActiveIndex = useCallback(() => {
        const idx = items.findIndex(
            (item) => pathname === item.href || (pathname === '/' && item.href === '/about')
        );
        return idx !== -1 ? idx : 0;
    }, [pathname, items]);

    const [activeIndex, setActiveIndex] = useState(getActiveIndex);

    useEffect(() => {
        const newIdx = getActiveIndex();
        if (newIdx !== activeIndex) {
            setActiveIndex(newIdx);
        }
    }, [pathname, getActiveIndex, activeIndex]);

    const createSparkles = (clickRect: DOMRect) => {
        if (!navRef.current) return;
        const containerRect = navRef.current.getBoundingClientRect();
        // Calculate center of clicked element relative to the nav container
        const cx = (clickRect.left + clickRect.width / 2) - containerRect.left;
        const cy = (clickRect.top + clickRect.height / 2) - containerRect.top;

        const newSparkles: Sparkle[] = [];
        const count = 12;
        for (let i = 0; i < count; i++) {
            newSparkles.push({
                id: ++sparkleIdCounter,
                x: cx,
                y: cy,
                size: 3 + Math.random() * 4,
                angle: (360 / count) * i + (Math.random() - 0.5) * 30,
                distance: 25 + Math.random() * 40,
                duration: 0.4 + Math.random() * 0.3,
            });
        }
        setSparkles((prev) => [...prev, ...newSparkles]);

        setTimeout(() => {
            setSparkles((prev) =>
                prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id))
            );
        }, 900);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, href: string) => {
        e.preventDefault();
        if (activeIndex === index) return;

        const rect = e.currentTarget.getBoundingClientRect();
        createSparkles(rect);
        setActiveIndex(index);

        setTimeout(() => {
            router.push(href);
        }, 250);
    };

    return (
        <div ref={navRef} className="relative flex items-center gap-1">
            {items.map((item, index) => (
                <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, index, item.href)}
                    className={`relative z-10 px-3 py-2 text-[0.8rem] font-semibold whitespace-nowrap rounded-full transition-colors duration-300 ${activeIndex === index
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                        }`}
                >
                    {/* Sliding pill behind active item */}
                    {activeIndex === index && (
                        <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/20"
                            style={{ zIndex: -1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 380,
                                damping: 30,
                            }}
                        />
                    )}
                    {item.label}
                </a>
            ))}

            {/* Sparkle particles — absolute within navRef container */}
            <AnimatePresence>
                {sparkles.map((sparkle) => {
                    const rad = (sparkle.angle * Math.PI) / 180;
                    const tx = Math.cos(rad) * sparkle.distance;
                    const ty = Math.sin(rad) * sparkle.distance;
                    return (
                        <motion.span
                            key={sparkle.id}
                            className="absolute pointer-events-none z-[9999]"
                            style={{
                                left: sparkle.x,
                                top: sparkle.y,
                                width: sparkle.size,
                                height: sparkle.size,
                                borderRadius: '50%',
                                backgroundColor: 'hsl(var(--primary))',
                            }}
                            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            animate={{
                                opacity: 0,
                                x: tx,
                                y: ty,
                                scale: 0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: sparkle.duration,
                                ease: 'easeOut',
                            }}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedNav;
