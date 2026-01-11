import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { UGCGallery } from "@/components/home/ugc-gallery";
import { ReviewsSection } from "@/components/home/reviews-section";

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
