'use client'
import React from 'react';

type DynamicSvgProps = {
    svg: string;
    className?: string;
};

const DynamicSvg = ({ svg, className }: DynamicSvgProps) => {
    return (
        <div 
            className={className} 
            dangerouslySetInnerHTML={{ __html: svg }} 
        />
    );
};

export default DynamicSvg;
