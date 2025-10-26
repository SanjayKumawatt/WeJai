import React from 'react';
// UPDATE: useParams aur Navigate ko hata diya hai
import { Link } from 'react-router-dom';
import {
    Check, Bed, Sofa, Wine, Wifi,
    Lock, ConciergeBell, Car, ShowerHead, Sparkles,
    Wind, Users, Home // Doosre rooms ke liye icons (agar data change karein)
} from 'lucide-react';

import img from "../assets/theroyalnexthomestay/IMG-20251025-WA0007.jpg";


const images = import.meta.glob("../assets/theroyalnexthomestay/*.{png,jpg,jpeg,svg}", { eager: true });
const royalImages = Object.values(images).map((img) => img.default);


// Data ko naye design ke hisaab se update kar diya hai
const roomsData = [
    {
        id: 'royal-nest',
        name: 'THE ROYAL NEST HOMESTAY',
        title: 'The Royal Nest Homestay',
        heroDescription: 'Our Standard Room offers comfort and convenience at an affordable price. Perfect for solo travelers or short stays, it includes all essential amenities in a cozy, heritage-inspired setting.',
        images: royalImages,
        inRoomComforts: {
            title: 'In-Room Comforts',
            description: 'Experience true comfort with our well-designed rooms, modern amenities, and dedicated service that make you feel right at home.',
            features: [
                'Spacious room with attached modern bathroom',
                'Complimentary Wi-Fi and Smart TV for entertainment',
                'Daily housekeeping and room service'
            ],
            amenitiesCount: '10+',
            roomServicesCount: '10+'
        },
        primaryAmenities: [
            { icon: <Bed size={32} />, text: 'Premium Bed Quality' },
            { icon: <Sofa size={32} />, text: 'Spacious Living Space' },
            { icon: <Wine size={32} />, text: 'Minibar' },
            { icon: <Wifi size={32} />, text: 'Wi-Fi and Smart TV' },
            { icon: <Lock size={32} />, text: 'Electronic Safe' },
            { icon: <ConciergeBell size={32} />, text: '24/7 Room Service' },
            { icon: <Car size={32} />, text: 'Private Parking' },
            { icon: <ShowerHead size={32} />, text: 'Modern Geyser' },
        ]
    },
    // ... (Doosre rooms ka data yahaan hai, lekin yeh page use nahi karega)
];

// Naya 'RoomDetailPage' component
const RoomDetailPage = () => {
    // UPDATE: Page ko static bana diya hai, hamesha pehla room dikhayega
    const room = roomsData[0];

    // Agar room data nahi hai (jo ab nahi hoga, par safety ke liye)
    if (!room) {
        return <div>Room not found!</div>;
    }

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
                      The Royal Nest Homestay
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Our Standard Room offers comfort and convenience at an affordable price. Perfect for solo travelers or short stays, it includes all essential amenities in a cozy, heritage-inspired setting.
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
                            src={room.images[2]}
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

export default RoomDetailPage;