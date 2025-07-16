// components/BlogCard.tsx
"use client";
import React from "react";
import { User, Heart, Eye } from "lucide-react";

type Blog = {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    likes: number;
    views: number;
    image: string;
};

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-sm mb-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-md text-xs font-baloo-semibold">
                        {blog.date}
                    </span>
                    <span className="text-gray-500 font-baloo flex items-center gap-1">
                        <User className="w-4 h-4" />
                        By {blog.author}
                    </span>
                    <span className="text-orange-600 flex items-center gap-1 font-baloo-bold">
                        <div className="w-2 h-2 bg-orange-600  rounded-full " />
                        {blog.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-baloo-bold text-gray-800 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                    {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed font-baloo text-lg">
                    {blog.excerpt}
                </p>


                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1 hover:text-orange-600 transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            {blog.likes}
                        </span>
                        <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {blog.views}
                        </span>
                    </div>

                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-xl font-baloo-bold">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
