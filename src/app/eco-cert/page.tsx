import { CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
export default function EcoCertPage() {
    return (
        <>
            <div className="relative h-96  w-full flex items-center justify-center">

                {/* Background Image */}
                <Image
                    src="/eco-cart.webp"
                    alt="Banner Background"
                    fill
                    className="object-cover h-96"
                />
                <div className='container mx-auto absolute flex items-center justify-center'>
                    <div className="absolute inset-0  z-10" />
                    <h1 className="relative z-20 text-5xl font-baloo-bold text-white">
                        <span className="bg-orange-600/60 px-6 py-2 rounded-md ">
                            What does
                            ECOCERT
                            mean to us?
                        </span>
                    </h1>
                </div>
            </div>
            <section className="bg-white py-12 px-4 font-baloo">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-orange-600 mb-6">
                            ECOCERT: Our Ongoing Commitment to Integrity
                        </h2>

                        <p className="text-gray-700 text-lg py-2">
                            To us, it means <strong>integrity</strong> – the bedrock of our corporate and family values.
                            We searched for the highest standards to which we could hold our products up to, and found
                            <strong> ECOCERT</strong>, one of the world’s largest organic certification organisations with a
                            presence in over 80 countries.
                        </p>

                        <p className="text-gray-700 text-lg ">
                            In order for a product to be certified by ECOCERT, we are required to comply with the
                            <strong> strictest production standards</strong> at every stage: from sourcing to storage,
                            processing, packaging, and shipping. There are no shortcuts.
                        </p>

                        <p className="text-gray-700 text-lg py-2">
                            Each certification is unique to a specific product — <strong>not the whole brand</strong>. Every
                            single product that carries the prestigious ECOCERT marque has passed its own rigorous test.
                        </p>

                        <p className="text-gray-700 text-lg ">
                            And it doesn’t stop there. Maintaining this certification is an <strong>ongoing journey</strong> with
                            regular audits to ensure our continued eligibility. That’s why we’re so proud to have upheld
                            this standard <strong>every year since 2009.</strong>
                        </p>
                    </div>

                    {/* Right: ECOCERT Image or Badge */}
                    <div className="flex justify-center">
                        <img
                            src="/budseco-cart.png"
                            alt="Founders"
                            className="h-96 w-full object-cover rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white py-8 px-4 font-baloo relative">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-orange-600 mb-2">
                        What does this mean for you?
                    </h2>
                    <p className="text-lg text-gray-700 mb-10">Peace of mind.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left  mx-auto">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">Ingredients from natural origin</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">
                                Production and processing that respects the environment as well as human health
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">
                                Absence of petrochemical ingredients except for authorised preservatives
                            </span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">Absence of GMO</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">Development of the concept of green chemicals</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">Respect of biodiversity</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-orange-600 w-6 h-6 mt-1" />
                            <span className="text-gray-800">Recyclable packaging</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-4 font-baloo">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-orange-600 mb-10">
                        What you will never see in our products
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left  mx-auto text-gray-800">
                        {/* Static Items */}
                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Steroids</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Triclosan</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Sodium Lauryl Sulphate (SLS)</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Sodium Laureth Sulphate (SLES)</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Phenoxyethanol</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Formaldehyde</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Alcohol (ethyl alcohol / ethanol)</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Propylene glycol</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Parabens</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Mineral oils</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Petrochemicals / PEGs</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Artificial colours</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Artificial fragrances</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Ingredients tested on animals</span>
                        </div>

                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 w-6 h-6 mt-1" />
                            <span>Animal derived ingredients</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-4 font-baloo">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-orange-600 mb-12">
                        Our Commitment from Production to Labelling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Card 1 - PRODUCTION */}
                        <div className="bg-white p-6 rounded-xl shadow-md ">
                            <h3 className="text-xl font-semibold text-orange-600 mb-4">PRODUCTION</h3>
                            <p className="text-gray-700 text-base">
                                Respect for the environment and community is a major driving force in our development of
                                green chemistry and waste management processes. All our products are biodegradable.
                                Our factory must be certified and in compliance with ECOCERT’s requirements. All our
                                formulations are submitted to ECOCERT for approval before production begins.
                                ECOCERT audits take place biannually.
                            </p>
                        </div>

                        {/* Card 2 - PACKAGING */}
                        <div className="bg-white p-6 rounded-xl shadow-md ">
                            <h3 className="text-xl font-semibold text-orange-600 mb-4">PACKAGING</h3>
                            <p className="text-gray-700 text-base">
                                All our packaging is made from toxic and allergen-free materials. Our plastic is recyclable.
                                We do not box most of the products to minimise wastage. Our brochures are printed on
                                Forest Stewardship Council-certified paper, an earth friendly alternative to recycled paper.
                            </p>
                        </div>

                        {/* Card 3 - LABELLING & MARKETING */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-orange-600 mb-4">LABELLING & MARKETING</h3>
                            <p className="text-gray-700 text-base">
                                All information and claims on our labels and marketing collaterals must be approved by
                                ECOCERT.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-4 font-baloo">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-orange-600 mb-12">
                        Certified for Safety, Quality, and Assurance
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <Image
                                src="/SAFETY_ASSESSED_2x_4cf8c48721.webp"
                                alt="UK Safety Assessment"
                                width={100}
                                height={100}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-orange-600 mb-2">SAFETY ASSESSED IN THE UK</h3>
                            <p className="text-gray-700 text-base">
                                Buds Organics products also go through safety assessments according to EU standards.
                                These stringent checks ensure our formulations are safe for newborns and children,
                                and that every claim we make is verified.
                            </p>
                        </div>

                        {/* Card 2 - NPRA GMP CERTIFIED */}
                        <div className="bg-white p-6 rounded-xl shadow-md  text-center">
                            <Image
                                src="/SAFETY_ASSESSED_1_2x_1ce7d011ab.webp"
                                alt="NPRA GMP Certified"
                                width={100}
                                height={100}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-orange-600 mb-2">
                                NPRA GMP CERTIFIED
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Certified by the Malaysian National Pharmaceutical Regulatory Division. GMP standards ensure
                                cleanliness, traceability, and high-quality production practices across ingredients, equipment,
                                and processes.
                            </p>
                        </div>

                        {/* Card 3 - HALAL CERTIFIED */}
                        <div className="bg-white p-6 rounded-xl shadow-md  text-center">
                            <Image
                                src="/Group_3034_2x_bb05b34629.webp" // ✅ Replace with your image name
                                alt="Halal Certified"
                                width={100}
                                height={100}
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold text-orange-600 mb-2">HALAL CERTIFIED</h3>
                            <p className="text-gray-700 text-sm">
                                As an added assurance for our Muslim customers, our products have been officially
                                certified Halal since 2021.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}