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
            <section>Our Clients</section>


            
            {/* Marquee Section */}
            <section className="bg-white ">
                <Marquee>
                    <div className="text-black text-center flex justify-center p-2 space-x-4">
                        {Array(9).fill(null).map((_, index) => (
                            <span key={index} className="font-medium text-3xl flex  items-center">
                                {/* Wrapping Lottie animation with a div to control size */}
                                <div className="w-20 h-20"> {/* Adjust size here */}
                                    <DotLottieReact
                                        src="https://lottie.host/1679ff34-e223-4774-a01d-5ea99ccec5f9/hg8bYsEeG0.lottie"
                                        loop
                                        autoplay
                                    />
                                </div>
                                Lets start Capturing Today
                            </span>
                        ))}
                    </div>
                </Marquee>
            </section>

        </section>
    );
}

export default Clientsreview;