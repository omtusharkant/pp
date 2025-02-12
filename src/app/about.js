// ./src/app/about.js
"use client"; // Add this directive
import { useState } from "react"; // import useState
import Masonry from "react-masonry-css";


const About = () => {
  const breakpointColumnsObj = {
    default: 2, // 3 columns on desktop
    1024: 2,    // 2 columns on tablet
    768: 2      // 1 column on mobile
  };
  return (
    <section id="about" className="container mx-auto max-w-screen-xl mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* About Content */}
        <div className="text-white flex flex-col justify-center w-full md:w-1/2 md:mr-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
            About Pabitra Photography
          </h1>
          <p className="text-base md:text-lg mt-2 md:mt-4 text-center md:text-left">
          At Pabitra Photography, we believe in capturing the essence of life through the lens. With a passion for storytelling, we specialize in creating stunning, timeless images that celebrate moments of beauty, emotion, and connection. Our team is dedicated to preserving your most cherished memories, whether it’s a wedding, a family gathering, a professional portrait, or a special event.

We take pride in our attention to detail and our ability to create an experience that makes every client feel at ease in front of the camera. Through a mix of candid shots and carefully composed photographs, we aim to tell your unique story with authenticity and artistry.

Driven by creativity and a deep understanding of light, composition, and emotion, Pabitra Photography strives to exceed expectations, creating images that will be treasured for a lifetime. Whether you're looking for stunning portraits, captivating event photography, or beautiful wedding imagery, we’re here to make your moments unforgettable.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:max-w-[600px] rounded-lg mx-auto p-2 bg-black mb-6 md:mb-0">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto gap-4"
            columnClassName="masonry-column"
          >
            <img
              src="https://imgur.com/GXaT9MQ.jpeg"
              alt="Home"
              className="rounded-lg mb-4 grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
            />
            <img
              src="https://imgur.com/l5r5kCq.jpeg"
              alt="Car"
              className="rounded-lg mb-4 grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
            />
            <img
              src="https://imgur.com/idU1A0a.jpeg"
              alt="Harry Stickers"
              className="rounded-lg mb-4 grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
            />
            <img
              src="https://imgur.com/03xDuBj.jpeg"
              alt="Image"
              className="rounded-lg mb-4 grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(255,_8,_0,_1),_10px_10px_rgba(200,_98,_90,_0.9),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
            />
          </Masonry>
        </div>
      </div>
    </section>

  );
}

export default About;