import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import About from "@/app/about"
import Services from "@/app/services";
import Contactus from "@/app/contactus";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pp",
  description: "A team to capture your smile",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white `}
      >
        
        
        <main className="bg-black pt-16">
          {children}
        </main>
        <About />
        <Services />
        <Contactus/>
      </body>
    </html>
  );
}
