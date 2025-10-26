import React from 'react';
import { Link } from 'react-router-dom';
import {
    Check, Bed, Sofa, Wine, Wifi,
    Lock, ConciergeBell, Car, ShowerHead, Sparkles,
    Wind, Users, Home, Utensils, DollarSign, BedDouble,
    Armchair, // Added icon
    CheckSquare // Added icon
} from 'lucide-react';

import img from "../assets/theroyalnexthomestay/IMG-20251025-WA0007.jpg";



const images3 = import.meta.glob("../assets/eliehomestay/*.{png,jpg,jpeg,svg}", { eager: true });
const elite = Object.values(images3).map((img) => img.default);


// Data specifically for "Elite Homestay"
const room = {
    id: 'elite-homestay',
    name: 'Elite Homestay',
    title: 'Elite Homestay',
    heroDescription: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay.',
    images: elite,
    inRoomComforts: {
        title: 'In-Room Comforts',
        description: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay. Features basic furniture and nearby restaurant access.',
        features: [
            'Neat and basic rooms',
            'Air conditions',
            'Shared or attached clean bathrooms',
            'Basic furniture',
            'Nearby restaurant access'
        ],
        amenitiesCount: '5+',
        roomServicesCount: '3+'
    },
    primaryAmenities: [
        { icon: <BedDouble size={32} />, text: 'Neat and basic rooms' },
        { icon: <Wind size={32} />, text: 'Air conditions' },
        { icon: <CheckSquare size={32} />, text: 'Clean bathrooms' },
        { icon: <Armchair size={32} />, text: 'Basic furniture' },
        { icon: <Utensils size={32} />, text: 'Nearby restaurant' },
        { icon: <DollarSign size={32} />, text: 'Budget-friendly' },
        { icon: <Sparkles size={32} />, text: 'Clean Rooms' },
        { icon: <Wifi size={32} />, text: 'Wi-Fi Available' },
    ]
};

// 'EliteHomestayPage' component
const EliteHomestayPage = () => {

    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section
                className="h-[60vh] md:h-[90vh] text-white relative bg-cover bg-center flex items-center justify-center"
                // ** Yahaan 'Contact' page ki background image daalein **
                style={{ backgroundImage: `url(${img}) ` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                        Elite Homestay                           </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay.
                    </p>
                </div>
            </section>

            {/* 2. In-Room Comforts Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                            {room.inRoomComforts.title}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {room.inRoomComforts.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {room.inRoomComforts.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check className="text-yellow-600" size={20} />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-8 mb-8">
                            <div>
                                <p className="text-3xl font-bold text-yellow-600">{room.inRoomComforts.amenitiesCount}</p>
                                <p className="text-gray-500">AMENITIES</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-yellow-600">{room.inRoomComforts.roomServicesCount}</p>
                                <p className="text-gray-500">ROOM SERVICES</p>
                            </div>
                        </div>
                        <Link
                            to="/booking"
                            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-700 transition-all duration-300 shadow-md"
                        >
                            BOOK ROOM
                        </Link>
                    </div>
                    {/* Right Image */}
                    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={room.images[0]}
                            alt={room.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 3. Primary Room Amenities Section */}
            <section className="bg-gray-800 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Our Primary Room Amenities and Services
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                        We provide top-notch services and amenities to ensure your stay
                        is comfortable and memorable.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {room.primaryAmenities.map((amenity, index) => (
                            <div key={index} className="flex flex-col items-center p-4">
                                <div className="p-4 bg-gray-700 rounded-full mb-3">
                                    {React.cloneElement(amenity.icon, { className: 'text-yellow-500' })}
                                </div>
                                <p className="font-medium text-center">{amenity.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Scenic Surroundings Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
                        Scenic Surroundings from Your Room
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {room.images.map((img, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={img}
                                alt={`View ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EliteHomestayPage;