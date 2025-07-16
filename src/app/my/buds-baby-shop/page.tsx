"use client";
import React from "react";
import ProductCard from "@/components/common/products-card";
import { babyProductsData } from "@/data/babyProductsData";
import Link from "next/link";
import ProductShowcase from "@/components/home/range-section";

const BabyProductsSection = () => {
    return (<>

        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center mb-8">
                    <h2 className="text-6xl font-baloo-bold text-black">Everyday Needs</h2>
                    <p className="text-gray-600 text-lg font-baloo mt-2">Buy products that benefit your loved ones and yourself, and even for your own home
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {babyProductsData.map((product) => (
                        <Link
                            key={product.id}
                            href={`/my/buds-baby-shop/${product.slug}`}
                            className="block"
                        >
                            <ProductCard
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <ProductShowcase />
    </>
    );
};

export default BabyProductsSection;
