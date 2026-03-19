'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reactIcon, task2icon, vueJsIocn, icon4, rightArrow } from '@/public/icons';

interface CourseCardProps {
    title: React.ReactNode;
    description: React.ReactNode;
    count: string;
    isExpanded: boolean;
    onClick: () => void;
}

const springTransition = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
};

const CourseCard = ({ title, description, count, isExpanded, onClick }: CourseCardProps) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            transition={springTransition}
            animate={{
                width: isExpanded ? 592 : 230,
            }}
            className={`
                relative h-[461px] cursor-pointer shrink-0 overflow-hidden
                ${isExpanded
                    ? 'bg-[#C13535] rounded-[32px]'
                    : 'bg-[#FDF1F1] rounded-[40px]'
                }
            `}
            style={{ transition: 'background-color 0.3s ease, border-radius 0.3s ease' }}
        >
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    /* ── EXPANDED: Exact replica of MainCourseCard ── */
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 p-10 flex flex-col justify-between text-white"
                    >
                        <div className="absolute top-10 right-10 flex items-center gap-2 text-[18px] font-semibold opacity-90">
                            View all Courses <span className="text-lg" dangerouslySetInnerHTML={{ __html: rightArrow }} />
                        </div>

                        <div className="flex gap-15 mt-[126px] items-center">
                            {[reactIcon, task2icon, vueJsIocn, icon4].map((icon, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                                    className="w-[75px] h-[75px]"
                                    dangerouslySetInnerHTML={{ __html: icon }}
                                />
                            ))}
                        </div>

                        <div className="flex items-end gap-3 mb-2">
                            <div className="flex items-start">
                                <span className="text-[150px] font-black leading-[0.8] tracking-[-0.05em]">
                                    {count}
                                </span>
                                <span className="text-4xl font-bold ml-1 mt-3">+</span>
                            </div>

                            <div className="ml-2 mb-3">
                                <h2 className="text-[32px] font-bold leading-tight">{title}</h2>
                                <p className="text-white/90 text-[18px] leading-snug max-w-[218px]">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* ── COLLAPSED: Exact replica of SmallCourseCard ── */
                    <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 p-8 flex flex-col justify-between"
                    >
                        <div className="flex gap-3">
                            <h2 className="[writing-mode:vertical-lr] rotate-180 text-[32px] font-bold text-[#C13535] leading-none whitespace-nowrap">
                                {title}
                            </h2>

                            <p className="[writing-mode:vertical-lr] rotate-180 text-[#C13535] text-[18px] font-semibold leading-snug">
                                {description}
                            </p>
                        </div>

                        <div className="relative inline-block">
                            <span className="text-[150px] font-black text-[#C13535] leading-[0.8] tracking-tighter">
                                {count}
                            </span>

                            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-[#C13535]">
                                +
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CourseCard;
