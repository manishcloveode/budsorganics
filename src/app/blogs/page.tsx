import BlogCard from "@/components/blog/blogcard";
import { blogData } from "@/data/blogData"; // ✅ JSON file se data import

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

const BlogSectionPage = () => {
    const blogs: Blog[] = blogData;

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-baloo-bold text-black mb-4">News & Resources</h1>
                </div>

                {/* Blog Grid */}
                <div className="gap-8 justify-center item-center flex flex-wrap">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="w-full max-w-5xl">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSectionPage;
