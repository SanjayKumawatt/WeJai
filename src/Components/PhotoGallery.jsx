import React from 'react';
import img1 from "../assets/theroyalnexthomestay/IMG-20251025-WA0011.jpg"
import img2 from "../assets/comfotinn/IMG-20251025-WA0019.jpg"
import img3 from "../assets/comfotinn/IMG-20251025-WA0036.jpg"
import img4 from "../assets/eliehomestay/IMG-20251025-WA0033.jpg"

// Gallery data
const galleryImages = [
    // {
    //     id: 1,
    //     service: 'Dining',
    //     title: 'Delicious Buffet Spread',
    //     imgSrc: img1, // Placeholder
    //     layoutClass: 'md:row-span-1' // Top Left
    // },
    {
        id: 2,
        service: 'Service',
        title: 'Private Lunch and Dinner',
        imgSrc: img2, // Placeholder
        layoutClass: 'md:row-span-2' // Middle Top (Tall)
    },
    {
        id: 3,
        service: 'Comfort',
        title: 'Swimming Pool',
        imgSrc: img3, // Placeholder
        layoutClass: 'md:row-span-1' // Top Right
    },
    {
        id: 4,
        service: 'Restaurant',
        title: 'Spacious Dining Hall',
        imgSrc: img1, // Placeholder
        layoutClass: 'md:row-span-2' // Bottom Left (Tall)
    },
    {
        id: 5,
        service: 'Amenities',
        title: 'Modern Bathrooms',
        imgSrc: img4, // Placeholder
        layoutClass: 'md:row-span-1' // Bottom Middle
    },
];

// Helper component for each gallery item
// ** UPDATE: Fixed height h-64 md:h-80 hata diya hai **
// ** UPDATE: layoutClass ko div mein add kiya hai **
const GalleryImage = ({ src, service, title, layoutClass }) => {
    return (
        <div className={`relative overflow-hidden rounded-lg shadow-lg group ${layoutClass}`}>
            {/* Image */}
            <img
                src={src}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out"></div>
            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 bg-black/40 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-4 text-center">
                <p className="text-sm font-light tracking-wider uppercase">{service}</p>
                <h4 className="text-xl font-bold font-serif mt-2">{title}</h4>
            </div>
        </div>
    );
};

// Main Gallery Component
const PhotoGallery = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                        Discover the Beauty of Hotel WeJai Global
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Step into the charm of heritage living through our photo gallery. From beautifully designed rooms to serene courtyards and authentic Rajasthani decor – every corner of Hotel WeJai Global reflects timeless elegance.
                    </p>
                </div>

                {/* Image Grid */}
                {/* ** UPDATE: Grid ko 'grid-auto-rows' add kiya hai ** */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 [grid-auto-rows:minmax(300px,_auto)]">
                    {galleryImages.map((image) => (
                        <GalleryImage
                            key={image.id}
                            src={image.imgSrc}
                            service={image.service}
                            title={image.title}
                            layoutClass={image.layoutClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;

