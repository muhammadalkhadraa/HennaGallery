import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <Instagram />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
