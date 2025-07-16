"use client";
import React from "react";
import Image from "next/image";

const ProductCard = ({ name, price, image }: { name: string; price: number; image: string }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 text-center w-full max-w-xs mx-auto">
            <div className="bg-white rounded-lg p-4">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="object-contain mx-auto"
                />
            </div>
            <h3 className="mt-4 text-xl font-baloo-bold text-gray-800">{name}</h3>
            <p className="text-orange-600 font-baloo-bold text-lg mt-1">RM{price}</p>
            <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
