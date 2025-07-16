"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const ProductShowcase = () => {
    const products = [
        {
            id: 1,
            title: "Buds Everyday Organics",
            subtitle: "CATEGORY A",
            description: "A comprehensive solution for your daily needs, designed with modern approach.",
            image: "/range-1.webp",
            color: "from-orange-600 to-orange-600"
        },
        {
            id: 2,
            title: "Buds Cherished Organics",
            subtitle: "CATEGORY B",
            description: "Premium quality items crafted with attention to detail and user experience.",
            image: "/range-2.webp",
            color: "from-orange-600 to-orange-600"
        },
        {
            id: 3,
            title: "Buds Soothing Organics",
            subtitle: "CATEGORY C",
            description: "Innovative solutions that adapt to your lifestyle and enhance productivity.",
            image: "/range-3.webp",
            color: "from-orange-600 to-orange-600"
        },
        {
            id: 4,
            title: "Buds Oralcare Organics",
            subtitle: "CATEGORY D",
            description: "Reliable and efficient products designed for long-term satisfaction.",
            image: "/range-4.webp",
            color: "from-orange-600 to-orange-600"
        },
        {
            id: 5,
            title: "Buds for Kids Organics",
            subtitle: "CATEGORY E",
            description: "Smart features combined with elegant design for modern consumers.",
            image: "/range-5.webp",
            color: "from-orange-600 to-orange-600"
        },
        {
            id: 6,
            title: "Buds Household Eco",
            subtitle: "CATEGORY F",
            description: "Advanced technology meets user-friendly interface in this premium offering.",
            image: "/range-6.webp",
            color: "from-orange-600 to-orange-600"
        }
    ];

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-black font-baloo-bold mb-4">
                        Shop By Range
                    </h1>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href="/our-brands"
                            className="group relative bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Product Image */}
                            <div className="w-full h-52 relative">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover w-full h-full rounded-t-3xl"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-baloo-bold text-gray-800 mb-2 text-center">
                                    {product.title}
                                </h3>

                                <p className="text-gray-600 font-baloo text-center leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;
