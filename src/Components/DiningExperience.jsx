import React from 'react';
import { Check } from 'lucide-react'; // Icon
import img1 from "../assets/theroyalnexthomestay/IMG-20251025-WA0011.jpg";
import img2 from "../assets/theroyalnexthomestay/IMG-20251025-WA0012.jpg";


const DiningExperience = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left Content Area */}
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                            Our Dining Experience
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Whether you're starting your day with a hearty breakfast or unwinding with a
                            delicious meal, our restaurant is the perfect place for every occasion.
                            We serve a variety of authentic Indian and local dishes, all made with fresh
                            ingredients and traditional flavors.
                        </p>
                        
                        {/* Features List */}
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Check className="text-yellow-600" size={20} />
                                <span className="text-gray-700 font-medium">Pure Vegetarian Cuisine</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-yellow-600" size={20} />
                                <span className="text-gray-700 font-medium">Authentic Local Dishes</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Check className="text-yellow-600" size={20} />
                                <span className="text-gray-700 font-medium">Family-Friendly Ambience</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image Collage Area */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
                        {/* Main Image (Dining Area) */}
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gray-200 shadow-lg overflow-hidden">
                            {/* Replace with your actual image */}
                            <img 
                                src={img1} 
                                alt="Dining Area" 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        {/* Smaller Image (Buffet) */}
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-300 shadow-lg overflow-hidden border-4 border-white">
                            {/* Replace with your actual image */}
                            <img 
                                src={img2} 
                                alt="Buffet Setup" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiningExperience;