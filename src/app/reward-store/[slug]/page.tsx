"use client";
import { rewardsData } from "@/data/rewardsData";
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
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            if (resolvedParams?.slug) setSlug(resolvedParams.slug);
        };
        getParams();
    }, [params]);

    if (!slug) return <div>Loading...</div>;

    const product = rewardsData.find((item) => item.slug === slug);

    if (!product) return notFound();

    const mainImage = selectedImage || product.image;

    const incrementQty = () => setQuantity((prev) => prev + 1);
    const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Image Section */}
                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="flex lg:flex-col gap-4">
                            {product.images?.map((img, i) => (
                                <div
                                    key={i}
                                    className={`border rounded-md p-1 cursor-pointer ${selectedImage === img ? "ring-2 ring-orange-500" : ""}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <Image
                                        src={img}
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
                                src={mainImage}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="mx-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Product Info */}
                    <div>
                        <h1 className="text-3xl font-bold font-baloo text-gray-800 mb-2">{product.name}</h1>

                        <div className="flex items-center mb-4">
                            {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                        </div>

                        <p className="text-orange-600 text-2xl font-baloo-bold mb-4">
                            Points {product.price}
                        </p>
                        <p className="text-gray-600 font-baloo mb-6">{product.description}</p>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-4 mb-6 font-baloo">
                            <div className="border px-3 py-2 rounded-md text-sm text-gray-600">Quantity</div>
                            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
                                <button
                                    className="text-gray-500 text-xl px-2"
                                    onClick={decrementQty}
                                >
                                    -
                                </button>
                                <span className="w-6 text-black font-baloo text-center">{quantity}</span>
                                <button
                                    className="text-gray-500 text-xl px-2"
                                    onClick={incrementQty}
                                >
                                    +
                                </button>
                            </div>
                            <button className="bg-orange-600 text-white font-bold px-6 py-2 rounded-md hover:bg-orange-700 transition">
                                Add to Cart
                            </button>
                        </div>

                        {/* Product Meta Info */}
                        <ul className="text-sm text-gray-600 space-y-1 mb-6 font-baloo">
                            <li><strong>SKU:</strong> {product.sku}</li>
                            <li><strong>Brand:</strong> {product.brand}</li>
                            <li>
                                <strong>Tags:</strong> {product.tags.join(", ")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* TABS SECTION */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 font-baloo">
                    <div className="flex gap-6 border-b pb-2 mb-6">
                        {["Terms & Conditions", "Reviews"].map((tab, idx) => (
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

                    {activeTab === "Terms & Conditions" && (
                        <div className="text-gray-700 space-y-2">
                            <p>{product.terms}</p>
                        </div>
                    )}

                    {activeTab === "Reviews" && (
                        <div className="text-gray-700 space-y-2">
                            <p>{product.Reviews}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;