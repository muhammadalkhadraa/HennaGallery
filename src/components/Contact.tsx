"use client";

import React, { useState } from "react";
import { Phone, Instagram, Send, CheckCircle2, Clock } from "lucide-react";
import { HennaDivider } from "./HennaBorder";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "bridal",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const eventTypes = [
    { value: "bridal", label: "Bridal Henna Session" },
    { value: "nubian", label: "Traditional Nubian Gathering" },
    { value: "individual", label: "Individual Custom Art" },
    { value: "party", label: "Henna Celebration Party" },
    { value: "other", label: "Custom Occasion" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.phone.trim()) return "Please enter your phone number.";
    // Simple phone check
    const phoneRegex = /^[0-9+\s-]{8,20}$/;
    if (!phoneRegex.test(formData.phone)) {
      return "Please enter a valid phone number.";
    }
    return "";
  };

  const JOMANA_PHONE = "201119548766"; // WhatsApp format: country code + number

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const err = validateForm();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setIsSubmitting(true);

    // Find the human-readable event type label
    const eventLabel = eventTypes.find((t) => t.value === formData.eventType)?.label ?? formData.eventType;

    // Build the pre-filled WhatsApp message with all booking details
    const waMessage = [
      `Hello Jomana! I'd like to book a henna appointment 🌿`,
      ``,
      `👤 Name: ${formData.name}`,
      `📞 Phone: ${formData.phone}`,
      `🎉 Event Type: ${eventLabel}`,
      formData.message ? `📝 Details: ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${JOMANA_PHONE}?text=${encodeURIComponent(waMessage)}`;

    // Brief loading state, then open WhatsApp and show success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        phone: "",
        eventType: "bridal",
        message: "",
      });
    }, 800);
  };

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream/10 relative overflow-hidden">
      {/* Background soft textures */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-sand/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-henna font-bold">
            Reserve Your Spot
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate font-bold mt-2">
            Book Your Henna Session
          </h2>
          <HennaDivider className="mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-chocolate text-cream relative overflow-hidden shadow-2xl dark-parchment-bg">
            {/* Corner Ornaments */}
            <div className="absolute top-4 left-4 opacity-20 text-gold">
              <svg viewBox="0 0 20 20" className="w-6 h-6 stroke-current fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 20 L 0 0 L 20 0" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 opacity-20 text-gold">
              <svg viewBox="0 0 20 20" className="w-6 h-6 stroke-current fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 0 L 20 20 L 0 20" strokeWidth="2" />
              </svg>
            </div>

            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-gold font-semibold tracking-wide">
                  Let's Connect
                </h3>
                <p className="font-sans text-sm text-cream/70 mt-2 leading-relaxed">
                  Book your professional henna experience. Fill out the reservation form and Jomana will contact you within 24 hours to confirm your appointment and design details.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-6">
                <a
                  href="tel:01119548766"
                  id="contact-phone-box"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-cream/5 border border-gold/10 hover:border-gold/30 hover:bg-cream/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs text-gold uppercase tracking-wider font-semibold">
                      Phone Number
                    </span>
                    <span className="block font-serif text-lg font-medium tracking-wide">
                      01119548766
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/jomana_henna__artist"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram-box"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-cream/5 border border-gold/10 hover:border-gold/30 hover:bg-cream/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs text-gold uppercase tracking-wider font-semibold">
                      Instagram DM
                    </span>
                    <span className="block font-serif text-lg font-medium tracking-wide">
                      @jomana_henna__artist
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-gold/15 relative z-10 flex items-center gap-3 text-xs text-cream/60">
              <Clock className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Available for bridal events and studio appointments in Cairo.</span>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-cream border border-gold/20 shadow-xl flex flex-col justify-center relative min-h-[450px]">
            {/* Form State Conditional Render */}
            {isSubmitted ? (
              <div className="text-center space-y-6 py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-chocolate font-bold">
                    WhatsApp Opened! 🌿
                  </h3>
                  <p className="font-sans text-sm text-chocolate/80 mt-2 max-w-md mx-auto leading-relaxed">
                    Your booking details have been pre-filled in WhatsApp. Just tap <strong>Send</strong> to complete your reservation with Jomana directly!
                  </p>
                  <p className="font-sans text-xs text-chocolate/55 mt-3">
                    Didn't open? Call or DM Jomana on <strong>01119548766</strong>
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  id="book-another-btn"
                  className="py-3 px-6 text-xs uppercase tracking-widest font-semibold font-sans rounded-full bg-coffee text-cream hover:bg-chocolate transition-colors duration-300"
                >
                  Submit Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Errors */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 text-sm font-sans text-center">
                    {errorMsg}
                  </div>
                )}

                {/* Input Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block font-sans text-xs uppercase tracking-wider font-semibold text-chocolate/75">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full py-3 px-4 rounded-xl border border-gold/20 bg-cream/50 font-sans text-sm text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-henna focus:ring-1 focus:ring-henna transition-all duration-200"
                    required
                  />
                </div>

                {/* Input Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block font-sans text-xs uppercase tracking-wider font-semibold text-chocolate/75">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 01119548766"
                    className="w-full py-3 px-4 rounded-xl border border-gold/20 bg-cream/50 font-sans text-sm text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-henna focus:ring-1 focus:ring-henna transition-all duration-200"
                    required
                  />
                </div>

                {/* Input Event Type dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-event-type" className="block font-sans text-xs uppercase tracking-wider font-semibold text-chocolate/75">
                    Event Type
                  </label>
                  <select
                    id="contact-event-type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-xl border border-gold/20 bg-cream/50 font-sans text-sm text-chocolate focus:outline-none focus:border-henna focus:ring-1 focus:ring-henna transition-all duration-200"
                  >
                    {eventTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Input Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block font-sans text-xs uppercase tracking-wider font-semibold text-chocolate/75">
                    Your Message / Custom Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell Jomana about your event location, preferred designs, date, or any questions..."
                    className="w-full py-3 px-4 rounded-xl border border-gold/20 bg-cream/50 font-sans text-sm text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-henna focus:ring-1 focus:ring-henna transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-coffee text-cream font-sans text-sm font-semibold uppercase tracking-widest hover:bg-chocolate transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-cream border-t-transparent animate-spin" />
                      Registering Session...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-gold" />
                      Book Now
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
