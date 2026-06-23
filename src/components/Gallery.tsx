"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryCategories, galleryItems, GalleryItem } from "../data/galleryData";
import { HennaDivider } from "./HennaBorder";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);

  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  const openLightbox = (id: string) => {
    const index = galleryItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setSelectedItemIdx(index);
    }
  };

  const closeLightbox = () => {
    setSelectedItemIdx(null);
  };

  const nextImage = useCallback(() => {
    if (selectedItemIdx !== null) {
      setSelectedItemIdx((selectedItemIdx + 1) % galleryItems.length);
    }
  }, [selectedItemIdx]);

  const prevImage = useCallback(() => {
    if (selectedItemIdx !== null) {
      setSelectedItemIdx(
        (selectedItemIdx - 1 + galleryItems.length) % galleryItems.length
      );
    }
  }, [selectedItemIdx]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIdx, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream/10 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute left-[-100px] top-[20%] w-80 h-80 bg-sand/10 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-henna font-bold">
            Handcrafted Masterpieces
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate font-bold mt-2">
            My Henna Art
          </h2>
          <HennaDivider className="mt-4" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              id={`filter-btn-${category.id}`}
              className={`px-6 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-coffee text-cream shadow-md"
                  : "bg-cream/50 text-coffee border border-gold/20 hover:bg-cream hover:border-gold/45"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry effect using Tailwind column counts) */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] box-border"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item.id)}
                className="break-inside-avoid relative overflow-hidden rounded-xl bg-cream border border-gold/15 shadow-md cursor-pointer group"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle border around image inside container */}
                  <div className="absolute inset-4 border border-cream/20 rounded-lg pointer-events-none group-hover:border-cream/50 transition-colors duration-300" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/30 text-gold font-sans text-[10px] uppercase tracking-wider font-semibold mb-2 backdrop-blur-sm border border-gold/20">
                      {galleryCategories.find((cat) => cat.id === item.category)?.name}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-cream font-bold">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-cream/75 mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-chocolate">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedItemIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              id="lightbox-close-btn"
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Close image overview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Next / Prev Controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              id="lightbox-prev-btn"
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              id="lightbox-next-btn"
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Central Content Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-[65vh] flex items-center justify-center">
                <Image
                  src={galleryItems[selectedItemIdx].src}
                  alt={galleryItems[selectedItemIdx].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="w-full bg-chocolate/90 border-t border-gold/15 p-4 text-center">
                <span className="text-xs font-sans text-gold font-bold uppercase tracking-widest">
                  {galleryCategories.find((cat) => cat.id === galleryItems[selectedItemIdx].category)?.name}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-cream font-bold mt-1">
                  {galleryItems[selectedItemIdx].title}
                </h3>
                <p className="font-sans text-sm text-cream/75 mt-1 max-w-xl mx-auto">
                  {galleryItems[selectedItemIdx].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
