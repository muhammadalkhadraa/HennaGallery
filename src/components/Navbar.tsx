"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "nav-home-link" },
    { name: "About", href: "#about", id: "nav-about-link" },
    { name: "Gallery", href: "#gallery", id: "nav-gallery-link" },
    { name: "Why Us", href: "#experience", id: "nav-experience-link" },
    //{ name: "Testimonials", href: "#testimonials", id: "nav-testimonials-link" },//
    { name: "Book Now", href: "#booking", id: "nav-booking-link", isBtn: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-chocolate/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-lg"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex flex-col select-none"
            id="brand-logo-link"
          >
            <span
              className={`font-serif font-bold text-2xl tracking-wide transition-colors duration-300 ${isScrolled ? "text-cream" : "text-chocolate"
                }`}
            >
              JOMANA
            </span>
            <span
              className={`font-sans text-[10px] uppercase tracking-[0.25em] -mt-1 font-semibold transition-colors duration-300 ${isScrolled ? "text-gold" : "text-henna"
                }`}
            >
              Henna Artist
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.isBtn) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    id={link.id}
                    className={`font-sans text-xs uppercase tracking-wider font-semibold py-2 px-5 rounded-full border transition-all duration-300 ${isScrolled
                        ? "bg-gold border-gold text-chocolate hover:bg-transparent hover:text-gold"
                        : "bg-henna border-henna text-cream hover:bg-transparent hover:text-henna"
                      }`}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={link.id}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${isScrolled
                      ? "text-cream/80 hover:text-gold"
                      : "text-chocolate/85 hover:text-henna"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className={`p-2 rounded-md focus:outline-none transition-colors duration-300 ${isScrolled ? "text-cream hover:text-gold" : "text-chocolate hover:text-henna"
                }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-45 md:hidden bg-chocolate/98 dark-parchment-bg border-t border-gold/10 px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    id={`${link.id}-mobile`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block font-serif text-2xl font-medium tracking-wide border-b border-gold/10 pb-2 ${link.isBtn
                        ? "text-gold font-sans text-lg font-semibold uppercase tracking-widest border-none mt-4 text-center py-3 bg-henna/45 hover:bg-henna/60 rounded-lg text-cream"
                        : "text-cream hover:text-gold"
                      }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Nubian Geometric design at the bottom of the drawer */}
            <div className="w-full text-gold/30 text-center text-xs font-serif tracking-widest select-none">
              ✦ ━━━━━━━━ ✦ ━━━━━━━━ ✦
              <p className="mt-2 font-sans text-[10px] opacity-75 uppercase tracking-[0.3em]">
                Traditional Nubian Heritage
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
