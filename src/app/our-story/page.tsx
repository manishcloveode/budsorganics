import Image from 'next/image';
import Link from 'next/link';
export default function OurStoryPage() {
    return (
        <>
            <div className="relative h-96  w-full flex items-center justify-center">

                {/* Background Image */}
                <Image
                    src="/my_story_min.webp"
                    alt="Banner Background"
                    fill
                    className="object-cover h-96"
                />
                <div className='container mx-auto absolute flex items-center justify-center'>
                    <div className="absolute inset-0  z-10" />
                    <h1 className="relative z-20 text-5xl font-baloo-bold text-white">
                        <span className="bg-orange-600/60 px-6 py-2 rounded-md ">
                            Our journey began with a small seed of an idea.
                        </span>
                    </h1>
                </div>
            </div>
            <section className="bg-white py-10 px-4 ">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className='font-baloo'>
                        <h2 className="text-4xl font-baloo-bold mb-6 text-orange-600">
                            What if we tried to grow a business that will not tax our earth?
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            In 2000, our founders, siblings <strong>Siew Peng</strong> and <strong>Kian Kheng (KK) Soo</strong> made a decision to leave their secure careers and take a leap of faith. Together, they shared a dream: to create a brand that will be as sustainable as it is successful; and to grow a business that will be aligned with their own ethical convictions.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            With their complementary skill sets, a lot of hope and a modest capital, the company formally began operations… in Siew Peng’s kitchen! Unused pots and pans were put to good use by KK as he set up his first R&D lab and workshop.
                        </p>
                        <p className="text-lg text-gray-700">
                            The pilot range was rolled out with just three products: a baby oil, lotion and bath wash. This humble offering was to become the seeds of the <span className="text-orange-600 font-semibold">Buds Organics</span> brand, today the world’s largest collection of certified organic babycare products.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/ourstory.webp"
                            alt="Founders"
                            className="h-72 w-full object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-4 ">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src="/buds-organic.jpg"
                            alt="Healing Moment"
                            className="h-72 w-full object-cover rounded-xl shadow-md"
                        />
                    </div>
                    <div className='font-baloo'>
                        <h2 className="text-4xl font-baloo-bold mb-6 text-orange-600">
                            What if we created products that worked as nature intended?
                        </h2>
                        <p className="text-lg text-gray-800 mb-4">
                            A defining moment emerged when <strong>KK’s eldest child</strong> was born with severe eczema and sensitive skin.
                        </p>
                        <p className="text-lg text-gray-800 mb-4">
                            Determined to find a steroid-free solution, KK threw himself into researching plant extracts and time-tested natural remedies. Harnessing the resources that he had, KK managed to formulate a body wash and lotion specifically for his daughter’s needs.
                        </p>
                        <p className="text-lg text-gray-800 mb-4">
                            The results were encouraging, with about <span className="text-orange-600 font-semibold">95% recovery in just under 4 weeks</span>. For our family, it was a huge relief.
                        </p>
                        <p className="text-lg text-gray-800">
                            And for our company, it was a pivotal point that <span className="text-orange-600 font-semibold">refocused our efforts on the healing power of botanicals</span>.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative bg-orange-500 text-white text-center px-4 py-10 overflow-visible">
                <div className='container mx-auto relative z-20'>
                    <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[-100px] z-10">
                        <Image
                            src="/img1.webp"
                            alt="Left Decoration"
                            width={150}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    {/* Right Side Image (same as bottom) */}
                    <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[-100px] z-10">
                        <Image
                            src="/img2.webp"
                            alt="Right Decoration"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    {/* Main Content */}
                    <div className=" max-w-3xl mx-auto relative z-20">
                        <p className="font-baloo text-lg text-black font-semibold mb-4">
                            As a family business, our guiding principle has always been this:
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-baloo font-semibold leading-relaxed">
                            Whatever we offer to the world, <br />
                            must first be good enough for our own cherished ones.
                        </h2>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20 px-4 md:px-12">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-orange-600 mb-6">
                            What if we walked a path of commitment to organic integrity?
                        </h2>

                        <p className="text-gray-700  font-baloo text-lg ">
                            As a fledgling in the vast organic products market, we knew that we would have to work much harder to gain the trust and loyalty of consumers.
                        </p>

                        <p className="text-gray-700 font-baloo text-lg py-2">
                            How would we, as a newcomer, prove our commitment to zero harmful chemicals, highest quality, cruelty-free organic products? Usage of the word ‘organic’ was largely unregulated, and the market was saturated by unscrupulous manufacturers jumping on the organic bandwagon with the least of requirements met.
                        </p>

                        <p className="text-gray-700 font-baloo text-lg py-2">
                            We knew that certification with an internationally recognised body was the only way forward.
                        </p>

                        <p className="text-gray-700 font-baloo text-lg ">
                            In 2009, we became the first Malaysian company to achieve <span className="text-orange-600 font-baloo">ECOCERT</span> certification, the gold standard worldwide in organic certification of sustainable practices. Although the process proved to be a sharp learning curve in the beginning, it has instilled integrity into every aspect of our work.
                        </p>

                        <Link
                            href="/eco-cert"
                            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md font-baloo-bold text-lg mt-6"
                        >
                            Learn More About ECOCERT
                        </Link>
                    </div>


                    <div className="flex justify-center">

                        <img
                            src="/buds_v1.png"
                            alt="Healing Moment"
                            className="h-72 w-full object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}