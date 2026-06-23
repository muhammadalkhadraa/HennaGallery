import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jomana Henna Artist | Traditional Nubian & Bridal Henna Art",
  description: "Experience premium, handcrafted Nubian henna designs and luxurious bridal experiences in Egypt. Beautiful, traditional, and custom henna art by Jomana.",
  keywords: [
    "Jomana Henna",
    "Henna Artist Egypt",
    "Nubian Henna Art",
    "Bridal Henna designs",
    "Traditional Egyptian Henna",
    "Natural Henna artist",
    "Henna booking",
  ],
  authors: [{ name: "Jomana Henna Artist" }],
  openGraph: {
    title: "Jomana Henna Artist | Traditional Nubian & Bridal Henna Art",
    description: "Premium handcrafted Nubian henna designs and luxurious bridal experiences. Book your traditional art session with Jomana.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#3A2418", // Dark chocolate theme color
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col parchment-bg text-chocolate font-sans">
        {children}
      </body>
    </html>
  );
}
