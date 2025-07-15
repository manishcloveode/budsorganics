"use client";
import { Search, Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="/new_buds_logo.webp"
                            alt="Buds Organics Logo"
                            className="h-12 w-auto"
                        />
                    </Link>


                    <div className="hidden md:flex space-x-8 text-lg font-baloo-bold">
                        <Link href="#" className="text-black hover:text-orange-600 transition">Buds Organics</Link>
                        <Link href="my/buds-baby-shop" className="text-black hover:text-orange-600 transition">Baby Care</Link>
                        <Link href="#" className="text-black hover:text-orange-600 transition">Mother Care</Link>
                        <Link href="#" className="text-black hover:text-orange-600 transition">Household</Link>
                        <Link href="#" className="text-black hover:text-orange-600 transition">News & Resources</Link>
                        <Link href="#" className="text-black hover:text-orange-600 transition">Reward Store</Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-32 pl-4 pr-12 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-orange-600 font-baloo-regular"
                            />
                            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full">
                                <Search size={18} />
                            </button>
                        </div>

                        {/* Wishlist */}
                        <div className="flex flex-col items-center cursor-pointer group">
                            <Heart className="text-gray-700 group-hover:text-orange-600 transition" size={24} />
                            <span className="text-xs font-baloo-medium text-gray-700 group-hover:text-orange-600">Wishlist</span>
                        </div>

                        {/* Cart */}
                        <div className="flex flex-col items-center cursor-pointer group relative">
                            <ShoppingBag className="text-gray-700 group-hover:text-orange-600 transition" size={24} />
                            <span className="text-xs font-baloo-medium text-gray-700 group-hover:text-orange-600">My bag</span>
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-baloo-semibold">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
