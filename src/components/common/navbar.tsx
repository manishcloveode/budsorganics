"use client";
import { Search, Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartCount,] = useState(0);
    const pathname = usePathname();

    // Navigation links configuration
    const navigationLinks = [
        {
            label: "Buds Organics",
            dropdown: true,
            children: [
                { label: "Our Story", href: "/our-story" },
                { label: "EcoCert", href: "/eco-cert" },
                { label: "Our Brands", href: "/our-brands" },
            ],
        },
        { href: "/my/buds-baby-shop", label: "Baby Care" },
        { href: "/my/buds-mothercare", label: "Mother Care" },
        { href: "/my/buds-household", label: "Household" },
        { href: "/blogs", label: "News & Resources" },
        { href: "/reward-store", label: "Reward Store" }
    ];

    // Check if current page is active
    const isActive = (href: string) => {
        return pathname === href;
    };

    // Check if dropdown has active child
    const isDropdownActive = (children: { href: string }[]) => {
        return children.some(child => isActive(child.href));
    };

    // Handle search functionality
    const handleSearch = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to search results page
            window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
        }
    }, [searchQuery]);

    // Handle search input change
    const handleSearchChange = useCallback((e: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(e.target.value);
    }, []);

    // Handle wishlist click
    const handleWishlistClick = useCallback(() => {
        window.location.href = '/wishlist';
    }, []);

    // Handle cart click
    const handleCartClick = useCallback(() => {
        window.location.href = '/cart';
    }, []);

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="/new_buds_logo.webp"
                            alt="Buds Organics Logo"
                            className="h-12 w-auto"
                            loading="lazy"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8 text-lg font-baloo-bold relative">
                        {navigationLinks.map((link, index) =>
                            link.dropdown ? (
                                <div key={index} className="group relative">
                                    <span
                                        className={`cursor-pointer transition-colors duration-200 ${isDropdownActive(link.children)
                                            ? 'text-orange-600'
                                            : 'text-black hover:text-orange-600'
                                            }`}
                                    >
                                        {link.label}
                                    </span>
                                    <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md py-2 mt-2 z-20 min-w-[160px]">
                                        {link.children.map((child, childIndex) => (
                                            <Link
                                                key={childIndex}
                                                href={child.href}
                                                className={`block px-4 py-2 text-sm transition duration-200 ${isActive(child.href)
                                                    ? 'bg-orange-100 text-orange-600'
                                                    : 'text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                                                    }`}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                link.href && (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className={`transition-colors duration-200 ${isActive(link.href)
                                            ? 'text-orange-600'
                                            : 'text-black hover:text-orange-600'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )
                        )}
                    </div>

                    {/* Right Section - Search & Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search Component */}
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-32 pl-4 pr-12 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600 focus:ring-opacity-20 font-baloo-regular"
                                aria-label="Search products"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition-colors duration-200"
                                aria-label="Search"
                            >
                                <Search size={18} />
                            </button>
                        </form>

                        {/* Wishlist */}
                        <button
                            onClick={handleWishlistClick}
                            className="flex flex-col items-center cursor-pointer group"
                            aria-label="View wishlist"
                        >
                            <Heart className="text-gray-700 group-hover:text-orange-600 transition-colors duration-200" size={24} />
                            <span className="text-xs font-baloo-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-200">
                                Wishlist
                            </span>
                        </button>

                        {/* Shopping Cart */}
                        <button
                            onClick={handleCartClick}
                            className="flex flex-col items-center cursor-pointer group relative"
                            aria-label={`View cart (${cartCount} items)`}
                        >
                            <ShoppingBag className="text-gray-700 group-hover:text-orange-600 transition-colors duration-200" size={24} />
                            <span className="text-xs font-baloo-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-200">
                                My bag
                            </span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-baloo-semibold">
                                    {cartCount > 99 ? '99+' : cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;