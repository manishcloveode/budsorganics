import Image from "next/image";
import Link from "next/link";
import BudsBanner from "@/components/our-brand/banner";

export default function OurBrandsPage() {
    const brands = [
        {
            id: 1,
            name: "Infant Head to Toe Cleanser",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Infant_Head_to_Toe_Cleanser_225ml_01_cde11d5685.jpg&w=1920&q=75",
            link: "#"
        },
        {
            id: 2,
            name: "Infant Cream",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Infant_Cream_75ml_01_3ec6fad1e1.jpg&w=1920&q=75",
            link: "#"
        },
        {
            id: 3,
            name: "Nappy Time Change Cream",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Nappy_Time_Change_Cream_75ml_01_745fe70d07.jpg&w=1920&q=75",
            link: "#"
        },
        {
            id: 4,
            name: "Everyday Shampoo",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Everyday_Shampoo_225ml_01_089f423390.jpg&w=1920&q=75",
            link: "#"
        },
        {
            id: 5,
            name: "Infant Massage Oil",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Infant_Massage_Oil_100ml_01_a8d9021dda.jpg&w=1920&q=75",
            link: "#"
        },
        {
            id: 6,
            name: "Everyday Head to Toe Cleanser",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Infant_Head_to_Toe_Cleanser_225ml_01_cde11d5685.jpg&w=1920&q=75",
            link: "#"
        },
        {
            id: 7,
            name: "Everyday Baby Cream",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Mozzie_Clear_Lotion_75ml_01_5b71308e44.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 8,
            name: "Mozzie Clear Lotion",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Mozzie_Clear_Spray_100ml_f8f3666f56.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 9,
            name: "Mozzie Clear Spray",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Mozzie_Clear_Spray_100ml_f8f3666f56.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 10,
            name: "Solar Care Lotion",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Solar_Care_Lotion_75ml_01_d61d1ab3c6.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 11,
            name: "Baby Safe Anti-Bac Foam Sanitiser",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Baby_Safe_Anti_Bac_Foam_Sanitiser_50ml_01_11bdcabd87.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 12,
            name: "Baby Safe Anti-Bac All Purpose Sanitiser",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Baby_Safe_Anti_Bac_All_Purpose_Sanitiser_60ml_01_d483bf369e.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 13,
            name: "Frost Defence Cream",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Frost_Defence_Cream_50ml_01_9535915a84.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 14,
            name: "Starter Kit",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Starter_Kit_ce2020da75.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 15,
            name: "Infant Bundle Set",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Infant_Bundle_Set_a45c138258.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 16,
            name: "Everyday Bundle Set",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Everyday_Bundle_Set_c46d7ac4ff.jpg&w=1920&q=75",
            link: "#"
        }, {
            id: 17,
            name: "Hair Volume Booster",
            image: "https://budsorganics.com/_next/image?url=https%3A%2F%2Fd2aei8fgzjx2su.cloudfront.net%2FBEO_Hair_Volume_Booster_30ml_01_32bf46a041.jpg&w=1920&q=75",
            link: "#"
        },
    ];

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-baloo-bold text-black text-center mb-8">Meet our growing family</h1>

                <div className="flex justify-center">
                    <p className="text-lg  font-baloo text-black text-center max-w-3xl mb-6">
                        Our complete lineup of personal care products cater for the needs of everyone in the family, organically! Please click on each thumbnail image for more information on our brands.
                    </p>
                </div>

                <BudsBanner />

                <div className="flex justify-center">
                    <p className="text-lg font-baloo text-black text-center max-w-3xl mt-10 mb-10">
                        Explore our certified organic brands, crafted with love for every age and stage of life.
                    </p>
                </div>

                {/* 👇 New Brands Section starts here */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 font-baloo">
                    {brands.map((brand) => (
                        <li
                            key={brand.id}
                            className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                width={150}
                                height={150}
                                className="object-contain mb-4"
                            />
                            <h3 className="text-base font-semibold text-gray-800 mb-3">{brand.name}</h3>
                            {/* <Link href={brand.link}>
                                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 text-sm">
                                    Shop Now
                                </button>
                            </Link> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
