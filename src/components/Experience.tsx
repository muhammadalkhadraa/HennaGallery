"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, PenTool, Gem, Leaf, Fingerprint, Coffee } from "lucide-react";
import { HennaDivider } from "./HennaBorder";

export default function Experience() {
  const experiences = [
    {
      icon: <Compass className="w-8 h-8 text-gold" />,
      title: "Traditional Nubian Designs",
      description: "Authentic, heritage-rich chevron, triangle, and floral geometry handcrafted to honor age-old Nubian artistic legacy.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-gold" />,
      title: "Customized Patterns",
      description: "Personalized henna artwork drawn freehand to match your individual style, personality, and outfit perfectly.",
    },
    {
      icon: <Gem className="w-8 h-8 text-gold" />,
      title: "Bridal Henna Expertise",
      description: "Dedicated bridal henna packages that offer intricate, high-contrast, long-lasting stains for your special day.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-gold" />,
      title: "Premium Natural Henna",
      description: "Only 100% organic henna powder, lemon juice, and pure essential oils are used. Completely free from harmful chemicals.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-gold" />,
      title: "Attention to Detail",
      description: "Meticulous lines, delicate shade transitions, and perfect execution that make each design a living masterpiece.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-gold" />,
      title: "Comfortable Experience",
      description: "Sit back and relax in a cozy, welcoming studio atmosphere with warm traditional Egyptian tea and hospitality.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream/35 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute right-[-80px] bottom-[-80px] w-96 h-96 bg-sand/15 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-henna font-bold">
            The Studio Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate font-bold mt-2">
            Why Choose Jomana
          </h2>
          <HennaDivider className="mt-4" />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-cream border border-gold/15 hover:border-gold/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden shadow-md flex flex-col items-center text-center"
            >
              {/* Backlit glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Corner Ornaments inside cards */}
              <div className="absolute top-2 left-2 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
                <svg viewBox="0 0 20 20" className="w-5 h-5 stroke-henna fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 20 L 0 0 L 20 0" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-25 transition-opacity duration-300">
                <svg viewBox="0 0 20 20" className="w-5 h-5 stroke-henna fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 20 0 L 20 20 L 0 20" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-coffee/5 flex items-center justify-center mb-6 group-hover:bg-coffee/10 transition-colors duration-300">
                {exp.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-xl text-chocolate font-bold mb-3 tracking-wide">
                {exp.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-sm text-chocolate/85 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
