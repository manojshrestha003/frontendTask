'use client'
import React from 'react';
import { reactIcon, task2icon, vueJsIocn, icon4, rightArrow } from '@/public/icons';

type Props = {
    active: boolean;
    onClick: () => void;
};

const MainCourseCard = ({ active, onClick }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`relative w-full lg:w-[592px] h-[461px] bg-[#C13535] rounded-[32px] p-10 flex flex-col justify-between text-white cursor-pointer transition-transform duration-300 ${active ? 'scale-[0.98]' : 'scale-100'
                }`}
        >
            <div className="absolute top-10 right-10 flex items-center gap-2 text-[18px] font-semibold opacity-90">
                View all Courses <span className="text-lg" dangerouslySetInnerHTML={{ __html: rightArrow }} />
            </div>

            <div className="flex gap-15 mt-[126px] items-center">
                <div className="w-[75px] h-[75px]" dangerouslySetInnerHTML={{ __html: reactIcon }} />
                <div className="w-[75px] h-[75px]" dangerouslySetInnerHTML={{ __html: task2icon }} />
                <div className="w-[75px] h-[75px]" dangerouslySetInnerHTML={{ __html: vueJsIocn }} />
                <div className="w-[75px] h-[75px]" dangerouslySetInnerHTML={{ __html: icon4 }} />
            </div>

            <div className="flex items-end gap-3 mb-2">
                <div className="flex items-start">
                    <span className="text-[150px] font-black leading-[0.8] tracking-[-0.05em]">
                        23
                    </span>
                    <span className="text-4xl font-bold ml-1 mt-3">+</span>
                </div>

                <div className="ml-2 mb-3">
                    <h2 className="text-[32px] font-bold leading-tight">All Courses</h2>
                    <p className="text-white/90 text-[18px] leading-snug max-w-[218px]">
                        courses you're powering through right now.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainCourseCard;