'use client';

import { person1, person2, person3, person4 } from '@/public/icons';
import type { FeatureCardData } from '@/types';

const personSvgs: Record<string, string> = { person1, person2, person3, person4 };

interface FeatureCardProps {
  card: FeatureCardData;
}

export default function FeatureCard({ card }: FeatureCardProps) {
  const svgMarkup = personSvgs[card.personKey];
  
  // Design Logic:
  // Card 1 & 3: Person Left, Text Right-aligned
  // Card 2 & 4: Person Right, Text Left-aligned
  const isPersonLeft = card.personKey === 'person1' || card.personKey === 'person2';

  return (
    <div className="relative group">
      {/* The Background Card */}
      <div
        className="relative rounded-[40px] p-10 min-h-[320px] shadow-lg flex items-center transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ backgroundColor: card.bgColor }}
      >
        {/* Text Content Area */}
        <div 
          className={`relative z-10 w-[65%] flex flex-col text-white ${
            isPersonLeft ? 'ml-auto text-right items-end' : 'mr-auto text-left items-start'
          }`}
        >
          <h3 className="text-3xl font-black mb-1 leading-tight tracking-tight">
            {card.title}
          </h3>
          <p className="text-xl font-bold mb-4">
            {card.subtitle}
          </p>
          <p className="text-[14px] leading-relaxed font-medium opacity-90">
            {card.description}
          </p>
        </div>
      </div>

      {/* Overflowing Illustration */}
      <div 
        className={`absolute bottom-10 pointer-events-none z-20 -bottom-6 md:-bottom-20 ${
          isPersonLeft 
            ? '-left-10 md:-left-18' // Negative value makes it overflow the left side
            : '-right-10 md:-right-18' // Negative value makes it overflow the right side
        }`}
        style={{ width: '300px', height: '260px' }}
      >
        <div 
          className="w-full h-full flex items-end"
          dangerouslySetInnerHTML={{ __html: svgMarkup }} 
        />
      </div>
    </div>
  );
}