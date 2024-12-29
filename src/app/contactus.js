"use client"; // Add this directive
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contactus = () => {
    return (
        <section id="contact" className="container mx-auto max-w-screen-xl mt-10 p-4">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Image Content */}
                <div className="text-white flex flex-col items-center md:items-start w-full md:w-1/2">
                    <img
                        src="/ㅐ.jpg"
                        alt="Image"
                        className="rounded-lg mb-4 grayscale hover:grayscale-0 hover:shadow-[5px_5px_rgba(255,_8,_0,_1),_10px_10px_rgba(200,_98,_90,_0.9),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] transition-all duration-300"
                    />
                </div>

                {/* Input Section */}
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">
                    {/* Form Card */}
                    <div className="form flex-1 h-auto rounded-md shadow-xl p-4 sm:p-6 bg-[#DFA16A] flex flex-col items-center justify-center gap-3 sm:gap-4">
                        <p className="text-xl sm:text-2xl font-semibold text-[#7F3D27] pb-2 sm:pb-3">
                            Get Contact
                        </p>
                        <form className="w-full flex flex-col gap-3 sm:gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm sm:text-base text-[#7F3D27] font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="border-b-2 border-[#7F3D27] focus:outline-none text-[#7F3D27] bg-transparent text-xs sm:text-sm py-1"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-sm sm:text-base text-[#7F3D27] font-semibold">
                                    Phone No
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Your Phone No"
                                    className="border-b-2 border-[#7F3D27] focus:outline-none text-[#7F3D27] bg-transparent text-xs sm:text-sm py-1"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-sm sm:text-base text-[#7F3D27] font-semibold">
                                    Message
                                </label>
                                <textarea
                                    rows="2"
                                    placeholder="Enter Your Message"
                                    className="border-b-2 border-[#7F3D27] focus:outline-none text-[#7F3D27] bg-transparent text-xs sm:text-sm py-1 resize-none"
                                ></textarea>
                            </div>
                            <button className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-md bg-[#7F3D27] text-white hover:scale-105 transition-transform">
                                Send Message
                            </button>
                        </form>
                    </div>


                    {/* Contact Info Card */}
                    <div className="form flex-1 h-auto rounded-md shadow-xl p-6 bg-[#DFA16A] flex flex-col items-center justify-center gap-4">
                        <p className="text-2xl font-semibold text-[#7F3D27] pb-2">Contact Us</p>
                        <div className="flex flex-col w-full gap-3">
                            <div>
                                <p className="text-sm font-semibold text-[#7F3D27]">Name</p>
                                <p className="text-[#7F3D27]">Pabitra</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#7F3D27]">Phone No</p>
                                <p className="text-[#7F3D27]">+91 5864812354834</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#7F3D27]">Phone 2</p>
                                <p className="text-[#7F3D27]">+91 452163358166</p>
                            </div>
                        </div>
                        <button className="px-6 py-2 text-xs font-semibold rounded-md bg-[#7F3D27] text-white hover:scale-105 transition-transform">
                            Contact Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center items-center mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaFacebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                    <FaInstagram size={20} />
                </a>
            </div>
        </section>
    );
};

export default Contactus;
