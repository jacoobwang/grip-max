import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { UGCGallery } from "@/components/home/ugc-gallery";
import { ReviewsSection } from "@/components/home/reviews-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Steering Wheel Covers - TikTok's Favorite | Grip Max",
  description:
    "Discover Grip Max - the viral steering wheel cover with 10,000+ happy customers. Premium Alcantara, carbon fiber, and luxury materials. Perfect fit guaranteed. Shop now!",
  openGraph: {
    title: "Grip Max - Premium Steering Wheel Covers",
    description:
      "Transform your driving experience with the steering wheel cover that took TikTok by storm. Premium materials, perfect fit.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <UGCGallery />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
