"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { HennaDivider } from "./HennaBorder";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Farah Soliman",
    role: "Bride",
    text: "Jomana is absolutely amazing! She designed my bridal henna and it was a breathtaking experience. The natural henna stain was deep mahogany and lasted for weeks. She made me feel so relaxed and special!",
    stars: 5,
  },
  {
    id: "t2",
    name: "Yasmin Ali",
    role: "Regular Client",
    text: "The traditional Nubian geometric designs she creates are a work of art. Her cozy studio space feels like a piece of Aswan right here. The hospitality is warm, and her talent is unparalleled.",
    stars: 5,
  },
  {
    id: "t3",
    name: "Habiba Mansour",
    role: "Celebration Event",
    text: "The sheer attention to detail in Jomana's work is outstanding. Every line is perfectly straight and clean, and the custom flowers are gorgeous. The natural scent of lavender and eucalyptus oils was lovely.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = useCallback(() => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play the testimonial slider
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" as const },
    }),
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream/35 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-[-80px] top-[-80px] w-80 h-80 bg-gold/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-[-80px] bottom-[-80px] w-80 h-80 bg-sand/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-henna font-bold">
            Client Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate font-bold mt-2">
            Client Testimonials
          </h2>
          <HennaDivider className="mt-4" />
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            id="testimonial-prev-btn"
            className="absolute left-0 lg:-left-16 p-3 rounded-full bg-cream/80 border border-gold/20 hover:bg-cream hover:border-gold/45 text-chocolate transition-colors duration-200 z-20 shadow-md focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slider content */}
          <div className="w-full overflow-hidden px-4 md:px-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative bg-cream border border-gold/25 rounded-3xl p-8 md:p-12 shadow-xl text-center flex flex-col items-center select-none"
              >
                {/* Decorative border elements inside card */}
                <div className="absolute top-4 left-4 opacity-30 text-gold">
                  <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-current fill-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 40 L 0 0 L 40 0" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 opacity-30 text-gold">
                  <svg viewBox="0 0 40 40" className="w-10 h-10 stroke-current fill-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 40 0 L 40 40 L 0 40" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-coffee/10 flex items-center justify-center text-henna mb-6">
                  <Quote className="w-6 h-6 fill-current" />
                </div>

                {/* Testimonial Text */}
                <p className="font-serif italic text-lg sm:text-xl text-chocolate leading-relaxed max-w-2xl mb-8">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>

                {/* Author Info */}
                <h4 className="font-serif text-lg font-bold text-chocolate">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="font-sans text-xs uppercase tracking-wider text-henna font-semibold mt-0.5">
                  {testimonials[activeIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            id="testimonial-next-btn"
            className="absolute right-0 lg:-right-16 p-3 rounded-full bg-cream/80 border border-gold/20 hover:bg-cream hover:border-gold/45 text-chocolate transition-colors duration-200 z-20 shadow-md focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet Indicator dots */}
        <div className="flex justify-center gap-2 mt-8 z-10 relative">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? "right" : "left");
                setActiveIndex(index);
              }}
              id={`testimonial-bullet-btn-${index}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-henna w-6" : "bg-gold/40 hover:bg-gold"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
