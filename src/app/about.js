// ./src/app/about.js
"use client"; // Add this directive
import { useState } from "react"; // import useState
import Masonry from "react-masonry-css";
import Image from "next/image";
import dynamic from 'next/dynamic'

const DynamicMarquee = dynamic(() => import('react-fast-marquee'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

const About = () => {
  const breakpointColumnsObj = {
    default: 2, // 2 columns on desktop
    1024: 2,    // 2 columns on tablet
    768: 2      // 2 columns on mobile
  };
  
  // Define image dimensions to prevent layout shifts
  const imageData = [
    { src: "https://imgur.com/GXaT9MQ.jpeg", alt: "Couple", width: 600, height: 400 },
    { src: "https://imgur.com/l5r5kCq.jpeg", alt: "prewedding", width: 600, height: 400 },
    { src: "https://imgur.com/idU1A0a.jpeg", alt: "beach photography", width: 600, height: 400 },
    { src: "https://imgur.com/03xDuBj.jpeg", alt: "beach shoot", width: 600, height: 400 }
  ];
  
  return (
    <section id="about" className="container mx-auto max-w-screen-xl mt-10 px-4 min-h-[600px]">
      <div className="flex flex-col md:flex-row items-center">
        {/* About Content */}
        <div className="text-white flex flex-col justify-center items-center w-full md:w-1/2 md:mr-10">
          <h1 className="text-2xl md:text-4xl creative-underline font-bold text-center md:text-left">
            About Pabitra Photography
          </h1>
          <p className="text-base md:text-lg mt-2 md:mt-4 text-center md:text-left">
        At Pabitra Photography, we capture life's precious moments with artistry and passion. As Berhampur's premier photography studio, we specialize in creating timeless images for weddings, family gatherings, professional portraits, and special events. Our team excels in both candid and composed shots, ensuring every client feels comfortable while we tell their unique story through our lens.

        With our expertise in lighting, composition, and emotional storytelling, we create lasting memories that exceed expectations. From stunning portraits to captivating event coverage in Berhampur, we're dedicated to making your special moments truly unforgettable.
    </p>
          
        </div>

        {/* Image Section - Fixed width and height to prevent layout shifts */}
        <div className="w-full md:w-1/2 md:max-w-[600px] rounded-lg mx-auto p-2 bg-black mb-6 md:mb-0 h-auto min-h-[400px]">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto gap-4"
            columnClassName="masonry-column"
          >
            {imageData.map((img, index) => (
              <div 
                key={index} 
                className="relative mb-4"
                style={{ 
                  width: '100%',
                  
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  
                  className="rounded-lg w-full h-full object-cover grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(255,_8,_0,_1),_10px_10px_rgba(200,_98,_90,_0.9),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}

export default About;