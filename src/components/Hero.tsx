"use client";

import React from "react";
import { motion } from "framer-motion";
import { HennaMandala } from "./HennaBorder";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden parchment-bg py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Floating Henna Mandalas for atmosphere */}
      <div className="absolute top-10 left-[-40px] opacity-25 md:opacity-40">
        <HennaMandala className="w-56 h-56 md:w-96 md:h-96" />
      </div>
      <div className="absolute bottom-10 right-[-40px] opacity-25 md:opacity-40">
        <HennaMandala className="w-64 h-64 md:w-96 md:h-96" />
      </div>
      <div className="absolute top-1/4 right-[10%] opacity-15 md:opacity-20 animate-float-slow">
        <HennaMandala className="w-32 h-32 md:w-48 md:h-48" />
      </div>
      <div className="absolute bottom-1/4 left-[10%] opacity-15 md:opacity-20 animate-float-medium">
        <HennaMandala className="w-40 h-40 md:w-52 md:h-52" />
      </div>

      {/* Decorative Traditional Border at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[6px] bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10" />

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Logo Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Logo Frame */}
          <div className="absolute inset-0 flex items-center justify-center -m-4">
            <div className="w-44 h-44 rounded-full border border-dashed border-gold/30 animate-spin-slow" />
          </div>

          <div className="w-36 h-36 rounded-full border-2 border-gold/80 flex items-center justify-center bg-cream/90 shadow-lg relative z-10 p-2">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-none stroke-chocolate text-chocolate"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Henna Mandala Design */}
              <circle cx="50" cy="50" r="8" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="14" strokeWidth="0.7" strokeDasharray="2, 2" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <path
                    key={`logo-petal-${i}`}
                    d="M 50 45 C 48 38, 52 38, 50 45 Z"
                    transform={`rotate(${angle} 50 50)`}
                    strokeWidth="1"
                    className="fill-henna/10"
                  />
                );
              })}
              
              {/* Outer Swirling borders */}
              <path
                d="M 50 12 A 38 38 0 0 1 88 50 A 38 38 0 0 1 50 88 A 38 38 0 0 1 12 50 A 38 38 0 0 1 50 12 Z"
                strokeWidth="1"
                strokeDasharray="4, 3"
              />
              <path
                d="M 50 8 A 42 42 0 0 1 92 50 A 42 42 0 0 1 50 92 A 42 42 0 0 1 8 50 A 42 42 0 0 1 50 8 Z"
                strokeWidth="1.5"
                className="stroke-gold"
              />
              {/* Logo Initials J H */}
              <text
                x="50"
                y="56"
                textAnchor="middle"
                className="fill-chocolate font-serif font-bold text-lg tracking-wider"
                stroke="none"
              >
                JH
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Business Sub-Brand Name */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-henna font-bold mb-3"
        >
          Jomana Henna Artist
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-chocolate font-bold leading-tight mb-6 max-w-2xl text-shadow-gold"
        >
          Traditional Nubian Henna Art
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans text-base sm:text-lg md:text-xl text-chocolate/80 max-w-2xl leading-relaxed mb-10"
        >
          Beautiful handmade henna designs inspired by Nubian culture, elegance, and timeless artistry.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#gallery"
            id="hero-view-gallery-btn"
            className="w-full sm:w-48 py-4 px-8 text-sm uppercase tracking-wider font-semibold font-sans rounded-full bg-coffee text-cream hover:bg-chocolate hover:shadow-lg transition-all duration-300 border border-coffee text-center"
          >
            View Gallery
          </a>
          <a
            href="#booking"
            id="hero-book-appointment-btn"
            className="w-full sm:w-48 py-4 px-8 text-sm uppercase tracking-wider font-semibold font-sans rounded-full bg-transparent text-coffee hover:bg-coffee hover:text-cream border-2 border-coffee hover:shadow-lg transition-all duration-300 text-center"
          >
            Book Session
          </a>
        </motion.div>
      </div>

      {/* Decorative organic corner frames */}
      <div className="absolute top-[80px] left-4 opacity-40">
        <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-gold fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 40 L 0 0 L 40 0" strokeWidth="2" />
          <circle cx="5" cy="5" r="2.5" className="fill-gold" />
        </svg>
      </div>
      <div className="absolute top-[80px] right-4 opacity-40">
        <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-gold fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 40 40 L 40 0 L 0 0" strokeWidth="2" />
          <circle cx="35" cy="5" r="2.5" className="fill-gold" />
        </svg>
      </div>
    </section>
  );
}
