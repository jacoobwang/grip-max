import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ProductGallery } from "@/components/product-detail/product-gallery";
import { ProductInfo } from "@/components/product-detail/product-info";
import { UGCGallery } from "@/components/home/ugc-gallery"; // Reusing UGC gallery

// Mock images
const PRODUCT_IMAGES = [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600706432502-78a0aa87bbed?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000",
];

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
                    <ProductGallery images={PRODUCT_IMAGES} />
                    <ProductInfo />
                </div>
            </div>

            <div className="border-t border-white/10">
                <UGCGallery />
            </div>

            <Footer />
        </main>
    );
}
