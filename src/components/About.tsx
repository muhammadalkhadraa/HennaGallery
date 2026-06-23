"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CornerOrnament, HennaDivider } from "./HennaBorder";
import { Sparkles, Heart, Award, FlameKindling } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      title: "Professional Henna Artist",
      description: "Dedicated to the fine craft of organic body art with years of refined experience.",
    },
    {
      icon: <Heart className="w-5 h-5 text-gold" />,
      title: "Specialized in Nubian & Bridal Henna",
      description: "Bringing cultural heritage and personalized bridal luxury designs to life.",
    },
    {
      icon: <FlameKindling className="w-5 h-5 text-gold" />,
      title: "Passionate About Traditional Designs",
      description: "Reviving authentic patterns that tell a story of beauty, protection, and joy.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Handcrafted Custom Experiences",
      description: "Every session is a relaxing ritual, tailored to celebrate you and your occasion.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream/35 relative overflow-hidden">
      {/* Background soft styling */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-sand/15 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-henna font-bold">
            The Artist Behind the Art
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate font-bold mt-2">
            Meet Jomana
          </h2>
          <HennaDivider className="mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Side with Decorative Borders */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative p-4 max-w-sm sm:max-w-md w-full"
            >
              {/* Decorative Corner Ornaments around the image container */}
              <CornerOrnament position="top-left" className="-top-1 -left-1" />
              <CornerOrnament position="top-right" className="-top-1 -right-1" />
              <CornerOrnament position="bottom-right" className="-bottom-1 -right-1" />
              <CornerOrnament position="bottom-left" className="-bottom-1 -left-1" />

              {/* Decorative Border Frame */}
              <div className="absolute inset-0 border border-gold/40 m-2 rounded-xl" />

              {/* The Image Wrapper */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] shadow-2xl border-4 border-cream">
                <Image
                  src="/about-jomana.png"
                  alt="Jomana Henna Artist drawing intricate designs"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, 400px"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Text Description Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-chocolate font-semibold">
                  Crafting Timeless Nubian & Modern Henna Stories
                </h3>
                <p className="font-sans text-base text-chocolate/80 leading-relaxed">
                  Deeply rooted in the golden sands and vibrant history of Nubia, my art is a bridge between age-old traditions and modern sophistication. I believe henna is not just a cosmetic decoration, but an ancient language of celebration, beauty, and connection.
                </p>
                <p className="font-sans text-base text-chocolate/80 leading-relaxed">
                  I hand-blend my henna using only premium, 100% natural henna leaves and therapeutic-grade essential oils, ensuring a rich, safe, and deep mahogany stain that nurtures your skin.
                </p>
              </div>

              {/* Staggered Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-xl bg-cream/40 border border-gold/10 hover:border-gold/30 hover:bg-cream/60 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-coffee/10 flex items-center justify-center flex-shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-chocolate">
                        {h.title}
                      </h4>
                      <p className="font-sans text-xs text-chocolate/75 mt-1 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
