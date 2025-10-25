import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Navigation aur Pagination ko modules se hata diya hai
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// Navigation aur Pagination ka CSS bhi hata diya hai
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import {
    Tv, Wind, ShowerHead,
    Zap, Car, Sparkles,
    Wifi, DollarSign, CheckSquare, Armchair, ZapOff,
    BedDouble, // Added icon
    Home,      // Added icon
    Users,     // Added icon
    Utensils   // Added icon
} from 'lucide-react'; // Importing relevant icons

const images = import.meta.glob("../assets/theroyalnexthomestay/*.{png,jpg,jpeg,svg}", { eager: true });
const royalImages = Object.values(images).map((img) => img.default);

const images2 = import.meta.glob("../assets/comfotinn/*.{png,jpg,jpeg,svg}", { eager: true });
const heritage = Object.values(images2).map((img) => img.default);

const images3 = import.meta.glob("../assets/eliehomestay/*.{png,jpg,jpeg,svg}", { eager: true });
const elite = Object.values(images3).map((img) => img.default);




// Data from your DOCX file
// ** UPDATE: Saare features ab 'features' array mein daal diye hain **
const roomsData = [
    {
        id: 'royal-nest',
        name: 'THE ROYAL NEST HOMESTAY',
        title: 'The Royal Nest Homestay',
        images: royalImages,
        description: 'Experience unparalleled luxury with our premium amenities and dedicated service. Perfect for those who seek the finest comfort.',
        features: [
            { icon: <Armchair className="text-yellow-700" size={32} />, text: 'Luxury interiors & furniture' },
            { icon: <Tv className="text-yellow-700" size={32} />, text: 'AC rooms with Smart TVs' },
            { icon: <ShowerHead className="text-yellow-700" size={32} />, text: 'Attached modern bathrooms' },
            { icon: <Zap className="text-yellow-700" size={32} />, text: '24x7 power backup' },
            { icon: <Car className="text-yellow-700" size={32} />, text: 'Private parking' },
            { icon: <Sparkles className="text-yellow-700" size={32} />, text: 'Daily housekeeping' },
        ]
    },
    {
        id: 'heritage-comfort',
        name: 'The Heritage Comfort Inn',
        title: 'The Heritage Comfort Inn',
        images:heritage,
        description: 'A perfect blend of comfort and heritage. Enjoy a cozy stay with great décor and essential amenities.',
        features: [
            { icon: <Home className="text-yellow-700" size={32} />, text: 'Comfortable rooms (good décor)' },
            { icon: <Wind className="text-yellow-700" size={32} />, text: 'AC / Air cooler' },
            { icon: <ShowerHead className="text-yellow-700" size={32} />, text: 'Attached bathroom (hot water)' },
            { icon: <Wifi className="text-yellow-700" size={32} />, text: 'Wi-Fi' },
            { icon: <Car className="text-yellow-700" size={32} />, text: 'Parking space' },
            { icon: <Users className="text-yellow-700" size={32} />, text: 'Clean & spacious common area' },
        ]
    },
    {
        id: 'elite-homestay',
        name: 'Elite Homestay',
        title: 'Elite Homestay',
        images:elite,
        description: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay.',
        features: [
            { icon: <BedDouble className="text-yellow-700" size={32} />, text: 'Neat and basic rooms' },
            { icon: <Wind className="text-yellow-700" size={32} />, text: 'Air conditions' },
            { icon: <CheckSquare className="text-yellow-700" size={32} />, text: 'Shared/attached clean bathrooms' },
            { icon: <Armchair className="text-yellow-700" size={32} />, text: 'Basic furniture' },
            { icon: <Utensils className="text-yellow-700" size={34} />, text: 'Nearby restaurant access' },
            { icon: <DollarSign className="text-yellow-700" size={32} />, text: 'Budget-friendly' },
        ]
    }
];

const RoomsOffer = () => {
    // We use the 'name' from roomsData as the default active tab
    const [activeTab, setActiveTab] = useState(roomsData[0].name);

    // Find the currently active room data
    const activeRoom = roomsData.find(room => room.name === activeTab);

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12">
                    Best Offer on Our Rooms
                </h2>

                {/* Tabs Navigation */}
                <div className="flex justify-center border-b border-gray-300 mb-12 overflow-x-auto">
                    {roomsData.map((room) => (
                        <button
                            key={room.id}
                            onClick={() => setActiveTab(room.name)}
                            className={`flex-shrink-0 px-4 sm:px-8 py-4 text-sm sm:text-lg font-medium outline-none transition-all duration-300 ${activeTab === room.name
                                ? 'text-yellow-600 border-b-2 border-yellow-600'
                                : 'text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            {room.name.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeRoom && (
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Left Side: Image Slider */}
                        <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
                            <Swiper
                                // modules se Navigation aur Pagination hata diye hain
                                modules={[Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                // navigation prop hata diya hai
                                // pagination prop hata diya hai
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="w-full h-[400px]" // Slider ko fixed height di hai
                            >
                                {activeRoom.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`${activeRoom.title} image ${index + 1}`}
                                            className="w-full h-full rounded-lg bg-black"
                                            style={{ objectFit: "contain", objectPosition: "center" }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* 10+ ROOMS waala box yahaan se hata diya hai */}
                        </div>

                        {/* Right Side: Details */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
                                {activeRoom.title}
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {activeRoom.description}
                            </p>
                            {/* Features Icons */}
                            {/* UPDATE: Grid ko 'grid-cols-2' se 'sm:grid-cols-3' kar diya hai taaki 6 items sahi se fit ho */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mb-10">
                                {activeRoom.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                                    >
                                        {feature.icon}
                                        <p className="text-sm text-gray-700 mt-2">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="w-full sm:w-auto text-center bg-yellow-600 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-700 transition-all duration-300 shadow-md"
                                >
                                    BOOK NOW
                                </Link>
                                <Link
                                    to={`/rooms/${activeRoom.id}`}
                                    className="w-full sm:w-auto text-center border border-gray-800 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
                                >
                                    VIEW DETAIL
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RoomsOffer;

