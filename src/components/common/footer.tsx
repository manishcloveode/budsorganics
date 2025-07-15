"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">


                {/* Contact Info / Logo */}
                <div>
                    <h2 className="text-2xl font-baloo-bold text-gray-800 mb-4">Buds Organics</h2>
                    <p className=" font-baloo text-lg mb-4">
                        Bio Harvest Sdn. Bhd.<br />
                        Lot 28, Jalan RP 2,<br />
                        Rawang Industrial Estate,<br />
                        48000 Rawang, Selangor, Malaysia
                    </p>
                    <p className="text-lg font-baloo mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" /> +603-6091-9166
                    </p>
                    <p className="text-lg font-baloo mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4" /> enquiry@budsorganics.com
                    </p>
                    <p className="text-lg font-baloo">Mon – Fri, 9am to 6pm</p>
                </div>

                {/* Help & Support */}
                <div>
                    <h3 className="text-xl font-baloo-bold text-gray-800 mb-4">Help & Support</h3>
                    <ul className="space-y-2 font-baloo text-lg">
                        <li><a href="#" className="hover:text-orange-600">Get In Touch</a></li>
                        <li><a href="#" className="hover:text-orange-600">FAQ</a></li>
                        <li><a href="#" className="hover:text-orange-600">Store Locator</a></li>
                        <li><a href="#" className="hover:text-orange-600">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-orange-600">Delivery</a></li>
                        <li><a href="#" className="hover:text-orange-600">Return</a></li>
                        <li><a href="#" className="hover:text-orange-600">Distributor Partnership</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div >
                    <h3 className="text-xl font-baloo-bold text-gray-800 mb-4">Subscribe to our newsletter</h3>
                    <p className="text-lg font-baloo mb-4">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-baloo-regular"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-600 text-white font-baloo-bold rounded-md hover:bg-orange-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-12 border-t pt-6 px-4 text-sm text-gray-500 font-baloo-regular">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left Side - Copyright */}
                    <p className="text-center md:text-left">
                        Copyright © 2025 <strong>Bio Harvest Sdn Bhd (280067-T)</strong>. All rights reserved.
                    </p>

                    {/* Right Side - Payment Icons */}
                    <div className="flex items-center gap-4">
                        <Image
                            src="/payment-channel.webp"
                            alt="Payment Methods"
                            width={200}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
