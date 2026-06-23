"use client";

import React from "react";
import { motion } from "framer-motion";

// 1. Detailed Mandala SVG (used in hero, backgrounds, testimonials)
export const HennaMandala = ({ className = "w-32 h-32", animate = true }) => {
  const content = (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full fill-none stroke-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Ring */}
      <circle cx="100" cy="100" r="10" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="18" strokeWidth="1" strokeDasharray="3, 2" />
      
      {/* 8 Inner Petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <path
            key={`petal-inner-${i}`}
            d="M 100 90 C 95 78, 105 78, 100 90 Z"
            transform={`rotate(${angle} 100 100)`}
            strokeWidth="1.5"
          />
        );
      })}

      {/* Middle Ring */}
      <circle cx="100" cy="100" r="32" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="38" strokeWidth="0.8" strokeDasharray="4, 4" />

      {/* 16 Middle Rays & Beads */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={`ray-${i}`} transform={`rotate(${angle} 100 100)`}>
            <line x1="100" y1="68" x2="100" y2="62" strokeWidth="1.5" />
            <circle cx="100" cy="60" r="2.5" className="fill-current" />
          </g>
        );
      })}

      {/* Outer Ring */}
      <circle cx="100" cy="100" r="54" strokeWidth="2" />

      {/* 12 Intricate Henna Swirls/Paisleys */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <path
            key={`swirl-${i}`}
            d="M 100 46 C 85 30, 95 10, 100 25 C 105 10, 115 30, 100 46"
            transform={`rotate(${angle} 100 100)`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}

      {/* Decorative Dots outside swirls */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <circle
            key={`dot-${i}`}
            cx="100"
            cy="12"
            r="1.8"
            className="fill-current"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        className={`${className} text-gold/45`}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={`${className} text-gold/40`}>{content}</div>;
};

// 2. Elegant Horizontal Divider (placed between sections)
export const HennaDivider = ({ className = "my-12" }) => {
  return (
    <div className={`flex items-center justify-center gap-4 w-full select-none ${className}`}>
      {/* Left decorative line */}
      <div className="h-[2px] flex-grow max-w-[200px] bg-gradient-to-r from-transparent via-henna/40 to-henna/80 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-henna" />
      </div>
      
      {/* Central Emblem */}
      <svg
        viewBox="0 0 100 40"
        className="w-20 h-10 fill-none stroke-henna text-henna"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core Mandala */}
        <circle cx="50" cy="20" r="5" strokeWidth="2" />
        <circle cx="50" cy="20" r="8" strokeWidth="1" strokeDasharray="2, 2" />
        
        {/* Swirls spreading left & right */}
        <path
          d="M 50 15 C 38 10, 32 30, 20 20 C 12 12, 18 5, 5 20"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 50 25 C 62 30, 68 10, 80 20 C 88 28, 82 35, 95 20"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Tiny dots */}
        <circle cx="50" cy="8" r="1.5" className="fill-current" />
        <circle cx="50" cy="32" r="1.5" className="fill-current" />
        <circle cx="35" cy="20" r="1" className="fill-current" />
        <circle cx="65" cy="20" r="1" className="fill-current" />
      </svg>

      {/* Right decorative line */}
      <div className="h-[2px] flex-grow max-w-[200px] bg-gradient-to-l from-transparent via-henna/40 to-henna/80 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-henna" />
      </div>
    </div>
  );
};

// 3. Traditional Nubian Geometric Border (used in footer top, image cards, details)
export const NubianBorder = ({ className = "h-4" }) => {
  return (
    <div className={`w-full overflow-hidden text-gold/60 select-none ${className}`}>
      <svg
        viewBox="0 0 1200 24"
        className="w-full h-full fill-current"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <pattern id="nubian-pattern" width="60" height="24" patternUnits="userSpaceOnUse">
          {/* Nubian Chevron / Triangles */}
          <path d="M 0 24 L 15 4 L 30 24 Z" className="opacity-90" />
          <path d="M 30 24 L 45 4 L 60 24 Z" className="opacity-90" />
          
          {/* Diamond in between */}
          <polygon points="30,4 34,10 30,16 26,10" />
          <polygon points="0,4 4,10 0,16 -4,10" />
          <polygon points="60,4 64,10 60,16 56,10" />
          
          {/* Accent dots inside chevron */}
          <circle cx="15" cy="16" r="2.5" className="text-cream" />
          <circle cx="45" cy="16" r="2.5" className="text-cream" />
          
          {/* Connecting line */}
          <rect x="0" y="0" width="60" height="2.5" />
          <rect x="0" y="21.5" width="60" height="2.5" />
        </pattern>
        <rect width="100%" height="24" fill="url(#nubian-pattern)" />
      </svg>
    </div>
  );
};

// 4. Corner Ornaments (used around image frames or card frames)
export const CornerOrnament = ({ position = "top-left", className = "" }) => {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "rotate-270",
  }[position];

  return (
    <div className={`absolute w-12 h-12 text-gold/75 pointer-events-none select-none ${rotation} ${className}`}>
      <svg
        viewBox="0 0 60 60"
        className="w-full h-full fill-none stroke-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core Swirl */}
        <path
          d="M 5 5 C 18 5, 25 12, 25 25 C 25 35, 15 40, 5 30 C -2 22, 5 10, 15 20 C 20 25, 18 30, 12 28"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Leaf/Petal vectors */}
        <path d="M 5 5 Q 35 5 45 15 Q 15 35 5 5" strokeWidth="1.5" />
        <path d="M 5 5 Q 5 35 15 45 Q 35 15 5 5" strokeWidth="1.5" />
        
        {/* Beads */}
        <circle cx="50" cy="10" r="2" className="fill-current" />
        <circle cx="45" cy="22" r="1.5" className="fill-current" />
        <circle cx="10" cy="50" r="2" className="fill-current" />
        <circle cx="22" cy="45" r="1.5" className="fill-current" />
        <circle cx="5" cy="5" r="3" className="fill-current" />
      </svg>
    </div>
  );
};
