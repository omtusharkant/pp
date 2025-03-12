// ./src/app/services.js
"use client"; // Add this directive
import { useState } from "react"; // import useState
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Marquee from 'react-fast-marquee';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Clientsreview = () => {

    return (
        <section id="services">
            <section></section>


            
            {/* Marquee Section */}
            <section className="bg-white">
                <Marquee speed={50} gradient={true} gradientWidth={50}>
                    <div className="text-black text-center flex justify-center p-2 space-x-4">
                        {Array(2).fill(null).map((_, index) => (
                            <span key={index} className="font-medium text-3xl flex items-center">
                                <div className="w-20 h-20">
                                    <DotLottieReact
                                        src="https://lottie.host/1679ff34-e223-4774-a01d-5ea99ccec5f9/hg8bYsEeG0.lottie"
                                        loop
                                        autoplay
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                                <span className="transform translate-z-0">Lets start Capturing Today</span>
                            </span>
                        ))}
                    </div>
                </Marquee>
            </section>

        </section>
    );
}

export default Clientsreview;