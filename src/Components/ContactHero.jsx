import React from 'react';

import img from "../assets/contact.jpg";
const ContactHero = () => {
    return (
        <section 
            className="h-[60vh] md:h-[90vh] text-white relative bg-cover bg-center flex items-center justify-center"
            // ** Yahaan 'Contact' page ki background image daalein **
            style={{ backgroundImage: `url(${img}) `}}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                    Contact Us
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    We're here to help! Get in touch with us for any inquiries, special requests, or booking assistance.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;