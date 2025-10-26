import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, BedDouble, Send } from 'lucide-react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        adults: '1',
        children: '0',
        roomType: 'royal-nest',
        fullName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahaan booking logic add karein
        console.log('Booking submitted:', formData);
        alert('Your booking request has been sent! We will contact you shortly to confirm.');
    };

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 text-center mb-8">
                        Reservation Details
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1: Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={18} /></span>
                                    <input type="date" id="checkIn" name="checkIn" required value={formData.checkIn} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={18} /></span>
                                    <input type="date" id="checkOut" name="checkOut" required value={formData.checkOut} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Guests & Room Type */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                                <select id="adults" name="adults" value={formData.adults} onChange={handleChange} className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                                <select id="children" name="children" value={formData.children} onChange={handleChange} className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                                <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                                    <option value="royal-nest">The Royal Nest Homestay</option>
                                    <option value="heritage-comfort">The Heritage Comfort Inn</option>
                                    <option value="elite-homestay">Elite Homestay</option>
                                </select>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-8" />

                        {/* Row 3: Personal Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><User size={18} /></span>
                                    <input type="text" id="fullName" name="fullName" required placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></span>
                                    <input type="email" id="email" name="email" required placeholder="yourname@example.com" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Phone size={18} /></span>
                                <input type="tel" id="phone" name="phone" required placeholder="+91-00000-00000" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="w-full md:w-auto flex justify-center items-center gap-2 bg-yellow-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-md mx-auto"
                            >
                                <Send size={20} />
                                Send Booking Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
