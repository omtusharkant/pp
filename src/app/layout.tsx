import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/app/components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Photography Studio in Berhampur | Professional Photo & Video Services",
  description: "Premier photography studio in Berhampur offering professional photo shoots, wedding photography, portrait sessions, and commercial photography. Capture your precious moments with our expert photographers.",
  keywords: "Berhampur photo studio, best photography in Berhampur, wedding photographer Berhampur, professional photography studio, portrait photography, commercial photography, photo studio near me, Odisha photography",
  openGraph: {
    title: "Best Photography Studio in Berhampur | Professional Photo Services",
    description: "Premier photography studio in Berhampur offering professional photo shoots, wedding photography, portrait sessions, and commercial photography.",
    type: "website",
    locale: "en_IN",
    siteName: "PP Photography Studio Berhampur",
    images: [
      {
        url: "https://imgur.com/SM5vVbR.jpeg",
        width: 1200,
        height: 630,
        alt: "PP Photography Studio Berhampur"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Photography Studio in Berhampur | Professional Photo Services",
    description: "Premier photography studio in Berhampur offering professional photo shoots, wedding photography, portrait sessions, and commercial photography.",
    images: ["https://imgur.com/SM5vVbR.jpeg"]
  },
  icons: {
    icon: "https://imgur.com/SM5vVbR.jpeg",
    apple: "https://imgur.com/SM5vVbR.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://imgur.com/SM5vVbR.jpeg"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar bg-black text-white`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
