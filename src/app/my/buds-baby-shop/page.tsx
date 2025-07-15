"use client";
import React from "react";
import BabyProductCard from "@/components/baby-products/BabyProductCard";
import { babyProductsData } from "@/data/babyProductsData";
import Link from "next/link";

const BabyProductsSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {babyProductsData.map((product) => (
                        <Link
                            key={product.id}
                            href={`/my/buds-baby-shop/${product.slug}`}
                            className="block"
                        >
                            <BabyProductCard
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BabyProductsSection;
