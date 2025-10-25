
import React from 'react';

// Data for the 6 feature cards
const featuresData = [
    {
        title: 'Prime Location',
        description: 'Situated in the heart of Jaipur city, just a short walk from the main markets and cultural centres – perfect for sightseeing and exploring.'
    },
    {
        title: 'Heritage Comfort',
        description: 'Stay in a beautifully preserved haveli that blends royal Rajasthani charm with all the modern comforts you need for a relaxing experience.'
    },
    {
        title: 'Family & Couple Friendly',
        description: 'Spacious, well-equipped rooms ideal for families, couples, and solo travelers seeking comfort, privacy, and convenience.'
    },
    {
        title: 'Free Wi-Fi & Parking',
        description: 'Stay connected with complimentary Wi-Fi and take advantage of free on-site parking during your stay.'
    },
    {
        title: 'Airport Shuttle Available',
        description: 'We offer airport and local shuttle services (at an extra charge) to make your arrival and travel smooth and stress-free.'
    }
];

// Reusable Feature Card Component
const FeatureCard = ({ title, description }) => (
    <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-lg h-full">
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">{title}</h3>
        {/* Yellow accent line */}
        <div className="w-16 h-1 bg-yellow-600 mb-4"></div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const HeritageStay = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                
                {/* Section Header */}
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                    Heritage Stay in Jaipur
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
                    WeJai Global is perfect for couples, families, and cultural travelers looking for a true taste of the Pink
                    City. we aim to make
                    your stay warm, welcoming, and unforgettable.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {featuresData.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            title={feature.title} 
                            description={feature.description} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeritageStay;
