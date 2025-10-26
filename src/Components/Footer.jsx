import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Social Icons
import img3 from "../assets/comfotinn/IMG-20251025-WA0036.jpg"
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>
            {/* --- Top CTA Section (Aapke naye image jaisa) --- */}
            <section
                className="py-24 h-[97vh] md:py-32 text-center relative bg-cover bg-center"
                // ** Yahaan apni full-width background image daalein **
                // Example: style={{ backgroundImage: "url('/path/to/your-hero-image.jpg')" }}
                style={{ backgroundImage: `url(${img3})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        Book Now to Experience <br /> Heritage Luxury and <br /> Peaceful Comfort at WeJai Global!
                    </h2>
                    <p className="text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Experience the charm of Jaipur like never before at WeJai Global. Book your stay now and enjoy the perfect blend of Rajasthani heritage and modern comfort. Whether you're planning a family vacation, a romantic getaway, or a cultural escape, our beautifully designed space offers peaceful comfort in the heart of the Pink City.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-gray-800 px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
                    >
                        CONTACT US
                    </Link>
                </div>
            </section>

            <footer className="bg-gray-950 text-gray-400 py-16">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

                        {/* --- Column 1: Logo & About --- */}
                        <div>
                            <div className='flex items-center'>
                                <img src={logo} alt="logo" className='h-18 mb-7' />
                                <h3 className="text-3xl font-serif font-bold text-white mb-4 tracking-wide">
                                    WeJai Global
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed mb-5 text-gray-400">
                                Experience the charm of Rajasthan with <br /> WeJai Global - blending heritage luxury and modern comfort for an unforgettable stay.
                            </p>

                        </div>

                        {/* --- Column 2: Quick Links --- */}
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-semibold text-white mb-5 uppercase tracking-wide">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About", path: "/about" },
                                    { name: "Rooms", path: "/rooms" },
                                    { name: "Restaurant", path: "/restaurant" },
                                    { name: "Contact", path: "/contact" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="hover:text-yellow-400 transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* --- Column 3: Contact Info --- */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-5 uppercase tracking-wide">
                                Contact Information
                            </h4>
                            <address className="not-italic text-sm space-y-4">
                                <p className="flex items-start gap-2">
                                    📍
                                    <span>
                                        B 14 15 SF R TECH CAPITAL MALL, <br />
                                        JAGATPURA, JAIPUR - 302017
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    ✉️
                                    <a
                                        href="mailto:booking@wejai.in"
                                        className="hover:text-yellow-400 transition-colors duration-300"
                                    >
                                        booking@wejai.in
                                    </a>
                                </p>
                                <p className="text-sm text-gray-300">
                                    <span className="font-semibold text-yellow-400">GSTIN:</span> 08CVSPA9466M1ZN
                                </p>
                            </address>
                        </div>
                    </div>

                    {/* --- Bottom Bar --- */}
                    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} WeJai Global. All rights reserved.</p>
                        <p className="mt-3 md:mt-0">
                            Crafted with ❤️ by <span className="text-yellow-400 font-medium">WeJai Team</span>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;

