import Banner from "@/components/home/banner-section";
import HeroCarousel from "@/components/home/hero-section";
import ProductShowcase from "@/components/home/range-section";
import TestimonialSection from "@/components/home/testimonial-section";


export default function Home() {
  return (
    <>

      <HeroCarousel />
      <ProductShowcase />
      <Banner />
      <TestimonialSection />

    </>
  );
}
