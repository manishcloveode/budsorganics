"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { id: 1, src: "/hero-img1.webp", alt: "Kids Fashion 1" },
        { id: 2, src: "/hero-img2.webp", alt: "Kids Fashion 2" },
        { id: 3, src: "/hero-img3.webp", alt: "Kids Fashion 3" },
        { id: 4, src: "/hero-img4.webp", alt: "Kids Fashion 4" },
        { id: 5, src: "/hero-img5.webp", alt: "Kids Fashion 5" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative w-full h-[380px] overflow-hidden">
            <div className="relative w-full h-full">
                <Image
                    src={images[currentSlide].src}
                    alt={images[currentSlide].alt}
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                />

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-3 shadow-lg z-10"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-3 shadow-lg z-10"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-orange-600 scale-125'
                                : 'bg-white bg-opacity-70 hover:bg-orange-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
