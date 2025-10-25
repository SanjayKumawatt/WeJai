import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahaan form submission logic add kar sakte hain (jaise EmailJS ya backend API)
        // Simple alert for now
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                    
                    {/* Left Column: Contact Details */}
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                            Get in Touch with WeJai Global
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our friendly team is always ready to assist you with reservations, directions,
                            local tour advice, or transport arrangements. Reach out to us via phone, email,
                            or the form below—we'll respond promptly.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <MapPin className="text-yellow-600" size={24} />
                                <div>
                                    <p className="text-gray-700">B 14 15 SF R TECH CAPITAL MALL, JAGATPURA JAIPUR 302017</p>
                                </div>
                            </div>
                           
                            <div className="flex items-center gap-4">
                                <Mail className="text-yellow-600" size={24} />
                                <div>
                                    <a href="mailto:booking@wejai.in" className="text-gray-700 hover:text-yellow-700">booking@wejai.in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-2xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required 
                                        placeholder="Enter your name"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required 
                                        placeholder="Enter your email"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        placeholder="Enter your phone number"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="services" className="block text-sm font-semibold text-gray-700 mb-2">Services *</label>
                                    <select 
                                        id="services" 
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-white"
                                    >
                                        <option value="">Please choose</option>
                                        <option value="booking">Booking Inquiry</option>
                                        <option value="event">Event Planning</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea 
                                        id="message" 
                                        rows="5" 
                                        placeholder="Your message here..."
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                    ></textarea>
                                </div>
                                <div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-yellow-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-md"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

