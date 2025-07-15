"use client";
import { babyProductsData } from "@/data/babyProductsData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

const SingleProductPage = ({ params }: Props) => {
    const [slug, setSlug] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("Q&A");

    useEffect(() => {
        params.then(({ slug }) => setSlug(slug));
    }, [params]);

    if (!slug) return <div>Loading...</div>;

    const product = babyProductsData.find((item) => item.slug === slug);

    if (!product) return notFound();

    return (
        <>
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Image Section */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex lg:flex-col gap-4">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="border rounded-md p-1">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} ${i + 1}`}
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="relative w-full border rounded-lg p-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="mx-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Product Info */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

                        <div className="flex items-center mb-4">
                            {Array(5).fill(null).map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>

                        <p className="text-orange-600 text-2xl font-baloo-bold mb-4">${product.price}</p>
                        <p className="text-gray-600 font-baloo mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes.
                        </p>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4 mb-6 font-baloo">
                            <div className="border px-3 py-2 rounded-md text-sm text-gray-600">Quantity</div>
                            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
                                <button className="text-gray-500">-</button>
                                <span className="w-6 text-center">1</span>
                                <button className="text-gray-500">+</button>
                            </div>
                            <button className="bg-orange-600 text-white font-bold px-6 py-2 rounded-md hover:bg-orange-700 transition">
                                Add to Cart
                            </button>
                        </div>

                        {/* Product Meta Info */}
                        <ul className="text-sm text-gray-600 space-y-1 mb-6 font-baloo">
                            <li><strong>SKU:</strong> 5654</li>
                            <li><strong>Category:</strong> Babies</li>
                            <li><strong>Tags:</strong> Pink, Wool</li>
                        </ul>

                        {/* Share + Wishlist */}
                        <div className="flex items-center gap-4 font-baloo">
                            <span className="text-gray-700 font-semibold">Share:</span>
                            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
                            <a href="#" className="text-sky-500 hover:underline">Twitter</a>
                            <button className="ml-6 text-orange-600 hover:underline font-semibold">
                                ♥ Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* TABS SECTION */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4  font-baloo">
                    <div className="flex gap-6 border-b pb-2 mb-6">
                        {["Ingredients", "How to Use", "Q&A", "Reviews"].map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(tab)}
                                className={`text-lg font-semibold pb-1 transition-colors ${activeTab === tab
                                    ? "text-orange-600 border-b-2 border-orange-600"
                                    : "text-gray-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === "Ingredients" && (
                        <div className="text-gray-700 space-y-2">
                            <p>Ingredients information will be displayed here.</p>
                        </div>
                    )}

                    {activeTab === "How to Use" && (
                        <div className="text-gray-700 space-y-2">
                            <p>How to use instructions will be displayed here.</p>
                        </div>
                    )}

                    {activeTab === "Q&A" && (
                        <div className="text-gray-700 space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-800">Is Hand Sanitiser suitable for baby?</h3>
                                <p className="text-gray-600">Ethanol-based Sanitisers are not recommended for babies below age two.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Where else can I apply this product?</h3>
                                <p className="text-gray-600">Hand Sanitiser is a multipurpose disinfectant that contains 75% alcohol to kill viruses. You can use it to sanitise any surface.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Are alcohol-based Sanitisers permissible in Islam?</h3>
                                <p className="text-gray-600">Yes, this product is halal-certified.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === "Reviews" && (
                        <div className="text-gray-700 space-y-2">
                            <p>Customer reviews will appear here.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;