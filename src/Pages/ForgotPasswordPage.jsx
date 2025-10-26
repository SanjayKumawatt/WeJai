import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import img from "../assets/hero/img.webp";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahaan password reset logic add karein (jaise Firebase se email bhejna)
        console.log('Password reset request for:', email);
        // User ko success message dikhayein
        alert('Password reset link has been sent to your email (if the account exists).');
    };

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* 1. Form Column */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center p-8">
                <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-serif font-bold text-gray-800 text-center mb-2">
                        Forgot Password?
                    </h2>
                    <p className="text-gray-500 text-center mb-8">
                        No worries. Enter your email and we'll send you a reset link.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Mail size={18} />
                                </span>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="yourname@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-yellow-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-md"
                            >
                                <Send size={20} />
                                Send Reset Link
                            </button>
                        </div>
                    </form>

                    {/* Back to Login Link */}
                    <p className="text-center mt-8 text-gray-600">
                        Remembered your password?{' '}
                        <Link
                            to="/login"
                            className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline"
                        >
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>

            {/* 2. Image Column (Desktop par dikhega) */}
            <div className="hidden md:block md:w-1/2 lg:w-2/3 relative">
                <img
                    src={img}
                    alt="Hotel WeJai Global"
                    className="w-full h-full object-cover"
                />

                {/* 👇 Text overlay added */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <h1 className="text-white text-4xl md:text-5xl font-medium text-center leading-tight">
                        Welcome to WeJai Global <span className="text-yellow-400 italic block">in Jaipur</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;