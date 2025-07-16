"use client";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Mary Anne Loh",
        role: "WHAT PARENTS SAY",
        content: "I feel like my children have grown up with Buds Organics, as my eldest is the same age as the company, and now he’s moved on to their Dr Buds products for adults! When my second child was critically ill, I made sure to use only organic products for his care, and continue to do so now, to ensure that his immune system is not compromised. Buds Organics is a brand that I hold very dear to my heart. ",
        date: " Parent",

        rating: 5
    },
    {
        name: "Dr Lee Chian Yin",
        role: "Dental Surgeon and founder of Kindlehouse Dental Clinic",
        content: "My patients are always thrilled to receive the Buds Oralcare samples after every visit to Kindlehouse Dental Clinic. The kids love the natural pure fruit flavours of the toothpastes, and would choose Buds Oralcare Organics after trying the product. I recommend Buds Oralcare Organics to my patients because they offer a complete line of preservative free oralcare products for every stage of a child's development. It is also certified organic, giving parents peace of mind.",
        date: "Dental Surgeon and founder of Kindlehouse Dental Clinic",
        rating: 5
    },
    {
        name: "Dr Tengku Nur Atiqah",
        role: "breastfeeding consultant and founder of Bondahaven",
        content: "Honestly, I did not expect it to work when I first used the Anti-Itch Soothing Vit-C Belly Cream, but I was so happy to be proven otherwise. I had a terrible case of itchiness in my third pregnancy that I've never experienced before, and NOTHING worked – I tried Shea Butter, Virgin Coconut Oil, showering with cold water only, and even Calamine. I then decided to try this for the first time, and it immediately soothed the itchiness, and by day 2 of application, my itchy belly was all but history!",
        date: "breastfeeding consultant and founder of Bondahaven",
        rating: 5
    },
    {
        name: "Gina Yong",
        role: "Breastfeeding consultant and founder of The Breastfeeding Advocates Network (TBAN)",
        content: "As a breastfeeding consultant, I have tried so many brands, but I always return to Buds Organics as I trust the quality and know that the products are safe and effective. The Nursing Salve is instrumental for clients with cracked or sore nipples, helping them to heal better. Usually, they will see results within 24 hours. For engorged breasts, I recommend the Organic Breast Massage Oil. All you need are a few drops and the proper technique to clear your milk ducts.",
        date: "Breastfeeding consultant and founder of The Breastfeeding Advocates Network (TBAN)",
        rating: 5
    },
    {
        name: "Ivy L",
        role: "Parent",
        content: "My son had eczema when he was 5 months. It started with just a minor rash on his cheeks and over time, it developed into a full-blown rash spreading to his collar bone and upper chest area. Simultaneously, I stumbled on an article on the effects of steroid of adults. It helped to convince me that steroid is not the way to go with eczema. ",
        date: "Parent",
        rating: 5
    },
    {
        name: "TRACY T",
        role: "Parent",
        content: "As a concerned mother, I read through ingredients to make sure it is safe for my baby who has sensitive skin. I make sure it is truly organic and Buds Organics' entire range is ECOCERT certified organic with no added preservatives.",
        date: "Parent",
        rating: 5
    },
    {
        name: "Erin Tati Salim",
        role: "Parent",
        content: "A year ago, my daughter experienced very dry, flaking, reddish, and itchy skin, as well as rashes and lesions on almost every part of her body. I used a conventional brand’s cream to help ease the condition. Then I stumbled across Buds Super Soothing Organics Starter Kit via Itch-free Challenge and decided to give it a try. After 15 days of trial usage, I noticed her dry, rough, cracked, itchy and clear fluid skin has improved. There is no doubt I will continue to use their products. I highly recommend it to anyone with eczema!",
        date: "Parent",
        rating: 5
    }
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-orange-500 text-orange-500" : "text-gray-300"}`} />
        ))}
    </div>
);

export default function TestimonialSection() {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="bg-white py-16 px-4">
            <div className="container mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-baloo-bold text-gray-900 mb-4">What do parents and experts think about us ?</h2>
                </div>

                {/* Slider */}
                <div className="overflow-hidden py-8">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
                    >
                        {testimonials.concat(testimonials.slice(0, 2)).map((testimonial, index) => (
                            <div
                                key={index}
                                className="min-w-[33.3333%] px-4"
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-lg border relative h-full">
                                    <div className=" left-8">
                                        {/* <div className="bg-orange-600 rounded-full p-3">
                                            <Quote className="w-6 h-6 text-white" />
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <StarRating rating={testimonial.rating} />
                                        <p className="text-gray-700 mt-4 mb-6 font-baloo text-lg">
                                            &quot;{testimonial.content}&quot;
                                        </p>
                                        <div className="border-t border-gray-100 pt-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-baloo-bold text-gray-900 text-lg">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-orange-600 font-baloo text-lg">
                                                        {testimonial.role}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
