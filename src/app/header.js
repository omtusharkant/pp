// ./src/app/header.js

"use client"; // Add this directive

import { FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react"; // import useState

import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const router = useRouter();

  const portfolioredirect = () => {
    router.push("/portfolio", undefined, { shallow: false, replace: true });
  };
  return (
    <header className="bg-[rgb(0,0,3)] fixed top-0 w-full z-50">
      <nav className="container  mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name (Optional) */}
        <div className="text-white text-2xl font-bold">
          PP
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} className="text-white" />
        </div>

        {/* Navigation Menu */}
        <ul className={`md:flex space-x-6 justify-end md:items-center md:static absolute top-16 left-0 w-full md:w-auto bg-black-800 md:bg-transparent md:flex-row flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li>
            <a  href="/portfolio" className="text-white hover:text-gray-400">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/people/Pabitra-Photography/100072265877971/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pabitra__photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
