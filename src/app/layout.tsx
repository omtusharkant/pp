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
  title: "Pp",
  description: "A team to capture your smile",
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
