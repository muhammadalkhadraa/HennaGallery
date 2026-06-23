"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram as InstaIcon, Heart, MessageCircle } from "lucide-react";
import { HennaDivider } from "./HennaBorder";

export default function Instagram() {
  const posts = [
    {
      id: "insta-p1",
      src: "/WhatsApp Image 2026-06-23 at 11.36.47 AM (1).jpeg",
      likes: "254",
      comments: "18",
      url: "https://www.instagram.com/jomana_henna__artist",
    },
    {
      id: "insta-p2",
      src: "/WhatsApp Image 2026-06-23 at 11.36.48 AM.jpeg",
      likes: "198",
      comments: "12",
      url: "https://www.instagram.com/jomana_henna__artist",
    },
    {
      id: "insta-p3",
      src: "/WhatsApp Image 2026-06-23 at 1.00.06 PM (2).jpeg",
      likes: "412",
      comments: "34",
      url: "https://www.instagram.com/jomana_henna__artist",
    },
    {
      id: "insta-p4",
      src: "/WhatsApp Image 2026-06-23 at 1.00.06 PM (3).jpeg",
      likes: "187",
      comments: "9",
      url: "https://www.instagram.com/jomana_henna__artist",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream/10 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-henna font-bold">
            Stay Connected
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate font-bold mt-2">
            Instagram Feed
          </h2>
          <p className="font-serif italic text-base text-henna mt-2">
            @jomana_henna__artist
          </p>
          <HennaDivider className="mt-4" />
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`instagram-feed-post-${post.id}`}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl aspect-square bg-cream border border-gold/15 shadow-md group cursor-pointer"
            >
              {/* Post Image */}
              <Image
                src={post.src}
                alt="Instagram henna post"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-w-768px) 50vw, 250px"
              />

              {/* Hover Stats Overlay */}
              <div className="absolute inset-0 bg-chocolate/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-cream">
                  <Heart className="w-5 h-5 fill-current text-gold" />
                  <span className="font-sans text-sm font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-cream">
                  <MessageCircle className="w-5 h-5 fill-current text-gold" />
                  <span className="font-sans text-sm font-semibold">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="https://www.instagram.com/jomana_henna__artist"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 py-4 px-8 text-sm uppercase tracking-wider font-semibold font-sans rounded-full bg-coffee text-cream hover:bg-chocolate hover:shadow-lg transition-all duration-300 border border-coffee text-center"
          >
            <InstaIcon className="w-5 h-5 text-gold" />
            Follow on Instagram
          </motion.a>
        </div>
      </div>
    </section>
  );
}
