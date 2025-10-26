import React from 'react';
// We no longer need Swiper, so those imports are removed.
import img from "../assets/hero/img.webp"; // <-- YEH LINE ERROR DE RAHI THI, HATA DI GAYI HAI


const HomeHero = () => {
    // Slide data is no longer needed for a static section
    
    return (
        <section className="relative h-screen overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-top flex items-center justify-center relative"
                // ** IMPORTANT **
                // Maine image ko direct 'public' folder se load karne ke liye set kar diya hai.
                // 'img.webp' file ko public folder mein rakhein.
                // 'bg-cover' aur 'bg-center' classes is image ko fully responsive banati hain.
                style={{ backgroundImage: `url(${img})` }} // <-- FIX: Direct path to the image you uploaded
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 "></div>

                <div className="relative z-10 text-center text-white p-4">
                    <p className="text-lg md:text-xl mb-2">Welcome to WeJai Global
</p>
                    <h1 className="text-4xl md:text-7xl font-medium leading-tight font-serif">
                        A Royal Stay in <br />
                        <span className="text-yellow-400 italic">#ThePinkCity</span>
                    </h1>
                    <p className="text-2xl md:text-3xl mt-4">in Jaipur</p>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;

