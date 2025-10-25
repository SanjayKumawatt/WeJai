import React from 'react';
import img from "../assets/res.jpg";

const RestaurantHero = () => {
    return (
        <section 
            className="h-[60vh] md:h-[90vh] text-white relative bg-cover bg-center flex items-center justify-center"
            // ** Yahaan apni 'Restaurant' page ki background image daalein **
            // Main aapki reference image (buffet) waali use kar raha hoon
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                    Restaurant
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Welcome to the rooftop restaurant at Hotel WeJai Global, where delicious vegetarian food meets majestic
                    views of the Jaipur forts. Our open-air restaurant offers a serene setting to enjoy your meals with the
                    pink city skyline as your backdrop.
                </p>
            </div>
        </section>
    );
};

export default RestaurantHero;

