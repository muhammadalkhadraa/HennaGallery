"use client";

import React from "react";
import { Phone, Instagram, MapPin } from "lucide-react";
import { NubianBorder } from "./HennaBorder";

export default function Footer() {
  return (
    <footer className="w-full bg-chocolate text-cream relative">
      {/* Decorative Nubian border at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <NubianBorder className="h-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Column 1: Brand Logo & Mission */}
          <div className="flex flex-col space-y-4">
            <a href="#home" className="flex flex-col select-none">
              <span className="font-serif font-bold text-3xl tracking-wide text-cream">
                JOMANA
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] -mt-1 font-semibold text-gold animate-pulse">
                Henna Artist
              </span>
            </a>
            <p className="font-sans text-sm text-cream/70 leading-relaxed max-w-sm">
              Beautiful handmade henna designs inspired by traditional Nubian culture, elegance, and timeless artistry. Based in Egypt, serving bridal and traditional events.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-cream/80 font-medium">
              <a href="#home" className="hover:text-gold transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="hover:text-gold transition-colors duration-200">
                Meet Jomana
              </a>
              <a href="#gallery" className="hover:text-gold transition-colors duration-200">
                My Gallery
              </a>
              <a href="#experience" className="hover:text-gold transition-colors duration-200">
                Why Choose Us
              </a>
              <a href="#testimonials" className="hover:text-gold transition-colors duration-200">
                Reviews
              </a>
              <a href="#booking" className="hover:text-gold transition-colors duration-200">
                Book Session
              </a>
            </div>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:01119548766"
                  id="footer-phone-link"
                  className="hover:text-gold transition-colors duration-200"
                >
                  01119548766
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="https://www.instagram.com/jomana_henna__artist"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-instagram-link"
                  className="hover:text-gold transition-colors duration-200"
                >
                  @jomana_henna__artist
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gold/20 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} Jomana Henna Artist. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <span className="font-serif italic text-gold/60 text-sm">
              Handcrafted Nubian Elegance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
