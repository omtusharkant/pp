"use client";
import { Suspense } from 'react';
import Header from '@/app/header';
import Marquee from 'react-fast-marquee';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
  
  
  return (
    <>
      <main className="bg-black pt-16">
        <section id="home" className="container mb-10 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8">

        <Suspense fallback={<p>Loading feed...</p>}>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/home.jpg"
              alt="Home Image"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg md:max-w-sm"
            />
          </div>
          </Suspense>

          {/* Text Content */}
          <div className="text-white flex flex-col justify-start w-full md:w-1/2">
            <h1 className="text-4xl font-bold">Pabitra Photography</h1>
            <p className="text-lg mt-4">
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
                      src="https://lottie.host/dd978b12-4398-46b8-84d8-4465cb12dc32/5l0LctwYnU.lottie"
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

      </main>
    </>
  );
}
