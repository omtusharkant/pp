"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/app/header';
import Marquee from 'react-fast-marquee';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingS from "@/app/loading"
import About from "@/app/about"
import Clientsreview from "@/app/clientsreview";
import Contactus from "@/app/contactus";
import Image from "next/image";
import NavigationHandler from '@/app/components/ContactNavigationHandler';

export default function Home() {
 

  return (
    <>
      <NavigationHandler />
      <main className="bg-black pt-16 custom-scrollbar">
      
      <Header />
      
        <section id="home" className="container mb-10 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8">
        
          {/* Image - Fixed layout shift with explicit dimensions and aspect ratio */}
          <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-2">
            <div className="relative w-full max-w-sm sm:max-w-xs aspect-[3/4] min-h-[300px]">
              <img
                src="https://imgur.com/SM5vVbR.jpeg"
                alt="Best Photography Studio in Berhampur - Professional Photo Services by Pabitra Photography"
                width={400}
                height={533}
                loading="eager"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-white flex flex-col justify-start w-full md:w-1/2 px-4 md:px-0">
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Pabitra Photography
            </h1>
            <p className="text-base md:text-lg mt-2 md:mt-4 text-center md:text-left">
              Welcome to Pabitra Photography, Berhampur's leading professional photo studio. We specialize in wedding photography, portrait sessions, and capturing life's precious moments with artistic excellence.
            </p>
            <div className="mt-4 text-sm md:text-base text-gray-300">
              <p>✓ Professional Wedding Photography</p>
              <p>✓ Portrait & Family Photography</p>
              
              <p>✓ Event Coverage</p>
              <p>✓ Studio Photography</p>
            </div>
          </div>

        </section>

        {/* Marquee Section */}
        <section className="bg-white" aria-label="Featured Services">
          <Marquee speed={40} gradientWidth={50}>
            <div className="text-black text-center flex justify-center p-2 space-x-4">
              {Array(3).fill(null).map((_, index) => (
                <span key={index} className="font-medium text-3xl flex items-center">
                  <div className="w-20 h-20">
                    <DotLottieReact
                      src="https://lottie.host/389f49d9-f1c0-4c6c-88c1-969a1dfc2e6e/vtyYNdN8tO.lottie"
                      loop
                      autoplay
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  Professional Photography Services in Berhampur
                </span>
              ))}
            </div>
          </Marquee>
        </section>
        <About />
        <Clientsreview />
        <Contactus/>
      </main>
      
    </>
  );
}
