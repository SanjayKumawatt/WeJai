import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Crown, Handshake, Utensils } from 'lucide-react'; // Icons
import img1 from "../assets/aboutsection/img1.jpg";
import img2 from "../assets/aboutsection/img2.jpg";


const AboutSection = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Content Area */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                        We can help you feel <br /> more comfortable
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Located at: <span className="font-semibold">Address- B 14 15 SF R TECH CAPITAL MALL, JAGATPURA JAIPUR 302017</span>, just minutes from the famous tourist spots of Jaipur. <span className="font-semibold">WeJai Global</span> invites you to experience heritage hospitality with modern comfort. As one of the best heritage hotels in Jaipur, Rajasthan, we offer beautifully designed rooms, a rooftop restaurant with fort views, and personalized service for every guest.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div className="flex items-center space-x-3">
                            <MapPin className="text-yellow-600" size={24} />
                            <p className="text-gray-700 font-medium">Prime Location</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Crown className="text-yellow-600" size={24} />
                            <p className="text-gray-700 font-medium">Luxury Lifestyle</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Handshake className="text-yellow-600" size={24} />
                            <p className="text-gray-700 font-medium">Friendly Services</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Utensils className="text-yellow-600" size={24} />
                            <p className="text-gray-700 font-medium">Beautiful Rooftop Dining</p>
                        </div>
                    </div>

                    <Link 
                        to="/about" 
                        className="inline-block border border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium"
                    >
                        ABOUT US
                    </Link>
                </div>

                {/* Right Image Collage Area */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
                    {/* Main Image */}
                    <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-200 shadow-lg overflow-hidden">
                        {/* Replace with your actual image */}
                        <img src={img1} alt="Hotel Interior Main" className="w-full h-full object-cover" />
                    </div>

                    {/* Smaller Image */}
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-300 shadow-lg overflow-hidden">
                        {/* Replace with your actual image */}
                        <img src={img2} alt="Hotel Interior Secondary" className="w-full h-full object-cover" />
                    </div>

                   
                </div>
            </div>
        </section>
    );
};

export default AboutSection;