import React from 'react';
import img1 from "../assets/about.jpg";

const AboutHero = () => {
    return (
        <section 
            className="h-[60vh] md:h-[90vh] text-white relative bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${img1})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div> {/* opacity 50% for subtle look */}

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight">
                    About WeJai Global
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                     WeJai Global is a family-run heritage hotel that captures the true essence of Rajasthan in the heart of Jaipur. Experience serene stays, timeless architecture, and modern comfort with us in Jaipur, Rajasthan.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;
