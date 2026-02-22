'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechnologyChip } from './TechnologyChip';
import { useLanguage } from '@/context/LanguageContext';

interface Milestone {
    id: number;
    date: { en: string; tr: string } | string;
    title: { en: string; tr: string } | string;
    img: string;
    organization: { en: string; tr: string } | string;
    location: { en: string; tr: string } | string;
    description?: { en: string[]; tr: string[] } | string[];
    technologies?: string[];
    gpa?: number;
}

interface CompactMilestoneProps {
    milestone: Milestone;
    index: number;
    type: 'work' | 'education';
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }),
};

/**
 * CompactMilestoneItem Component for the Dual Track Timeline
 * Features 3D hover tilt effect and glassmorphism styling.
 */
export const CompactMilestoneItem: React.FC<CompactMilestoneProps> = ({ milestone, index, type }) => {
    const { language } = useLanguage();

    const getLocalizedContent = (
        content: | { en: string | string[]; tr: string | string[] } | string | string[] | undefined,
    ) => {
        if (typeof content === 'object' && content !== null && 'en' in content && 'tr' in content) {
            return (content as any)[language] || (content as any)['en'];
        }
        return content;
    };

    const { title, img, organization, location, description, technologies, gpa, date } = milestone;

    const displayTitle = getLocalizedContent(title);
    const displayOrg = getLocalizedContent(organization);
    const displayLoc = getLocalizedContent(location);
    const displayDesc = getLocalizedContent(description);
    const displayDate = getLocalizedContent(date);

    // Neon colors based on type
    const isWork = type === 'work';
    const neonColorClass = isWork ? 'from-cyan-500/20 to-blue-500/20' : 'from-purple-500/20 to-pink-500/20';
    const borderColorHover = isWork ? 'hover:border-cyan-500/50' : 'hover:border-purple-500/50';
    const titleColorHover = isWork ? 'group-hover:text-cyan-400' : 'group-hover:text-purple-400';
    const dotColor = isWork ? 'bg-cyan-500' : 'bg-purple-500';

    return (
        <div className="relative pl-8 md:pl-10 w-full mb-8 last:mb-0">
            {/* Timeline Node Dot */}
            <div className={`absolute left-[3px] top-6 w-3 h-3 rounded-full ${dotColor} shadow-[0_0_10px_currentColor] z-20`} />

            <motion.article
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className="group perspective-1000 w-full"
            >
                <motion.div
                    className={`relative p-5 md:p-6 rounded-2xl bg-background/40 dark:bg-card/30 backdrop-blur-xl border border-border/50 ${borderColorHover} transition-colors duration-500 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden`}
                >
                    {/* Header row: Logo + Date/Org */}
                    <div className="flex flex-col items-center gap-4 mb-4 [transform:translateZ(20px)]">
                        <div className={`relative w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center rounded-xl bg-card dark:bg-white border border-border/50 shadow-sm p-1.5 overflow-hidden transition-transform duration-500 group-hover:scale-105`}>
                            {/* Back glow for logo */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${neonColorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <Image
                                className="object-contain relative z-10"
                                src={img}
                                alt={`${displayTitle} Logo`}
                                fill
                                sizes="64px"
                            />
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                                {displayDate}
                            </span>
                            <p className="text-sm md:text-base font-semibold text-foreground/80">
                                {displayOrg} <span className="opacity-50 mx-1">&bull;</span> {displayLoc}
                            </p>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg md:text-xl font-black text-foreground ${titleColorHover} transition-colors duration-500 mb-3 flex flex-wrap items-center justify-center gap-x-2 text-center [transform:translateZ(30px)]`}>
                        {typeof displayTitle === 'string' && displayTitle.includes('•') ? (
                            displayTitle.split('•').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    <span>{part.trim()}</span>
                                    {i < arr.length - 1 && (
                                        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shadow-[0_0_8px_currentColor] shrink-0`} />
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            displayTitle
                        )}
                    </h3>

                    {gpa !== undefined && (
                        <div className="flex justify-center w-full mb-4 [transform:translateZ(10px)]">
                            <div className="inline-flex items-center gap-2 bg-muted/40 px-3 py-1.5 rounded-lg">
                                <span className="text-xs font-bold text-foreground">GPA:</span>
                                <span className="text-xs font-black text-primary">{gpa.toFixed(2)} / 4</span>
                            </div>
                        </div>
                    )}

                    {/* Description Points */}
                    <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed mb-5 flex flex-col items-start text-left [transform:translateZ(15px)]">
                        {Array.isArray(displayDesc) && displayDesc.map((point: string, idx: number) => (
                            <li key={idx} className="flex gap-3 items-start justify-start">
                                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${dotColor} opacity-60`} />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto pt-4 border-t border-border/30 w-full [transform:translateZ(5px)]">
                        {technologies?.map((tech, idx) => (
                            <TechnologyChip key={idx} tech={tech} size="small" />
                        ))}
                    </div>

                    {/* Corner Glow */}
                    <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${neonColorClass} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                </motion.div >
            </motion.article >
        </div >
    );
};
