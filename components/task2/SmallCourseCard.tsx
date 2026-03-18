'use client'
import React from 'react';

type Props = {
    title: React.ReactNode;
    description: React.ReactNode;
    count: string;
    active: boolean;
    onClick: () => void;
};

const SmallCourseCard = ({
    title,
    description,
    count,
    active,
    onClick,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className={`relative w-[230px] h-[461px] bg-[#FDF1F1] rounded-[40px] p-8 flex flex-col justify-between cursor-pointer transition-transform duration-300 ${active ? 'scale-[0.98]' : 'scale-100'
                }`}
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
        </div>
    );
};

export default SmallCourseCard;