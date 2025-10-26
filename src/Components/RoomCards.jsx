import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Home } from 'lucide-react'; // Icons
import img1 from "../assets/theroyalnexthomestay/IMG-20251025-WA0003.jpg";
import img2 from "../assets/comfotinn/IMG-20251025-WA0020.jpg";
import img3 from "../assets/eliehomestay/IMG-20251025-WA0028.jpg";

// Data combining your previous docx and new image details
const roomCardsData = [
    {
        name: 'THE ROYAL NEST HOMESTAY',
        image: img1,
        roomCount: '15+',
        guests: '2 Guests',
        description: 'Our premium homestay with luxury interiors, smart TVs, and attached modern bathrooms. All essential amenities for a restful stay.',
        rating: 5,
        id: 'royal-nest' // for the link
    },
    {
        name: 'The Heritage Comfort Inn',
        image: img2,
        roomCount: '5+',        guests: '4 Guests',
        description: 'Blending modern comfort with traditional décor. This room offers more space, Wi-Fi, and hot water for a relaxed experience.',
        rating: 4,
        id: 'heritage-comfort' // for the link
    },
    {
        name: 'Elite Homestay',
        image: img3,
        roomCount: '5+',
        guests: '4 Guests',
        description: 'Perfect for families or groups, this spacious room ensures everyone stays together with comfort and convenience. Budget-friendly.',
        rating: 3,
        id: 'elite-homestay' // for the link
    }
];

// Star Rating Component
const StarRating = ({ rating }) => {
    return (
        <div className="flex text-yellow-500">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
                <Star key={i} size={16} className="text-gray-600" />
            ))}
        </div>
    );
};

// Main Card Component
const RoomCardItem = ({ card }) => {
    // Determine background color based on name
    const isFeatured = card.name === 'THE ROYAL NEST HOMESTAY';
    const bgColor = isFeatured ? 'bg-[#0F0F0F]' : 'bg-white';
    const textColor = isFeatured ? 'text-gray-300' : 'text-gray-600';
    const titleColor = isFeatured ? 'text-white' : 'text-gray-800';

    return (
        <div className={`flex flex-col rounded-lg shadow-lg overflow-hidden border ${isFeatured ? 'border-gray-700' : 'border-gray-200'}`}>
            {/* Image container */}
            <div className="relative">
                <img src={card.image} alt={card.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-md shadow-lg">
                    <p className="font-bold text-xl">{card.roomCount}</p>
                    <p className="text-sm">Rooms</p>
                </div>
            </div>
            
            {/* Content container */}
            <div className={`p-6 flex flex-col flex-grow ${bgColor}`}>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${titleColor}`}>{card.name}</h3>
                
                {/* Meta info */}
                <div className={`flex items-center gap-4 mb-4 text-sm ${textColor}`}>
                    <div className="flex items-center gap-1">
                        <Home size={16} />
                        <span>{card.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{card.guests}</span>
                    </div>
                </div>

                <p className={`mb-6 flex-grow ${textColor}`}>
                    {card.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <Link
                        to={`/rooms/${card.id}`}
                        className="bg-yellow-600 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-700 transition-all duration-300 shadow-md"
                    >
                        BOOK NOW
                    </Link>
                    <StarRating rating={card.rating} />
                </div>
            </div>
        </div>
    );
};

// Section Component
const RoomCards = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomCardsData.map((card) => (
                        <RoomCardItem key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomCards;