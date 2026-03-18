'use client'
import React, { useState } from 'react';
import MainCourseCard from './MainCourseCard';
import SmallCourseCard from './SmallCourseCard';

const CourseExplorer = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setTimeout(() => setActiveCard(null), 1000);
  };

  return (
    <div className="bg-white p-12 font-sans select-none">
      {/* Header */}
      <div className="mb-10 ml-2">
        <p className="text-[#4A4A4A] text-[17px] mb-2 font-medium">
          Explore our classes and master trending skills!
        </p>

        <h1 className="text-[34px] font-black text-[#2D2D2D] leading-tight">
          Dive Into <span className="text-[#34B37D]">What's Hot Right Now!</span> 🔥
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-stretch">

        <MainCourseCard
          active={activeCard === 0}
          onClick={() => handleCardClick(0)}
        />

        <div className="flex gap-5">
          <SmallCourseCard
            title={<>Upcoming <br /> Courses</>}
            description={<>exciting new courses waiting <br /> to boost your skills.</>}
            count="05"
            active={activeCard === 1}
            onClick={() => handleCardClick(1)}
          />

          <SmallCourseCard
            title={<>Ongoing <br /> Courses</>}
            description={<>currently happening—don't <br /> miss out on the action!</>}
            count="10"
            active={activeCard === 2}
            onClick={() => handleCardClick(2)}
          />
        </div>

      </div>
    </div>
  );
};

export default CourseExplorer;