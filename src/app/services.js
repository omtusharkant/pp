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

const Services = () => {

    return (
        <section id="services">
            <section className="container mx-auto max-w-screen-xl mt-10">

                {/* About Content */}
                <div className="text-white w-full text-center">
                    <h1 className="text-4xl font-bold">Services Pabitra Photography offers</h1>
                </div>

                {/*Service cards*/}
                <div className="container mx-auto max-w-full p-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">

                    <Card className="bg-gradient-to-br from-[#CD7F32] to-[#8C6239] text-white p-6 rounded-md shadow-lg">
                    <img
              src="/home.jpg"
              alt="Home Image"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg md:max-w-sm"
            />
    <h1 className="text-3xl font-bold text-center mt-2 tracking-wider uppercase text-yellow-50">
        Bronze
    </h1>
</Card>

                    <Card className="bg-[#FFA07A] rounded-md">
                        Silver
                    </Card>
                    <Card className="bg-[#FFA07A] rounded-md">
                        Gold
                    </Card>


                        
                    </div>
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

export default Services;