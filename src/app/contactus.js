// ./src/app/Contactus.js
"use client"; // Add this directive
import { useState } from "react"; // import useState

import { FaFacebook, FaInstagram, FaBars } from "react-icons/fa";

const Contactus = () => {

    return (
        <section id="contact" className="container mx-auto max-w-screen-xl mt-10">
            <div className="flex ">
                {/* Image Content */}
                <div className="text-white flex flex-col mr-20 justify-center w-full md:w-1/2">
                    <img
                        src="/ㅐ.jpg"
                        alt="Image"
                        className="rounded-lg mb-4 grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(255,_8,_0,_1),_10px_10px_rgba(200,_98,_90,_0.9),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
                    />


                </div>

                {/* Input Section */}
                <div className="max-w-full flex flex-1 items-center gap-3 justify-center min-h-screen bg-black p-4">
                    {/* From Uiverse.io by SmookyDev */}
                    <div
                        className="form w-[300px] max-w-lg h-[450px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-5 px-6 bg-[#DFA16A] flex flex-col items-center justify-center gap-3 transition-all duration-300"
                    >
                        <p
                            className="text-[#A15A3E] translate-x-[46%] -rotate-90 tracking-[20px] transition-all hover:translate-x-[50%] -translate-y-1/2 font-semibold text-2xl absolute right-0"
                        >
                            Welcome
                        </p>

                        <div className="capitalize w-full">
                            <p className="text-2xl text-[#7F3D27] pb-5 text-center">Get Contact</p>
                            <form action="" className="flex flex-col gap-3">
                                <div className="flex flex-col items-start w-full">
                                    <label htmlFor="name" className="text-sm text-[#7F3D27] font-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
                                    />
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <label htmlFor="phone" className="text-sm text-[#7F3D27] font-semibold">
                                        Phone No
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter Your Phone No"
                                        className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs appearance-none"
                                    />
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <label
                                        htmlFor="message"
                                        className="text-sm text-[#7F3D27] font-semibold"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Enter Your Message"
                                        rows="2"
                                        className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs resize-none"
                                    ></textarea>
                                </div>

                                <div className="inline-flex justify-center gap-5">
                                    <button
                                        className="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all text-[#D9D9D9] bg-[#7F3D27] shadow-[#7F3D27] shadow-lg"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* From Uiverse.io by SmookyDev */}
                    <div
                        className="form w-[300px] max-w-lg h-[450px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-5 px-6 bg-[#DFA16A] flex flex-col items-center justify-center gap-3 transition-all duration-300"
                    >
                        <p
                            className="text-[#A15A3E] translate-x-[46%] -rotate-90 tracking-[20px] transition-all hover:translate-x-[50%] -translate-y-1/2 font-semibold text-2xl absolute right-0"
                        >
                            Hello
                        </p>

                        <div className="capitalize w-full">
                            <p className="text-2xl text-[#7F3D27] pb-5 text-center">Contact Us</p>
                            <form action="" className="flex flex-col gap-3">
                                <div className="flex flex-col items-start w-full">
                                    <label htmlFor="name" className="text-sm text-[#7F3D27] font-semibold">
                                        Name
                                    </label>
                                    <label htmlFor="name" className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs">
                                        Pabitra
                                    </label>
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <label htmlFor="phone" className="text-sm text-[#7F3D27] font-semibold">
                                        Phone No
                                    </label>
                                    <label htmlFor="phone" className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs">
                                        +91 5864812354834
                                    </label>
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <label
                                        htmlFor="message"
                                        className="text-sm text-[#7F3D27] font-semibold"
                                    >
                                        Phone 2
                                    </label>
                                    <label htmlFor="name" className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs">
                                        +91 452163358166
                                    </label>
                                </div>

                                <div className="inline-flex justify-center gap-5">
                                    <button
                                        className="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all text-[#D9D9D9] bg-[#7F3D27] shadow-[#7F3D27] shadow-lg"
                                    >
                                        Contact Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>





            </div>

            <div
  className="flex gap-5  items-center justify-center h-10 w-auto"
   // Adjust the size as needed
>
  <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook size={20} />
              </a>

            <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FaInstagram size={20} />
                        </a>
</div>




        </section>
    );
}

export default Contactus;