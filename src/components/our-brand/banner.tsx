// components/BudsBanner.tsx
import Image from "next/image";

const BudsBanner = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 bg-orange-600">
            {/* LEFT: Image */}
            <div className="w-full h-full relative aspect-[2/1] md:aspect-auto">
                <Image
                    src="/Buds_banner.webp"
                    alt="Buds Everyday Organics"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* RIGHT: Content */}
            <div className="flex flex-col justify-center p-8 md:p-16 font-baloo text-white">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Buds <br />
                    Everyday <br />
                    Organics
                </h2>
                <p className="text-lg md:text-xl">
                    A comprehensive collection for your baby’s every need, everyday
                </p>
            </div>
        </section>
    );
};

export default BudsBanner;
