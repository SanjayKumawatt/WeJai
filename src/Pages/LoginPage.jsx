import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, X } from 'lucide-react';
import img from "../assets/hero/img.webp"; // <-- YEH LINE ERROR DE RAHI THI, HATA DI GAYI HAI


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahaan login logic add karein
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="min-h-screen flex bg-gray-50">
           

            {/* 1. Image Column (Desktop par dikhega) */}
            <div className="hidden md:block md:w-1/2 lg:w-2/3 relative">
                <img
                    src={img}
                    alt="Hotel WeJai Global"
                    className="w-full h-full object-bottom"
                />
            <Link to={"/"}
                className="absolute top-4 left-4 text-gray-700 hover:text-yellow-600 bg-white shadow-md rounded-full p-2 transition-all duration-300 z-20"
                aria-label="Close and go home"
            >
                <X size={22} />
            </Link>
                {/* 👇 Yahaan text add kiya gaya hai */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <h1 className="text-white text-4xl md:text-5xl font-medium  text-center leading-tight ">
                        Welcome to WeJai Global <span className="text-yellow-400 italic block">in Jaipur</span>
                    </h1>
                </div>
            </div>

            {/* 2. Form Column */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center p-8">
                <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-lg shadow-xl">
                    <h2 className="text-4xl font-serif font-bold text-gray-800 text-center mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 text-center mb-8">
                        Login to manage your bookings.
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

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Lock size={18} />
                                </span>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-yellow-600 hover:text-yellow-700 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-yellow-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-md"
                            >
                                <LogIn size={20} />
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center mt-8 text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/signup"
                            className="font-medium text-yellow-600 hover:text-yellow-700 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
                
            </div>
             
        </div>
    );
};

export default LoginPage;
