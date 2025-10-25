import React from 'react';
import img1 from "../assets/about.jpg";


const RoomsHero = () => {
    return (
        <section 
            className="h-[60vh] md:h-[90vh] text-white relative bg-cover bg-center flex items-center justify-center"
            // ** Yahaan apni 'Rooms' page ki background image daalein **
            // Main aapki reference image (lobby/stairs) waali use kar raha hoon
            style={{ backgroundImage: `url(${img1})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                    Find Our Exclusive Rooms
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Celebrate your special moments in royal style at Hotel WeJai Global. Whether it's a honeymoon, anniversary,
                    birthday, or a romantic getaway, our exclusive room offers the perfect blend of heritage charm and modern
                    luxury.
                </p>
            </div>
        </section>
    );
};

export default RoomsHero;

