import Image from 'next/image';

const Banner = () => {
    return (
        <div className="w-full bg-white  text-white">
            <div className="container mx-auto flex flex-col lg:flex-row h-[400px] relative overflow-hidden bg-orange-500">

                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-[400px]">
                    <Image
                        src="/banner.webp"
                        alt="Banner Image"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Optional Decorative Icon */}
                    <div className="absolute top-1/2 left-3/4 w-12 h-12 bg-[url('/path-to-star-icon.svg')] bg-no-repeat bg-contain transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center p-6 ">

                    <div className="bg-orange-200 text-black font-baloo-bold text-2xl px-3 py-1 mb-2 rounded">
                        When just &apos;organic&apos; is just not good enough.
                    </div>
                    <p className="text-black font-baloo text-lg mb-5 max-w-md">
                        When it comes to organic integrity, we hold ourselves to the highest standards of accountability.
                    </p>
                    <button className="bg-orange-600 text-white font-bold px-5 py-2 rounded  transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
