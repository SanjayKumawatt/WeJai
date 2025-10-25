import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-10 bg-transparent py-6">
            <nav className="container mx-auto flex items-center justify-between px-7">
                <div className="flex items-center">
                    {/* Placeholder for your 'BI' logo image */}
                    {/* Yahaan apni 'BI' logo image ka path daalein */}
                    <img src={logo} alt="BI Logo" className="h-18 " /> 
                    {/* Font ko default sans-serif par waapis kar diya hai */}
                    <Link to="/" className="text-white text-2xl"> 
                        WeJai Global {/* Text changed as per your HomeHero */}
                    </Link>
                </div>

                <div className="hidden md:flex space-x-2 font-medium"> {/* Space adjusted */}
                    {/* font-serif hata diya hai */}
                    <Link to="/" className="text-white px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">HOME</Link>
                    <Link to="/about" className="text-white px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">ABOUT</Link>
                    <Link to="/rooms" className="text-white px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">ROOMS</Link>
                    <Link to="/restaurant" className="text-white px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">RESTAURANT</Link>
                    <Link to="/contact" className="text-white px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">CONTACT</Link>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-80 py-4">
                    <div className="flex flex-col items-center space-y-4">
                        {/* font-serif yahaan se bhi hata diya hai */}
                        <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>HOME</Link>
                        <Link to="/about" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>ABOUT</Link>
                        <Link to="/rooms" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>ROOMS</Link>
                        <Link to="/restaurant" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>RESTAURANT</Link>
                        <Link to="/contact" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={() => setIsOpen(false)}>CONTACT</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

