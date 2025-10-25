import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react'; // Icons

// Data for the room cards from your image
// ** UPDATE: roomData ko aapke photo waale naye data se replace kar diya hai **
const roomData = [
    {
        name: 'THE ROYAL NEST HOMESTAY',
        isFeatured: false, // Ise true kar sakte hain agar yeh featured hai
        features: [
            'Luxury interiors & furniture',
            'AC rooms with smart TVs',
            'Attached modern bathrooms',
            '24x7 power backup',
            'Private parking',
            'Daily housekeeping'
        ]
    },
    {
        name: 'The Heritage Comfort Inn',
        isFeatured: false,
        features: [
            'Comfortable rooms (good décor)',
            'AC / Air cooler',
            'Attached bathroom (hot water)',
            'Wi-Fi',
            'Parking space',
            'Clean & spacious common area'
        ]
    },
    {
        name: 'Elite Homestay',
        isFeatured: false,
        features: [
            'Neat and basic rooms',
            'Air conditions',
            'Shared or attached clean bathrooms',
            'Basic furniture',
            'Nearby restaurant access',
            'Budget-friendly'
        ]
    }
];

// Data for the FAQ
const faqData = [
    {
        question: 'What are the check-in and check-out timings at WeJai Global?',
        answer: 'Check-in from 2:00 PM onwards, and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability.'
    },
    {
        question: 'Is the hotel close to any bus/railway stations in Jaipur?',
        answer: 'Yes, the hotel is conveniently located near the main bus and railway stations.'
    },
    {
        question: 'Do you offer airport/railway station pickup?',
        answer: 'Yes, we offer complimentary pickup services from the airport and railway station. Please inform us in advance.'
    },
    {
        question: 'Are pets allowed in the hotel?',
        answer: 'Yes, we have a pet-friendly policy for certain rooms. Please contact us for details.'
    },
    {
        question: 'Is Wi-Fi available to all rooms?',
        answer: 'Yes, complimentary high-speed Wi-Fi is available in all rooms and public areas.'
    }
];

// Reusable Room Card Component
const RoomCard = ({ name, isFeatured, features }) => {
    return (
        <div className={`p-6 border rounded-lg ${
            isFeatured ? 'bg-gray-800 text-white shadow-lg' : 'bg-white border-gray-300'
        }`}>
            <h3 className="text-2xl font-serif font-bold mb-6">{name}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-sm">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Check className={isFeatured ? 'text-yellow-400' : 'text-yellow-600'} size={16} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link
                to="/contact"
                className={`w-full text-center block px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isFeatured 
                        ? 'bg-white text-gray-800 hover:bg-gray-200' 
                        : 'bg-yellow-600 text-white hover:bg-yellow-700'
                }`}
            >
                BOOK NOW
            </Link>
        </div>
    );
};

// Reusable FAQ Item Component
const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
            >
                <span>{item.question}</span>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                </div>
            )}
        </div>
    );
};


// Main Component
const ExclusiveRooms = () => {
    const [openFaq, setOpenFaq] = useState(0); // Default open first FAQ

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16">

                {/* Left Column */}
                <div className="w-full md:w-1/3 space-y-16">
                    {/* Top Section */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                            Find Our Exclusive Room
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Celebrate your special moments or royal stay at WeJai Global. We offer an exceptional blend of modern living in a heritage setting, and we are known for our personalized and classic service.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Enjoy authentic Rajasthani hospitality in one of the best locations in Jaipur, where we bring comfort and the past together.
                        </p>
                    </div>

                    {/* Bottom Section */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                            Your Stay Made Simple
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Planning your stay at WeJai Global? Take a panoramic view of the hotel and its facilities, get familiar with all the room details, and find everything you need to know about our services right here.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block border border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium"
                        >
                            CONNECT WITH US
                        </Link>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-2/3 space-y-8">
                    {/* Room Cards */}
                    <div className="space-y-6">
                        {roomData.map((room) => (
                            <RoomCard
                                key={room.name}
                                name={room.name}
                                isFeatured={room.isFeatured}
                                features={room.features}
                            />
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div className="pt-8">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                isOpen={openFaq === index}
                                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExclusiveRooms;

