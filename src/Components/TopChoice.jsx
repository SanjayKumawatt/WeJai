import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MapPin,      // For Location
    Hotel,       // For Modern Amenities (Replaced Swimmer)
    Handshake,   // For Friendly Services
    Users,       // For Family & Couple Friendly
    Utensils,    // For Dining
    Star         // For Guest Ratings
} from 'lucide-react';

// Data for the 6 services cards
const servicesData = [
    {
        icon: <MapPin className="text-yellow-600" size={40} />,
        title: 'Prime Heritage Location'
    },
    {
        icon: <Hotel className="text-yellow-600" size={40} />,
        title: 'Modern Amenities'
    },
    {
        icon: <Handshake className="text-yellow-600" size={40} />,
        title: 'Friendly Services'
    },
    {
        icon: <Users className="text-yellow-600" size={40} />,
        title: 'Family & Couple Friendly'
    },
    {
        icon: <Utensils className="text-yellow-600" size={40} />,
        title: 'Delicious Pure Veg Dining'
    },
    {
        icon: <Star className="text-yellow-600" size={40} />,
        title: 'Excellent Guest Ratings'
    }
];

// Reusable Service Card Component
const ServiceCard = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg flex flex-col items-center justify-center text-center h-40">
        {icon}
        <h4 className="text-lg font-medium text-gray-800 mt-4">{title}</h4>
    </div>
);

const TopChoice = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    
                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                            Why our services are the top choice
                        </h2>
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            At Hotel WeJai Global, we go beyond just providing rooms – we deliver an
                            experience rooted in tradition, comfort, and care. Here's why travelers from
                            around the world choose us among the best hotels in Jaipur, Rajasthan.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-yellow-600 text-white px-10 py-4 rounded-full font-medium hover:bg-yellow-700 transition-all duration-300 shadow-md"
                        >
                            CONNECT WITH US
                        </Link>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicesData.map((service, index) => (
                                <ServiceCard 
                                    key={index}
                                    icon={service.icon}
                                    title={service.title}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopChoice;

