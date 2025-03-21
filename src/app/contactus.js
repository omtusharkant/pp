"use client"; // Add this directive
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";

const Contactus = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [imageDimensions, setImageDimensions] = useState({ width: 600, height: 400 });

    // Preload the image to get its dimensions
    useEffect(() => {
        const img = new window.Image();
        img.onload = () => {
            setImageDimensions({
                width: img.width,
                height: img.height
            });
        };
        img.src = "/ㅐ.jpg";
    }, []);

    const sendmsg = () => {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/+919777421390?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendmsg();
    };

    return (
        <section id="contact" className="container mx-auto max-w-screen-xl mt-10 p-4">
            <div className="flex flex-col items-center pb-4">
                <h1 className="font-bold text-4xl creative-underline">Contact US</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Image Content - Fixed layout shift with explicit dimensions */}
                <div className="text-white flex flex-col items-center md:items-start w-full md:w-1/2">
                    <div className="relative w-full aspect-[3/2] min-h-[300px]">
                        <img
                            src="https://imgur.com/VbjTtmW.jpeg"
                            alt="Contact Image"
                            width={imageDimensions.width}
                            height={imageDimensions.height}
                            loading="eager"
                            className="rounded-lg w-full h-full object-cover grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(255,_8,_0,_1),_10px_10px_rgba(200,_98,_90,_0.9),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Input Section */}
                <form className="w-full md:w-1/2 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-1/2 p-2 text-black btn border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="w-1/2 p-2 text-black btn border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-1/2 p-2 text-black btn border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Phone No"
                            className="w-1/2 p-2 btn text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="p-2 btn text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className="p-2 btn bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">Quote</button>
                </form>
            </div>
        </section>
    );
};

export default Contactus;