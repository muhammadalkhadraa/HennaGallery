"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "01119548766";
  const message = encodeURIComponent("Hello Jomana, I would like to book a henna appointment.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-floating-btn"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-110 focus:outline-none"
        aria-label="Contact Jomana on WhatsApp to book a henna session"
      >
        {/* Soft Henna Pulsing Ring */}
        <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold/50 to-henna/40 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 -z-10" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.453 4.81 1.454 5.518 0 10.007-4.49 10.01-10.012.001-2.673-1.04-5.184-2.93-7.077-1.892-1.893-4.405-2.934-7.079-2.935-5.522 0-10.014 4.492-10.017 10.015-.001 1.8.483 3.548 1.401 5.12L1.094 21.06l4.283-1.122c1.6.877 3.327 1.332 5.27 1.332v-.002zM17.47 14.397c-.3-.149-1.777-.878-2.076-.985-.3-.108-.52-.163-.74.163-.219.324-.851 1.072-1.04 1.287-.19.216-.382.242-.682.094-.3-.15-1.266-.467-2.41-1.485-.89-.795-1.49-1.778-1.665-2.076-.175-.3-.019-.463.13-.612.134-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.523-.075-.15-.74-1.777-1.014-2.44-.267-.641-.539-.553-.74-.563-.19-.01-.41-.011-.63-.011-.22 0-.58.082-.88.41-.3.325-1.14 1.116-1.14 2.72 0 1.605 1.17 3.15 1.33 3.36.16.21 2.3 3.51 5.58 4.93.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.62-.09 1.78-.72 2.03-1.42.25-.7.25-1.3.175-1.42-.075-.12-.275-.2-.575-.35z" />
        </svg>

        {/* Text tooltips on hover (custom micro-animation) */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-chocolate text-cream text-xs font-semibold font-sans tracking-wide whitespace-nowrap shadow-md opacity-0 scale-90 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-gold/20">
          Book Appointment
        </span>
      </a>
    </motion.div>
  );
}
