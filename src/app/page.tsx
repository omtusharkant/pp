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
export default function Home() {
 

  return (
    <>
      
      <main className="bg-black pt-16 custom-scrollbar">
      
      <Header />
      
        <section id="home" className="container mb-10 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8">
        

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-2">
            <img
              src="https://imgur.com/SM5vVbR.jpeg"
              alt="Home Image"
              className="w-full max-w-sm sm:max-w-xs rounded-lg shadow-lg transition-all duration-300"
            />
          </div>



          {/* Text Content */}
          <div className="text-white flex flex-col justify-start w-full md:w-1/2 px-4 md:px-0">
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              Pabitra Photography
            </h1>
            <p className="text-base md:text-lg mt-2 md:mt-4 text-center md:text-left">
              Welcome to Pabitra Photography. Capturing moments that last a lifetime.
            </p>
          </div>

        </section>

        {/* Marquee Section */}
        <section className="bg-white ">
          <Marquee>
            <div className="text-black text-center flex justify-center p-2 space-x-4">
              {Array(9).fill(null).map((_, index) => (
                <span key={index} className="font-medium text-3xl flex  items-center">
                  {/* Wrapping Lottie animation with a div to control size */}
                  <div className="w-20 h-20"> {/* Adjust size here */}
                    <DotLottieReact
                      src="https://lottie.host/389f49d9-f1c0-4c6c-88c1-969a1dfc2e6e/vtyYNdN8tO.lottie"
                      loop
                      autoplay
                    />
                  </div>
                  Capture your moments
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
