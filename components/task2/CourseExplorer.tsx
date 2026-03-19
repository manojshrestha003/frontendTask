'use client'
import React, { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import CourseCard from './CourseCard';

interface CourseData {
  title: React.ReactNode;
  description: React.ReactNode;
  count: string;
}

const courses: CourseData[] = [
  {
    title: <>All Courses</>,
    description: <>courses you're powering<br />through right now.</>,
    count: '23',
  },
  {
    title: <>Upcoming Courses</>,
    description: <>exciting new courses waiting<br />to boost your skills.</>,
    count: '05',
  },
  {
    title: <>Ongoing Courses</>,
    description: <>currently happening—don't<br />miss out on the action!</>,
    count: '10',
  },
];

const CourseExplorer = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index);
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

      <LayoutGroup>
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              count={course.count}
              isExpanded={index === expandedIndex}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default CourseExplorer;