import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react'; // Icons

// Data for the FAQ from your image
const faqData = [
    {
        question: 'What are the check-in and check-out timings at Hotel WeJai Global?',
        answer: 'Check-in is from 1:00 PM onwards, and check-out is until 9:00 AM. Early check-in and late check-out are subject to availability.'
    },
    {
        question: 'Is the hotel close to major tourist attractions in Jaipur?',
        answer: 'Yes, our hotel is located in the heart of Jaipur, close to all major tourist attractions and local markets.'
    },
    {
        question: 'Do you offer airport or railway station pickup?',
        answer: 'Yes, we offer airport and railway station pickup services. Please contact us in advance to arrange it.'
    },
    {
        question: 'Are pets allowed in the hotel?',
        answer: 'Pets are generally not allowed to ensure comfort for all guests. Please contact us for any special requests.'
    },
    {
        question: 'Is Wi-Fi available in all rooms?',
        answer: 'Yes, complimentary high-speed Wi-Fi is available in all rooms and public areas of the hotel.'
    }
];

// Reusable FAQ Item Component
const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
            >
                <span className={isOpen ? 'text-yellow-600' : ''}>{item.question}</span>
                {isOpen ? <Minus size={18} className="text-yellow-600" /> : <Plus size={18} className="text-gray-500" />}
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
const StaySimpleFaq = () => {
    const [openFaq, setOpenFaq] = useState(0); // Default open first FAQ

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-16">

                {/* Left Column */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                        Your Stay Made Simple
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Planning your stay at Hotel WeJai Global? We've answered some of the most
                        common questions to help you feel confident before booking. From check-in
                        details to our location, amenities, and transport services, find everything you
                        need to know for a smooth and memorable stay.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block border border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium"
                    >
                        CONNECT WITH US
                    </Link>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-1/2 lg:w-2/3">
                    <div className="space-y-2">
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

export default StaySimpleFaq;