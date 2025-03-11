"use client"; // Add this directive
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Loading from "@/app/loading"
import React, { useState, useEffect } from 'react';
import LoadingS from "@/app/loading"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Best Photography Studio in Berhampur | Professional Photo & Video Services",
  description: "Premier photography studio in Berhampur offering professional photo shoots, wedding photography, portrait sessions, and commercial photography. Capture your precious moments with our expert photographers.",
  keywords: "Berhampur photo studio, best photography in Berhampur, wedding photographer Berhampur, professional photography studio, portrait photography, commercial photography, photo studio near me, Odisha photography",
  openGraph: {
    title: "Best Photography Studio in Berhampur | Professional Photo Services",
    description: "Premier photography studio in Berhampur offering professional photo shoots, wedding photography, portrait sessions, and commercial photography.",
    type: "website",
    locale: "en_IN",
    siteName: "PP Photography Studio Berhampur"
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate a delay for demonstration purposes
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Change this value to control the loading animation duration
    }, []);
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar bg-black text-white `}
      >
        {loading && <LoadingS />}
              {!loading && (
        
        <main className="bg-black pt-16">
          {children}
        </main>
              )}
      </body>
    </html>
  );
}
